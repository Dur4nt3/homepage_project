import { toggleThemeHandler } from './theme-toggle';

export default function autoToggleTheme() {
    const preferredThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preferredThemeDark) {
        toggleThemeHandler();
    }
}
