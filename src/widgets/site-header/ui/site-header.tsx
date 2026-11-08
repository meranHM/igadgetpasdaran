import Link from "next/link";
import { getPathname } from "@i18n/navigation";
import { getTranslations } from "next-intl/server";
import { serviceIds } from "@entities/service/model/services";
import { ServiceIcon } from "@entities/service/ui/service-icon";
import { ThemeToggle } from "@features/theme-toggle";
import { BrandMark } from "@shared/ui/brand-mark";
import { ArrowIcon, MessageIcon } from "@shared/ui/icons";
import { Container } from "@shared/ui/container";
import { SiteHeaderClient } from "./site-header-client";
import { siteHeaderStyles as styles } from "./site-header-styles";

type SiteHeaderProps = { locale: string; pathname?: string };

function Chevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      className={styles.chevron}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m4 6 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export async function SiteHeader({ locale, pathname = "/" }: SiteHeaderProps) {
  const common = await getTranslations("Common");
  const t = await getTranslations("Navigation");
  const services = await getTranslations("Services.cards");
  const currentLocale = locale === "fa" ? "fa" : "en";
  const href = (path: string) =>
    getPathname({ locale: currentLocale, href: path });
  const nextLocale = currentLocale === "fa" ? "en" : "fa";
  // The prefixed URL updates the locale cookie before redirecting.
  const localeHref = getPathname({
    locale: nextLocale,
    href: pathname,
    forcePrefix: true,
  });
  const links = [
    { href: "/about", label: t("story"), current: pathname === "/about" },
    { href: "/#why-us", label: t("trust"), current: false },
    { href: "/#memories", label: t("memories"), current: false },
  ];
  const mobileLinks = [
    {
      href: "/",
      label: t("home"),
      current: pathname === "/",
      description: t("homeDescription"),
    },
    {
      href: "/services",
      label: t("services"),
      current: pathname === "/services",
      description: t("servicesDescription"),
    },
    { ...links[0], description: t("storyDescription") },
    { ...links[1], description: t("trustDescription") },
    { ...links[2], description: t("memoriesDescription") },
  ];
  const localeControl = (
    <Link
      className={styles.localeLink}
      href={localeHref}
      hrefLang={nextLocale}
      lang={nextLocale}
      prefetch={false}
      aria-label={common("localeSwitchLabel")}
    >
      {common("localeSwitchText")}
    </Link>
  );

  return (
    <SiteHeaderClient key={`${currentLocale}:${pathname}`}>
      <Container className={styles.container}>
        <div className={styles.dock}>
          <Link
            className={styles.brandLink}
            href={href("/")}
            aria-label={common("brandName")}
            aria-current={pathname === "/" ? "page" : undefined}
            data-navigation-home
          >
            <BrandMark
              name={common("brandName")}
              tagline={common("brandTagline")}
            />
          </Link>
          <nav
            className={styles.navigation}
            aria-label={t("ariaLabel")}
            data-navigation-track
          >
            <span
              className={styles.indicator}
              data-navigation-indicator
              aria-hidden="true"
            />
            <details
              className={styles.servicesDisclosure}
              data-navigation-disclosure="services"
            >
              <summary
                className={styles.navigationLink}
                data-nav-item
                aria-current={pathname === "/services" ? "page" : undefined}
              >
                {t("services")}
                <Chevron />
              </summary>
              <div className={styles.servicesPanel}>
                <div className={styles.servicesIntro}>
                  <span className={styles.eyebrow}>{t("serviceEyebrow")}</span>
                  <p className={styles.panelTitle}>{t("serviceTitle")}</p>
                  <p className={styles.panelDescription}>
                    {t("serviceDescription")}
                  </p>
                  <Link href={href("/services")} className={styles.allServices}>
                    {t("allServices")}
                    <ArrowIcon />
                  </Link>
                </div>
                <div className={styles.serviceGrid}>
                  {serviceIds.map((id) => (
                    <Link
                      key={id}
                      href={href(`/services#service-${id}`)}
                      className={styles.serviceLink}
                    >
                      <span className={styles.serviceIcon}>
                        <ServiceIcon type={id} />
                      </span>
                      <span>{services(`${id}.title`)}</span>
                      <ArrowIcon className={styles.serviceArrow} />
                    </Link>
                  ))}
                </div>
                <p className={styles.servicesFootnote}>
                  <span className={styles.signal} aria-hidden="true" />
                  {t("serviceNote")}
                </p>
              </div>
            </details>
            {links.map((link) => (
              <Link
                className={styles.navigationLink}
                href={href(link.href)}
                key={link.href}
                aria-current={link.current ? "page" : undefined}
                data-nav-item
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <div className={styles.desktopPreferences}>
              <ThemeToggle />
              {localeControl}
            </div>
            <Link
              className={styles.contactLink}
              href={href("/contact-us")}
              aria-current={pathname === "/contact-us" ? "page" : undefined}
            >
              <MessageIcon className={styles.contactIcon} />
              <span className={styles.contactLabel}>{t("letsTalk")}</span>
              <ArrowIcon className={styles.contactArrow} />
            </Link>
            <details
              className={styles.mobileMenu}
              data-navigation-disclosure="mobile"
            >
              <summary className={styles.menuButton}>
                <span className={styles.menuOpenLabel}>{t("menuShort")}</span>
                <span className={styles.menuCloseLabel}>{t("closeMenu")}</span>
                <span className={styles.menuGlyph} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </summary>
              <div className={styles.mobilePanel}>
                <div className={styles.mobileIntro}>
                  <span className={styles.eyebrow}>{t("mobileEyebrow")}</span>
                  <span className={styles.mobileSignature} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <nav
                  className={styles.mobileNavigation}
                  aria-label={t("ariaLabel")}
                >
                  {mobileLinks.map((link, index) => (
                    <Link
                      className={styles.mobileLink}
                      href={href(link.href)}
                      key={link.href}
                      aria-current={link.current ? "page" : undefined}
                    >
                      <span className={styles.linkNumber} aria-hidden="true">
                        {new Intl.NumberFormat(currentLocale, {
                          minimumIntegerDigits: 2,
                        }).format(index + 1)}
                      </span>
                      <span className={styles.mobileLinkText}>
                        <span className={styles.mobileLinkTitle}>
                          {link.label}
                        </span>
                        <span className={styles.mobileLinkDescription}>
                          {link.description}
                        </span>
                      </span>
                      <ArrowIcon className={styles.mobileLinkArrow} />
                    </Link>
                  ))}
                </nav>
                <div className={styles.mobileFooter}>
                  <Link
                    className={styles.mobileContact}
                    href={href("/contact-us")}
                    aria-current={
                      pathname === "/contact-us" ? "page" : undefined
                    }
                  >
                    <MessageIcon />
                    {t("letsTalk")}
                    <ArrowIcon />
                  </Link>
                  <div className={styles.mobilePreferences}>
                    <span className={styles.preferencesLabel}>
                      {t("preferences")}
                    </span>
                    <ThemeToggle />
                    {localeControl}
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </SiteHeaderClient>
  );
}
