import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { BrandMark } from "@shared/ui/brand-mark";
import { LocationIcon } from "@shared/ui/icons";
import { Container } from "@shared/ui/container";

export async function SiteFooter() {
  const locale = await getLocale();
  const common = await getTranslations("Common");
  const footer = await getTranslations("Footer");

  return (
    <footer className="mt-7.5 border-t border-line bg-[#f4f1eb]">
      <Container className="grid grid-cols-[1fr_1.2fr_1fr] items-center gap-7.5 py-10.5 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:text-center">
        <Link href={locale === "fa" ? "/" : "/en"} aria-label={common("brandName")}>
          <BrandMark
            name={common("brandName")}
            tagline={common("brandTagline")}
            compact
          />
        </Link>
        <p className="m-0 text-center text-[0.78rem] leading-[1.8] text-muted">
          {footer("tagline")}
        </p>
        <span className="inline-flex items-center justify-end gap-1.75 text-[0.75rem] font-bold text-muted max-sm:justify-center">
          <LocationIcon className="size-4.5 text-accent" />
          {footer("location")}
        </span>
      </Container>
      <Container className="border-t border-line py-4 text-center text-[0.66rem] text-[#8b8881]">
        <span>{footer("rights")}</span>
      </Container>
    </footer>
  );
}
