import { getTranslations } from "next-intl/server";
import { QuoteIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { testimonialStyles } from "./testimonials-styles";

const testimonialKeys = ["first", "second", "third"] as const;

export async function Testimonials() {
  const t = await getTranslations("Testimonials");

  return (
    <section
      id="memories"
      className={testimonialStyles.root}
      data-robot-pose-zone="story"
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className={testimonialStyles.grid}>
        {testimonialKeys.map((key, index) => (
          <figure
            className={testimonialStyles.card[index]}
            key={key}
          >
            <div className={testimonialStyles.cardHeader}>
              <QuoteIcon className={testimonialStyles.quoteIcon} />
              <span className={testimonialStyles.placeholderLabel}>
                {t("placeholderLabel")}
              </span>
            </div>
            <blockquote className={testimonialStyles.quote}>
              {t(`items.${key}.quote`)}
            </blockquote>
            <figcaption className={testimonialStyles.caption}>
              <span
                className={testimonialStyles.avatar}
                aria-hidden="true"
              >
                {t(`items.${key}.name`).charAt(0)}
              </span>
              <span className={testimonialStyles.customer}>
                <strong className={testimonialStyles.customerName}>
                  {t(`items.${key}.name`)}
                </strong>
                <small className={testimonialStyles.customerRelation}>
                  {t(`items.${key}.relation`)}
                </small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
