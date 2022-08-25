/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addElement.js":
/*!***************************!*\
  !*** ./src/addElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addElement = ({
  parent,
  type = "div",
  classList = [],
  id,
  text,
  children,
  src,
}) => {
  const element = document.createElement(type)

  if (typeof classList == "string") classList = [classList]
  for (const className of classList) {
    element.classList.add(className)
  }

  if (id) element.id = id
  if (src) element.src = src
  if (text) element.textContent = text
  if (parent) parent.appendChild(element)
  if (children) {
    if (!Array.isArray(children)) children = [children]
    for (const child of children) {
      element.appendChild(child)
    }
  }
  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addElement);


/***/ }),

/***/ "./src/arrayFunctions.js":
/*!*******************************!*\
  !*** ./src/arrayFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "returnExisting": () => (/* binding */ returnExisting)
/* harmony export */ });
const deleteItem = (array, item) => {
  const index = array.indexOf(item)
  if (index != -1) {
    array.splice(index, 1)
  }
}

const returnExisting = (item, defaultItem) => {
  if (item !== null && item !== undefined) {
    return item
  } else if (defaultItem !== null && defaultItem !== undefined) {
    return defaultItem
  } else {
    return ""
  }
}




/***/ }),

/***/ "./src/divFunctions.js":
/*!*****************************!*\
  !*** ./src/divFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTextContent": () => (/* binding */ changeTextContent),
/* harmony export */   "clearChildren": () => (/* binding */ clearChildren),
/* harmony export */   "hideDiv": () => (/* binding */ hideDiv),
/* harmony export */   "hideDivQuery": () => (/* binding */ hideDivQuery),
/* harmony export */   "showDivQuery": () => (/* binding */ showDivQuery),
/* harmony export */   "showDivQueryAll": () => (/* binding */ showDivQueryAll),
/* harmony export */   "toggleClassDiv": () => (/* binding */ toggleClassDiv),
/* harmony export */   "toggleClassQuery": () => (/* binding */ toggleClassQuery),
/* harmony export */   "toggleClassQueryAll": () => (/* binding */ toggleClassQueryAll)
/* harmony export */ });
// --- Div functions --- //

// Toggle class of given div
const toggleClassDiv = (div, classToToggle) => {
  div.classList.toggle(classToToggle)
}

// Toggle class with query selector
const toggleClassQuery = (querySelect, classToToggle) => {
  const div = document.querySelector(querySelect)
  div.classList.toggle(classToToggle)
}

// Toggle class with query selector all
const toggleClassQueryAll = (querySelect, classToToggle) => {
  const divs = document.querySelectorAll(querySelect)
  for (const div of divs) {
    div.classList.toggle(classToToggle)
  }
}

const hideDivQuery = (queryOfDiv) => {
  const div = document.querySelector(queryOfDiv)
  div.style.display = "none"
}

const hideDiv = (div) => {
  div.style.display = "none"
}

const showDivQuery = (queryOfDiv, disp) => {
  const div = document.querySelector(queryOfDiv)
  if (disp) {
    div.style.display = disp
  } else {
    div.style.display = "flex"
  }
}

const showDivQueryAll = (queryOfDiv, disp) => {
  const divs = document.querySelectorAll(queryOfDiv)

  if (disp) {
    for (const div of divs) {
      div.style.display = disp
    }
  } else {
    for (const div of divs) {
      div.style.display = "flex"
    }
  }
}

const changeTextContent = (queryOfDiv, textContent) => {
  const div = document.querySelector(queryOfDiv)
  div.textContent = textContent
}

const clearChildren = (parent) => {
  parent.innerHTML = ""
}




/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modalFunctions = (modalQuery, modalButtonId, closeButtonQuery) => {
  // Get the modal
  const modal = document.querySelector(modalQuery)

  // Get the button that opens the modal
  const modalButton = document.getElementById(modalButtonId)

  // Get the <span> element that closes the modal
  const closeButton = document.querySelector(closeButtonQuery)

  // When the user clicks the button, open the modal
  modalButton.addEventListener("click", () => {
    modal.style.display = "block"
  })

  // When the user clicks on <closeButton> (x), close the modal
  closeButton.addEventListener("click", () => {
    closeForm()
  })

  const closeForm = () => {
    modal.style.display = "none"
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalFunctions);


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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modal.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _arrayFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayFunctions.js */ "./src/arrayFunctions.js");
/* harmony import */ var _divFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divFunctions.js */ "./src/divFunctions.js");
/* harmony import */ var _addElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addElement.js */ "./src/addElement.js");










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7VUN6QjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNBO0FBQy9CO0FBQ3VDO0FBQ3ZDO0FBQ2dFO0FBV3RDO0FBQzFCO0FBQ3dDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5pdGlhbGl6ZS1wcm9qZWN0Ly4vc3JjL2FkZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5pdGlhbGl6ZS1wcm9qZWN0Ly4vc3JjL2FycmF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2luaXRpYWxpemUtcHJvamVjdC8uL3NyYy9kaXZGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaW5pdGlhbGl6ZS1wcm9qZWN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2luaXRpYWxpemUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbml0aWFsaXplLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2luaXRpYWxpemUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luaXRpYWxpemUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2luaXRpYWxpemUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRFbGVtZW50ID0gKHtcclxuICBwYXJlbnQsXHJcbiAgdHlwZSA9IFwiZGl2XCIsXHJcbiAgY2xhc3NMaXN0ID0gW10sXHJcbiAgaWQsXHJcbiAgdGV4dCxcclxuICBjaGlsZHJlbixcclxuICBzcmMsXHJcbn0pID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG5cclxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PSBcInN0cmluZ1wiKSBjbGFzc0xpc3QgPSBbY2xhc3NMaXN0XVxyXG4gIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGNsYXNzTGlzdCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICB9XHJcblxyXG4gIGlmIChpZCkgZWxlbWVudC5pZCA9IGlkXHJcbiAgaWYgKHNyYykgZWxlbWVudC5zcmMgPSBzcmNcclxuICBpZiAodGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcclxuICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICBpZiAoY2hpbGRyZW4pIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRFbGVtZW50XHJcbiIsImNvbnN0IGRlbGV0ZUl0ZW0gPSAoYXJyYXksIGl0ZW0pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSlcclxuICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJldHVybkV4aXN0aW5nID0gKGl0ZW0sIGRlZmF1bHRJdGVtKSA9PiB7XHJcbiAgaWYgKGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gaXRlbVxyXG4gIH0gZWxzZSBpZiAoZGVmYXVsdEl0ZW0gIT09IG51bGwgJiYgZGVmYXVsdEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRJdGVtXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcIlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBkZWxldGVJdGVtLCByZXR1cm5FeGlzdGluZyB9XHJcbiIsIi8vIC0tLSBEaXYgZnVuY3Rpb25zIC0tLSAvL1xyXG5cclxuLy8gVG9nZ2xlIGNsYXNzIG9mIGdpdmVuIGRpdlxyXG5jb25zdCB0b2dnbGVDbGFzc0RpdiA9IChkaXYsIGNsYXNzVG9Ub2dnbGUpID0+IHtcclxuICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc1RvVG9nZ2xlKVxyXG59XHJcblxyXG4vLyBUb2dnbGUgY2xhc3Mgd2l0aCBxdWVyeSBzZWxlY3RvclxyXG5jb25zdCB0b2dnbGVDbGFzc1F1ZXJ5ID0gKHF1ZXJ5U2VsZWN0LCBjbGFzc1RvVG9nZ2xlKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdClcclxuICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc1RvVG9nZ2xlKVxyXG59XHJcblxyXG4vLyBUb2dnbGUgY2xhc3Mgd2l0aCBxdWVyeSBzZWxlY3RvciBhbGxcclxuY29uc3QgdG9nZ2xlQ2xhc3NRdWVyeUFsbCA9IChxdWVyeVNlbGVjdCwgY2xhc3NUb1RvZ2dsZSkgPT4ge1xyXG4gIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5U2VsZWN0KVxyXG4gIGZvciAoY29uc3QgZGl2IG9mIGRpdnMpIHtcclxuICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzVG9Ub2dnbGUpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoaWRlRGl2UXVlcnkgPSAocXVlcnlPZkRpdikgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlPZkRpdilcclxuICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbn1cclxuXHJcbmNvbnN0IGhpZGVEaXYgPSAoZGl2KSA9PiB7XHJcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG59XHJcblxyXG5jb25zdCBzaG93RGl2UXVlcnkgPSAocXVlcnlPZkRpdiwgZGlzcCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlPZkRpdilcclxuICBpZiAoZGlzcCkge1xyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBkaXNwXHJcbiAgfSBlbHNlIHtcclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNob3dEaXZRdWVyeUFsbCA9IChxdWVyeU9mRGl2LCBkaXNwKSA9PiB7XHJcbiAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnlPZkRpdilcclxuXHJcbiAgaWYgKGRpc3ApIHtcclxuICAgIGZvciAoY29uc3QgZGl2IG9mIGRpdnMpIHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBkaXNwXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAoY29uc3QgZGl2IG9mIGRpdnMpIHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2hhbmdlVGV4dENvbnRlbnQgPSAocXVlcnlPZkRpdiwgdGV4dENvbnRlbnQpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5T2ZEaXYpXHJcbiAgZGl2LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRcclxufVxyXG5cclxuY29uc3QgY2xlYXJDaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcclxuICBwYXJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHRvZ2dsZUNsYXNzRGl2LFxyXG4gIHRvZ2dsZUNsYXNzUXVlcnksXHJcbiAgdG9nZ2xlQ2xhc3NRdWVyeUFsbCxcclxuICBoaWRlRGl2LFxyXG4gIGhpZGVEaXZRdWVyeSxcclxuICBzaG93RGl2UXVlcnksXHJcbiAgc2hvd0RpdlF1ZXJ5QWxsLFxyXG4gIGNoYW5nZVRleHRDb250ZW50LFxyXG4gIGNsZWFyQ2hpbGRyZW4sXHJcbn1cclxuIiwiY29uc3QgbW9kYWxGdW5jdGlvbnMgPSAobW9kYWxRdWVyeSwgbW9kYWxCdXR0b25JZCwgY2xvc2VCdXR0b25RdWVyeSkgPT4ge1xyXG4gIC8vIEdldCB0aGUgbW9kYWxcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxRdWVyeSlcclxuXHJcbiAgLy8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcclxuICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQnV0dG9uSWQpXHJcblxyXG4gIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsb3NlQnV0dG9uUXVlcnkpXHJcblxyXG4gIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXHJcbiAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICB9KVxyXG5cclxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8Y2xvc2VCdXR0b24+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybSgpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbEZ1bmN0aW9uc1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWwuY3NzXCJcclxuXHJcbmltcG9ydCBtb2RhbEZ1bmN0aW9ucyBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcblxyXG5pbXBvcnQgeyBkZWxldGVJdGVtLCByZXR1cm5FeGlzdGluZyB9IGZyb20gXCIuL2FycmF5RnVuY3Rpb25zLmpzXCJcclxuaW1wb3J0IHtcclxuICB0b2dnbGVDbGFzc0RpdixcclxuICB0b2dnbGVDbGFzc1F1ZXJ5LFxyXG4gIHRvZ2dsZUNsYXNzUXVlcnlBbGwsXHJcbiAgaGlkZURpdixcclxuICBoaWRlRGl2UXVlcnksXHJcbiAgc2hvd0RpdlF1ZXJ5LFxyXG4gIHNob3dEaXZRdWVyeUFsbCxcclxuICBjaGFuZ2VUZXh0Q29udGVudCxcclxuICBjbGVhckNoaWxkcmVuLFxyXG59IGZyb20gXCIuL2RpdkZ1bmN0aW9ucy5qc1wiXHJcblxyXG5pbXBvcnQgYWRkRWxlbWVudCBmcm9tIFwiLi9hZGRFbGVtZW50LmpzXCJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9