import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");
    const [isDark, setIsDark] = React.useState(false);
    useLayoutEffect(() => {
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        if (dark.matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        dark.addEventListener("change", (e) => {
            if (e.matches) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        });
    }, []);

    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        setIsDark(theme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
