import { cn } from "@shared/lib/cn";
import {
  buttonBaseClassName,
  buttonSecondaryClassName,
} from "@shared/ui/styles";

export const conversationStarterStyles = {
  fieldset: "m-0 min-w-0 border-0 p-0",
  legend: "mb-3 p-0 text-sm font-extrabold",
  topics: "grid grid-cols-2 gap-2",
  topic:
    "flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border border-line bg-surface px-3 py-3 text-xs leading-6 font-bold text-copy has-checked:border-accent has-checked:bg-accent-soft has-checked:text-accent-strong has-focus-visible:outline-3 has-focus-visible:outline-offset-3 has-focus-visible:outline-accent has-disabled:cursor-default",
  radio: "size-4 shrink-0 accent-accent",
  preview:
    "mt-6 rounded-[1.25rem] rounded-ss-sm border border-line bg-surface-soft p-5",
  previewLabel: "m-0 mb-2 text-[0.7rem] font-extrabold text-muted",
  stack: "grid",
  variant: "min-w-0 [grid-area:1/1]",
  inactive: "invisible",
  message: "m-0 text-sm leading-8 text-ink select-text",
  actions: "mt-5 grid gap-3 sm:flex sm:flex-wrap sm:items-center",
  copy: cn(
    buttonBaseClassName,
    buttonSecondaryClassName,
    "cursor-pointer border-line! px-4 py-3 text-sm leading-6 disabled:cursor-default disabled:opacity-60 motion-reduce:transform-none",
  ),
  methodsLink:
    "inline-flex min-h-11 items-center justify-center gap-2 px-2 text-xs font-extrabold text-accent [&>svg]:size-4 rtl:[&>svg]:scale-x-[-1]",
  feedback: "mt-3 text-xs leading-6 text-copy",
  feedbackText: "m-0",
  noScript: "mt-4 text-xs leading-6 text-muted",
} as const;
