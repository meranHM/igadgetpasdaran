import { getTranslations } from "next-intl/server";
import { skipLinkClassName } from "@shared/ui/styles";
import { SiteHeader } from "@widgets/site-header/ui";
import { SiteFooter } from "@widgets/site-footer/ui";
import { ServicesHero } from "@widgets/services-hero/ui";
import { ServiceDirectory } from "@widgets/service-directory/ui";
import { ServiceConversation } from "@widgets/service-conversation/ui";

export async function ServicesPage({ locale }: { locale: string }) {
  const t = await getTranslations("Common");

  return (
    <>
      <a className={skipLinkClassName} href="#main-content">
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} pathname="/services" />
      <main id="main-content">
        <ServicesHero />
        <ServiceDirectory />
        <ServiceConversation />
      </main>
      <SiteFooter />
    </>
  );
}
