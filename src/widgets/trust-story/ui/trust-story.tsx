import { getTranslations } from "next-intl/server";
import { CheckIcon, QuoteIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { trustStoryStyles } from "./trust-story-styles";

const valueKeys = ["listen", "explain", "decide"] as const;

export async function TrustStory() {
  const t = await getTranslations("Story");

  return (
    <section
      id="story"
      className={trustStoryStyles.root}
      data-robot-pose-zone="story"
    >
      <div className={trustStoryStyles.header}>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div
          className={trustStoryStyles.years}
          aria-label={`${t("yearsValue")} ${t("yearsLabel")}`}
        >
          <strong className={trustStoryStyles.yearsValue}>
            {t("yearsValue")}
          </strong>
          <span className={trustStoryStyles.yearsLabel}>
            {t("yearsLabel")}
          </span>
        </div>
      </div>

      <div className={trustStoryStyles.content}>
        <div className={trustStoryStyles.copy}>
          <p>{t("descriptionOne")}</p>
          <p>{t("descriptionTwo")}</p>
          <ul className={trustStoryStyles.values}>
            {valueKeys.map((key) => (
              <li
                className={trustStoryStyles.value}
                key={key}
              >
                <CheckIcon className={trustStoryStyles.valueIcon} />
                {t(`values.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className={trustStoryStyles.quote}>
          <QuoteIcon className={trustStoryStyles.quoteIcon} />
          <p className={trustStoryStyles.quoteText}>
            {t("quote")}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
