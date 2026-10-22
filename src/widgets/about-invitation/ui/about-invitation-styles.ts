import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  buttonSecondaryClassName,
  pageSectionClassName,
} from "@shared/ui/styles";

export const aboutInvitationStyles = {
  root: cn(pageSectionClassName, "mx-auto max-w-170 text-center"),
  eyebrow: "mt-0 text-xs font-extrabold text-accent",
  title:
    "mt-4 mb-0 text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.5] font-black tracking-tight en:leading-tight",
  description: "mx-auto mt-5 max-w-135 text-base leading-8 text-copy",
  actions: "mt-7 flex flex-wrap justify-center gap-3 max-sm:flex-col",
  primaryButton: cn(buttonBaseClassName, buttonPrimaryClassName),
  secondaryButton: cn(buttonBaseClassName, buttonSecondaryClassName),
  note: "mt-5 text-xs text-muted",
} as const;
