import { cn } from "@shared/lib/cn";
import { pageSectionClassName } from "@shared/ui/styles";

const card =
  "m-0 flex min-h-88.75 flex-col rounded-3xl border border-line bg-surface p-6.75 max-sm:min-h-80";

export const testimonialStyles = {
  root: pageSectionClassName,
  grid: "mt-12 grid grid-cols-1 gap-3.75 sm:grid-cols-2 md:grid-cols-3",
  card: [
    card,
    cn(card, "sm:translate-y-4.5 md:translate-y-4.5"),
    cn(
      card,
      "sm:col-span-full sm:min-h-75 md:col-span-1 md:min-h-88.75",
    ),
  ],
  cardHeader: "flex items-center justify-between",
  quoteIcon: "size-7.75 text-accent",
  placeholderLabel:
    "rounded-full bg-surface-soft px-2.25 py-1.25 text-[0.63rem] font-extrabold text-[#8a877f]",
  quote:
    "my-7.5 flex-1 text-[0.9rem] leading-8 font-semibold text-[#45433f]",
  caption: "flex items-center gap-2.75 border-t border-line pt-4.5",
  avatar:
    "grid size-10 shrink-0 place-items-center rounded-[0.8125rem] bg-ink text-[0.8rem] font-black text-white",
  customer: "grid gap-1",
  customerName: "text-[0.76rem] font-extrabold",
  customerRelation: "text-[0.64rem] text-muted",
} as const;
