import { cn } from "@shared/lib/cn";
import { headerControlClassName } from "@shared/ui/styles";

export const siteHeaderStyles = {
  root: "sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-[0.875rem]",
  container:
    "flex min-h-19.5 items-center justify-between gap-5 max-sm:min-h-17 max-sm:gap-3",
  brandLink: "shrink-0 max-[359px]:[&>span>span:last-child]:hidden",
  navigation:
    "hidden items-center gap-[clamp(1.125rem,2.3vw,2.125rem)] text-[0.8rem] font-bold text-copy min-[1081px]:flex",
  navigationLink:
    "relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:scale-x-0 after:rounded-sm after:bg-accent after:content-[''] after:transition-transform after:duration-180 hover:text-ink hover:after:scale-x-100 aria-[current=page]:text-accent aria-[current=page]:after:scale-x-100 motion-reduce:after:transition-none",
  actions: "flex shrink-0 items-center gap-2.5 max-sm:gap-1.5",
  localeLink: cn(
    headerControlClassName,
    "text-[0.78rem] font-black hover:-translate-y-px hover:border-accent",
  ),
  phoneLink:
    "inline-flex min-h-11 items-center gap-2 rounded-xl border border-panel-line bg-panel px-3.75 text-[0.76rem] font-extrabold text-panel-ink max-sm:size-11 max-sm:justify-center max-sm:p-0",
  phoneIcon: "size-4.25 text-panel-accent",
  phoneLabel: "max-sm:sr-only",
  mobileMenu: "relative min-[1081px]:hidden",
  menuButton: cn(
    headerControlClassName,
    "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
  ),
  mobileNavigation:
    "absolute end-0 top-[calc(100%_+_1rem)] grid w-60 gap-1 rounded-2xl border border-line bg-surface p-5 text-sm font-bold text-copy shadow-soft",
} as const;
