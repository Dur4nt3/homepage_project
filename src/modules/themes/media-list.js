import cellDark from '../../assets/media/icons/cellphone-off-dark.svg';
import cellLight from '../../assets/media/icons/cellphone-off-light.svg';
import a11yDark from '../../assets/media/icons/not-accessible-dark.svg';
import a11yLight from '../../assets/media/icons/not-accessible-light.svg';
import openDark from '../../assets/media/icons/open-in-new-dark.svg';
import openLight from '../../assets/media/icons/open-in-new-light.svg';
import ghDark from '../../assets/media/icons/github-dark.svg';
import ghLight from '../../assets/media/icons/github-light.svg';

class MediaThemes {
    constructor(icon, dark, light) {
        this.icon = icon;
        this.dark = dark;
        this.light = light;
    }
}

// Generate an array with all the (relevant) media on the page and the sources for their different themes
export default function getMediaList() {
    const mediaList = [];

    mediaList.push(
        new MediaThemes(
            document.querySelector('.header-link img'),
            ghDark,
            ghLight
        )
    );

    const cellIcon = [...document.querySelectorAll('.not-responsive')];
    cellIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, cellDark, cellLight));
    });

    const a11yIcon = [...document.querySelectorAll('.not-accessible')];
    a11yIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, a11yDark, a11yLight));
    });

    const repoIcon = [
        ...document.querySelectorAll('.project-link > .repo-icon'),
    ];
    repoIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, ghDark, ghLight));
    });

    const newTabIcon = [
        ...document.querySelectorAll('.project-link img + img'),
    ];
    newTabIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, openDark, openLight));
    });

    return mediaList;
}
