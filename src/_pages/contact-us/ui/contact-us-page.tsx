import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@i18n/navigation";
import { MascotCameo } from "@features/mascot-cameo";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";
import {
  CheckIcon,
  ClockIcon,
  ExternalArrowIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
} from "@shared/ui/icons";
import { skipLinkClassName } from "@shared/ui/styles";
import { SiteHeader } from "@widgets/site-header/ui";
import { SiteFooter } from "@widgets/site-footer/ui";
import { ConversationStarterClient } from "./conversation-starter-client";
import { contactUsStyles as styles } from "./contact-us-styles";

export async function ContactUsPage({ locale }: { locale: string }) {
  const currentLocale = locale === "fa" ? "fa" : "en";
  const t = await getTranslations("ContactUs");
  const common = await getTranslations("Common");
  const contact = await getTranslations("Contact");
  const methods = [
    { id: "phone", href: siteConfig.phoneHref, Icon: PhoneIcon },
    { id: "whatsapp", href: siteConfig.whatsappHref, Icon: MessageIcon },
    { id: "telegram", href: siteConfig.telegramHref, Icon: MessageIcon },
  ] as const;

  return (
    <>
      <a className={skipLinkClassName} href="#main-content">
        {common("skipToContent")}
      </a>
      <SiteHeader locale={locale} pathname="/contact-us" />
      <main id="main-content">
        <Container>
          <nav className={styles.breadcrumb} aria-label={t("breadcrumb.label")}>
            <ol className={styles.breadcrumbList}>
              <li>
                <Link
                  href={getPathname({ locale: currentLocale, href: "/" })}
                  className={styles.textLink}
                >
                  {t("breadcrumb.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{t("breadcrumb.current")}</li>
            </ol>
          </nav>
          <section
            className={styles.hero}
            aria-labelledby="contact-title"
            data-robot-pose-zone="contact"
          >
            <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>
            <h1 className={styles.title} id="contact-title">
              {t("hero.title")}
              <span className={styles.accent}>{t("hero.titleAccent")}</span>
            </h1>
            <p className={styles.description}>{t("hero.description")}</p>
          </section>
          <section
            className={styles.methods}
            id="contact-methods"
            aria-labelledby="methods-title"
          >
            <h2 className={styles.sectionTitle} id="methods-title">
              {t("methods.title")}
            </h2>
            <p className={styles.launchNote} id="contact-placeholder">
              {t("methods.placeholder")}
            </p>
            <ul className={styles.methodGrid}>
              {methods.map(({ id, href, Icon }) => (
                <li className={styles.method} key={id}>
                  <div className={styles.methodTop}>
                    <span className={styles.icon}>
                      <Icon />
                    </span>
                    <span className={styles.badge}>{t("methods.badge")}</span>
                  </div>
                  <h3 className={styles.methodTitle}>
                    {t(`methods.${id}.title`)}
                  </h3>
                  <p className={styles.methodDescription}>
                    {t(`methods.${id}.description`)}
                  </p>
                  {id === "phone" && (
                    <span className={styles.phone} dir="ltr">
                      {contact("details.phoneValue")}
                    </span>
                  )}
                  <a
                    className={
                      id === "phone" ? styles.callAction : styles.methodAction
                    }
                    href={href}
                    aria-describedby="contact-placeholder"
                    {...(id !== "phone"
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {t(`methods.${id}.action`)}
                    {id === "phone" ? <PhoneIcon /> : <ExternalArrowIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section
            className={styles.conversation}
            aria-labelledby="starter-title"
          >
            <div className={styles.starter}>
              <p className={styles.eyebrow}>{t("starter.eyebrow")}</p>
              <h2 className={styles.sectionTitle} id="starter-title">
                {t("starter.title")}
              </h2>
              <p className={styles.starterDescription}>
                {t("starter.description")}
              </p>
              <ConversationStarterClient
                label={t("starter.label")}
                previewLabel={t("starter.previewLabel")}
                copy={t("starter.copy")}
                methodsLink={t("starter.methodsLink")}
                noScript={t("starter.noScript")}
                topics={{
                  phone: {
                    label: t("starter.topics.phone.label"),
                    message: t("starter.topics.phone.message"),
                  },
                  repair: {
                    label: t("starter.topics.repair.label"),
                    message: t("starter.topics.repair.message"),
                  },
                  accessories: {
                    label: t("starter.topics.accessories.label"),
                    message: t("starter.topics.accessories.message"),
                  },
                  other: {
                    label: t("starter.topics.other.label"),
                    message: t("starter.topics.other.message"),
                  },
                }}
                feedback={{
                  idle: t("starter.feedback.idle"),
                  copying: t("starter.feedback.copying"),
                  copied: t("starter.feedback.copied"),
                  error: t("starter.feedback.error"),
                }}
              />
            </div>
            <div className={styles.tips}>
              <h3 className={styles.tipsTitle}>{t("tips.title")}</h3>
              <ul className={styles.tipsList}>
                {(["device", "question", "context"] as const).map((key) => (
                  <li className={styles.tip} key={key}>
                    <CheckIcon />
                    <span>{t(`tips.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.note}>{t("tips.note")}</p>
              <div className={styles.cameo}>
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
            </div>
          </section>
          <section className={styles.visit} aria-labelledby="visit-title">
            <div>
              <p className={styles.eyebrow}>{t("visit.eyebrow")}</p>
              <h2 className={styles.sectionTitle} id="visit-title">
                {t("visit.title")}
              </h2>
              <p className={styles.visitDescription}>
                {t("visit.description")}
              </p>
              <dl className={styles.details}>
                <div className={styles.detail}>
                  <LocationIcon />
                  <div>
                    <dt className={styles.detailLabel}>
                      {t("visit.addressLabel")}
                    </dt>
                    <dd className={styles.detailValue}>
                      {t("visit.addressValue")}
                    </dd>
                  </div>
                </div>
                <div className={styles.detail}>
                  <ClockIcon />
                  <div>
                    <dt className={styles.detailLabel}>
                      {t("visit.hoursLabel")}
                    </dt>
                    <dd className={styles.detailValue}>
                      {t("visit.hoursValue")}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className={styles.map}>
              <span className={styles.mapSymbol} aria-hidden="true">
                <LocationIcon />
              </span>
              <span className={styles.badge}>{t("visit.mapBadge")}</span>
              <h3 className={styles.mapTitle}>{t("visit.mapTitle")}</h3>
              <p className={styles.mapDescription}>
                {t("visit.mapDescription")}
              </p>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
