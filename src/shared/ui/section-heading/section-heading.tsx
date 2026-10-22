type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
};

import { sectionHeadingStyles } from "./section-heading-styles";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        sectionHeadingStyles.root,
        align === "center" && sectionHeadingStyles.centered,
      )}
    >
      <p
        className={cn(
          sectionHeadingStyles.eyebrow,
          tone === "dark" ? sectionHeadingStyles.eyebrowDark : sectionHeadingStyles.eyebrowLight,
        )}
      >
        {eyebrow}
      </p>
      <h2 id={id} className={cn(sectionHeadingStyles.title)}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            sectionHeadingStyles.description,
            align === "center" && sectionHeadingStyles.centered,
            tone === "dark" ? sectionHeadingStyles.descriptionDark : sectionHeadingStyles.descriptionLight,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
import { cn } from "@shared/lib/cn";
