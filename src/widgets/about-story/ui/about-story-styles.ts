import { cn } from "@shared/lib/cn";
import { pageSectionClassName } from "@shared/ui/styles";

export const aboutStoryStyles = {
  root: cn(pageSectionClassName, "border-y border-line bg-surface-soft/50"),
  intro: "grid gap-7 min-[901px]:grid-cols-[0.9fr_1.1fr] min-[901px]:gap-20",
  copy: "max-w-160 text-[0.95rem] leading-8 text-copy [&>p]:mt-0 [&>p+p]:mt-4",
  approach:
    "mt-14 grid items-stretch gap-10 min-[901px]:grid-cols-[1.1fr_0.9fr] min-[901px]:gap-20",
  approachTitle: "mt-0 mb-2 text-lg font-black",
  principles: "m-0 list-none p-0",
  principle: "flex gap-5 border-b border-line py-6 last:border-0",
  number: "pt-1 font-english text-xs font-bold text-accent",
  principleTitle: "m-0 text-base font-extrabold",
  principleDescription: "mt-2 mb-0 max-w-110 text-sm leading-7 text-copy",
  quote:
    "relative m-0 flex flex-col justify-center overflow-hidden rounded-3xl border border-panel-line bg-panel p-[clamp(1.75rem,4vw,3rem)] text-panel-ink after:absolute after:-end-18 after:-bottom-18 after:size-60 after:rounded-full after:border-40 after:border-panel-accent/10 after:content-['']",
  quoteIcon: "mb-6 size-9 text-panel-accent",
  quoteText:
    "relative z-1 m-0 text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.9] font-bold",
  quoteCaption:
    "relative z-1 mt-7 flex items-center gap-3 text-xs font-bold text-panel-accent",
  quoteLine: "h-px w-7 bg-panel-accent",
  quoteFootnote: "relative z-1 mt-3 mb-0 text-xs leading-6 text-panel-muted",
} as const;
