module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/emailvalidating.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/emailvalidating.js":
/*!**********************************!*\
  !*** ./pages/emailvalidating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/EmailValidatingForm */ "./src/EmailValidatingForm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/site.css */ "./public/static/site.css");
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_site_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\GIDEON\\Desktop\\Web Projects\\React\\conference\\pages\\emailvalidating.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function emailvalidating() {
  return __jsx(_src_EmailValidatingForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (emailvalidating);

/***/ }),

/***/ "./public/static/site.css":
/*!********************************!*\
  !*** ./public/static/site.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/EmailValidatingForm.js":
/*!************************************!*\
  !*** ./src/EmailValidatingForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/site.css */ "./public/static/site.css");
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_site_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useEmailValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEmailValidation */ "./src/useEmailValidation.js");
var _jsxFileName = "C:\\Users\\GIDEON\\Desktop\\Web Projects\\React\\conference\\src\\EmailValidatingForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function EmailValidatingForm() {
  // call custom hook by setting the object with the values to the custom hook parsing in the parameter it depends on
  const {
    count,
    email,
    setEmail,
    emailValid
  } = Object(_useEmailValidation__WEBPACK_IMPORTED_MODULE_3__["default"])(30);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("input", {
    onChange: e => {
      setEmail(e.target.value);
    },
    disabled: count <= 0,
    value: email,
    placeholder: "Enter Email",
    type: "email",
    name: "email",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), "\xA0\xA0\xA0", __jsx("button", {
    disabled: !emailValid || count <= 0,
    onClick: () => {
      setCount(0);
      alert(`button clicked with email ${email}`);
    },
    className: "btn-lg",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "PRESS ME!"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, count > 0 ? `You Have ${count} Seconds To Enter Your Email` : 'Email Entered or Time Expired'))));
}

/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

/***/ }),

/***/ "./src/useEmailValidation.js":
/*!***********************************!*\
  !*** ./src/useEmailValidation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInterval */ "./src/useInterval.js");

 // custom hook to hold 4 react hook calls

const useEmailValidation = maxSeconds => {
  // regex to validate email
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }; // email valid useState hook


  const {
    0: emailValid,
    1: setEmailValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // reducer to set state if email is valid or not

  const emailReducer = (state, action) => {
    const isValidEmail = validateEmail(action);
    setEmailValid(isValidEmail);
    return action;
  }; // useReducer hook call


  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(emailReducer, '');
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(maxSeconds); // custom setInterval method by react team to setCount

  Object(_useInterval__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    setCount(count - 1);
  }, count > 0 ? 1000 : null); // return the values of the hook calls made inside this custom functional hook 

  return {
    count,
    email,
    setEmail,
    emailValid
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useEmailValidation);

/***/ }),

/***/ "./src/useInterval.js":
/*!****************************!*\
  !*** ./src/useInterval.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/


const useInterval = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Remember the latest function.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZW1haWx2YWxpZGF0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9FbWFpbFZhbGlkYXRpbmdGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VFbWFpbFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZUludGVydmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZW1haWx2YWxpZGF0aW5nIiwiRW1haWxWYWxpZGF0aW5nRm9ybSIsImNvdW50IiwiZW1haWwiLCJzZXRFbWFpbCIsImVtYWlsVmFsaWQiLCJ1c2VFbWFpbFZhbGlkYXRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRDb3VudCIsImFsZXJ0IiwibWF4U2Vjb25kcyIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJzZXRFbWFpbFZhbGlkIiwidXNlU3RhdGUiLCJlbWFpbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImlzVmFsaWRFbWFpbCIsInVzZVJlZHVjZXIiLCJ1c2VJbnRlcnZhbCIsImNhbGxiYWNrIiwiZGVsYXkiLCJzYXZlZENhbGxiYWNrIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRpY2siLCJpZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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YUFBYSxDQUFDRixFQUFELENBQTFCO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ04sS0FBRCxDQVJNLENBQVQ7QUFTRCxDQWxCRDs7QUFtQmVGLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDdEJBLGtDIiwiZmlsZSI6InBhZ2VzL2VtYWlsdmFsaWRhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZW1haWx2YWxpZGF0aW5nLmpzXCIpO1xuIiwiaW1wb3J0IEVtYWlsVmFsaWRhdGluZ0Zvcm0gZnJvbSAnLi4vc3JjL0VtYWlsVmFsaWRhdGluZ0Zvcm0nO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc3RhdGljL3NpdGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGVtYWlsdmFsaWRhdGluZygpIHtcbiAgcmV0dXJuIDxFbWFpbFZhbGlkYXRpbmdGb3JtIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbWFpbHZhbGlkYXRpbmc7XG4iLCJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL3N0YXRpYy9zaXRlLmNzc1wiO1xuaW1wb3J0IHVzZUVtYWlsVmFsaWRhdGlvbiBmcm9tIFwiLi91c2VFbWFpbFZhbGlkYXRpb25cIjtcblxuZnVuY3Rpb24gRW1haWxWYWxpZGF0aW5nRm9ybSgpIHtcbiAgLy8gY2FsbCBjdXN0b20gaG9vayBieSBzZXR0aW5nIHRoZSBvYmplY3Qgd2l0aCB0aGUgdmFsdWVzIHRvIHRoZSBjdXN0b20gaG9vayBwYXJzaW5nIGluIHRoZSBwYXJhbWV0ZXIgaXQgZGVwZW5kcyBvblxuICBjb25zdCB7IGNvdW50LCBlbWFpbCwgc2V0RW1haWwsIGVtYWlsVmFsaWQgfSA9IHVzZUVtYWlsVmFsaWRhdGlvbigzMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2NvdW50IDw9IDB9XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWxWYWxpZCB8fCBjb3VudCA8PSAwfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb3VudCgwKTtcbiAgICAgICAgICAgICAgYWxlcnQoYGJ1dHRvbiBjbGlja2VkIHdpdGggZW1haWwgJHtlbWFpbH1gKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGdcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUFJFU1MgTUUhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjb3VudCA+IDBcbiAgICAgICAgICAgICAgPyBgWW91IEhhdmUgJHtjb3VudH0gU2Vjb25kcyBUbyBFbnRlciBZb3VyIEVtYWlsYFxuICAgICAgICAgICAgICA6ICdFbWFpbCBFbnRlcmVkIG9yIFRpbWUgRXhwaXJlZCd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBFbWFpbFZhbGlkYXRpbmdGb3JtO1xuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICcuL3VzZUludGVydmFsJztcclxuLy8gY3VzdG9tIGhvb2sgdG8gaG9sZCA0IHJlYWN0IGhvb2sgY2FsbHNcclxuY29uc3QgdXNlRW1haWxWYWxpZGF0aW9uID0gKG1heFNlY29uZHMpID0+IHtcclxuICAgIC8vIHJlZ2V4IHRvIHZhbGlkYXRlIGVtYWlsXHJcbiAgICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICB9O1xyXG4gICAgLy8gZW1haWwgdmFsaWQgdXNlU3RhdGUgaG9va1xyXG4gICAgY29uc3QgW2VtYWlsVmFsaWQsIHNldEVtYWlsVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gcmVkdWNlciB0byBzZXQgc3RhdGUgaWYgZW1haWwgaXMgdmFsaWQgb3Igbm90XHJcbiAgICBjb25zdCBlbWFpbFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWRFbWFpbCA9IHZhbGlkYXRlRW1haWwoYWN0aW9uKTtcclxuICAgICAgICBzZXRFbWFpbFZhbGlkKGlzVmFsaWRFbWFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH07XHJcbiAgICAvLyB1c2VSZWR1Y2VyIGhvb2sgY2FsbFxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VSZWR1Y2VyKGVtYWlsUmVkdWNlciwgJycpO1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShtYXhTZWNvbmRzKTtcclxuICAgIC8vIGN1c3RvbSBzZXRJbnRlcnZhbCBtZXRob2QgYnkgcmVhY3QgdGVhbSB0byBzZXRDb3VudFxyXG4gICAgdXNlSW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50KGNvdW50IC0gMSk7XHJcbiAgICB9LCBjb3VudCA+IDAgPyAxMDAwIDogbnVsbCk7XHJcbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlcyBvZiB0aGUgaG9vayBjYWxscyBtYWRlIGluc2lkZSB0aGlzIGN1c3RvbSBmdW5jdGlvbmFsIGhvb2sgXHJcbiAgICByZXR1cm4geyBjb3VudCwgZW1haWwsIHNldEVtYWlsLCBlbWFpbFZhbGlkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVtYWlsVmFsaWRhdGlvbjsiLCIvLyBodHRwczovL292ZXJyZWFjdGVkLmlvL21ha2luZy1zZXRpbnRlcnZhbC1kZWNsYXJhdGl2ZS13aXRoLXJlYWN0LWhvb2tzL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZUludGVydmFsID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBjb25zdCBzYXZlZENhbGxiYWNrID0gdXNlUmVmKCk7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBmdW5jdGlvbi5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgfSwgW2NhbGxiYWNrXSk7XG5cbiAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XG4gICAgfVxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwodGljaywgZGVsYXkpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgfSwgW2RlbGF5XSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJ2YWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9