import type { ServiceId } from "@entities/service/model/services";

export const activeResultStyles = {
  trade: "group-has-[[value=trade]:checked]:visible",
  repair: "group-has-[[value=repair]:checked]:visible",
  software: "group-has-[[value=software]:checked]:visible",
  accessories: "group-has-[[value=accessories]:checked]:visible",
  consultation: "group-has-[[value=consultation]:checked]:visible",
  healthCheck: "group-has-[[value=healthCheck]:checked]:visible",
} satisfies Record<ServiceId, string>;

export const serviceFinderStyles = {
  root: "group m-0 min-w-0 border-0 p-0",
  legend: "mb-4 w-full text-sm font-extrabold text-ink",
  controls: "grid grid-cols-2 gap-2",
  option: "relative min-w-0 cursor-pointer",
  radio: "peer sr-only",
  control:
    "flex h-full min-h-16 items-center gap-2.5 rounded-xl border border-line bg-surface/85 px-3 py-3 text-xs leading-6 font-bold text-copy transition-colors hover:border-accent peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-accent-strong peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-accent motion-reduce:transition-none max-sm:gap-2 max-sm:px-2.5 [&>svg]:size-5 [&>svg]:shrink-0",
  hint: "mt-4 mb-0 text-xs leading-6 text-muted",
  connector:
    "mx-auto flex h-12 w-px items-end justify-center bg-line after:size-2 after:shrink-0 after:rounded-full after:bg-accent after:shadow-[0_0_0_5px_var(--color-accent-soft)] after:content-['']",
  // Visibility hides inactive links from keyboard and accessibility trees while
  // all six panels size this shared grid, including when fonts or widths change.
  results: "grid pt-4",
  result:
    "invisible min-w-0 rounded-2xl border border-line bg-surface p-5 shadow-card [grid-area:1/1] max-sm:p-4",
  resultHeader: "flex items-center gap-3",
  icon: "grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent [&>svg]:size-6",
  resultLabel: "m-0 text-[0.65rem] font-bold text-muted",
  title: "mt-1 mb-0 text-lg leading-7 font-black text-ink",
  description: "mt-3 mb-0 text-sm leading-7 text-copy",
  link: "mt-4 inline-flex min-h-11 items-center gap-3 text-xs font-extrabold text-accent hover:underline [&>svg]:size-4 rtl:[&>svg]:-scale-x-100",
} as const;
