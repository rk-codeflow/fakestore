import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeProps {
  theme: "light" | "dark";
  themeToggle: () => void;
}

export const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: "light",
      themeToggle: () =>
        set((state) => {
          return {
            theme: state.theme === "light" ? "dark" : "light",
          };
        }),
    }),
    { name: "theme-store" }
  )
);
