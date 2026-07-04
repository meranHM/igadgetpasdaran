export const robotCompanionStyles = {
  root:
    "relative sticky top-29 hidden w-44 flex-col items-center gap-4.5 self-start pt-19 after:absolute after:top-45.5 after:-z-1 after:size-32 after:rounded-full after:bg-accent-soft after:content-[''] min-[1081px]:flex",
  message:
    "relative min-h-21 rounded-[1.0625rem] border border-line bg-white p-3.75 text-center text-[0.67rem] leading-[1.75] font-bold text-[#5f5c57] shadow-card after:absolute after:start-[calc(50%_-_0.4375rem)] after:-bottom-2 after:size-3.5 after:rotate-45 after:border-e after:border-b after:border-line after:bg-white after:content-['']",
  robot: "w-36.25 drop-shadow-[0_14px_14px_rgba(28,25,22,0.1)]",
} as const;
