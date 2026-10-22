import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonPrimaryClassName,
  pageSectionClassName,
} from "@shared/ui/styles";

export const serviceConversationStyles = {
  root: pageSectionClassName,
  layout: "grid items-start gap-10 min-[901px]:grid-cols-2 min-[901px]:gap-20",
  list: "mt-8 mb-0 grid list-none gap-6 p-0",
  item: "flex items-start gap-3 text-sm leading-7 text-copy [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-accent",
  panel:
    "rounded-[2rem] border border-panel-line bg-panel px-8 py-9 text-panel-ink max-sm:px-5",
  eyebrow: "mt-0 text-xs font-extrabold text-panel-accent",
  title: "mt-4 mb-0 text-3xl leading-[1.5] font-black en:leading-tight",
  description: "mt-5 text-sm leading-7 text-panel-muted",
  actions: "mt-6 flex flex-col items-start gap-3",
  phone: cn(buttonBaseClassName, buttonPrimaryClassName, "max-sm:w-full"),
  contact:
    "inline-flex min-h-11 items-center gap-3 text-sm font-bold hover:text-panel-accent [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
  placeholder:
    "mt-6 mb-0 border-t border-panel-line pt-5 text-xs leading-6 text-panel-muted",
} as const;
