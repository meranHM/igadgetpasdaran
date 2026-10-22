export const serviceCardStyles = {
  root:
    "relative min-h-[17.8125rem] overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-[transform,box-shadow,border-color] duration-220 after:absolute after:-end-12 after:-bottom-[3.875rem] after:size-32.5 after:rounded-full after:border-[1.375rem] after:border-accent/[0.055] after:content-[''] after:transition-transform after:duration-300 hover:-translate-y-1.25 hover:border-accent/20 hover:shadow-card hover:after:scale-112 max-sm:min-h-62.5 max-sm:p-6",
  header: "flex items-start justify-between",
  icon: "grid size-14 place-items-center rounded-[1.0625rem] bg-accent-soft text-accent",
  number: "text-xs font-black tracking-[0.08em] text-muted",
  title: "mt-6.75 text-[1.22rem] leading-[1.4] font-black",
  description:
    "relative z-1 mt-3.5 text-[0.88rem] leading-[1.95] text-muted",
} as const;
