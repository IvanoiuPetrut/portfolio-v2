export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

const isTheme = (value: unknown): value is Theme =>
  value === "light" || value === "dark";

export const resolveTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) return stored;
  } catch {}
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

// Runs in <head> before first paint, so it must stay dependency-free ES5.
export const themeInitScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.dataset.theme=t}catch(e){}})()`;
