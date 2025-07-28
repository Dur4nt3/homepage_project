/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 69:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e2571ba936304f02183.woff2";

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05780ea47f422ac99765.woff2";

/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_stylesheets_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(409);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(384), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(424), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_stylesheets_fonts_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*-----------------------------------------------------------------------------------*/

/* General Styles */

:root {
    --font-stack:
        system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    --fs-sm: clamp(0.8rem, 0.15vi + 0.77rem, 0.89rem);
    --fs-base: clamp(1rem, 0.31vi + 0.94rem, 1.19rem);
    --fs-md: clamp(1.25rem, 0.55vi + 1.14rem, 1.58rem);
    --fs-lg: clamp(1.56rem, 0.91vi + 1.38rem, 2.11rem);
    --fs-xl: clamp(1.95rem, 1.43vi + 1.67rem, 2.81rem);
    --fs-xxl: clamp(2.44rem, 2.18vi + 2.01rem, 3.75rem);
    --fs-xxxl: clamp(3.05rem, 3.24vi + 2.4rem, 5rem);

    color-scheme: light;

    --text-primary: #050315;
    --text-secondary: #ebe9fc;
    --background-color: #fbfbfe;
    --primary-color: #0043e0;
    --secondary-color: #d0d4ff;
    --accent-color: #020079;

    --header-tile: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

    --box-shadow-header: 0.5px 0.5px 14px 0 #7a7a7a;
    --box-shadow-projects: 0px 1px 5px 0px #9b9b9b;

    --toggle-border: #d0d4ff;
    --toggle-focus-outline: #050315;
}

:root.dark-mode {
    color-scheme: dark;

    --text-primary: #ebe9fc;
    --text-secondary: #050315;
    --background-color: #050509;
    --primary-color: #0024db;
    --secondary-color: #00042e;
    --accent-color: #1e00b5;

    --header-tile: url(${___CSS_LOADER_URL_REPLACEMENT_1___});

    --box-shadow-header: 1px 1px 6px 2px #010102;
    --box-shadow-projects: 0px 1px 5px 0px #000000;

    --toggle-border: #ebe9fc;
    --toggle-focus-outline: #d0d4ff;
}

body {
    font-family: Geist, var(--font-stack);

    min-height: 100svh;
    background-color: var(--background-color);
    color: var(--text-primary);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    position: relative;
}

@media (min-width: 48rem) {
    body {
        gap: 0;
    }
}

.toggle-theme {
    position: absolute;
    top: 0.25%;
    right: 1.25%;
    z-index: 1;
    background-color: var(--accent-color);
    padding: 0.5rem;
    border: 2px solid var(--toggle-border);
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (min-width: 64rem) {
    .toggle-theme {
        right: 0.5%;
        top: 0.5%;
    }
}

.toggle-theme:focus {
    outline: 3px solid var(--toggle-focus-outline);
}

.toggle-theme:hover {
    background-color: var(--primary-color);
}

.toggle-theme > img {
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.toggle-theme:active > img {
    opacity: 0.65;
}

/* General Styles */

/*-----------------------------------------------------------------------------------*/

/* Header Styles */

header {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.header-img-cont {
    position: relative;
}

.header-img-background {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    z-index: -1;

    background: var(--header-tile);
    background-repeat: no-repeat;
    background-size: cover;
}

.header-img-wrapper {
    padding: 1.25rem;
}

.header-img {
    aspect-ratio: 1 / 1;
}

@media (min-width: 48rem) {
    header {
        padding: 0.5rem;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--header-tile);
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    .header-img-background {
        display: none;
    }

    .header-img-wrapper {
        padding: 0;
    }
}

.header-description {
    padding: 1rem;
}

.about-heading,
.main-heading {
    margin-left: auto;
    margin-right: auto;
    max-width: max-content;
    position: relative;
    margin-bottom: 0.75rem;
}

.about-heading::before,
.main-heading::before {
    content: '';
    position: absolute;
    bottom: 3.5%;
    width: 100%;
    height: 12.5%;
    background-color: var(--primary-color);
    opacity: 0.85;
    transform: skewX(-45deg);
}

.header-description section {
    max-width: 65ch;
}

.header-description p:not(:last-child) {
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.header-link,
.footer-link {
    display: block;
    max-width: max-content;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.header-link > img,
.footer-link > img {
    user-select: none;
    width: 32px;
    height: 32px;
}

.header-link:hover,
.footer-link:hover {
    transform: translateY(-0.15rem);
}

@media (min-width: 48rem) {
    .header-description {
        padding: 0.5rem;
        background-color: var(--background-color);
        box-shadow: var(--box-shadow-header);
    }

    .about-heading {
        margin: 0;
        margin-bottom: 0.5rem;
        font-size: var(--fs-md);
    }

    .header-description p {
        font-size: var(--fs-sm);
    }

    .header-link {
        margin-top: 0;
        margin-right: 0;
    }

    .header-link > img {
        width: 24px;
        height: 24px;
        margin-right: 0;
        margin-left: auto;
    }
}

@media (min-width: 64rem) {
    .header-link > img {
        width: 28px;
        height: 28px;
    }

    .header-description p {
        font-size: var(--fs-sm);
    }
}

/* Header Styles */

/*-----------------------------------------------------------------------------------*/

/* Main Styles */

main {
    flex-grow: 1;
    width: 100%;
}

.projects-grid {
    padding: 1.25rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, calc(320px - 2.5rem));
    gap: 1.25rem;
}

.project-cont {
    display: flex;
    flex-direction: column;
    box-shadow: var(--box-shadow-projects);
}

.project-cont > picture > img {
    object-fit: contain;
    width: 280px;
    height: auto;
}

.project-description {
    flex-grow: 1;
    padding: 0.5rem;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
}

.project-name {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
}

.project-name > span {
    font-size: var(--fs-base);
}

.project-labels {
    margin-left: auto;
    position: relative;
    display: flex;
    gap: 0.5rem;
}

.project-labels > div {
    cursor: pointer;
    position: relative;
    user-select: none;
}

.project-labels::before,
.project-labels::after {
    --text-light: #ebe9fc;

    content: "Project isn't responsive";
    font-size: 0.65rem;
    padding: 0.25rem;
    background-color: var(--primary-color);
    color: var(--text-light);
    position: absolute;
    border-radius: 0.35rem;
    top: 50%;
    left: -120%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.project-labels::after {
    content: "Project isn't accessible";
}

.project-labels:has(.not-responsive:hover)::before,
.project-labels:has(.not-responsive:focus)::before {
    opacity: 1;
}

.project-labels:has(.not-accessible:hover)::after,
.project-labels:has(.not-accessible:focus)::after {
    opacity: 1;
}

.description-text {
    max-width: 65ch;
    font-size: var(--fs-sm);
    font-weight: 300;
    margin-bottom: 0.25rem;
}

.project-link {
    display: flex;
    align-items: center;
    max-width: max-content;
    gap: 0.15rem;
    margin-top: auto;
    margin-left: auto;
}

.project-link > img {
    user-select: none;
    transition: transform 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.project-link:hover > img {
    transform: scale(1.075);
}

/* Main Styles */

/*-----------------------------------------------------------------------------------*/

/* Footer Styles */

footer {
    padding: 1rem;
    --text-light: #ebe9fc;
    color: var(--text-light);
    width: 100%;
    background-color: var(--primary-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.contact-info > h1 {
    font-size: var(--fs-lg);
}

.contact-info > *:not(:last-child) {
    margin-bottom: 0.75rem;
}

.contact-info > p {
    max-width: 65ch;
}

.contact-email {
    display: flex;
    gap: 0.5rem;
}

/* Footer Styles */

/*-----------------------------------------------------------------------------------*/
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(./assets/stylesheets/fonts.css);\n\n/*-----------------------------------------------------------------------------------*/\n\n/* General Styles */\n\n:root {\n    --font-stack:\n        system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\n    --fs-sm: clamp(0.8rem, 0.15vi + 0.77rem, 0.89rem);\n    --fs-base: clamp(1rem, 0.31vi + 0.94rem, 1.19rem);\n    --fs-md: clamp(1.25rem, 0.55vi + 1.14rem, 1.58rem);\n    --fs-lg: clamp(1.56rem, 0.91vi + 1.38rem, 2.11rem);\n    --fs-xl: clamp(1.95rem, 1.43vi + 1.67rem, 2.81rem);\n    --fs-xxl: clamp(2.44rem, 2.18vi + 2.01rem, 3.75rem);\n    --fs-xxxl: clamp(3.05rem, 3.24vi + 2.4rem, 5rem);\n\n    color-scheme: light;\n\n    --text-primary: #050315;\n    --text-secondary: #ebe9fc;\n    --background-color: #fbfbfe;\n    --primary-color: #0043e0;\n    --secondary-color: #d0d4ff;\n    --accent-color: #020079;\n\n    --header-tile: url(./assets/media/pictures/background-light.svg);\n\n    --box-shadow-header: 0.5px 0.5px 14px 0 #7a7a7a;\n    --box-shadow-projects: 0px 1px 5px 0px #9b9b9b;\n\n    --toggle-border: #d0d4ff;\n    --toggle-focus-outline: #050315;\n}\n\n:root.dark-mode {\n    color-scheme: dark;\n\n    --text-primary: #ebe9fc;\n    --text-secondary: #050315;\n    --background-color: #050509;\n    --primary-color: #0024db;\n    --secondary-color: #00042e;\n    --accent-color: #1e00b5;\n\n    --header-tile: url(./assets/media/pictures/background-dark.svg);\n\n    --box-shadow-header: 1px 1px 6px 2px #010102;\n    --box-shadow-projects: 0px 1px 5px 0px #000000;\n\n    --toggle-border: #ebe9fc;\n    --toggle-focus-outline: #d0d4ff;\n}\n\nbody {\n    font-family: Geist, var(--font-stack);\n\n    min-height: 100svh;\n    background-color: var(--background-color);\n    color: var(--text-primary);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n\n    position: relative;\n}\n\n@media (min-width: 48rem) {\n    body {\n        gap: 0;\n    }\n}\n\n.toggle-theme {\n    position: absolute;\n    top: 0.25%;\n    right: 1.25%;\n    z-index: 1;\n    background-color: var(--accent-color);\n    padding: 0.5rem;\n    border: 2px solid var(--toggle-border);\n    border-radius: 50%;\n    cursor: pointer;\n    user-select: none;\n    transition: background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n@media (min-width: 64rem) {\n    .toggle-theme {\n        right: 0.5%;\n        top: 0.5%;\n    }\n}\n\n.toggle-theme:focus {\n    outline: 3px solid var(--toggle-focus-outline);\n}\n\n.toggle-theme:hover {\n    background-color: var(--primary-color);\n}\n\n.toggle-theme > img {\n    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.toggle-theme:active > img {\n    opacity: 0.65;\n}\n\n/* General Styles */\n\n/*-----------------------------------------------------------------------------------*/\n\n/* Header Styles */\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header-img-cont {\n    position: relative;\n}\n\n.header-img-background {\n    min-width: 100%;\n    min-height: 100%;\n    position: absolute;\n    z-index: -1;\n\n    background: var(--header-tile);\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.header-img-wrapper {\n    padding: 1.25rem;\n}\n\n.header-img {\n    aspect-ratio: 1 / 1;\n}\n\n@media (min-width: 48rem) {\n    header {\n        padding: 0.5rem;\n        position: relative;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        background: var(--header-tile);\n        background-repeat: no-repeat;\n        background-size: cover;\n        overflow: hidden;\n    }\n\n    .header-img-background {\n        display: none;\n    }\n\n    .header-img-wrapper {\n        padding: 0;\n    }\n}\n\n.header-description {\n    padding: 1rem;\n}\n\n.about-heading,\n.main-heading {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: max-content;\n    position: relative;\n    margin-bottom: 0.75rem;\n}\n\n.about-heading::before,\n.main-heading::before {\n    content: '';\n    position: absolute;\n    bottom: 3.5%;\n    width: 100%;\n    height: 12.5%;\n    background-color: var(--primary-color);\n    opacity: 0.85;\n    transform: skewX(-45deg);\n}\n\n.header-description section {\n    max-width: 65ch;\n}\n\n.header-description p:not(:last-child) {\n    line-height: 1.5;\n    margin-bottom: 0.5rem;\n}\n\n.header-link,\n.footer-link {\n    display: block;\n    max-width: max-content;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.header-link > img,\n.footer-link > img {\n    user-select: none;\n    width: 32px;\n    height: 32px;\n}\n\n.header-link:hover,\n.footer-link:hover {\n    transform: translateY(-0.15rem);\n}\n\n@media (min-width: 48rem) {\n    .header-description {\n        padding: 0.5rem;\n        background-color: var(--background-color);\n        box-shadow: var(--box-shadow-header);\n    }\n\n    .about-heading {\n        margin: 0;\n        margin-bottom: 0.5rem;\n        font-size: var(--fs-md);\n    }\n\n    .header-description p {\n        font-size: var(--fs-sm);\n    }\n\n    .header-link {\n        margin-top: 0;\n        margin-right: 0;\n    }\n\n    .header-link > img {\n        width: 24px;\n        height: 24px;\n        margin-right: 0;\n        margin-left: auto;\n    }\n}\n\n@media (min-width: 64rem) {\n    .header-link > img {\n        width: 28px;\n        height: 28px;\n    }\n\n    .header-description p {\n        font-size: var(--fs-sm);\n    }\n}\n\n/* Header Styles */\n\n/*-----------------------------------------------------------------------------------*/\n\n/* Main Styles */\n\nmain {\n    flex-grow: 1;\n    width: 100%;\n}\n\n.projects-grid {\n    padding: 1.25rem;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(auto-fit, calc(320px - 2.5rem));\n    gap: 1.25rem;\n}\n\n.project-cont {\n    display: flex;\n    flex-direction: column;\n    box-shadow: var(--box-shadow-projects);\n}\n\n.project-cont > picture > img {\n    object-fit: contain;\n    width: 280px;\n    height: auto;\n}\n\n.project-description {\n    flex-grow: 1;\n    padding: 0.5rem;\n    background-color: var(--background-color);\n    display: flex;\n    flex-direction: column;\n}\n\n.project-name {\n    margin-bottom: 0.25rem;\n    display: flex;\n    align-items: center;\n}\n\n.project-name > span {\n    font-size: var(--fs-base);\n}\n\n.project-labels {\n    margin-left: auto;\n    position: relative;\n    display: flex;\n    gap: 0.5rem;\n}\n\n.project-labels > div {\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n}\n\n.project-labels::before,\n.project-labels::after {\n    --text-light: #ebe9fc;\n\n    content: \"Project isn't responsive\";\n    font-size: 0.65rem;\n    padding: 0.25rem;\n    background-color: var(--primary-color);\n    color: var(--text-light);\n    position: absolute;\n    border-radius: 0.35rem;\n    top: 50%;\n    left: -120%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.project-labels::after {\n    content: \"Project isn't accessible\";\n}\n\n.project-labels:has(.not-responsive:hover)::before,\n.project-labels:has(.not-responsive:focus)::before {\n    opacity: 1;\n}\n\n.project-labels:has(.not-accessible:hover)::after,\n.project-labels:has(.not-accessible:focus)::after {\n    opacity: 1;\n}\n\n.description-text {\n    max-width: 65ch;\n    font-size: var(--fs-sm);\n    font-weight: 300;\n    margin-bottom: 0.25rem;\n}\n\n.project-link {\n    display: flex;\n    align-items: center;\n    max-width: max-content;\n    gap: 0.15rem;\n    margin-top: auto;\n    margin-left: auto;\n}\n\n.project-link > img {\n    user-select: none;\n    transition: transform 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.project-link:hover > img {\n    transform: scale(1.075);\n}\n\n/* Main Styles */\n\n/*-----------------------------------------------------------------------------------*/\n\n/* Footer Styles */\n\nfooter {\n    padding: 1rem;\n    --text-light: #ebe9fc;\n    color: var(--text-light);\n    width: 100%;\n    background-color: var(--primary-color);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n\n.contact-info > h1 {\n    font-size: var(--fs-lg);\n}\n\n.contact-info > *:not(:last-child) {\n    margin-bottom: 0.75rem;\n}\n\n.contact-info > p {\n    max-width: 65ch;\n}\n\n.contact-email {\n    display: flex;\n    gap: 0.5rem;\n}\n\n/* Footer Styles */\n\n/*-----------------------------------------------------------------------------------*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d294a1f0f736ad144012.svg";

/***/ }),

/***/ 405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a028d4ef5b31bfde00bc.woff2";

/***/ }),

/***/ 409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(644), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(69), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(790), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(196), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(405), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(503), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(585), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(875), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 100;

}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    font-weight: 200;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    font-weight: 300;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    font-weight: 500;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    font-weight: 600;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
    font-weight: 700;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
    font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/assets/stylesheets/fonts.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,4CAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAmC;IACnC,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,4CAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4CAAwC;IACxC,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-Regular.woff2);\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-Thin.woff2);\n    font-weight: 100;\n\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-ExtraLight.woff2);\n    font-weight: 200;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-Light.woff2);\n    font-weight: 300;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-Medium.woff2);\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-SemiBold.woff2);\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-Bold.woff2);\n    font-weight: 700;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url(../fonts/Geist-ExtraBold.woff2);\n    font-weight: 800;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
    box-sizing: border-box;
  }
  
  /* 2. Remove default margin */
  * {
    margin: 0;
  }
  
  body {
    /* 3. Add accessible line-height */
    line-height: 1.5;
    /* 4. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }
  
  /* 5. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  /* 6. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }
  
  /* 7. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  /* 8. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }
  
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }`, "",{"version":3,"sources":["webpack://./src/assets/stylesheets/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED,6CAA6C;AAC7C;IACI,sBAAsB;EACxB;;EAEA,6BAA6B;EAC7B;IACE,SAAS;EACX;;EAEA;IACE,kCAAkC;IAClC,gBAAgB;IAChB,8BAA8B;IAC9B,mCAAmC;EACrC;;EAEA,8BAA8B;EAC9B;IACE,cAAc;IACd,eAAe;EACjB;;EAEA,uCAAuC;EACvC;IACE,aAAa;EACf;;EAEA,4BAA4B;EAC5B;IACE,yBAAyB;EAC3B;;EAEA,6BAA6B;EAC7B;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;;EAEA;;GAEC;EACD;IACE,kBAAkB;EACpB","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n/* 1. Use a more-intuitive box-sizing model */\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  \n  /* 2. Remove default margin */\n  * {\n    margin: 0;\n  }\n  \n  body {\n    /* 3. Add accessible line-height */\n    line-height: 1.5;\n    /* 4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  /* 5. Improve media defaults */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  \n  /* 6. Inherit fonts for form controls */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  \n  /* 7. Avoid text overflows */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  \n  /* 8. Improve line wrapping */\n  p {\n    text-wrap: pretty;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n  }\n  \n  /*\n    9. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8288c5e391eb7b7a0594.svg";

/***/ }),

/***/ 503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8201922a8ca3994e7eaf.woff2";

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae3e7da7671fb580609c.woff2";

/***/ }),

/***/ 644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ded747ef6b14fbe09cf4.woff2";

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f182e7bea4a097058f25.woff2";

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31bb529594b2db065e3d.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/stylesheets/reset.css
var stylesheets_reset = __webpack_require__(410);
;// ./src/assets/stylesheets/reset.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(stylesheets_reset/* default */.A, options);




       /* harmony default export */ const assets_stylesheets_reset = (stylesheets_reset/* default */.A && stylesheets_reset/* default */.A.locals ? stylesheets_reset/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(365);
;// ./src/styles.css

      
      
      
      
      
      
      
      
      

var styles_options = {};

styles_options.styleTagTransform = (styleTagTransform_default());
styles_options.setAttributes = (setAttributesWithoutAttributes_default());
styles_options.insert = insertBySelector_default().bind(null, "head");
styles_options.domAPI = (styleDomAPI_default());
styles_options.insertStyleElement = (insertStyleElement_default());

var styles_update = injectStylesIntoStyleTag_default()(styles/* default */.A, styles_options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./src/modules/misc-utilities/dom-manipulator.js
function buildElement(type, ...classNames) {
    const createdElement = document.createElement(type);
    createdElement.classList.add(...classNames);

    return createdElement;
}

function buildImgElement(src, alt, ...classNames) {
    const imgElement = buildElement('img', ...classNames);
    imgElement.src = src;
    imgElement.alt = alt;

    return imgElement;
}
;// ./src/assets/media/icons/cellphone-off-dark.svg
const cellphone_off_dark_namespaceObject = __webpack_require__.p + "ab39f47d9e186af818db.svg";
;// ./src/assets/media/icons/cellphone-off-light.svg
const cellphone_off_light_namespaceObject = __webpack_require__.p + "ffc8f255114a100adc14.svg";
;// ./src/assets/media/icons/not-accessible-dark.svg
const not_accessible_dark_namespaceObject = __webpack_require__.p + "30a638a8e306e2232f62.svg";
;// ./src/assets/media/icons/not-accessible-light.svg
const not_accessible_light_namespaceObject = __webpack_require__.p + "9649711bc3dd6322dabc.svg";
;// ./src/assets/media/icons/open-in-new-dark.svg
const open_in_new_dark_namespaceObject = __webpack_require__.p + "3bf4a744ed812ee93112.svg";
;// ./src/assets/media/icons/open-in-new-light.svg
const open_in_new_light_namespaceObject = __webpack_require__.p + "bee71dd84c015587e2d0.svg";
;// ./src/assets/media/icons/github-dark.svg
const github_dark_namespaceObject = __webpack_require__.p + "f82a2aefac3e8ae6609f.svg";
;// ./src/assets/media/icons/github-light.svg
const github_light_namespaceObject = __webpack_require__.p + "f38b15b7b81b08767d40.svg";
;// ./src/modules/themes/media-list.js









class MediaThemes {
    constructor(icon, dark, light) {
        this.icon = icon;
        this.dark = dark;
        this.light = light;
    }
}

// Generate an array with all the (relevant) media on the page and the sources for their different themes
function getMediaList() {
    const mediaList = [];

    mediaList.push(
        new MediaThemes(
            document.querySelector('.header-link img'),
            github_dark_namespaceObject,
            github_light_namespaceObject
        )
    );

    const cellIcon = [...document.querySelectorAll('.not-responsive')];
    cellIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, cellphone_off_dark_namespaceObject, cellphone_off_light_namespaceObject));
    });

    const a11yIcon = [...document.querySelectorAll('.not-accessible')];
    a11yIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, not_accessible_dark_namespaceObject, not_accessible_light_namespaceObject));
    });

    const repoIcon = [
        ...document.querySelectorAll('.project-link > .repo-icon'),
    ];
    repoIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, github_dark_namespaceObject, github_light_namespaceObject));
    });

    const newTabIcon = [
        ...document.querySelectorAll('.project-link img + img'),
    ];
    newTabIcon.forEach((icon) => {
        mediaList.push(new MediaThemes(icon, open_in_new_dark_namespaceObject, open_in_new_light_namespaceObject));
    });

    return mediaList;
}

;// ./src/modules/themes/switch-media.js


function changeMedia(theme) {
    const mediaList = getMediaList();

    if (theme === 'dark') {
        mediaList.forEach((media) => (media.icon.src = media.dark));
    } else {
        mediaList.forEach((media) => (media.icon.src = media.light));
    }
}

;// ./src/assets/media/icons/sun.svg
const sun_namespaceObject = __webpack_require__.p + "de7cdb4f30b8320b8c85.svg";
;// ./src/assets/media/icons/moon.svg
const moon_namespaceObject = __webpack_require__.p + "6440f0365221b6c3d702.svg";
;// ./src/modules/themes/theme-toggle.js





function buildThemeIcon(theme, parent) {
    if (theme === 'dark') {
        const toggleIcon = buildImgElement(
            moon_namespaceObject,
            'Toggle Light Mode',
            'theme-icon'
        );
        parent.append(toggleIcon);
        parent.ariaLabel = 'Toggle Light Mode';
    } else {
        const toggleIcon = buildImgElement(
            sun_namespaceObject,
            'Toggle Dark Mode',
            'theme-icon'
        );
        parent.append(toggleIcon);
        parent.ariaLabel = 'Toggle Dark Mode';
    }
}

function toggleThemeHandler() {
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

function toggleThemeEvent() {
    const toggleButton = document.querySelector('.toggle-theme');
    toggleButton.addEventListener('click', toggleThemeHandler);
}

;// ./src/modules/themes/auto-toggle-theme.js


function autoToggleTheme() {
    const preferredThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preferredThemeDark) {
        toggleThemeHandler();
    }
}

;// ./src/modules/initial-load.js



function initialLoad() {
    toggleThemeEvent();
    autoToggleTheme();
}

;// ./src/index.js





window.onload = initialLoad();
/******/ })()
;
//# sourceMappingURL=index.js.map