"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children, defaultStyle = "aodesu", defaultTheme = "dark", styleConfig, isRoot = false, }) {
    const [style, setStyleState] = useState(defaultStyle);
    const [theme, setThemeState] = useState(defaultTheme);
    const availableStyles = styleConfig.map((config) => config.style);
    const availableThemes = (style) => styleConfig.find((config) => config.style === style)?.themes || [defaultTheme];
    useEffect(() => {
        if (!isRoot)
            return;
        const storedStyle = localStorage.getItem("style");
        const storedTheme = localStorage.getItem("theme");
        let initialStyle = storedStyle || defaultStyle;
        let initialTheme = storedTheme || defaultTheme;
        if (!availableStyles.includes(initialStyle)) {
            initialStyle = defaultStyle;
        }
        if (!availableThemes(initialStyle).includes(initialTheme)) {
            initialTheme = availableThemes(initialStyle)[0] || defaultTheme;
        }
        setStyleState(initialStyle);
        setThemeState(initialTheme);
    }, [defaultStyle, defaultTheme, styleConfig]);
    useEffect(() => {
        const html = document.documentElement;
        html.style.colorScheme = theme === "dark" ? "dark" : "light";
        html.classList.toggle("dark", theme === "dark");
        if (isRoot) {
            html.setAttribute("data-style", style);
            html.setAttribute("data-theme", theme);
        }
        else {
            html.removeAttribute("data-style");
            html.removeAttribute("data-theme");
        }
        localStorage.setItem("style", style);
        localStorage.setItem("theme", theme);
    }, [style, theme, isRoot]);
    const setStyle = (newStyle) => {
        if (!availableStyles.includes(newStyle))
            return;
        const newAvailableThemes = availableThemes(newStyle);
        let newTheme = theme;
        if (!newAvailableThemes.includes(theme)) {
            newTheme = newAvailableThemes[0] || defaultTheme;
            setThemeState(newTheme);
        }
        setStyleState(newStyle);
    };
    const setTheme = (newTheme) => {
        if (availableThemes(style).includes(newTheme)) {
            setThemeState(newTheme);
        }
    };
    return (<ThemeContext.Provider value={{
            style,
            theme,
            setStyle,
            setTheme,
            availableStyles,
            availableThemes: availableThemes(style),
        }}>
      {isRoot ? (children) : (<div data-style={style} data-theme={theme}>
          {children}
        </div>)}
    </ThemeContext.Provider>);
}
export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return ctx;
}