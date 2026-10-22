export const phoneMemoriesStyles = {
  root: "relative text-center",
  controls:
    "relative z-20 mx-auto flex w-fit max-w-full gap-1 rounded-full border border-line bg-surface/85 p-1.5",
  control:
    "min-h-10 cursor-pointer rounded-full px-4 text-[0.72rem] font-extrabold text-copy transition-colors hover:text-accent aria-pressed:bg-panel aria-pressed:text-panel-ink motion-reduce:transition-none max-sm:px-3",
  memory: "relative",
  deviceStage: "relative mx-auto grid h-79 place-items-center",
  orbit: "absolute size-63 rounded-full border border-dashed border-accent/25",
  orbitDot:
    "absolute top-14 start-[calc(50%_+_5.5rem)] size-3 rounded-full bg-accent shadow-[0_0_0_6px_var(--color-accent-soft)]",
  phone:
    "relative z-1 flex flex-col items-center border-[5px] border-ink px-2 pb-3 shadow-soft",
  retroPhone: "h-61 w-30 -rotate-10 rounded-[1.5rem] bg-surface-soft",
  keypad:
    "grid w-full grid-cols-3 gap-x-2 gap-y-1.5 px-1 pt-4 [&>span]:h-2.5 [&>span]:rounded-sm [&>span]:bg-ink/70",
  touch: "h-63 w-35 rotate-7 rounded-[1.5rem] bg-surface-soft",
  today: "h-65 w-35 -rotate-6 rounded-[1.75rem] bg-ink",
  speaker: "my-3 h-1 w-8 shrink-0 rounded-full bg-muted/60",
  screen:
    "flex w-full flex-1 flex-col items-center gap-2 overflow-hidden rounded-lg px-2 py-2.5",
  modernScreen: "bg-accent-soft text-accent-strong",
  retroScreen: "max-h-24 rounded-sm bg-success-soft font-mono text-success",
  signal: "flex w-full items-center justify-between",
  battery:
    "h-2 w-4 rounded-xs border border-current after:block after:h-full after:w-2/3 after:bg-current after:content-['']",
  screenText: "text-[0.7rem] font-black",
  apps: "grid w-full grid-cols-3 gap-2 px-1 [&>span]:aspect-square [&>span]:rounded-md [&>span]:bg-accent/20 [&>span:nth-child(3n+1)]:bg-accent [&>span:nth-child(3n+2)]:bg-accent-strong/40",
  homeButton: "mt-2.5 h-1 w-9 shrink-0 rounded-full bg-accent/60",
  title: "relative z-1 m-0 text-lg font-black text-ink",
  description:
    "relative z-1 mx-auto mt-2 min-h-13 max-w-65 text-[0.8rem] leading-7 text-copy",
  hint: "relative z-1 mx-auto mt-4 mb-0 max-w-64 text-[0.65rem] text-muted",
} as const;
