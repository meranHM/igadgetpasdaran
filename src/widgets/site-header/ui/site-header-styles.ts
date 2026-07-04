export const siteHeaderStyles = {
  root: "sticky top-0 z-50 border-b border-[#ddd8cfbf] bg-canvas/90 backdrop-blur-[0.875rem]",
  container:
    "flex min-h-19.5 items-center justify-between gap-7 max-sm:min-h-17",
  brandLink: "shrink-0",
  navigation:
    "hidden items-center gap-[clamp(1.125rem,2.3vw,2.125rem)] text-[0.8rem] font-bold text-[#5f5d58] min-[1081px]:flex",
  navigationLink:
    "relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:scale-x-0 after:rounded-sm after:bg-accent after:content-[''] after:transition-transform after:duration-180 hover:text-ink hover:after:scale-x-100",
  actions: "flex shrink-0 items-center gap-2.5",
  localeLink:
    "grid size-10.5 place-items-center rounded-xl border border-line bg-white text-[0.78rem] font-black transition-[border-color,transform] duration-180 hover:-translate-y-px hover:border-accent",
  phoneLink:
    "inline-flex min-h-10.5 items-center gap-2 rounded-xl bg-ink px-3.75 text-[0.76rem] font-extrabold text-white max-sm:size-10.5 max-sm:justify-center max-sm:p-0",
  phoneIcon: "size-4.25 text-[#ff666d]",
  phoneLabel: "max-sm:sr-only",
} as const;
