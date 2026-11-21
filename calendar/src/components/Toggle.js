
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const isDark = savedTheme
            ? savedTheme === "dark"
            : prefersDark;

        setDark(isDark);

        if (savedTheme) {
            document.documentElement.dataset.theme = savedTheme;
        }
    }, []);

    function toggleTheme() {
        const newTheme = dark ? "light" : "dark";

        setDark(!dark);

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("theme", newTheme);
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            aria-pressed={dark}
            type="button"
        >
            {dark ? "☀ Light Mode" : "☾ Dark Mode"}
        </button>
    );
}
