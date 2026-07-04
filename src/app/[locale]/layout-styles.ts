import { cn } from "@shared/lib/cn";

const body =
  "min-w-80 overflow-x-hidden bg-canvas bg-[radial-gradient(circle_at_8%_7%,rgba(227,38,46,0.035),transparent_22rem)] text-ink [text-rendering:optimizeLegibility]";

export const layoutStyles = {
  document:
    "h-full scroll-smooth bg-canvas antialiased motion-reduce:scroll-auto",
  bodyFa: cn(body, "font-sans leading-[1.75]"),
  bodyEn: cn(body, "font-english leading-[1.65]"),
} as const;
