import { cn } from "@shared/lib/cn";
import { pageSectionClassName } from "@shared/ui/styles";

export const serviceDirectoryStyles = {
  root: cn(pageSectionClassName, "border-y border-line bg-surface-soft/50"),
  intro:
    "grid items-end gap-5 min-[901px]:grid-cols-[1fr_1fr] min-[901px]:gap-20",
  note: "m-0 max-w-120 text-sm leading-7 text-copy",
  grid: "mt-12 grid gap-x-12 gap-y-0 min-[901px]:grid-cols-2",
  service: "min-w-0 scroll-mt-24 border-t border-line py-8",
  heading: "flex items-center gap-4",
  icon: "grid size-13 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-accent [&>svg]:size-7",
  number: "ms-auto text-sm font-black text-muted",
  title: "m-0 text-xl leading-8 font-black",
  description: "mt-5 mb-0 max-w-130 text-sm leading-7 text-copy",
  prompt: "mt-5 rounded-xl border-s-2 border-accent/40 bg-surface px-4 py-3",
  promptLabel: "m-0 text-[0.65rem] font-extrabold text-accent",
  promptText: "mt-1 mb-0 text-xs leading-7 text-copy",
  link: "mt-3 inline-flex min-h-11 items-center gap-3 text-xs font-extrabold hover:text-accent [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
} as const;
