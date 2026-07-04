import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";
import { siteHeaderStyles } from "./site-header-styles";

type SiteHeaderProps = {
  locale: string;
};

export async function SiteHeader({ locale }: SiteHeaderProps) {
  const common = await getTranslations("Common");
  const navigation = await getTranslations("Navigation");
  const homeHref = locale === "fa" ? "/" : "/en";
  const localeHref = locale === "fa" ? "/en" : "/";

  return (
    <header className={siteHeaderStyles.root}>
      <Container className={siteHeaderStyles.container}>
        <Link
          className={siteHeaderStyles.brandLink}
          href={homeHref}
          aria-label={common("brandName")}
        >
          <BrandMark name={common("brandName")} tagline={common("brandTagline")} />
        </Link>

        <nav
          className={siteHeaderStyles.navigation}
          aria-label={navigation("ariaLabel")}
        >
          {[
            ["#story", navigation("story")],
            ["#services", navigation("services")],
            ["#why-us", navigation("trust")],
            ["#memories", navigation("memories")],
            ["#contact", navigation("contact")],
          ].map(([href, label]) => (
            <a
              className={siteHeaderStyles.navigationLink}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={siteHeaderStyles.actions}>
          <Link
            className={siteHeaderStyles.localeLink}
            href={localeHref}
            hrefLang={locale === "fa" ? "en" : "fa"}
            aria-label={common("localeSwitchLabel")}
          >
            {common("localeSwitchText")}
          </Link>
          <a
            className={siteHeaderStyles.phoneLink}
            href={siteConfig.phoneHref}
          >
            <PhoneIcon className={siteHeaderStyles.phoneIcon} />
            <span className={siteHeaderStyles.phoneLabel}>
              {navigation("call")}
            </span>
          </a>
        </div>
      </Container>
    </header>
  );
}
