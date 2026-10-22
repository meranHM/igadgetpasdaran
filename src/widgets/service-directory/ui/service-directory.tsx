import { getTranslations } from "next-intl/server";
import { serviceIds } from "@entities/service/model/services";
import { ServiceIcon } from "@entities/service/ui/service-icon";
import { Container } from "@shared/ui/container";
import { ArrowIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { serviceDirectoryStyles as styles } from "./service-directory-styles";

export async function ServiceDirectory() {
  const t = await getTranslations("ServicesPage.directory");
  const services = await getTranslations("Services.cards");

  return (
    <section
      id="service-directory"
      className={styles.root}
      aria-labelledby="service-directory-title"
    >
      <Container>
        <div className={styles.intro}>
          <SectionHeading
            id="service-directory-title"
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
          <p className={styles.note}>{t("description")}</p>
        </div>
        <div className={styles.grid}>
          {serviceIds.map((id) => (
            <article
              key={id}
              id={`service-${id}`}
              className={styles.service}
              data-robot-pose-zone={
                id === "repair"
                  ? "repair"
                  : id === "trade"
                    ? "trade"
                    : "services"
              }
            >
              <div className={styles.heading}>
                <span className={styles.icon}>
                  <ServiceIcon type={id} />
                </span>
                <h3 className={styles.title}>{services(`${id}.title`)}</h3>
                <span className={styles.number} aria-hidden="true">
                  {services(`${id}.number`)}
                </span>
              </div>
              <p className={styles.description}>
                {services(`${id}.description`)}
              </p>
              <div className={styles.prompt}>
                <p className={styles.promptLabel}>{t("promptLabel")}</p>
                <p className={styles.promptText}>{t(`prompts.${id}`)}</p>
              </div>
              <a
                href="#service-conversation"
                className={styles.link}
                aria-label={t("discussLabel", {
                  service: services(`${id}.title`),
                })}
              >
                {t("discuss")}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
