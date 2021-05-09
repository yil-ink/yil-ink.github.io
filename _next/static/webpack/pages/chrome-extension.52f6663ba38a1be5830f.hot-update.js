webpackHotUpdate_N_E("pages/chrome-extension",{

/***/ "./pages/chrome-extension/index.tsx":
/*!******************************************!*\
  !*** ./pages/chrome-extension/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Master */ "./components/Master/index.tsx");
/* harmony import */ var _components_HowTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HowTo */ "./components/HowTo/index.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

var _jsxFileName = "C:\\Startup\\K8S\\fewbox-web-link\\pages\\chrome-extension\\index.tsx";




function Todo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Master__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HowTo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "Label.InstallChromeExtensionTitle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 23
      }, this),
      subTitle: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "Label.InstallChromeExtensionSubTitle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 94
      }, this),
      steps: [{
        screenWidth: 500,
        screenHeight: 400,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "Label.InstallChromeExtensionStep1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 30
        }, this),
        downloadUrl: '/download/yil.ink-chrome-extension.zip'
      }, {
        screenWidth: 500,
        screenHeight: 400,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "Label.InstallChromeExtensionStep2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 30
        }, this)
      }, {
        //screenshotUrl: '/images/chrome-extensions.png',
        screenshotUrl: '/images/hero.png',
        screenWidth: 500,
        screenHeight: 400,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "Label.InstallChromeExtensionStep3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 30
        }, this)
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 12
  }, this);
}
_c = Todo;
;

var _c;

$RefreshReg$(_c, "Todo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hyb21lLWV4dGVuc2lvbi9pbmRleC50c3giXSwibmFtZXMiOlsiVG9kbyIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJkb3dubG9hZFVybCIsInNjcmVlbnNob3RVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUMzQixzQkFBTyxxRUFBQywwREFBRDtBQUFBLDJCQUNILHFFQUFDLHlEQUFEO0FBQU8sV0FBSyxlQUFFLHFFQUFDLDJEQUFEO0FBQWtCLFVBQUUsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWQ7QUFBMkUsY0FBUSxlQUFFLHFFQUFDLDJEQUFEO0FBQWtCLFVBQUUsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXJGO0FBQ0ksV0FBSyxFQUFFLENBQUM7QUFDSkMsbUJBQVcsRUFBRSxHQURUO0FBRUpDLG9CQUFZLEVBQUUsR0FGVjtBQUdKQyxtQkFBVyxlQUFFLHFFQUFDLDJEQUFEO0FBQWtCLFlBQUUsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhUO0FBSUpDLG1CQUFXLEVBQUU7QUFKVCxPQUFELEVBTVA7QUFDSUgsbUJBQVcsRUFBRSxHQURqQjtBQUVJQyxvQkFBWSxFQUFFLEdBRmxCO0FBR0lDLG1CQUFXLGVBQUUscUVBQUMsMkRBQUQ7QUFBa0IsWUFBRSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIakIsT0FOTyxFQVdQO0FBQ0k7QUFDQUUscUJBQWEsRUFBRSxrQkFGbkI7QUFHSUosbUJBQVcsRUFBRSxHQUhqQjtBQUlJQyxvQkFBWSxFQUFFLEdBSmxCO0FBS0lDLG1CQUFXLGVBQUUscUVBQUMsMkRBQUQ7QUFBa0IsWUFBRSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMakIsT0FYTztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFxQkg7S0F0QnVCSCxJO0FBc0J2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaHJvbWUtZXh0ZW5zaW9uLjUyZjY2NjNiYTM4YTFiZTU4MzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXN0ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFzdGVyXCI7XHJcbmltcG9ydCBIb3dUbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvd1RvJztcclxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKCkge1xyXG4gICAgcmV0dXJuIDxNYXN0ZXI+XHJcbiAgICAgICAgPEhvd1RvIHRpdGxlPXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIkxhYmVsLkluc3RhbGxDaHJvbWVFeHRlbnNpb25UaXRsZVwiIC8+fSBzdWJUaXRsZT17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJMYWJlbC5JbnN0YWxsQ2hyb21lRXh0ZW5zaW9uU3ViVGl0bGVcIiAvPn1cclxuICAgICAgICAgICAgc3RlcHM9e1t7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW5XaWR0aDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuSGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJMYWJlbC5JbnN0YWxsQ2hyb21lRXh0ZW5zaW9uU3RlcDFcIiAvPixcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkVXJsOiAnL2Rvd25sb2FkL3lpbC5pbmstY2hyb21lLWV4dGVuc2lvbi56aXAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcmVlbldpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5IZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIkxhYmVsLkluc3RhbGxDaHJvbWVFeHRlbnNpb25TdGVwMlwiIC8+XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vc2NyZWVuc2hvdFVybDogJy9pbWFnZXMvY2hyb21lLWV4dGVuc2lvbnMucG5nJyxcclxuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RVcmw6ICcvaW1hZ2VzL2hlcm8ucG5nJyxcclxuICAgICAgICAgICAgICAgIHNjcmVlbldpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5IZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIkxhYmVsLkluc3RhbGxDaHJvbWVFeHRlbnNpb25TdGVwM1wiIC8+XHJcbiAgICAgICAgICAgIH1dfSAvPlxyXG4gICAgPC9NYXN0ZXI+XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==