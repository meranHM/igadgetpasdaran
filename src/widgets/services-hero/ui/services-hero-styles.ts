export const servicesHeroStyles = {
  breadcrumb: "pt-7 text-xs text-muted max-sm:pt-5",
  breadcrumbList: "m-0 flex list-none items-center gap-3 p-0",
  homeLink: "hover:text-accent",
  root: "grid items-center gap-12 pt-12 pb-20 min-[1001px]:grid-cols-[1fr_1fr] min-[1001px]:gap-20 min-[1001px]:pt-16 min-[1001px]:pb-24 max-sm:gap-9 max-sm:pt-10",
  copy: "min-w-0",
  eyebrow:
    "mb-5 flex items-center gap-3 text-xs font-extrabold text-accent before:h-px before:w-7 before:bg-accent before:content-['']",
  title:
    "m-0 text-[clamp(2.75rem,4.7vw,4.6rem)] leading-[1.4] font-black tracking-tight en:leading-[1.1] max-sm:text-[clamp(2.3rem,10vw,3.8rem)]",
  accent: "text-accent",
  description: "mt-6 max-w-125 text-base leading-8 text-copy",
  actions: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3",
  directoryLink:
    "inline-flex min-h-11 items-center gap-3 border-b border-line text-sm font-extrabold hover:border-accent hover:text-accent [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
  contactLink:
    "inline-flex min-h-11 items-center text-sm font-bold text-muted hover:text-accent",
  footnote:
    "mt-8 max-w-110 border-s-2 border-accent ps-4 text-xs leading-7 text-copy",
  visual:
    "min-w-0 overflow-hidden rounded-[2rem] border border-line bg-hero shadow-hero-inset",
  finder: "px-6 pt-6 max-sm:px-4 max-sm:pt-5",
  visualTop:
    "mb-5 flex items-center justify-between gap-3 border-b border-line pb-4",
  visualTitle: "m-0 text-sm font-black",
  status:
    "flex items-center gap-2 text-[0.65rem] font-bold text-muted before:size-1.5 before:rounded-full before:bg-success before:content-['']",
} as const;
