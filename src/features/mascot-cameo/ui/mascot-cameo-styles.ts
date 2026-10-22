export const mascotCameoStyles = {
  root: "absolute bottom-0 z-10 flex w-36 flex-col items-center max-sm:w-29",
  start: "start-1 -rotate-8",
  end: "end-1 rotate-8",
  middle: "start-[calc(50%_-_4.5rem)] max-sm:start-[calc(50%_-_3.625rem)]",
  message:
    "relative z-1 m-0 rounded-xl border border-line bg-surface px-3 py-2 text-center text-[0.66rem] leading-relaxed font-bold text-copy shadow-card",
  robot: "-mb-14 w-31 max-sm:-mb-12 max-sm:w-27",
} as const;
