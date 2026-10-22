import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@i18n/navigation";
import { serviceIds } from "@entities/service/model/services";
import { MascotCameo } from "@features/mascot-cameo";
import { ServiceFinder } from "@features/service-finder";
import { Container } from "@shared/ui/container";
import { ArrowIcon } from "@shared/ui/icons";
import { servicesHeroStyles as styles } from "./services-hero-styles";

export async function ServicesHero() {
  const t = await getTranslations("ServicesPage");
  const services = await getTranslations("Services.cards");
  const locale = (await getLocale()) === "fa" ? "fa" : "en";
  const options = Object.fromEntries(
    serviceIds.map((id) => [
      id,
      {
        label: t(`finder.options.${id}.label`),
        title: services(`${id}.title`),
        description: t(`finder.options.${id}.description`),
      },
    ]),
  ) as Parameters<typeof ServiceFinder>[0]["options"];

  return (
    <Container>
      <nav className={styles.breadcrumb} aria-label={t("breadcrumb.label")}>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link
              href={getPathname({ locale, href: "/" })}
              className={styles.homeLink}
            >
              {t("breadcrumb.home")}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t("breadcrumb.current")}</li>
        </ol>
      </nav>
      <section
        className={styles.root}
        aria-labelledby="services-title"
        data-robot-pose-zone="services"
      >
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>
          <h1 id="services-title" className={styles.title}>
            {t("hero.title")}
            <br />
            <span className={styles.accent}>{t("hero.titleAccent")}</span>
          </h1>
          <p className={styles.description}>{t("hero.description")}</p>
          <div className={styles.actions}>
            <a href="#service-directory" className={styles.directoryLink}>
              {t("hero.browse")}
              <ArrowIcon />
            </a>
            <a href="#service-conversation" className={styles.contactLink}>
              {t("hero.contact")}
            </a>
          </div>
          <p className={styles.footnote}>{t("hero.note")}</p>
        </div>
        <div className={styles.visual}>
          <div className={styles.finder}>
            <div className={styles.visualTop}>
              <h2 className={styles.visualTitle}>{t("finder.title")}</h2>
              <span className={styles.status}>{t("finder.status")}</span>
            </div>
            <ServiceFinder
              label={t("finder.label")}
              hint={t("finder.hint")}
              resultLabel={t("finder.resultLabel")}
              detailLink={t("finder.detailLink")}
              options={options}
            />
          </div>
          <MascotCameo
            contained
            label={t("mascot.label")}
            messages={[
              t("mascot.first"),
              t("mascot.second"),
              t("mascot.third"),
            ]}
          />
        </div>
      </section>
    </Container>
  );
}
