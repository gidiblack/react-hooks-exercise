webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/site.css */ "./public/static/site.css");
/* harmony import */ var _public_static_site_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_site_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\GIDEON\\Desktop\\Web Projects\\React\\conference\\src\\Speakers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Speakers = function Speakers(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  // useState calls for checkboxes and loadin
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      speakingSaturday = _useState[0],
      setSpeakingSaturday = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      speakingSunday = _useState2[0],
      setSpeakingSunday = _useState2[1]; // reducer function that takes 2 parameters - previous state and action - then returns a new state


  function SpeakersReducer(state, action) {
    // function to update favorite speaker button
    function updateFavorite(favoriteValue) {
      return state.map(function (item, index) {
        if (item.id === action.sessionId) {
          item.favorite = favoriteValue;
          return item;
        }

        return item;
      });
    } // switch statement based on parsed in action type - if action type in "case" returns true, set action.data


    switch (action.type) {
      case "setSpeakerList":
        {
          return action.data;
        }

      case "favorite":
        {
          return updateFavorite(true);
        }

      case "unfavorite":
        {
          return updateFavorite(false);
        }
      //

      default:
        return state;
    }
  } // "dispatch" is just a name that can be anything just so a second parameter (method) can be parsed into useReducer hook


  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(SpeakersReducer, []),
      speakerList = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1]; // reference shared context with useContext hook


  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_8__["configContext"]); // useEffect call that simulates calling an outside service with a 1s delay then filters and sorts data on completion

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      setIsLoading(false);
      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_6__["default"].filter(function (_ref2) {
        var sat = _ref2.sat,
            sun = _ref2.sun;
        return speakingSaturday && sat || speakingSunday && sun;
      }); // call dispatch to set speaker list and data to be used by reducer above

      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter
      });
    });
    return function () {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  }; // filter speaker list based on wether they're speaking sat or sun, then sort them by firstname
  // wrap with useMemo to create a cache of the speaker data -- useMemo take in a function and an array -- the array is a dependency which means that if anything changes in the data the cache is dumped and run again


  var newSpeakerList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return speakerList.filter(function (_ref3) {
      var sat = _ref3.sat,
          sun = _ref3.sun;
      return speakingSaturday && sat || speakingSunday && sun;
    }).sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }

      if (a.firstName > b.firstName) {
        return 1;
      }

      return 0;
    });
  }, [speakingSaturday, speakingSunday, speakerList]); // parse the filtered list constant into this conditional because useMemo can't be used with conditionals 

  var speakerListFiltered = isLoading ? [] : newSpeakerList;

  var handleChangeSunday = function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  }; // call useCallback to memoize(cache) this function so that it doesn't rerender all components on every change


  var heartFavoriteHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e, favoriteValue) {
    e.preventDefault();
    var sessionId = parseInt(e.target.attributes['data-sessionid'].value); // call dispatch to set favorite value on reducer

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId: sessionId
    });
  }, []);
  if (isLoading) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Loading...");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "btn-toolbar margintopbottom5 checkbox-bigger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, context.showSpeakerSpeakingDays === false ? null : __jsx("div", {
    className: "hide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSaturday,
    checked: speakingSaturday,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }), "Saturday Speakers")), __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSunday,
    checked: speakingSunday,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }), "Sunday Speakers")))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-deck",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, speakerListFiltered.map(function (_ref4) {
    var id = _ref4.id,
        firstName = _ref4.firstName,
        lastName = _ref4.lastName,
        bio = _ref4.bio,
        favorite = _ref4.favorite;
    return __jsx(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: id,
      id: id,
      favorite: favorite,
      onHeartFavoriteHandler: heartFavoriteHandler,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    });
  })))));
};

_s(Speakers, "r+Cg7QAop40uUP/SazG8DGbThR0=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJTcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwic2Vzc2lvbklkIiwiZmF2b3JpdGUiLCJ0eXBlIiwiZGF0YSIsInVzZVJlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJsYXN0TmFtZSIsImJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcs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LGtCQUhaO0FBSUUsV0FBTyxFQUFFM0MsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsb0JBREYsQ0FaRixDQUhKLENBREYsRUE4QkU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cwQyxtQkFBbUIsQ0FBQ25DLEdBQXBCLENBQ0MsaUJBQWdEO0FBQUEsUUFBN0NHLEVBQTZDLFNBQTdDQSxFQUE2QztBQUFBLFFBQXpDK0IsU0FBeUMsU0FBekNBLFNBQXlDO0FBQUEsUUFBOUJZLFFBQThCLFNBQTlCQSxRQUE4QjtBQUFBLFFBQXBCQyxHQUFvQixTQUFwQkEsR0FBb0I7QUFBQSxRQUFmMUMsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLFdBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUcsRUFBRUYsRUFEUDtBQUVFLFFBQUUsRUFBRUEsRUFGTjtBQUdFLGNBQVEsRUFBRUUsUUFIWjtBQUlFLDRCQUFzQixFQUFFZ0Msb0JBSjFCO0FBS0UsZUFBUyxFQUFFSCxTQUxiO0FBTUUsY0FBUSxFQUFFWSxRQU5aO0FBT0UsU0FBRyxFQUFFQyxHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBYkYsQ0FESCxDQURGLENBOUJGLENBSEYsQ0FERjtBQXdERCxDQXBLRDs7R0FBTTFELFE7O0tBQUFBLFE7QUFzS1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmFiYmI2MzMwN2JjMzdjZDRmZjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zdGF0aWMvc2l0ZS5jc3NcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBjb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICAvLyB1c2VTdGF0ZSBjYWxscyBmb3IgY2hlY2tib3hlcyBhbmQgbG9hZGluXG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCB0YWtlcyAyIHBhcmFtZXRlcnMgLSBwcmV2aW91cyBzdGF0ZSBhbmQgYWN0aW9uIC0gdGhlbiByZXR1cm5zIGEgbmV3IHN0YXRlXG4gIGZ1bmN0aW9uIFNwZWFrZXJzUmVkdWNlciAoc3RhdGUsIGFjdGlvbil7XG4gICAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIGZhdm9yaXRlIHNwZWFrZXIgYnV0dG9uXG4gICAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSl7XG4gICAgICByZXR1cm4gc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnNlc3Npb25JZCl7XG4gICAgICAgICAgaXRlbS5mYXZvcml0ZSA9IGZhdm9yaXRlVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzd2l0Y2ggc3RhdGVtZW50IGJhc2VkIG9uIHBhcnNlZCBpbiBhY3Rpb24gdHlwZSAtIGlmIGFjdGlvbiB0eXBlIGluIFwiY2FzZVwiIHJldHVybnMgdHJ1ZSwgc2V0IGFjdGlvbi5kYXRhXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCIgOiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJmYXZvcml0ZVwiIDoge1xuICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3JpdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgICBjYXNlIFwidW5mYXZvcml0ZVwiIDoge1xuICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3JpdGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbiAgLy8gXCJkaXNwYXRjaFwiIGlzIGp1c3QgYSBuYW1lIHRoYXQgY2FuIGJlIGFueXRoaW5nIGp1c3Qgc28gYSBzZWNvbmQgcGFyYW1ldGVyIChtZXRob2QpIGNhbiBiZSBwYXJzZWQgaW50byB1c2VSZWR1Y2VyIGhvb2tcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFNwZWFrZXJzUmVkdWNlciwgW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gcmVmZXJlbmNlIHNoYXJlZCBjb250ZXh0IHdpdGggdXNlQ29udGV4dCBob29rXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KGNvbmZpZ0NvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdCBjYWxsIHRoYXQgc2ltdWxhdGVzIGNhbGxpbmcgYW4gb3V0c2lkZSBzZXJ2aWNlIHdpdGggYSAxcyBkZWxheSB0aGVuIGZpbHRlcnMgYW5kIHNvcnRzIGRhdGEgb24gY29tcGxldGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XG4gICAgICB9KTtcbiAgICAgIC8vIGNhbGwgZGlzcGF0Y2ggdG8gc2V0IHNwZWFrZXIgbGlzdCBhbmQgZGF0YSB0byBiZSB1c2VkIGJ5IHJlZHVjZXIgYWJvdmVcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxuICAgICAgICBkYXRhOiBzcGVha2VyTGlzdFNlcnZlckZpbHRlclxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBbc3BlYWtpbmdTdW5kYXksIHNwZWFraW5nU2F0dXJkYXldKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcbiAgfTtcblxuICAvLyBmaWx0ZXIgc3BlYWtlciBsaXN0IGJhc2VkIG9uIHdldGhlciB0aGV5J3JlIHNwZWFraW5nIHNhdCBvciBzdW4sIHRoZW4gc29ydCB0aGVtIGJ5IGZpcnN0bmFtZVxuICAvLyB3cmFwIHdpdGggdXNlTWVtbyB0byBjcmVhdGUgYSBjYWNoZSBvZiB0aGUgc3BlYWtlciBkYXRhIC0tIHVzZU1lbW8gdGFrZSBpbiBhIGZ1bmN0aW9uIGFuZCBhbiBhcnJheSAtLSB0aGUgYXJyYXkgaXMgYSBkZXBlbmRlbmN5IHdoaWNoIG1lYW5zIHRoYXQgaWYgYW55dGhpbmcgY2hhbmdlcyBpbiB0aGUgZGF0YSB0aGUgY2FjaGUgaXMgZHVtcGVkIGFuZCBydW4gYWdhaW5cbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0XG4gIC5maWx0ZXIoXG4gICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gIClcbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdF0pO1xuXG4gIC8vIHBhcnNlIHRoZSBmaWx0ZXJlZCBsaXN0IGNvbnN0YW50IGludG8gdGhpcyBjb25kaXRpb25hbCBiZWNhdXNlIHVzZU1lbW8gY2FuJ3QgYmUgdXNlZCB3aXRoIGNvbmRpdGlvbmFscyBcbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IG5ld1NwZWFrZXJMaXN0O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuXG4gIC8vIGNhbGwgdXNlQ2FsbGJhY2sgdG8gbWVtb2l6ZShjYWNoZSkgdGhpcyBmdW5jdGlvbiBzbyB0aGF0IGl0IGRvZXNuJ3QgcmVyZW5kZXIgYWxsIGNvbXBvbmVudHMgb24gZXZlcnkgY2hhbmdlXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XG4gICAgLy8gY2FsbCBkaXNwYXRjaCB0byBzZXQgZmF2b3JpdGUgdmFsdWUgb24gcmVkdWNlclxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyBcImZhdm9yaXRlXCIgOiBcInVuZmF2b3JpdGVcIixcbiAgICAgIHNlc3Npb25JZFxuICAgIH0pO1xuXG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyXCI+XG4gICAgICAgICAgey8qIGNoZWNrIGNvbnRleHQgb2Ygc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgYmVmb3JlIGRpc3BsYXlpbmcgdGhlIGNoZWNrYm94ZXMgKi99XG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=