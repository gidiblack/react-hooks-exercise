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

  // useState calls for checkboxes and loading
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJTcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwic2Vzc2lvbklkIiwiZmF2b3JpdGUiLCJ0eXBlIiwiZGF0YSIsInVzZVJlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJsYXN0TmFtZSIsImJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcs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LGtCQUhaO0FBSUUsV0FBTyxFQUFFM0MsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsb0JBREYsQ0FaRixDQUhKLENBREYsRUE4QkU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cwQyxtQkFBbUIsQ0FBQ25DLEdBQXBCLENBQ0MsaUJBQWdEO0FBQUEsUUFBN0NHLEVBQTZDLFNBQTdDQSxFQUE2QztBQUFBLFFBQXpDK0IsU0FBeUMsU0FBekNBLFNBQXlDO0FBQUEsUUFBOUJZLFFBQThCLFNBQTlCQSxRQUE4QjtBQUFBLFFBQXBCQyxHQUFvQixTQUFwQkEsR0FBb0I7QUFBQSxRQUFmMUMsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLFdBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUcsRUFBRUYsRUFEUDtBQUVFLFFBQUUsRUFBRUEsRUFGTjtBQUdFLGNBQVEsRUFBRUUsUUFIWjtBQUlFLDRCQUFzQixFQUFFZ0Msb0JBSjFCO0FBS0UsZUFBUyxFQUFFSCxTQUxiO0FBTUUsY0FBUSxFQUFFWSxRQU5aO0FBT0UsU0FBRyxFQUFFQyxHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBYkYsQ0FESCxDQURGLENBOUJGLENBSEYsQ0FERjtBQXdERCxDQXBLRDs7R0FBTTFELFE7O0tBQUFBLFE7QUFzS1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmNhODU3YTgzZDRlN2Q3NGQwYmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zdGF0aWMvc2l0ZS5jc3NcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBjb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICAvLyB1c2VTdGF0ZSBjYWxscyBmb3IgY2hlY2tib3hlcyBhbmQgbG9hZGluZ1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgMiBwYXJhbWV0ZXJzIC0gcHJldmlvdXMgc3RhdGUgYW5kIGFjdGlvbiAtIHRoZW4gcmV0dXJucyBhIG5ldyBzdGF0ZVxuICBmdW5jdGlvbiBTcGVha2Vyc1JlZHVjZXIgKHN0YXRlLCBhY3Rpb24pe1xuICAgIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSBmYXZvcml0ZSBzcGVha2VyIGJ1dHRvblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlKGZhdm9yaXRlVmFsdWUpe1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpe1xuICAgICAgICAgIGl0ZW0uZmF2b3JpdGUgPSBmYXZvcml0ZVZhbHVlO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3dpdGNoIHN0YXRlbWVudCBiYXNlZCBvbiBwYXJzZWQgaW4gYWN0aW9uIHR5cGUgLSBpZiBhY3Rpb24gdHlwZSBpbiBcImNhc2VcIiByZXR1cm5zIHRydWUsIHNldCBhY3Rpb24uZGF0YVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRTcGVha2VyTGlzdFwiIDoge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgICB9XG4gICAgICBjYXNlIFwiZmF2b3JpdGVcIiA6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKHRydWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBcInVuZmF2b3JpdGVcIiA6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG4gIC8vIFwiZGlzcGF0Y2hcIiBpcyBqdXN0IGEgbmFtZSB0aGF0IGNhbiBiZSBhbnl0aGluZyBqdXN0IHNvIGEgc2Vjb25kIHBhcmFtZXRlciAobWV0aG9kKSBjYW4gYmUgcGFyc2VkIGludG8gdXNlUmVkdWNlciBob29rXG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihTcGVha2Vyc1JlZHVjZXIsIFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIHJlZmVyZW5jZSBzaGFyZWQgY29udGV4dCB3aXRoIHVzZUNvbnRleHQgaG9va1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChjb25maWdDb250ZXh0KTtcblxuICAvLyB1c2VFZmZlY3QgY2FsbCB0aGF0IHNpbXVsYXRlcyBjYWxsaW5nIGFuIG91dHNpZGUgc2VydmljZSB3aXRoIGEgMXMgZGVsYXkgdGhlbiBmaWx0ZXJzIGFuZCBzb3J0cyBkYXRhIG9uIGNvbXBsZXRpb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgfSk7XG4gICAgICAvLyBjYWxsIGRpc3BhdGNoIHRvIHNldCBzcGVha2VyIGxpc3QgYW5kIGRhdGEgdG8gYmUgdXNlZCBieSByZWR1Y2VyIGFib3ZlXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIixcbiAgICAgICAgZGF0YTogc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gW3NwZWFraW5nU3VuZGF5LCBzcGVha2luZ1NhdHVyZGF5XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgLy8gZmlsdGVyIHNwZWFrZXIgbGlzdCBiYXNlZCBvbiB3ZXRoZXIgdGhleSdyZSBzcGVha2luZyBzYXQgb3Igc3VuLCB0aGVuIHNvcnQgdGhlbSBieSBmaXJzdG5hbWVcbiAgLy8gd3JhcCB3aXRoIHVzZU1lbW8gdG8gY3JlYXRlIGEgY2FjaGUgb2YgdGhlIHNwZWFrZXIgZGF0YSAtLSB1c2VNZW1vIHRha2UgaW4gYSBmdW5jdGlvbiBhbmQgYW4gYXJyYXkgLS0gdGhlIGFycmF5IGlzIGEgZGVwZW5kZW5jeSB3aGljaCBtZWFucyB0aGF0IGlmIGFueXRoaW5nIGNoYW5nZXMgaW4gdGhlIGRhdGEgdGhlIGNhY2hlIGlzIGR1bXBlZCBhbmQgcnVuIGFnYWluXG4gIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBzcGVha2VyTGlzdFxuICAuZmlsdGVyKFxuICAgICh7IHNhdCwgc3VuIH0pID0+XG4gICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxuICApXG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSksIFtzcGVha2luZ1NhdHVyZGF5LCBzcGVha2luZ1N1bmRheSwgc3BlYWtlckxpc3RdKTtcblxuICAvLyBwYXJzZSB0aGUgZmlsdGVyZWQgbGlzdCBjb25zdGFudCBpbnRvIHRoaXMgY29uZGl0aW9uYWwgYmVjYXVzZSB1c2VNZW1vIGNhbid0IGJlIHVzZWQgd2l0aCBjb25kaXRpb25hbHMgXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiBuZXdTcGVha2VyTGlzdDtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICAvLyBjYWxsIHVzZUNhbGxiYWNrIHRvIG1lbW9pemUoY2FjaGUpIHRoaXMgZnVuY3Rpb24gc28gdGhhdCBpdCBkb2Vzbid0IHJlcmVuZGVyIGFsbCBjb21wb25lbnRzIG9uIGV2ZXJ5IGNoYW5nZVxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuICAgIC8vIGNhbGwgZGlzcGF0Y2ggdG8gc2V0IGZhdm9yaXRlIHZhbHVlIG9uIHJlZHVjZXJcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gXCJmYXZvcml0ZVwiIDogXCJ1bmZhdm9yaXRlXCIsXG4gICAgICBzZXNzaW9uSWRcbiAgICB9KTtcblxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIHsvKiBjaGVjayBjb250ZXh0IG9mIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzIGJlZm9yZSBkaXNwbGF5aW5nIHRoZSBjaGVja2JveGVzICovfVxuICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxuICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxuICAgICAgICAgICAgICAoeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9