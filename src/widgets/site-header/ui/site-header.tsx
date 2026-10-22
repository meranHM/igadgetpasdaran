import Link from "next/link";
import { getPathname } from "@i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";
import { ThemeToggle } from "@features/theme-toggle";
import { siteHeaderStyles } from "./site-header-styles";

type SiteHeaderProps = {
  locale: string;
};

export async function SiteHeader({ locale }: SiteHeaderProps) {
  const common = await getTranslations("Common");
  const navigation = await getTranslations("Navigation");
  const currentLocale = locale === "fa" ? "fa" : "en";
  const homeHref = getPathname({ locale: currentLocale, href: "/" });
  // A prefixed URL lets the proxy update the locale cookie before redirecting.
  const localeHref = getPathname({
    locale: currentLocale === "fa" ? "en" : "fa",
    href: "/",
    forcePrefix: true,
  });

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
          <ThemeToggle />
          <Link
            className={siteHeaderStyles.localeLink}
            href={localeHref}
            hrefLang={currentLocale === "fa" ? "en" : "fa"}
            prefetch={false}
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
