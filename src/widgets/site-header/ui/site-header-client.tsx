"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { siteHeaderStyles as styles } from "./site-header-styles";

// Links and disclosures render on the server; this boundary enhances them.
export function SiteHeaderClient({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);
  const sentinel = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = header.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>("[data-navigation-track]");
    const indicator = root.querySelector<HTMLElement>(
      "[data-navigation-indicator]",
    );
    const disclosures = Array.from(
      root.querySelectorAll<HTMLDetailsElement>("[data-navigation-disclosure]"),
    );
    let hovered: HTMLElement | null = null;

    function moveIndicator() {
      if (!track || !indicator) return;
      const focused =
        document.activeElement?.closest<HTMLElement>("[data-nav-item]");
      const target =
        hovered ??
        (focused && track.contains(focused) ? focused : null) ??
        track.querySelector<HTMLElement>(
          "details[open] [data-nav-item], [aria-current]",
        );
      indicator.dataset.visible = String(Boolean(target));
      if (!target) return;
      const bounds = target.getBoundingClientRect();
      const origin = track.getBoundingClientRect();
      indicator.style.width = `${bounds.width}px`;
      indicator.style.transform = `translate3d(${bounds.left - origin.left}px, 0, 0)`;
    }

    function closeDisclosures(except?: HTMLDetailsElement) {
      disclosures.forEach((disclosure) => {
        if (disclosure !== except) disclosure.open = false;
      });
    }

    function onToggle(event: Event) {
      const disclosure = event.currentTarget as HTMLDetailsElement;
      if (disclosure.open) closeDisclosures(disclosure);
      moveIndicator();
    }

    function onPointerOver(event: PointerEvent) {
      if (event.pointerType === "touch" || !(event.target instanceof Element))
        return;
      hovered = event.target.closest<HTMLElement>("[data-nav-item]");
      moveIndicator();
    }

    function onPointerLeave() {
      hovered = null;
      moveIndicator();
    }

    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Node)) return;
      hovered = null;
      disclosures.forEach((disclosure) => {
        if (!disclosure.contains(event.target as Node)) disclosure.open = false;
      });
      moveIndicator();
    }

    function onPointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      disclosures.forEach((disclosure) => {
        if (!disclosure.contains(event.target as Node)) disclosure.open = false;
      });
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const open = disclosures.find((disclosure) => disclosure.open);
      if (!open) return;
      event.preventDefault();
      open.open = false;
      open.querySelector("summary")?.focus();
    }

    function onClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest("a"))
        closeDisclosures();
    }

    const breakpoint = window.matchMedia("(min-width: 1120px)");
    function onBreakpointChange() {
      hovered = null;
      closeDisclosures();
      const focused = document.activeElement;
      if (
        focused instanceof HTMLElement &&
        root?.contains(focused) &&
        !focused.getClientRects().length
      ) {
        root
          .querySelector<HTMLAnchorElement>("[data-navigation-home]")
          ?.focus();
      }
      moveIndicator();
    }

    const resizeObserver = new ResizeObserver(moveIndicator);
    if (track) resizeObserver.observe(track);
    const scrollObserver = new IntersectionObserver(([entry]) => {
      root.dataset.scrolled = String(!entry.isIntersecting);
    });
    if (sentinel.current) scrollObserver.observe(sentinel.current);

    // Observe home sections only when their links belong to the current page.
    const sectionLinks = Array.from(
      root.querySelectorAll<HTMLAnchorElement>("a[href*='#']"),
    ).filter((link) => link.pathname === window.location.pathname);
    const homeLink = root.querySelector<HTMLAnchorElement>(
      '[data-navigation-disclosure="mobile"] nav a[aria-current="page"]',
    );
    const tracksHome =
      homeLink?.pathname === window.location.pathname &&
      root.querySelector('[data-navigation-home][aria-current="page"]');
    const visibleSections = new Set<string>();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id);
          else visibleSections.delete(entry.target.id);
        });
        const current = visibleSections.values().next().value;
        sectionLinks.forEach((link) => {
          if (link.hash === `#${current}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
        if (tracksHome && homeLink) {
          if (current) homeLink.removeAttribute("aria-current");
          else homeLink.setAttribute("aria-current", "page");
        }
        moveIndicator();
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    new Set(
      sectionLinks.map((link) => document.getElementById(link.hash.slice(1))),
    ).forEach((section) => {
      if (section) sectionObserver.observe(section);
    });

    root.dataset.navigationReady = "true";
    moveIndicator();
    disclosures.forEach((disclosure) =>
      disclosure.addEventListener("toggle", onToggle),
    );
    track?.addEventListener("pointerover", onPointerOver);
    track?.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("pointerdown", onPointerDown);
    breakpoint.addEventListener("change", onBreakpointChange);

    return () => {
      resizeObserver.disconnect();
      scrollObserver.disconnect();
      sectionObserver.disconnect();
      disclosures.forEach((disclosure) =>
        disclosure.removeEventListener("toggle", onToggle),
      );
      track?.removeEventListener("pointerover", onPointerOver);
      track?.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("pointerdown", onPointerDown);
      breakpoint.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  return (
    <>
      <span
        ref={sentinel}
        className={styles.scrollSentinel}
        aria-hidden="true"
      />
      <header ref={header} className={styles.root}>
        {children}
      </header>
    </>
  );
}
