import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@i18n/navigation";
import { Container } from "@shared/ui/container";
import { ArrowIcon, MessageIcon } from "@shared/ui/icons";
import { aboutInvitationStyles } from "./about-invitation-styles";

export async function AboutInvitation() {
  const t = await getTranslations("About.invitation");
  const locale = (await getLocale()) === "fa" ? "fa" : "en";

  return (
    <Container>
      <section
        className={aboutInvitationStyles.root}
        data-robot-pose-zone="contact"
        aria-labelledby="invitation-title"
      >
        <p className={aboutInvitationStyles.eyebrow}>{t("eyebrow")}</p>
        <h2 id="invitation-title" className={aboutInvitationStyles.title}>
          {t("title")}
        </h2>
        <p className={aboutInvitationStyles.description}>{t("description")}</p>
        <div className={aboutInvitationStyles.actions}>
          <Link
            href={getPathname({ locale, href: "/#contact" })}
            className={aboutInvitationStyles.primaryButton}
          >
            <MessageIcon />
            {t("contact")}
          </Link>
          <Link
            href={getPathname({ locale, href: "/#services" })}
            className={aboutInvitationStyles.secondaryButton}
          >
            {t("services")}
            <ArrowIcon />
          </Link>
        </div>
        <p className={aboutInvitationStyles.note}>{t("note")}</p>
      </section>
    </Container>
  );
}
