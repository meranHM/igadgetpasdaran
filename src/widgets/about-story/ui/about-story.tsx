import { getTranslations } from "next-intl/server";
import { Container } from "@shared/ui/container";
import { SectionHeading } from "@shared/ui/section-heading";
import { QuoteIcon } from "@shared/ui/icons";
import { aboutStoryStyles } from "./about-story-styles";

const principleKeys = ["listen", "explain", "choose"] as const;

export async function AboutStory() {
  const t = await getTranslations("About.story");
  const story = await getTranslations("Story");

  return (
    <section
      id="our-approach"
      className={aboutStoryStyles.root}
      data-robot-pose-zone="story"
    >
      <Container>
        <div className={aboutStoryStyles.intro}>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <div className={aboutStoryStyles.copy}>
            <p>{story("descriptionOne")}</p>
            <p>{story("descriptionTwo")}</p>
          </div>
        </div>
        <div className={aboutStoryStyles.approach}>
          <div>
            <h3 className={aboutStoryStyles.approachTitle}>
              {t("approachTitle")}
            </h3>
            <ol className={aboutStoryStyles.principles}>
              {principleKeys.map((key) => (
                <li key={key} className={aboutStoryStyles.principle}>
                  <span className={aboutStoryStyles.number} aria-hidden="true">
                    {t(`principles.${key}.number`)}
                  </span>
                  <div>
                    <h4 className={aboutStoryStyles.principleTitle}>
                      {t(`principles.${key}.title`)}
                    </h4>
                    <p className={aboutStoryStyles.principleDescription}>
                      {t(`principles.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure className={aboutStoryStyles.quote}>
            <QuoteIcon className={aboutStoryStyles.quoteIcon} />
            <blockquote className={aboutStoryStyles.quoteText}>
              {story("quote")}
            </blockquote>
            <figcaption className={aboutStoryStyles.quoteCaption}>
              <span className={aboutStoryStyles.quoteLine} />
              {t("signature")}
            </figcaption>
            <p className={aboutStoryStyles.quoteFootnote}>{t("footnote")}</p>
          </figure>
        </div>
      </Container>
    </section>
  );
}
