type BrandMarkProps = {
  name: string;
  tagline: string;
  compact?: boolean;
};

export function BrandMark({ name, tagline, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.75 leading-none">
      <span
        className={cn(
          "grid shrink-0 place-items-center bg-accent text-[#171716] shadow-[0_8px_24px_rgba(227,38,46,0.2)]",
          compact
            ? "size-10 basis-10 rounded-xl"
            : "size-11.5 basis-11.5 rounded-[0.875rem] max-sm:size-10 max-sm:basis-10 max-sm:rounded-xl",
        )}
        aria-hidden="true"
      >
        <svg
          className={cn(
            compact ? "size-[1.9375rem]" : "size-9 max-sm:size-[1.9375rem]",
          )}
          viewBox="0 0 48 48"
          focusable="false"
        >
          <rect x="9" y="8" width="30" height="24" rx="7" fill="currentColor" />
          <rect x="15" y="13" width="5" height="12" rx="2.5" fill="#ef3942" />
          <rect x="28" y="13" width="5" height="12" rx="2.5" fill="#ef3942" />
          <path d="M17 32v6m14-6v6M9 25H5v7m34-7h4v7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="grid gap-1.25">
        <strong className="text-[1.08rem] font-black max-sm:text-[0.94rem]">
          {name}
        </strong>
        <small className="text-[0.67rem] font-semibold tracking-[0.08em] text-muted max-sm:text-[0.61rem]">
          {tagline}
        </small>
      </span>
    </span>
  );
}
import { cn } from "@shared/lib/cn";
