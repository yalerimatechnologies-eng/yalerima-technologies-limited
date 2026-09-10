import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("yalerima-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    try {
      localStorage.setItem(
        "yalerima-theme",
        dark ? "dark" : "light"
      );
    } catch {}
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDark((value) => !value)}
      aria-label={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden="true">
        {dark ? "☼" : "◐"}
      </span>
    </button>
  );
}
