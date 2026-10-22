import { cn } from "@shared/lib/cn";
import { containerClassName } from "@shared/ui/container";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  buttonSecondaryClassName,
} from "@shared/ui/styles";

const statValue =
  "m-0 text-[1.65rem] font-[950] tracking-[-0.04em]";

export const heroStyles = {
  root: cn(
    containerClassName,
    "relative grid min-[861px]:min-h-[calc(100svh_-_4.875rem)] min-[861px]:grid-cols-[minmax(0,1.02fr)_minmax(25rem,0.98fr)] min-[861px]:grid-rows-[1fr_auto] min-[861px]:items-center min-[861px]:gap-x-[clamp(2rem,5.7vw,4.375rem)] gap-y-10.5 pt-[clamp(3.875rem,9vw,7rem)] pb-8.5 before:absolute before:top-[9%] before:-start-[13%] before:-z-1 before:size-70 before:rounded-full before:bg-[radial-gradient(circle,rgba(227,38,46,0.07),transparent_70%)] before:content-[''] max-[860px]:gap-8.5 max-[860px]:pt-18 max-sm:pt-13.5",
  ),
  content: "self-center text-center min-[861px]:text-start",
  eyebrow:
    "mb-3.5 flex items-center justify-center gap-2.5 text-[0.78rem] font-extrabold tracking-[0.06em] text-accent min-[861px]:justify-start rtl:tracking-normal",
  eyebrowDecoration:
    "relative h-0.5 w-6 rounded-sm bg-accent after:absolute after:-top-[3px] after:end-0 after:size-2 after:rounded-full after:bg-accent after:content-['']",
  title:
    "m-0 max-w-[47.5rem] text-[clamp(2.75rem,5.4vw,5.3rem)] leading-[1.15] font-[950] tracking-[-0.064em] rtl:tracking-[-0.045em] max-[860px]:mx-auto max-sm:text-[clamp(2.25rem,11.2vw,3.6rem)] max-sm:leading-[1.2] en:text-[clamp(2.65rem,5vw,4.85rem)] en:leading-[1.04] en:max-sm:text-[clamp(2.25rem,11vw,3.45rem)] en:max-sm:leading-[1.05]",
  titleAccent:
    "relative inline whitespace-nowrap text-accent after:absolute after:inset-x-0 after:bottom-[8%] after:-z-1 after:h-[12%] after:rotate-[-1deg] after:rounded-[100%] after:bg-accent/10 after:content-[''] max-sm:whitespace-normal en:whitespace-normal",
  description:
    "mt-6.5 max-w-160 text-[clamp(1rem,1.5vw,1.13rem)] leading-8 text-muted max-[860px]:mx-auto max-sm:mt-5 max-sm:text-[0.93rem]",
  actions:
    "mt-8 flex flex-wrap justify-center gap-3 min-[861px]:justify-start max-sm:grid max-sm:grid-cols-1",
  primaryButton: cn(buttonBaseClassName, buttonPrimaryClassName),
  secondaryButton: cn(buttonBaseClassName, buttonSecondaryClassName),
  assurance:
    "mt-5.5 flex items-center justify-center gap-2.25 text-[0.8rem] font-bold text-copy min-[861px]:justify-start",
  assuranceIconWrapper:
    "grid size-6 place-items-center rounded-full bg-success-soft text-success",
  checkIcon: "size-3.75",
  visual:
    "relative grid aspect-square w-full max-w-[33.125rem] place-items-center justify-self-center self-center rounded-[48%_52%_46%_54%/48%_43%_57%_52%] border border-accent/[0.09] bg-hero shadow-hero-inset after:absolute after:inset-[10%] after:z-0 after:rounded-full after:border after:border-dashed after:border-accent/15 after:content-[''] min-[861px]:justify-self-end max-sm:rounded-[2.625rem]",
  orbit:
    "absolute inset-[11%] z-1 rounded-full border border-line [&>span]:absolute [&>span]:size-2.75 [&>span]:rounded-full [&>span]:border-[3px] [&>span]:border-surface [&>span]:bg-accent [&>span]:shadow-[0_5px_12px_rgba(227,38,46,0.2)]",
  orbitDotTop: "start-[19%] top-[10%]",
  orbitDotEnd: "end-[-1%] top-[52%]",
  orbitDotBottom: "start-[26%] bottom-[5%]",
  robotWrapper:
    "relative z-2 w-[61%] drop-shadow-[0_24px_28px_rgba(28,25,22,0.14)]",
  robot: "robot-mascot--hero",
  floatingNote:
    "absolute start-[-4%] bottom-[18%] z-4 flex items-center gap-2.25 rounded-[0.9375rem] border border-line bg-surface/90 px-4 py-3.25 text-[0.76rem] font-extrabold shadow-card max-sm:start-0 max-sm:bottom-[10%]",
  floatingNoteIconWrapper:
    "grid size-6.25 place-items-center rounded-lg bg-accent-soft text-accent",
  stats:
    "m-0 grid overflow-hidden rounded-[1.25rem] border border-line bg-surface/70 min-[861px]:col-span-full sm:grid-cols-3",
  stat:
    "flex min-h-23 items-center justify-center gap-3.5 p-4.5 not-first:border-t not-first:border-line sm:not-first:border-t-0 sm:not-first:border-s max-sm:min-h-18.5",
  statLabel: "order-2 text-[0.77rem] font-bold text-muted",
  statValue,
  featuredStatValue: cn(statValue, "text-accent"),
} as const;
