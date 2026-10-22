import { headerControlClassName } from "@shared/ui/styles";

export const themeToggleStyles = {
  button: headerControlClassName,
  moon: "size-4.5 dark:hidden",
  sun: "hidden size-4.5 dark:block",
} as const;
