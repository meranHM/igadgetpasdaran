import { pageSectionClassName } from "@shared/ui/styles";

export const trustStoryStyles = {
  root: pageSectionClassName,
  header:
    "flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start",
  years:
    "grid min-w-36 justify-items-center rounded-[1.25rem] bg-accent-soft px-4 py-5 text-accent max-sm:auto-cols-auto max-sm:grid-flow-col max-sm:items-center max-sm:justify-items-start max-sm:gap-2.5 max-sm:px-4.25 max-sm:py-3.5",
  yearsValue:
    "text-[3.25rem] leading-none font-[950] tracking-[-0.06em] max-sm:text-[2.2rem]",
  yearsLabel:
    "mt-2 text-[0.7rem] font-extrabold text-accent-strong max-sm:mt-0",
  content:
    "mt-13 grid grid-cols-[1.1fr_0.9fr] gap-8 max-sm:mt-9 max-sm:grid-cols-1",
  copy:
    "pe-[clamp(0rem,3vw,2.25rem)] [&>p]:m-0 [&>p]:text-base [&>p]:leading-[2.1] [&>p]:text-copy [&>p+p]:mt-4.5",
  values: "mt-7 flex list-none flex-wrap gap-2.5 p-0",
  value:
    "inline-flex items-center gap-1.75 rounded-full border border-line bg-surface px-2.75 py-2 text-[0.71rem] font-bold text-copy",
  valueIcon: "size-3.5 text-accent",
  quote:
    "relative m-0 flex min-h-full flex-col justify-between overflow-hidden rounded-3xl border border-panel-line bg-panel p-8.5 text-panel-ink shadow-soft after:absolute after:-end-10 after:-bottom-16.25 after:size-45 after:rounded-full after:border-[2.1875rem] after:border-accent/15 after:content-[''] max-sm:min-h-67.5 max-sm:p-7",
  quoteIcon: "size-9.5 text-panel-accent",
  quoteText:
    "relative z-1 mt-10.5 text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.9] font-bold",
} as const;
