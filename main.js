/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\nvar page = document.querySelector('.page');\nvar logo = page.querySelector('.header__logo');\nvar themeButton = page.querySelector('.header__button');\nvar headerLinks = page.querySelectorAll('.header__link');\nvar footerLinks = page.querySelectorAll('.footer__link');\nvar projectLinks = page.querySelectorAll('.project__link');\nvar arrowImage = page.querySelector('.about__image');\nvar borders = page.querySelectorAll('.project');\nvar toggleButton = function toggleButton() {\n  themeButton.addEventListener(\"click\", function () {\n    themeButton.classList.toggle('header__button_theme_dark');\n    if (themeButton.classList.contains('header__button_theme_dark')) {\n      page.classList.add('page_theme_dark');\n      logo.classList.add('header__logo_theme_dark');\n      headerLinks.forEach(function (item) {\n        item.classList.add('header__link_theme_dark');\n      });\n      projectLinks.forEach(function (item) {\n        item.classList.add('project__link_theme_dark');\n      });\n      borders.forEach(function (item) {\n        item.classList.add('project_theme_dark');\n      });\n      footerLinks.forEach(function (item) {\n        item.classList.add('footer__link_theme_dark');\n      });\n      arrowImage.classList.add('about__image_theme_dark');\n    } else {\n      page.classList.remove('page_theme_dark');\n      logo.classList.remove('header__logo_theme_dark');\n      headerLinks.forEach(function (item) {\n        item.classList.remove('header__link_theme_dark');\n      });\n      borders.forEach(function (item) {\n        item.classList.remove('project_theme_dark');\n      });\n      projectLinks.forEach(function (item) {\n        item.classList.remove('project__link_theme_dark');\n      });\n      footerLinks.forEach(function (item) {\n        item.classList.remove('footer__link_theme_dark');\n      });\n      arrowImage.classList.remove('about__image_theme_dark');\n    }\n  });\n};\ntoggleButton();\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/index.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;