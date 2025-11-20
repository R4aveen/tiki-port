"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Oscuro"}
    </button>
  );
}
