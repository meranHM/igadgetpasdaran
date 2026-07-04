import { getTranslations } from "next-intl/server";
import { RobotMascot } from "@entities/robot/ui/robot-mascot";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { heroStyles } from "./hero-styles";

const statKeys = ["experience", "services", "promise"] as const;

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={heroStyles.root} data-robot-pose-zone="hero">
      <div className={heroStyles.content}>
        <p className={heroStyles.eyebrow}>
          <span
            className={heroStyles.eyebrowDecoration}
            aria-hidden="true"
          />
          {t("eyebrow")}
        </p>
        <h1 className={heroStyles.title}>
          {t.rich("title", {
            accent: (chunks) => (
              <span className={heroStyles.titleAccent}>
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className={heroStyles.description}>
          {t("description")}
        </p>

        <div className={heroStyles.actions}>
          <a className={heroStyles.primaryButton} href={siteConfig.phoneHref}>
            <PhoneIcon />
            {t("primaryCta")}
          </a>
          <a className={heroStyles.secondaryButton} href="#services">
            {t("secondaryCta")}
            <ArrowIcon />
          </a>
        </div>

        <p className={heroStyles.assurance}>
          <span className={heroStyles.assuranceIconWrapper}>
            <CheckIcon className={heroStyles.checkIcon} />
          </span>
          {t("assurance")}
        </p>
      </div>

      <div className={heroStyles.visual}>
        <div
          className={heroStyles.orbit}
          aria-hidden="true"
        >
          <span className={heroStyles.orbitDotTop} />
          <span className={heroStyles.orbitDotEnd} />
          <span className={heroStyles.orbitDotBottom} />
        </div>
        <div className={heroStyles.robotWrapper}>
          <RobotMascot
            pose="hero"
            ariaLabel={t("robotAriaLabel")}
            className={heroStyles.robot}
          />
        </div>
        <div className={heroStyles.floatingNote}>
          <span className={heroStyles.floatingNoteIconWrapper}>
            <CheckIcon className={heroStyles.checkIcon} />
          </span>
          {t("floatingNote")}
        </div>
      </div>

      <dl className={heroStyles.stats}>
        {statKeys.map((key) => (
          <div className={heroStyles.stat} key={key}>
            <dt className={heroStyles.statLabel}>
              {t(`stats.${key}.label`)}
            </dt>
            <dd
              className={
                key === "experience"
                  ? heroStyles.featuredStatValue
                  : heroStyles.statValue
              }
            >
              {t(`stats.${key}.value`)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
