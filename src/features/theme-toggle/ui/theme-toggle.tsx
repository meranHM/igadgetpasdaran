import { getTranslations } from "next-intl/server";
import { ThemeToggleClient } from "./theme-toggle-client";

export async function ThemeToggle() {
  const t = await getTranslations("Theme");

  return (
    <ThemeToggleClient
      label={t("label")}
      lightLabel={t("switchToLight")}
      darkLabel={t("switchToDark")}
    />
  );
}
