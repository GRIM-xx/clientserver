import { useState } from "react";
import { useEffect } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}
