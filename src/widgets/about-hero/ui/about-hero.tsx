import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@i18n/navigation";
import { MascotCameo } from "@features/mascot-cameo";
import { PhoneMemories } from "@features/phone-memories";
import { Container } from "@shared/ui/container";
import { ArrowIcon } from "@shared/ui/icons";
import { aboutHeroStyles } from "./about-hero-styles";

export async function AboutHero() {
  const t = await getTranslations("About");
  const locale = (await getLocale()) === "fa" ? "fa" : "en";

  return (
    <Container>
      <nav
        className={aboutHeroStyles.breadcrumb}
        aria-label={t("breadcrumb.label")}
      >
        <ol className={aboutHeroStyles.breadcrumbList}>
          <li>
            <Link
              href={getPathname({ locale, href: "/" })}
              className={aboutHeroStyles.homeLink}
            >
              {t("breadcrumb.home")}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t("breadcrumb.current")}</li>
        </ol>
      </nav>
      <section
        className={aboutHeroStyles.root}
        aria-labelledby="about-title"
        data-robot-pose-zone="story"
      >
        <div className={aboutHeroStyles.copy}>
          <p className={aboutHeroStyles.eyebrow}>{t("hero.eyebrow")}</p>
          <h1 id="about-title" className={aboutHeroStyles.title}>
            {t("hero.title")}
            <br />
            <span className={aboutHeroStyles.accent}>
              {t("hero.titleAccent")}
            </span>
          </h1>
          <p className={aboutHeroStyles.description}>{t("hero.description")}</p>
          <a href="#our-approach" className={aboutHeroStyles.storyLink}>
            {t("hero.readOn")}
            <ArrowIcon />
          </a>
          <div className={aboutHeroStyles.experience}>
            <strong className={aboutHeroStyles.experienceNumber} dir="ltr">
              {t("hero.years")}
            </strong>
            <span className={aboutHeroStyles.experienceLabel}>
              {t("hero.yearsLabel")}
            </span>
          </div>
        </div>
        <div className={aboutHeroStyles.visual}>
          <p className={aboutHeroStyles.visualEyebrow}>
            {t("memories.eyebrow")}
          </p>
          <PhoneMemories
            label={t("memories.label")}
            hint={t("memories.hint")}
            eras={{
              keypad: {
                label: t("memories.keypad.label"),
                title: t("memories.keypad.title"),
                description: t("memories.keypad.description"),
                screen: t("memories.keypad.screen"),
              },
              touch: {
                label: t("memories.touch.label"),
                title: t("memories.touch.title"),
                description: t("memories.touch.description"),
                screen: t("memories.touch.screen"),
              },
              today: {
                label: t("memories.today.label"),
                title: t("memories.today.title"),
                description: t("memories.today.description"),
                screen: t("memories.today.screen"),
              },
            }}
          />
          <MascotCameo
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
