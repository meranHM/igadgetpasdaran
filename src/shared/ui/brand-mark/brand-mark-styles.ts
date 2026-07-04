export const brandMarkStyles = {
  wrapper: "inline-flex items-center gap-2.75 leading-none",
  symbol:
    "grid shrink-0 place-items-center bg-accent text-[#171716] shadow-[0_8px_24px_rgba(227,38,46,0.2)]",
  symbolCompact: "size-10 basis-10 rounded-xl",
  symbolDefault:
    "size-11.5 basis-11.5 rounded-[0.875rem] max-sm:size-10 max-sm:basis-10 max-sm:rounded-xl",
  iconCompact: "size-[1.9375rem]",
  iconDefault: "size-9 max-sm:size-[1.9375rem]",
  text: "grid gap-1.25",
  name: "text-[1.08rem] font-black max-sm:text-[0.94rem]",
  tagline:
    "text-[0.67rem] font-semibold tracking-[0.08em] text-muted max-sm:text-[0.61rem]",
} as const;
