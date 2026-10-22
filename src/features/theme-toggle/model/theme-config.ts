export type Theme = "light" | "dark";

export const themeStorageKey = "igadget-theme";
export const themeMediaQuery = "(prefers-color-scheme: dark)";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
