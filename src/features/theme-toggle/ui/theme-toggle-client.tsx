"use client";

import { MoonIcon, SunIcon } from "@shared/ui/icons";
import { toggleTheme, useTheme } from "../model/use-theme";
import { themeToggleStyles } from "./theme-toggle-styles";

type ThemeToggleClientProps = {
  label: string;
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggleClient({
  label,
  lightLabel,
  darkLabel,
}: ThemeToggleClientProps) {
  const theme = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={theme === "dark"}
      title={theme === "dark" ? lightLabel : darkLabel}
      disabled={theme === null}
      onClick={toggleTheme}
      className={themeToggleStyles.button}
    >
      <MoonIcon className={themeToggleStyles.moon} />
      <SunIcon className={themeToggleStyles.sun} />
    </button>
  );
}
