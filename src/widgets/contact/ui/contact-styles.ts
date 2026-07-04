import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  pageSectionClassName,
} from "@shared/ui/styles";

const compactButton = "min-h-12.25 px-4 text-[0.76rem]";

export const contactStyles = {
  root: cn(pageSectionClassName, "border-t border-line"),
  card:
    "grid overflow-hidden rounded-[2.25rem] border border-line bg-surface shadow-soft md:grid-cols-[1.04fr_0.96fr]",
  details: "p-[clamp(2rem,5vw,3.875rem)] max-sm:px-5.5 max-sm:py-8",
  address:
    "mt-8.5 grid gap-2.5 not-italic [&>div]:flex [&>div]:items-center [&>div]:gap-3.25 [&>div]:py-3.25 [&>div>span:last-child]:grid [&>div>span:last-child]:gap-0.5 [&_small]:text-[0.67rem] [&_small]:font-bold [&_small]:text-muted [&_strong]:text-[0.82rem] [&_strong]:leading-[1.7] [&_strong]:font-extrabold [&_a]:text-[0.82rem] [&_a]:leading-[1.7] [&_a]:font-extrabold [&_a:hover]:text-accent",
  detailIcon:
    "grid size-10.5 shrink-0 place-items-center rounded-[0.8125rem] bg-surface-soft text-accent [&>svg]:size-5",
  actions:
    "mt-7.5 flex flex-wrap items-center gap-2.5 max-sm:grid max-sm:grid-cols-1",
  callButton: cn(
    buttonBaseClassName,
    buttonPrimaryClassName,
    compactButton,
  ),
  whatsappButton: cn(
    buttonBaseClassName,
    compactButton,
    "border-white/12 bg-white text-ink",
  ),
  telegramLink:
    "inline-flex items-center gap-1.25 p-2.5 text-[0.72rem] font-extrabold text-muted hover:text-accent max-sm:justify-center [&>svg]:size-4.25",
  map:
    "relative min-h-155 overflow-hidden bg-[#f0ede7] bg-[linear-gradient(120deg,rgba(239,236,230,0.2),rgba(227,38,46,0.05))] before:absolute before:top-[19%] before:start-[-24%] before:h-8.5 before:w-[150%] before:rotate-[-31deg] before:border before:border-[#5c574f1c] before:bg-white/35 before:content-[''] after:absolute after:start-[-23%] after:bottom-[20%] after:h-8.5 after:w-[150%] after:rotate-[26deg] after:border after:border-[#5c574f1c] after:bg-white/35 after:content-[''] max-md:min-h-110 max-sm:min-h-97.5",
  mapRegions:
    "absolute inset-0 [&>i]:absolute [&>i]:block [&>i]:rounded-[1.125rem] [&>i]:border [&>i]:border-[#5c574f1a]",
  mapRegionTopEnd: "inset-[8%_8%_61%_52%]",
  mapRegionMiddleStart: "inset-[41%_56%_31%_4%]",
  mapRegionTopStart: "inset-[13%_50%_65%_6%]",
  mapRegionBottomEnd: "inset-[63%_8%_8%_59%]",
  mapRegionMiddleEnd: "inset-[38%_9%_40%_63%]",
  mapPin:
    "absolute top-[32%] start-[55%] z-2 grid size-16 rotate-[-45deg] place-items-center rounded-[50%_50%_50%_8px] border-8 border-white/80 bg-accent text-white shadow-[0_18px_35px_rgba(227,38,46,0.28)]",
  mapPinIcon: "size-7 rotate-45",
  mapCard:
    "absolute inset-x-6 bottom-6 z-3 rounded-[1.25rem] border border-white/70 bg-white/90 p-5.5 shadow-card backdrop-blur-lg",
  mapEyebrow: "text-[0.66rem] font-extrabold text-accent",
  mapTitle: "mt-1.25 block text-base",
  mapDescription: "mt-2 text-[0.73rem] leading-[1.8] text-muted",
} as const;
