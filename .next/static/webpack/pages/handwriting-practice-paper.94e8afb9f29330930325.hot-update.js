webpackHotUpdate_N_E("pages/handwriting-practice-paper",{

/***/ "./src/components/HandwritingPractice/HandwritingPractice.tsx":
/*!********************************************************************!*\
  !*** ./src/components/HandwritingPractice/HandwritingPractice.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheet.module.css */ \"./src/components/HandwritingPractice/stylesheet.module.css\");\n/* harmony import */ var _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjaminread/Developer/homeedhelpers-fe-v2/src/components/HandwritingPractice/HandwritingPractice.tsx\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar HandwritingPractice = function HandwritingPractice() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('Edit me!'),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      message = _React$useState2[0],\n      useMessage = _React$useState2[1];\n\n  var font = 'KG Primary Dots';\n  var scale = 'large';\n  var textAlign = 'left';\n  var showLines = true;\n  var lines = [];\n\n  var linesList = function linesList() {\n    lines = message.split(\"\\n\").map(function (l) {\n      return l.trim();\n    });\n  };\n\n  var lineStyle = function lineStyle() {\n    return {\n      fontSize: scale === 'large' ? \"152px\" : \"40px\",\n      fontFamily: font,\n      lineHeight: scale === 'large' ? \"1.3\" : \"1.2\"\n    };\n  };\n\n  var printStyle = function printStyle() {\n    return {\n      textAlign: textAlign,\n      paddingTop: scale === 'large' ? \"40px\" : \"72px\"\n    };\n  };\n\n  var printHandler = function printHandler() {\n    if (true) {\n      window.print;\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Handwriting practice paper\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Make full-page custom handwriting worksheets in seconds!\"), __jsx(\"ol\", {\n    id: instructions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, \"Select a writing style: \", __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 45\n    }\n  }, \"Primary (d'nealian)\"), \" or \", __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 75\n    }\n  }, \"cursive\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"Type your handwriting worksheet content and test how you want it to appear\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Select your letter size\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"Click \", __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 27\n    }\n  }, \"Print\"), \" for a copy of your writing worksheet for immediate use\")), __jsx(\"p\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sorrynotresponsive,\n    \"data-nosnippet\": true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Sorry! You'll need to use a device with a larger screen for this to work.\"), __jsx(\"div\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.edit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"textarea\", {\n    value: message,\n    onChange: _s(function (e) {\n      _s();\n\n      return useMessage(e.currentTarget.value);\n    }, \"SelIv9G1N/0P+Ge5UbSRYXI028A=\", false, function () {\n      return [useMessage];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.font,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"fieldset\", {\n    className: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fieldset,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"dot\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, \"Font: \"), __jsx(\"select\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }, __jsx(\"option\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dot,\n    value: \"KG Primary Dots\",\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, \"Primary\"), __jsx(\"option\", {\n    value: \"Learning Curve Dashed\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, \"Dots lined Cursive\"))), __jsx(\"fieldset\", {\n    className: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fieldset,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"lines\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Show lines: \"), __jsx(\"input\", {\n    type: \"checkbox\",\n    checked: showLines,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  })), __jsx(\"fieldset\", {\n    className: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fieldset,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"align\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \"Align: \"), __jsx(\"select\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.align,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, __jsx(\"option\", {\n    value: \"left\",\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  }, \"Left\"), __jsx(\"option\", {\n    value: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 25\n    }\n  }, \"Center\"), __jsx(\"option\", {\n    value: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \"Right\"))), __jsx(\"fieldset\", {\n    className: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fieldset,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"scale\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }, \"Font Size\"), __jsx(\"select\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.scale,\n    value: scale,\n    onChange: printStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"option\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.large,\n    value: \"large\",\n    selected: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"Large\"), __jsx(\"option\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.small,\n    value: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  }, \"Small\"))), __jsx(\"fieldset\", {\n    className: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fieldset,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    onClick: printHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, \"Print\"))), __jsx(\"div\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.printarea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.printarea__header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }, \"Student name: ______________________\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, \"Date: ___________\"))), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"Frequently asked questions\"), __jsx(\"ol\", {\n    id: _stylesheet_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.instructions,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, \"Q1. What is this?\"), __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, \"This is a tool to help teachers and home educators give their students and children custom handwriting worksheets learn how to write.\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, \"Q2. How do I use it?\"), __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }, \"Enter the text you want your student or child to write into the text box provided. Click the \\\"print\\\" button, and your printer dialog will appear. We have configured the print version to contain an area for the student to write their name and the date on the printed sheet.\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }\n  }, \"Q2. Is there a charge for this service?\"), __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, \"No. This service is provided free of charge. We hope to make it pay for itself by the use of advertising in the future.\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, \"Q3. How do I contact you?\"), __jsx(\"i\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, \"You can email homeedhelpers@gmail.com to send feature suggestions and bug reports. We will read your email but cannot guarantee a response.\"))));\n};\n\n_s2(HandwritingPractice, \"+oOYrXywvPJXWStTVrksdgMKA4g=\");\n\n_c = HandwritingPractice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HandwritingPractice);\n\nvar _c;\n\n$RefreshReg$(_c, \"HandwritingPractice\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGFuZHdyaXRpbmdQcmFjdGljZS9IYW5kd3JpdGluZ1ByYWN0aWNlLnRzeD9iMmExIl0sIm5hbWVzIjpbIkhhbmR3cml0aW5nUHJhY3RpY2UiLCJSZWFjdCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInVzZU1lc3NhZ2UiLCJmb250Iiwic2NhbGUiLCJ0ZXh0QWxpZ24iLCJzaG93TGluZXMiLCJsaW5lcyIsImxpbmVzTGlzdCIsInNwbGl0IiwibWFwIiwibCIsInRyaW0iLCJsaW5lU3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0IiwicHJpbnRTdHlsZSIsInBhZGRpbmdUb3AiLCJwcmludEhhbmRsZXIiLCJ3aW5kb3ciLCJwcmludCIsImluc3RydWN0aW9ucyIsInN0eWxlcyIsInNvcnJ5bm90cmVzcG9uc2l2ZSIsImVkaXQiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZmllbGRzZXQiLCJkb3QiLCJhbGlnbiIsImxhcmdlIiwic21hbGwiLCJwcmludGFyZWEiLCJwcmludGFyZWFfX2hlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsd0JBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFmLENBRkE7QUFBQTtBQUFBLE1BRXZCQyxPQUZ1QjtBQUFBLE1BRWRDLFVBRmM7O0FBRzlCLE1BQU1DLElBQUksR0FBRyxpQkFBYjtBQUNBLE1BQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLElBQWxCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUMxQkQsU0FBSyxHQUFHTixPQUFPLENBQ1ZR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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNklBRkosQ0FESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwUkFGSixDQUxKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtIQUZKLENBVEosRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUpBRkosQ0FiSixDQXREQSxDQURKO0FBMkVILENBM0dEOztJQUFNeEIsbUI7O0tBQUFBLG1CO0FBNkdTQSxrRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hhbmR3cml0aW5nUHJhY3RpY2UvSGFuZHdyaXRpbmdQcmFjdGljZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzaGVldC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBIYW5kd3JpdGluZ1ByYWN0aWNlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW21lc3NhZ2UsIHVzZU1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJ0VkaXQgbWUhJylcbiAgICBjb25zdCBmb250ID0gJ0tHIFByaW1hcnkgRG90cydcbiAgICBjb25zdCBzY2FsZSA9ICdsYXJnZSdcbiAgICBjb25zdCB0ZXh0QWxpZ24gPSAnbGVmdCdcbiAgICBjb25zdCBzaG93TGluZXMgPSB0cnVlXG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBcbiAgICBjb25zdCBsaW5lc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpbmVzID0gbWVzc2FnZVxuICAgICAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgICAgICAubWFwKGwgPT4gbC50cmltKCkpXG4gICAgfVxuICAgIGNvbnN0IGxpbmVTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBzY2FsZSA9PT0gJ2xhcmdlJyA/ICBgMTUycHhgIDogYDQwcHhgLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZm9udCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNjYWxlID09PSAnbGFyZ2UnID8gIGAxLjNgIDogYDEuMmAsXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJpbnRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogdGV4dEFsaWduLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogc2NhbGUgPT09ICdsYXJnZScgPyBgNDBweGAgOiBgNzJweGBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwcmludEhhbmRsZXI6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4gfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wcmludFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+SGFuZHdyaXRpbmcgcHJhY3RpY2UgcGFwZXI8L2gxPlxuICAgICAgICAgICAgPHA+TWFrZSBmdWxsLXBhZ2UgY3VzdG9tIGhhbmR3cml0aW5nIHdvcmtzaGVldHMgaW4gc2Vjb25kcyE8L3A+XG4gICAgICAgICAgICA8b2wgaWQ9e2luc3RydWN0aW9uc30+XG4gICAgICAgICAgICAgICAgPGxpPlNlbGVjdCBhIHdyaXRpbmcgc3R5bGU6IDxpPlByaW1hcnkgKGQnbmVhbGlhbik8L2k+IG9yIDxpPmN1cnNpdmU8L2k+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+VHlwZSB5b3VyIGhhbmR3cml0aW5nIHdvcmtzaGVldCBjb250ZW50IGFuZCB0ZXN0IGhvdyB5b3Ugd2FudCBpdCB0byBhcHBlYXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TZWxlY3QgeW91ciBsZXR0ZXIgc2l6ZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkNsaWNrIDxpPlByaW50PC9pPiBmb3IgYSBjb3B5IG9mIHlvdXIgd3JpdGluZyB3b3Jrc2hlZXQgZm9yIGltbWVkaWF0ZSB1c2VcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDxwIGlkPXtzdHlsZXMuc29ycnlub3RyZXNwb25zaXZlfSBkYXRhLW5vc25pcHBldD5Tb3JyeSEgWW91J2xsIG5lZWQgdG8gdXNlIGEgZGV2aWNlIHdpdGggYSBsYXJnZXIgc2NyZWVuIGZvciB0aGlzIHRvIHdvcmsuPC9wPlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmVkaXR9PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2UgPT4gdXNlTWVzc2FnZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuZm9udH0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb3RcIj5Gb250OiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGlkPXtzdHlsZXMuZG90fSB2YWx1ZT1cIktHIFByaW1hcnkgRG90c1wiIHNlbGVjdGVkPlByaW1hcnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxlYXJuaW5nIEN1cnZlIERhc2hlZFwiID5Eb3RzIGxpbmVkIEN1cnNpdmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHNldH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGluZXNcIj5TaG93IGxpbmVzOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd0xpbmVzfSAvPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbGlnblwiPkFsaWduOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPXtzdHlsZXMuYWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZnRcIiBzZWxlY3RlZD5MZWZ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+Q2VudGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHNldH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbGVcIj5Gb250IFNpemU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPXtzdHlsZXMuc2NhbGV9IHZhbHVlPXtzY2FsZX0gb25DaGFuZ2U9e3ByaW50U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBpZD17c3R5bGVzLmxhcmdlfSB2YWx1ZT1cImxhcmdlXCIgc2VsZWN0ZWQ+TGFyZ2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gaWQ9e3N0eWxlcy5zbWFsbH0gdmFsdWU9XCJzbWFsbFwiPlNtYWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmludEhhbmRsZXJ9PlByaW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnByaW50YXJlYX0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9e3N0eWxlcy5wcmludGFyZWFfX2hlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxwPlN0dWRlbnQgbmFtZTogX19fX19fX19fX19fX19fX19fX19fXzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZTogX19fX19fX19fX188L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgIDxoMj5GcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9uczwvaDI+XG4gICAgICAgIDxvbCBpZD17c3R5bGVzLmluc3RydWN0aW9uc30+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5RMS4gV2hhdCBpcyB0aGlzPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxpPlRoaXMgaXMgYSB0b29sIHRvIGhlbHAgdGVhY2hlcnMgYW5kIGhvbWUgZWR1Y2F0b3JzIGdpdmUgdGhlaXIgc3R1ZGVudHMgYW5kIGNoaWxkcmVuIGN1c3RvbSBoYW5kd3JpdGluZyB3b3Jrc2hlZXRzIGxlYXJuIGhvdyB0byB3cml0ZS48L2k+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UTIuIEhvdyBkbyBJIHVzZSBpdD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8aT5FbnRlciB0aGUgdGV4dCB5b3Ugd2FudCB5b3VyIHN0dWRlbnQgb3IgY2hpbGQgdG8gd3JpdGUgaW50byB0aGUgdGV4dCBib3ggcHJvdmlkZWQuIENsaWNrIHRoZSBcInByaW50XCIgYnV0dG9uLCBhbmQgeW91ciBwcmludGVyIGRpYWxvZyB3aWxsIGFwcGVhci4gV2UgaGF2ZSBjb25maWd1cmVkIHRoZSBwcmludCB2ZXJzaW9uIHRvIGNvbnRhaW4gYW4gYXJlYSBmb3IgdGhlIHN0dWRlbnQgdG8gd3JpdGUgdGhlaXIgbmFtZSBhbmQgdGhlIGRhdGUgb24gdGhlIHByaW50ZWQgc2hlZXQuPC9pPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlEyLiBJcyB0aGVyZSBhIGNoYXJnZSBmb3IgdGhpcyBzZXJ2aWNlPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxpPk5vLiBUaGlzIHNlcnZpY2UgaXMgcHJvdmlkZWQgZnJlZSBvZiBjaGFyZ2UuIFdlIGhvcGUgdG8gbWFrZSBpdCBwYXkgZm9yIGl0c2VsZiBieSB0aGUgdXNlIG9mIGFkdmVydGlzaW5nIGluIHRoZSBmdXR1cmUuPC9pPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlEzLiBIb3cgZG8gSSBjb250YWN0IHlvdT88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8aT5Zb3UgY2FuIGVtYWlsIGhvbWVlZGhlbHBlcnNAZ21haWwuY29tIHRvIHNlbmQgZmVhdHVyZSBzdWdnZXN0aW9ucyBhbmQgYnVnIHJlcG9ydHMuIFdlIHdpbGwgcmVhZCB5b3VyIGVtYWlsIGJ1dCBjYW5ub3QgZ3VhcmFudGVlIGEgcmVzcG9uc2UuPC9pPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYW5kd3JpdGluZ1ByYWN0aWNlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HandwritingPractice/HandwritingPractice.tsx\n");

/***/ })

})