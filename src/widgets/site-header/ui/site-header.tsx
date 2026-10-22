import Link from "next/link";
import { getPathname } from "@i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";
import { ThemeToggle } from "@features/theme-toggle";
import { MobileNavigationClient } from "./mobile-navigation-client";
import { siteHeaderStyles } from "./site-header-styles";

type SiteHeaderProps = {
  locale: string;
  pathname?: string;
};

export async function SiteHeader({ locale, pathname = "/" }: SiteHeaderProps) {
  const common = await getTranslations("Common");
  const navigation = await getTranslations("Navigation");
  const currentLocale = locale === "fa" ? "fa" : "en";
  // A prefixed URL lets the proxy update the locale cookie before redirecting.
  const localeHref = getPathname({
    locale: currentLocale === "fa" ? "en" : "fa",
    href: pathname,
    forcePrefix: true,
  });
  const links = [
    {
      href: "/about",
      label: navigation("story"),
      current: pathname === "/about",
    },
    { href: "/#services", label: navigation("services") },
    { href: "/#why-us", label: navigation("trust") },
    { href: "/#memories", label: navigation("memories") },
    { href: "/#contact", label: navigation("contact") },
  ];
  const navigationLinks = links.map(({ href, label, current }) => (
    <Link
      className={siteHeaderStyles.navigationLink}
      href={getPathname({ locale: currentLocale, href })}
      aria-current={current ? "page" : undefined}
      key={href}
    >
      {label}
    </Link>
  ));

  return (
    <header className={siteHeaderStyles.root}>
      <Container className={siteHeaderStyles.container}>
        <Link
          className={siteHeaderStyles.brandLink}
          href={getPathname({ locale: currentLocale, href: "/" })}
          aria-label={common("brandName")}
        >
          <BrandMark
            name={common("brandName")}
            tagline={common("brandTagline")}
          />
        </Link>

        <nav
          className={siteHeaderStyles.navigation}
          aria-label={navigation("ariaLabel")}
        >
          {navigationLinks}
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
          <a className={siteHeaderStyles.phoneLink} href={siteConfig.phoneHref}>
            <PhoneIcon className={siteHeaderStyles.phoneIcon} />
            <span className={siteHeaderStyles.phoneLabel}>
              {navigation("call")}
            </span>
          </a>
          <MobileNavigationClient label={navigation("menu")}>
            <nav
              className={siteHeaderStyles.mobileNavigation}
              aria-label={navigation("ariaLabel")}
            >
              {navigationLinks}
            </nav>
          </MobileNavigationClient>
        </div>
      </Container>
    </header>
  );
}
