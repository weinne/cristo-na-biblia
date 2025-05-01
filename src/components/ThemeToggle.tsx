
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "p-2 rounded-md hover:bg-muted transition-colors relative overflow-hidden w-9 h-9 flex items-center justify-center",
        className
      )}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      <Sun
        className="absolute inset-0 h-5 w-5 m-auto rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500"
        strokeWidth={1.5}
      />
      <Moon
        className="absolute inset-0 h-5 w-5 m-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-300"
        strokeWidth={1.5}
      />
      <span className="sr-only">
        {theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      </span>
    </motion.button>
  );
}
