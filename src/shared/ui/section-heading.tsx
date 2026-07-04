type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-[45rem]",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          eyebrowClassName,
          tone === "dark" ? "text-[#ff5b62]" : "text-accent",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="m-0 max-w-[43.125rem] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] font-black tracking-[-0.045em] rtl:tracking-[-0.035em] max-sm:text-[clamp(1.9rem,9vw,2.7rem)]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5.5 max-w-[38.75rem] text-[1.03rem] leading-[1.95] max-sm:text-[0.92rem]",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-[#aaa8a2]" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
import { cn } from "@shared/lib/cn";
import { eyebrowClassName } from "@shared/ui/styles";
