"use client";

import { useRegisterActions } from "kbar";
import { useTheme } from "next-themes";

const useThemeSwitching = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeAction = [
    {
      id: "toggleTheme",
      name: "Toggle Theme",
      shortcut: ["t", "t"],
      section: "Theme",
      subtitle: "Switch between light and dark mode",
      perform: toggleTheme,
    },
    {
      id: "setLightTheme",
      name: "Set Light Theme",
      section: "Theme",
      subtitle: "Switch to light mode",
      perform: () => setTheme("light"),
    },
    {
      id: "setDarkTheme",
      name: "Set Dark Theme",
      section: "Theme",
      subtitle: "Switch to dark mode",
      perform: () => setTheme("dark"),
    },
  ];

  useRegisterActions(themeAction, [theme]);
};

export default useThemeSwitching;
