import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/ThemeContext";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-fg-muted transition-all duration-300 hover:border-violet/40 hover:text-fg ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
