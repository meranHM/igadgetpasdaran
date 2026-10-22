"use client";

import { useRef, type ReactNode } from "react";
import { siteHeaderStyles } from "./site-header-styles";

type MobileNavigationClientProps = {
  label: string;
  children: ReactNode;
};

export function MobileNavigationClient({
  label,
  children,
}: MobileNavigationClientProps) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details
      ref={menu}
      className={siteHeaderStyles.mobileMenu}
      onClick={(event) => {
        if (
          event.target instanceof Element &&
          event.target.closest("a") &&
          menu.current
        ) {
          menu.current.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary className={siteHeaderStyles.menuButton} aria-label={label}>
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </summary>
      {children}
    </details>
  );
}
