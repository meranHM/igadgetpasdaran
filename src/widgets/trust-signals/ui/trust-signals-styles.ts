export const trustSignalsStyles = {
  root:
    "relative my-7.5 scroll-mt-19 rounded-[2.25rem] bg-[radial-gradient(circle_at_0_100%,rgba(227,38,46,0.15),transparent_32%)] bg-ink p-[clamp(2.75rem,6vw,4.5rem)] text-white max-sm:mx-[-2px] max-sm:scroll-mt-16.5 max-sm:rounded-[1.75rem] max-sm:px-5.5 max-sm:py-8.5",
  grid:
    "mt-12 grid grid-cols-1 border-s border-t border-white/12 sm:grid-cols-2",
  signal:
    "grid min-h-50 grid-cols-[3rem_1fr] gap-4.5 border-e border-b border-white/12 p-7.5 max-sm:min-h-0 max-sm:px-4 max-sm:py-6.25",
  number:
    "text-[0.78rem] font-black tracking-[0.08em] text-[#ff5b62]",
  title: "m-0 text-[1.06rem] leading-[1.5] font-extrabold",
  description: "mt-3 text-[0.84rem] leading-[1.9] text-[#aaa8a2]",
} as const;
