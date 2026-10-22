import { themeMediaQuery, themeStorageKey } from "../model/theme-config";

// Only static configuration is interpolated. Run in <head> before first paint
// so stored preferences work without making the locale routes dynamic.
const themeScript = `(function(){var theme;try{theme=localStorage.getItem(${JSON.stringify(themeStorageKey)})}catch{}document.documentElement.dataset.theme=theme==="light"||theme==="dark"?theme:window.matchMedia(${JSON.stringify(themeMediaQuery)}).matches?"dark":"light"})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
