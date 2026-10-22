import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@i18n/navigation";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@shared/ui/icons";
import { SectionHeading } from "@shared/ui/section-heading";
import { serviceConversationStyles as styles } from "./service-conversation-styles";

export async function ServiceConversation() {
  const t = await getTranslations("ServicesPage.conversation");
  const locale = (await getLocale()) === "fa" ? "fa" : "en";

  return (
    <section
      id="service-conversation"
      className={styles.root}
      data-robot-pose-zone="contact"
    >
      <Container className={styles.layout}>
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <ul className={styles.list}>
            {(["device", "story", "priorities"] as const).map((key) => (
              <li key={key} className={styles.item}>
                <CheckIcon />
                <span>{t(`checklist.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <p className={styles.eyebrow}>{t("contactEyebrow")}</p>
          <h3 className={styles.title}>{t("contactTitle")}</h3>
          <p className={styles.description}>{t("contactDescription")}</p>
          <div className={styles.actions}>
            <a className={styles.phone} href={siteConfig.phoneHref}>
              <PhoneIcon />
              {t("call")}
            </a>
            <Link
              className={styles.contact}
              href={getPathname({ locale, href: "/#contact" })}
            >
              {t("contact")}
              <ArrowIcon />
            </Link>
          </div>
          <p className={styles.placeholder}>{t("placeholder")}</p>
        </div>
      </Container>
    </section>
  );
}
