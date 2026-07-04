import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { LocationIcon } from "@shared/ui/icons";
import { Container } from "@shared/ui/container";
import { siteFooterStyles } from "./site-footer-styles";

export async function SiteFooter() {
  const locale = await getLocale();
  const common = await getTranslations("Common");
  const footer = await getTranslations("Footer");

  return (
    <footer className={siteFooterStyles.root}>
      <Container className={siteFooterStyles.content}>
        <Link href={locale === "fa" ? "/" : "/en"} aria-label={common("brandName")}>
          <BrandMark
            name={common("brandName")}
            tagline={common("brandTagline")}
            compact
          />
        </Link>
        <p className={siteFooterStyles.tagline}>
          {footer("tagline")}
        </p>
        <span className={siteFooterStyles.location}>
          <LocationIcon className={siteFooterStyles.locationIcon} />
          {footer("location")}
        </span>
      </Container>
      <Container className={siteFooterStyles.copyright}>
        <span>{footer("rights")}</span>
      </Container>
    </footer>
  );
}
