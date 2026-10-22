"use client";

// Adapted from React Bits TiltedCard by David Haz. See THIRD_PARTY_NOTICES.md.
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@shared/lib/cn";
import { tiltedCardStyles } from "./tilted-card-styles";

type TiltedCardProps = {
  children: ReactNode;
  className?: string;
};

const amplitude = 5;
const hoverScale = 1.02;
const clamp = (value: number) => Math.max(-1, Math.min(1, value));

export function TiltedCard({ children, className }: TiltedCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const surface = surfaceRef.current;
    if (!root || !surface) return;

    const enabled = window.matchMedia(
      "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
    );
    const current = { x: 0, y: 0, lift: 0 };
    const target = { x: 0, y: 0, lift: 0 };
    let visible = true;
    let frame = 0;
    let previousTime = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      current.x = current.y = current.lift = 0;
      target.x = target.y = target.lift = 0;
      for (const property of [
        "transform",
        "will-change",
        "--tilt-glare-x",
        "--tilt-glare-y",
        "--tilt-glare-opacity",
      ]) {
        surface.style.removeProperty(property);
      }
    };

    const animate = (time: number) => {
      frame = 0;
      const elapsed = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      const blend = 1 - Math.exp(-14 * elapsed);
      let settled = true;

      for (const key of ["x", "y", "lift"] as const) {
        current[key] += (target[key] - current[key]) * blend;
        if (Math.abs(target[key] - current[key]) < 0.001) {
          current[key] = target[key];
        } else {
          settled = false;
        }
      }

      if (settled && target.lift === 0) {
        reset();
        return;
      }

      surface.style.transform = `rotateX(${current.x.toFixed(3)}deg) rotateY(${current.y.toFixed(3)}deg) scale(${(1 + (hoverScale - 1) * current.lift).toFixed(4)})`;
      // Descendants can use these values for a restrained, theme-specific sheen.
      surface.style.setProperty("--tilt-glare-x", `${50 + current.y * 8}%`);
      surface.style.setProperty("--tilt-glare-y", `${50 - current.x * 8}%`);
      surface.style.setProperty(
        "--tilt-glare-opacity",
        `${current.lift * 0.1}`,
      );

      if (!settled) {
        frame = requestAnimationFrame(animate);
      } else {
        surface.style.removeProperty("will-change");
      }
    };

    const wake = () => {
      if (frame || !visible || !enabled.matches || document.hidden) return;
      previousTime = performance.now();
      surface.style.willChange = "transform";
      frame = requestAnimationFrame(animate);
    };

    const onMove = (event: PointerEvent) => {
      if (
        !enabled.matches ||
        !visible ||
        document.hidden ||
        (event.pointerType !== "mouse" && event.pointerType !== "pen")
      )
        return;

      // Measure the stationary hit area so the moving phone never feeds back
      // into its own pointer coordinates or changes the surrounding layout.
      const rect = root.getBoundingClientRect();
      target.x =
        -clamp(
          (event.clientY - rect.top - rect.height / 2) /
            Math.max(1, rect.height / 2),
        ) * amplitude;
      target.y =
        clamp(
          (event.clientX - rect.left - rect.width / 2) /
            Math.max(1, rect.width / 2),
        ) * amplitude;
      target.lift = 1;
      wake();
    };

    const onLeave = () => {
      target.x = target.y = target.lift = 0;
      wake();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    });
    observer.observe(root);
    root.addEventListener("pointerenter", onMove);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointercancel", reset);
    enabled.addEventListener("change", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", reset);

    return () => {
      reset();
      observer.disconnect();
      root.removeEventListener("pointerenter", onMove);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointercancel", reset);
      enabled.removeEventListener("change", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return (
    <div ref={rootRef} className={cn(tiltedCardStyles.root, className)}>
      <div ref={surfaceRef} className={tiltedCardStyles.surface}>
        {children}
      </div>
    </div>
  );
}
