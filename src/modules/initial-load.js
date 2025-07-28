import toggleThemeEvent from './themes/theme-toggle';
import autoToggleTheme from './themes/auto-toggle-theme';

export default function initialLoad() {
    toggleThemeEvent();
    autoToggleTheme();
}
