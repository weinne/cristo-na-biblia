
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "p-2 rounded-md transition-colors hover:bg-muted",
        className
      )}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      <Sun
        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        strokeWidth={1.5}
      />
      <Moon
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        strokeWidth={1.5}
      />
    </button>
  );
}
