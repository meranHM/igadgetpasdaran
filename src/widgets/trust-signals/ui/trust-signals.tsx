import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@shared/ui/section-heading";
import { trustSignalsStyles } from "./trust-signals-styles";

const signalKeys = [
  "experience",
  "fairPricing",
  "transparentRepair",
  "realGuidance",
] as const;

export async function TrustSignals() {
  const t = await getTranslations("TrustSignals");

  return (
    <section
      id="why-us"
      className={trustSignalsStyles.root}
      data-robot-pose-zone="story"
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        tone="dark"
      />

      <div className={trustSignalsStyles.grid}>
        {signalKeys.map((key) => (
          <article
            className={trustSignalsStyles.signal}
            key={key}
          >
            <span className={trustSignalsStyles.number}>
              {t(`items.${key}.number`)}
            </span>
            <div>
              <h3 className={trustSignalsStyles.title}>
                {t(`items.${key}.title`)}
              </h3>
              <p className={trustSignalsStyles.description}>
                {t(`items.${key}.description`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
