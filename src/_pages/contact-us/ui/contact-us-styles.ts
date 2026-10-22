import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  buttonSecondaryClassName,
} from "@shared/ui/styles";

export const contactUsStyles = {
  breadcrumb: "pt-7 text-xs text-muted max-sm:pt-5",
  breadcrumbList: "m-0 flex list-none flex-wrap items-center gap-3 p-0",
  textLink: "underline decoration-line underline-offset-4 hover:text-accent",
  hero: "max-w-205 pt-12 pb-9 sm:pt-16 sm:pb-12",
  eyebrow:
    "mb-4 flex items-center gap-3 text-xs font-extrabold text-accent before:h-px before:w-7 before:bg-accent before:content-['']",
  title:
    "m-0 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.4] font-black tracking-tight en:leading-[1.12]",
  accent: "block text-accent",
  description: "mt-5 max-w-170 text-base leading-8 text-copy",
  methods: "scroll-mt-26 pb-16 sm:pb-22",
  sectionTitle: "m-0 text-[clamp(1.5rem,3vw,2rem)] leading-relaxed font-black",
  launchNote:
    "mt-4 mb-6 max-w-200 border-s-2 border-accent ps-4 text-sm leading-7 text-copy",
  methodGrid: "m-0 grid list-none gap-4 p-0 md:grid-cols-3",
  method:
    "flex min-w-0 flex-col rounded-[1.75rem] border border-line bg-surface p-6 shadow-card sm:p-7",
  methodTop: "flex items-center justify-between gap-3",
  icon: "grid size-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent [&>svg]:size-5",
  badge:
    "rounded-full bg-surface-soft px-3 py-1 text-[0.68rem] font-bold text-muted",
  methodTitle: "mt-5 mb-0 text-xl font-black",
  methodDescription: "mt-2 mb-5 text-sm leading-7 text-copy",
  phone: "mb-5 block w-fit text-lg font-extrabold tracking-wide",
  methodAction: cn(
    buttonBaseClassName,
    buttonSecondaryClassName,
    "mt-auto w-full border-line! px-3 py-3 text-sm leading-6 motion-reduce:transform-none",
  ),
  callAction: cn(
    buttonBaseClassName,
    buttonPrimaryClassName,
    "mt-auto w-full px-3 py-3 text-sm leading-6 motion-reduce:transform-none",
  ),
  conversation:
    "grid items-start gap-8 border-t border-line py-16 min-[901px]:grid-cols-[1.2fr_0.8fr] min-[901px]:gap-12 sm:py-22",
  starter:
    "min-w-0 rounded-[2rem] border border-line bg-surface p-5 shadow-soft sm:p-8",
  starterDescription: "mt-3 mb-6 text-sm leading-7 text-copy",
  tips: "min-w-0 pt-2",
  tipsTitle: "m-0 text-xl font-black",
  tipsList: "m-0 mt-5 grid list-none gap-5 p-0",
  tip: "flex items-start gap-3 text-sm leading-7 text-copy [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-accent",
  note: "mt-6 rounded-2xl bg-surface-soft p-4 text-xs leading-6 text-copy",
  cameo:
    "mt-7 rounded-[1.75rem] border border-dashed border-line bg-surface-soft",
  visit:
    "grid items-stretch gap-8 border-t border-line py-16 min-[901px]:grid-cols-2 min-[901px]:gap-12 sm:py-22",
  visitDescription: "mt-4 text-sm leading-7 text-copy",
  details: "mt-7 grid gap-5",
  detail:
    "flex items-start gap-3 [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-accent",
  detailLabel: "m-0 text-sm font-extrabold",
  detailValue: "m-0 mt-1 text-sm leading-7 text-copy",
  map: "relative grid min-w-0 content-center justify-items-center gap-4 rounded-[2rem] border border-dashed border-line bg-map bg-(image:--background-image-map) px-6 py-14 text-center sm:px-10",
  mapSymbol:
    "grid size-24 place-items-center rounded-full border border-dashed border-muted/45 bg-surface/60 text-muted [&>svg]:size-9",
  mapTitle: "m-0 text-lg font-black",
  mapDescription: "m-0 max-w-90 text-sm leading-7 text-copy",
} as const;
