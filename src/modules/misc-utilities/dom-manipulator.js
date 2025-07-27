export function buildElement(type, ...classNames) {
    const createdElement = document.createElement(type);
    createdElement.classList.add(...classNames);

    return createdElement;
}

export function buildImgElement(src, alt, ...classNames) {
    const imgElement = buildElement('img', ...classNames);
    imgElement.src = src;
    imgElement.alt = alt;

    return imgElement;
}