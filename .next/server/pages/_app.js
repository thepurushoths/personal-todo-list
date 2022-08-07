/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./appcommons/globalStore/action/actions.js":
/*!**************************************************!*\
  !*** ./appcommons/globalStore/action/actions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_TODO\": () => (/* binding */ ADD_TODO),\n/* harmony export */   \"CLEAR_TODO\": () => (/* binding */ CLEAR_TODO),\n/* harmony export */   \"REMOVE_TODO\": () => (/* binding */ REMOVE_TODO)\n/* harmony export */ });\nconst ADD_TODO = \"ADD\";\nconst REMOVE_TODO = \"REMOVE\";\nconst CLEAR_TODO = \"CLEAR\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL2FjdGlvbi9hY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsTUFBTUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QixNQUFNQyxVQUFVLEdBQUcsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGNrYXAtdG9kby13ZWIvLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL2FjdGlvbi9hY3Rpb25zLmpzPzEzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9UT0RPID0gXCJSRU1PVkVcIjtcclxuZXhwb3J0IGNvbnN0IENMRUFSX1RPRE8gPSBcIkNMRUFSXCI7XHJcbiJdLCJuYW1lcyI6WyJBRERfVE9ETyIsIlJFTU9WRV9UT0RPIiwiQ0xFQVJfVE9ETyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./appcommons/globalStore/action/actions.js\n");

/***/ }),

/***/ "./appcommons/globalStore/reducer/index.js":
/*!*************************************************!*\
  !*** ./appcommons/globalStore/reducer/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer_todoReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/todoReducer */ \"./appcommons/globalStore/reducer/todoReducer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    todoList: _reducer_todoReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3JlZHVjZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNNO0FBRTlDLGlFQUFlQSxzREFBZSxDQUFDO0lBQUVDLFFBQVE7Q0FBRSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY2thcC10b2RvLXdlYi8uL2FwcGNvbW1vbnMvZ2xvYmFsU3RvcmUvcmVkdWNlci9pbmRleC5qcz83OTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdG9kb0xpc3QgZnJvbSBcIi4uL3JlZHVjZXIvdG9kb1JlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7IHRvZG9MaXN0IH0pO1xyXG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwidG9kb0xpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./appcommons/globalStore/reducer/index.js\n");

/***/ }),

/***/ "./appcommons/globalStore/reducer/todoReducer.js":
/*!*******************************************************!*\
  !*** ./appcommons/globalStore/reducer/todoReducer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TODOLIST)\n/* harmony export */ });\n/* harmony import */ var _action_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/actions */ \"./appcommons/globalStore/action/actions.js\");\n\nconst Initial = {\n    \"744cdd12-dda0-4040-87a9-e9c2ae94b14f\": {\n        description: \"sample data\",\n        dueDate: \"29/04/2021 08:56:02\",\n        id: \"744cdd12-dda0-4040-87a9-e9c2ae94b14f\",\n        title: \"Task1\",\n        type: \"SUCCESS\",\n        status: \"ACTIVE\"\n    },\n    \"d902b2be-a77e-41c5-accb-d427df6afe60\": {\n        description: \"sample data2\",\n        dueDate: \"27/04/2021 08:56:02\",\n        id: \"d902b2be-a77e-41c5-accb-d427df6afe60\",\n        title: \"Task2\",\n        type: \"SUCCESS\",\n        status: \"COMPLETED\"\n    }\n};\nfunction TODOLIST(state = Initial, action) {\n    switch(action.type){\n        case _action_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case _action_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TODO:\n            delete state[action.payload];\n            return {\n                ...state\n            };\n        case _action_actions__WEBPACK_IMPORTED_MODULE_0__.CLEAR_TODO:\n            return {};\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3JlZHVjZXIvdG9kb1JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsT0FBTyxHQUFHO0lBQ2Qsc0NBQXNDLEVBQUU7UUFDdENDLFdBQVcsRUFBRSxhQUFhO1FBQzFCQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCQyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDQyxLQUFLLEVBQUUsT0FBTztRQUNkQyxJQUFJLEVBQUUsU0FBUztRQUNmQyxNQUFNLEVBQUUsUUFBUTtLQUNqQjtJQUNELHNDQUFzQyxFQUFFO1FBQ3RDTCxXQUFXLEVBQUUsY0FBYztRQUMzQkMsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QkMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQ0MsS0FBSyxFQUFFLE9BQU87UUFDZEMsSUFBSSxFQUFFLFNBQVM7UUFDZkMsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRjtBQUNjLFNBQVNDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHUixPQUFPLEVBQUVTLE1BQU0sRUFBRTtJQUN4RCxPQUFRQSxNQUFNLENBQUNKLElBQUk7UUFDakIsS0FBS04scURBQWdCO1lBQ25CLE9BQU87Z0JBQUUsR0FBR1MsS0FBSztnQkFBRSxHQUFHQyxNQUFNLENBQUNFLE9BQU87YUFBRSxDQUFDO1FBQ3pDLEtBQUtaLHdEQUFtQjtZQUN0QixPQUFPUyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUM7WUFDN0IsT0FBTztnQkFBRSxHQUFHSCxLQUFLO2FBQUUsQ0FBQztRQUN0QixLQUFLVCx1REFBa0I7WUFDckIsT0FBTyxFQUFFLENBQUM7UUFDWjtZQUNFLE9BQU9TLEtBQUssQ0FBQztLQUNoQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGNrYXAtdG9kby13ZWIvLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3JlZHVjZXIvdG9kb1JlZHVjZXIuanM/ZjU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb24vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgSW5pdGlhbCA9IHtcclxuICBcIjc0NGNkZDEyLWRkYTAtNDA0MC04N2E5LWU5YzJhZTk0YjE0ZlwiOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJzYW1wbGUgZGF0YVwiLFxyXG4gICAgZHVlRGF0ZTogXCIyOS8wNC8yMDIxIDA4OjU2OjAyXCIsXHJcbiAgICBpZDogXCI3NDRjZGQxMi1kZGEwLTQwNDAtODdhOS1lOWMyYWU5NGIxNGZcIixcclxuICAgIHRpdGxlOiBcIlRhc2sxXCIsXHJcbiAgICB0eXBlOiBcIlNVQ0NFU1NcIixcclxuICAgIHN0YXR1czogXCJBQ1RJVkVcIixcclxuICB9LFxyXG4gIFwiZDkwMmIyYmUtYTc3ZS00MWM1LWFjY2ItZDQyN2RmNmFmZTYwXCI6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcInNhbXBsZSBkYXRhMlwiLFxyXG4gICAgZHVlRGF0ZTogXCIyNy8wNC8yMDIxIDA4OjU2OjAyXCIsXHJcbiAgICBpZDogXCJkOTAyYjJiZS1hNzdlLTQxYzUtYWNjYi1kNDI3ZGY2YWZlNjBcIixcclxuICAgIHRpdGxlOiBcIlRhc2syXCIsXHJcbiAgICB0eXBlOiBcIlNVQ0NFU1NcIixcclxuICAgIHN0YXR1czogXCJDT01QTEVURURcIixcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUT0RPTElTVChzdGF0ZSA9IEluaXRpYWwsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9ucy5BRERfVE9ETzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIGFjdGlvbnMuUkVNT1ZFX1RPRE86XHJcbiAgICAgIGRlbGV0ZSBzdGF0ZVthY3Rpb24ucGF5bG9hZF07XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICBjYXNlIGFjdGlvbnMuQ0xFQVJfVE9ETzpcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYWN0aW9ucyIsIkluaXRpYWwiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJpZCIsInRpdGxlIiwidHlwZSIsInN0YXR1cyIsIlRPRE9MSVNUIiwic3RhdGUiLCJhY3Rpb24iLCJBRERfVE9ETyIsInBheWxvYWQiLCJSRU1PVkVfVE9ETyIsIkNMRUFSX1RPRE8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./appcommons/globalStore/reducer/todoReducer.js\n");

/***/ }),

/***/ "./appcommons/globalStore/store/index.js":
/*!***********************************************!*\
  !*** ./appcommons/globalStore/store/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ \"./appcommons/globalStore/reducer/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3N0b3JlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDQztBQUVyQyxpRUFBZUEsa0RBQVcsQ0FBQ0MsZ0RBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGNrYXAtdG9kby13ZWIvLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3N0b3JlL2luZGV4LmpzPzI1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRvZG9SZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh0b2RvUmVkdWNlcik7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInRvZG9SZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./appcommons/globalStore/store/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appcommons_globalStore_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appcommons/globalStore/store */ \"./appcommons/globalStore/store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _appcommons_globalStore_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/purushothaman.s/Documents/Try/React-GithubAction-Teraform/personal-todo-list/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/purushothaman.s/Documents/Try/React-GithubAction-Teraform/personal-todo-list/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDcUI7QUFDYjtBQUV2QyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSxxRUFBSztrQkFDcEIsNEVBQUNHLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDbkIsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rja2FwLXRvZG8td2ViLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9hcHBjb21tb25zL2dsb2JhbFN0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJzdG9yZSIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();