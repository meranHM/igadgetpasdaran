import type { MetadataRoute } from "next";
import { getPathname } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { siteConfig } from "@shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about"].flatMap((href) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        new URL(getPathname({ locale, href }), siteConfig.url).href,
      ]),
    );

    return routing.locales.map((locale) => ({
      url: languages[locale],
      alternates: { languages },
    }));
  });
}
