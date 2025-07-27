import getMediaList from './media-list';

export default function changeMedia(theme) {
    const mediaList = getMediaList();

    if (theme === 'dark') {
        mediaList.forEach((media) => (media.icon.src = media.dark));
    } else {
        mediaList.forEach((media) => (media.icon.src = media.light));
    }
}
