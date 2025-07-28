import { buildImgElement } from '../misc-utilities/dom-manipulator';
import changeMedia from './switch-media';
import sunSvg from '../../assets/media/icons/sun.svg';
import moonSvg from '../../assets/media/icons/moon.svg';

function buildThemeIcon(theme, parent) {
    if (theme === 'dark') {
        const toggleIcon = buildImgElement(
            moonSvg,
            'Toggle Light Mode',
            'theme-icon'
        );
        parent.append(toggleIcon);
        parent.ariaLabel = 'Toggle Light Mode';
    } else {
        const toggleIcon = buildImgElement(
            sunSvg,
            'Toggle Dark Mode',
            'theme-icon'
        );
        parent.append(toggleIcon);
        parent.ariaLabel = 'Toggle Dark Mode';
    }
}

export function toggleThemeHandler() {
    const currentTheme = document.documentElement.classList.contains(
        'dark-mode'
    )
        ? 'dark'
        : 'light';

    const toggleIcon = document.querySelector('img.theme-icon');
    const toggleButton = toggleIcon.parentNode;

    toggleIcon.remove();

    if (currentTheme === 'dark') {
        buildThemeIcon('light', toggleButton);
        document.documentElement.classList.remove('dark-mode');
        changeMedia('light');
    } else {
        buildThemeIcon('dark', toggleButton);
        document.documentElement.classList.add('dark-mode');
        changeMedia('dark');
    }
}

export default function toggleThemeEvent() {
    const toggleButton = document.querySelector('.toggle-theme');
    toggleButton.addEventListener('click', toggleThemeHandler);
}
