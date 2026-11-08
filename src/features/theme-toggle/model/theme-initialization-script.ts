import { themeMediaQuery, themeStorageKey } from "./theme-config";

// Only static configuration is interpolated so theme initialization keeps
// locale routes static.
export const themeInitializationScript = `(function(){var theme;try{theme=localStorage.getItem(${JSON.stringify(themeStorageKey)})}catch{}document.documentElement.dataset.theme=theme==="light"||theme==="dark"?theme:window.matchMedia(${JSON.stringify(themeMediaQuery)}).matches?"dark":"light"})()`;
