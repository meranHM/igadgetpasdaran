import { cn } from "@shared/lib/cn";
import { headerControlClassName } from "@shared/ui/styles";

const reveal =
  "motion-safe:animate-[navigation-reveal_220ms_cubic-bezier(0.22,1,0.36,1)]";

export const siteHeaderStyles = {
  scrollSentinel: "pointer-events-none absolute start-0 top-6 h-px w-px",
  root: "group/header pointer-events-none sticky top-0 z-50 pt-3 pb-2 max-sm:pt-2",
  container: "pointer-events-auto",
  dock: "relative flex min-h-18 items-center justify-between gap-4 rounded-[1.375rem] border border-line bg-surface px-4 shadow-[0_4px_20px_var(--color-shadow-card)] transition-shadow duration-300 supports-[backdrop-filter]:bg-surface/90 supports-[backdrop-filter]:backdrop-blur-xl group-data-[scrolled=true]/header:shadow-soft max-sm:min-h-16 max-sm:gap-2 max-sm:rounded-[1.125rem] max-sm:px-2.5 motion-reduce:transition-none",
  brandLink:
    "shrink-0 rounded-xl transition-transform duration-220 hover:-translate-y-px motion-reduce:transform-none max-[359px]:[&>span]:gap-2",
  navigation:
    "relative hidden w-[25rem] shrink-0 grid-cols-4 items-center rounded-2xl border border-line/70 bg-surface-soft/80 p-1 min-[1120px]:grid",
  indicator:
    "pointer-events-none absolute inset-y-1 left-0 rounded-xl border border-line/70 bg-surface opacity-0 shadow-[0_2px_6px_var(--color-shadow-card)] transition-[transform,opacity] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] data-[visible=true]:opacity-100 motion-reduce:transition-none",
  navigationLink:
    "relative z-1 flex min-h-11 cursor-pointer list-none items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-2 text-[0.77rem] font-extrabold text-copy transition-colors duration-180 hover:text-ink focus-visible:text-ink aria-[current]:bg-surface aria-[current]:text-accent group-data-[navigation-ready=true]/header:aria-[current]:bg-transparent [&::-webkit-details-marker]:hidden motion-reduce:transition-none",
  servicesDisclosure: "group/services static",
  chevron:
    "size-3.5 shrink-0 text-muted transition-transform duration-220 group-open/services:rotate-180 motion-reduce:transition-none",
  servicesPanel: cn(
    reveal,
    "absolute start-1/2 top-[calc(100%_+_1.25rem)] grid max-h-[calc(100dvh_-_8rem)] w-[min(52rem,calc(100vw_-_5rem))] -translate-x-1/2 grid-cols-[14rem_1fr] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-surface text-start shadow-soft rtl:translate-x-1/2",
  ),
  servicesIntro:
    "flex flex-col items-start border-e border-line bg-surface-soft/65 p-6",
  eyebrow:
    "text-[0.65rem] leading-5 font-extrabold tracking-[0.08em] text-accent rtl:tracking-normal",
  panelTitle:
    "mt-3 mb-0 text-[1.4rem] leading-[1.4] font-black tracking-[-0.04em] rtl:tracking-normal",
  panelDescription: "mt-3 mb-0 text-xs leading-6 font-medium text-muted",
  allServices:
    "mt-auto inline-flex min-h-11 items-center gap-3 pt-4 text-xs font-extrabold text-ink hover:text-accent [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
  serviceGrid: "grid grid-cols-2 gap-1 p-3",
  serviceLink:
    "group/service flex min-h-19 items-center gap-3 rounded-2xl px-3 text-xs leading-5 font-extrabold text-ink transition-colors duration-180 hover:bg-surface-soft focus-visible:bg-surface-soft",
  serviceIcon:
    "grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-canvas text-accent transition-transform duration-220 group-hover/service:-translate-y-0.5 group-focus-visible/service:-translate-y-0.5 [&>svg]:size-6 motion-reduce:transform-none",
  serviceArrow:
    "ms-auto size-3.5 shrink-0 text-accent opacity-0 transition-[transform,opacity] duration-220 group-hover/service:translate-x-0.5 group-hover/service:opacity-100 group-focus-visible/service:opacity-100 rtl:-scale-x-100 rtl:group-hover/service:-translate-x-0.5 motion-reduce:transform-none",
  servicesFootnote:
    "col-span-full m-0 flex items-center justify-center gap-2 border-t border-line px-4 py-3 text-[0.67rem] font-semibold text-muted",
  signal: "size-1.5 shrink-0 rounded-full bg-accent",
  actions: "flex shrink-0 items-center gap-2 max-sm:gap-1.5",
  desktopPreferences:
    "hidden items-center gap-1.5 border-e border-line pe-3 min-[1120px]:flex",
  localeLink: cn(
    headerControlClassName,
    "text-[0.75rem] font-black hover:border-accent",
  ),
  contactLink:
    "group/contact inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xl border border-panel-line bg-panel px-4 text-[0.76rem] font-extrabold text-panel-ink transition-[background-color,transform] duration-220 hover:-translate-y-px hover:bg-ink aria-[current=page]:border-accent/40 aria-[current=page]:ring-2 aria-[current=page]:ring-accent/15 max-sm:size-11 max-sm:p-0 motion-reduce:transform-none",
  contactIcon: "size-4.5 shrink-0 text-panel-accent",
  contactLabel: "max-sm:sr-only",
  contactArrow:
    "size-3.5 text-panel-muted transition-transform duration-220 group-hover/contact:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/contact:-translate-x-0.5 max-sm:hidden motion-reduce:transform-none",
  mobileMenu: "group/menu min-[1120px]:hidden",
  menuButton:
    "flex min-h-11 w-22.5 cursor-pointer list-none items-center justify-center gap-3 rounded-xl border border-line bg-surface-soft px-3 text-[0.75rem] font-extrabold text-ink transition-colors duration-180 hover:border-muted group-open/menu:border-accent/30 group-open/menu:bg-accent-soft [&::-webkit-details-marker]:hidden",
  menuOpenLabel: "group-open/menu:hidden",
  menuCloseLabel: "hidden group-open/menu:inline",
  menuGlyph:
    "relative block h-4 w-4 [&>span]:absolute [&>span]:start-0 [&>span]:h-[1.5px] [&>span]:w-4 [&>span]:rounded-full [&>span]:bg-current [&>span]:transition-transform [&>span]:duration-220 [&>span:first-child]:top-[4px] [&>span:last-child]:top-[10px] group-open/menu:[&>span:first-child]:translate-y-[3px] group-open/menu:[&>span:first-child]:rotate-45 group-open/menu:[&>span:last-child]:-translate-y-[3px] group-open/menu:[&>span:last-child]:-rotate-45 motion-reduce:[&>span]:transition-none",
  mobilePanel: cn(
    reveal,
    "absolute inset-x-0 top-[calc(100%_+_0.5rem)] max-h-[calc(100dvh_-_7rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-surface p-5 shadow-soft max-sm:rounded-[1.375rem] max-sm:p-3.5",
  ),
  mobileIntro: "mb-3 flex items-center justify-between gap-4 px-2 pt-1 pb-3",
  mobileSignature:
    "flex items-end gap-1 [&>span]:w-1 [&>span]:rounded-full [&>span]:bg-accent/60 [&>span:first-child]:h-2 [&>span:nth-child(2)]:h-3.5 [&>span:last-child]:h-5",
  mobileNavigation: "grid gap-1 sm:grid-cols-2",
  mobileLink:
    "group/link flex min-h-16 items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-colors duration-180 hover:bg-surface-soft focus-visible:bg-surface-soft aria-[current]:border-accent/10 aria-[current]:bg-accent-soft",
  linkNumber:
    "self-start pt-1 text-[0.65rem] font-bold text-muted tabular-nums group-aria-[current]/link:text-accent",
  mobileLinkText: "grid min-w-0 gap-1",
  mobileLinkTitle:
    "text-[0.95rem] leading-6 font-extrabold text-ink group-aria-[current]/link:text-accent",
  mobileLinkDescription: "text-[0.67rem] leading-5 font-medium text-muted",
  mobileLinkArrow:
    "ms-auto size-4 shrink-0 text-muted transition-transform duration-220 group-hover/link:translate-x-1 group-aria-[current]/link:text-accent rtl:-scale-x-100 rtl:group-hover/link:-translate-x-1 motion-reduce:transform-none",
  mobileFooter:
    "mt-3 grid gap-3 border-t border-line pt-3 sm:grid-cols-2 sm:items-center sm:gap-6",
  mobileContact:
    "flex min-h-12 items-center justify-center gap-3 rounded-xl bg-panel px-4 text-xs font-extrabold text-panel-ink [&>svg]:size-4 [&>svg:first-child]:text-panel-accent [&>svg:last-child]:ms-auto rtl:[&>svg:last-child]:-scale-x-100",
  mobilePreferences: "flex items-center gap-2",
  preferencesLabel: "me-auto ps-2 text-[0.68rem] font-semibold text-muted",
} as const;
