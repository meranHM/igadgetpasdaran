"use client";

import { useSyncExternalStore } from "react";
import {
  isTheme,
  themeMediaQuery,
  themeStorageKey,
  type Theme,
} from "./theme-config";

const listeners = new Set<() => void>();
let preference: Theme | null = null;

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

function readPreference(): Theme | null {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

function subscribe(listener: () => void) {
  const media = window.matchMedia(themeMediaQuery);
  preference = readPreference();
  listeners.add(listener);

  const syncSystemTheme = () => {
    if (preference === null) {
      applyTheme(media.matches ? "dark" : "light");
    }
  };

  const syncStorage = (event: StorageEvent) => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    if (event.storageArea !== localStorage) return;

    preference = isTheme(event.newValue) ? event.newValue : null;
    applyTheme(preference ?? (media.matches ? "dark" : "light"));
  };

  applyTheme(preference ?? (media.matches ? "dark" : "light"));
  media.addEventListener("change", syncSystemTheme);
  window.addEventListener("storage", syncStorage);

  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", syncSystemTheme);
    window.removeEventListener("storage", syncStorage);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot() {
  return null;
}

export function toggleTheme() {
  const next = getSnapshot() === "dark" ? "light" : "dark";
  preference = next;

  try {
    localStorage.setItem(themeStorageKey, next);
  } catch {
    // Keep the switch usable when the browser blocks persistent storage.
  }

  applyTheme(next);
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
