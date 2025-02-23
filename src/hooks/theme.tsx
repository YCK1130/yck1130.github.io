import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { Theme, ThemeContext } from "./useTheme";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = React.useState(false);
    const [theme, setTheme] = useState<Theme>(() => {
        // Get theme from localStorage without causing an extra re-render
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("localTheme");
            const defaultSetting = window.matchMedia("(prefers-color-scheme: dark)");
            const defaultTheme = defaultSetting.matches ? "dark" : "light";
            if (savedTheme) {
                return savedTheme as Theme;
            }
            return defaultTheme;
        }
        return "light"; // Default theme
    });
    useLayoutEffect(() => {
        const defaultSetting = window.matchMedia("(prefers-color-scheme: dark)");
        const defaultTheme = defaultSetting.matches ? "dark" : "light";
        const localTheme = (window.localStorage.getItem("localTheme") as Theme) || defaultTheme;
        setTheme(localTheme);
        setIsDark(localTheme === "dark");
        window.document.documentElement.setAttribute("data-theme", localTheme);
        window.localStorage.setItem("localTheme", localTheme);

        setTimeout(() => window.document.documentElement.setAttribute("data-loaded", "true"), 500);
        // Delay ensures DOM is updated
    }, []);

    useEffect(() => {
        if (!theme) return;
        setIsDark(theme === "dark");
        window.document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("localTheme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
