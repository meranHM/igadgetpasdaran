export const aboutHeroStyles = {
  breadcrumb: "pt-7 text-xs text-muted max-sm:pt-5",
  breadcrumbList: "m-0 flex list-none items-center gap-3 p-0",
  homeLink: "transition-colors hover:text-accent motion-reduce:transition-none",
  root: "grid items-center gap-12 pt-12 pb-20 min-[901px]:grid-cols-[1.1fr_1fr] min-[901px]:gap-18 min-[901px]:pt-16 min-[901px]:pb-24 max-sm:gap-10 max-sm:pt-10",
  copy: "min-w-0",
  eyebrow:
    "mb-5 flex items-center gap-3 text-xs font-extrabold text-accent before:h-px before:w-7 before:bg-accent before:content-['']",
  title:
    "m-0 text-[clamp(2.75rem,4.8vw,4.8rem)] leading-[1.4] font-black tracking-tight en:leading-[1.08] max-sm:text-[clamp(2.4rem,10vw,3.8rem)]",
  accent: "text-accent",
  description: "mt-6 max-w-125 text-base leading-8 text-copy",
  storyLink:
    "mt-6 inline-flex min-h-11 items-center gap-3 border-b border-line text-sm font-extrabold hover:border-accent hover:text-accent [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
  experience: "mt-9 flex items-center gap-4 border-t border-line pt-6",
  experienceNumber:
    "text-5xl leading-none font-black tracking-tight text-accent",
  experienceLabel: "max-w-40 text-xs leading-6 font-bold text-copy",
  visual:
    "relative isolate overflow-hidden rounded-[2rem] border border-line bg-hero px-5 pt-6 pb-48 shadow-hero-inset max-sm:px-3",
  visualEyebrow:
    "relative z-1 mt-0 mb-5 text-center text-[0.7rem] font-extrabold tracking-wider text-copy rtl:tracking-normal",
} as const;
