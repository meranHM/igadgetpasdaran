import { cn } from "@shared/lib/cn";
import { brandMarkStyles } from "./brand-mark-styles";

type BrandMarkProps = {
  name: string;
  tagline: string;
  compact?: boolean;
};

export function BrandMark({ name, tagline, compact = false }: BrandMarkProps) {
  return (
    <span className={brandMarkStyles.wrapper}>
      <span
        className={cn(
          brandMarkStyles.symbol,
          compact
            ? brandMarkStyles.symbolCompact
            : brandMarkStyles.symbolDefault,
        )}
        aria-hidden="true"
      >
        <svg
          className={cn(
            compact ? brandMarkStyles.iconCompact : brandMarkStyles.iconDefault,
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
      <span className={brandMarkStyles.text}>
        <strong className={brandMarkStyles.name}>{name}</strong>
        <small className={brandMarkStyles.tagline}>
          {tagline}
        </small>
      </span>
    </span>
  );
}
