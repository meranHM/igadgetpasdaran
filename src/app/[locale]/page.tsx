import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { HomePage } from "@pages/home";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomeRoute({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePage locale={locale} />;
}
