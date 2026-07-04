import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { PhoneIcon } from "@shared/ui/icons";
import { siteConfig } from "@shared/config/site";
import { Container } from "@shared/ui/container";

type SiteHeaderProps = {
  locale: string;
};

export async function SiteHeader({ locale }: SiteHeaderProps) {
  const common = await getTranslations("Common");
  const navigation = await getTranslations("Navigation");
  const homeHref = locale === "fa" ? "/" : "/en";
  const localeHref = locale === "fa" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd8cfbf] bg-canvas/90 backdrop-blur-[0.875rem]">
      <Container className="flex min-h-19.5 items-center justify-between gap-7 max-sm:min-h-17">
        <Link
          className="shrink-0"
          href={homeHref}
          aria-label={common("brandName")}
        >
          <BrandMark name={common("brandName")} tagline={common("brandTagline")} />
        </Link>

        <nav
          className="hidden items-center gap-[clamp(1.125rem,2.3vw,2.125rem)] text-[0.8rem] font-bold text-[#5f5d58] min-[1081px]:flex"
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
              className="relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:scale-x-0 after:rounded-sm after:bg-accent after:content-[''] after:transition-transform after:duration-180 hover:text-ink hover:after:scale-x-100"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            className="grid size-10.5 place-items-center rounded-xl border border-line bg-white text-[0.78rem] font-black transition-[border-color,transform] duration-180 hover:-translate-y-px hover:border-accent"
            href={localeHref}
            hrefLang={locale === "fa" ? "en" : "fa"}
            aria-label={common("localeSwitchLabel")}
          >
            {common("localeSwitchText")}
          </Link>
          <a
            className="inline-flex min-h-10.5 items-center gap-2 rounded-xl bg-ink px-3.75 text-[0.76rem] font-extrabold text-white max-sm:size-10.5 max-sm:justify-center max-sm:p-0"
            href={siteConfig.phoneHref}
          >
            <PhoneIcon className="size-4.25 text-[#ff666d]" />
            <span className="max-sm:sr-only">{navigation("call")}</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
