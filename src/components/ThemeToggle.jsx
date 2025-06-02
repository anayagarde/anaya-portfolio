import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = saved === "dark" || (!saved && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
  const nextTheme = isDarkMode ? "light" : "dark";

  // Remove both first to avoid stuck states
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("light");

  // Add the correct one
  document.documentElement.classList.add(nextTheme);

  // Persist and update state
  localStorage.setItem("theme", nextTheme);
  setIsDarkMode(!isDarkMode);
};



  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-2 z-50 p-2 rounded-full"
    >
      {isDarkMode ? <Sun className="text-white" /> : <Moon className="text-sky-400" />}
    </button>
  );
};
