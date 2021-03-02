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
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _useAxiosFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAxiosFetch */ "./src/useAxiosFetch.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\GIDEON\\Desktop\\Web Projects\\React\\conference\\src\\Speakers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Speakers = function Speakers(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  // invoke Axios fetch function(custom hook)
  var _useAxiosFetch = Object(_useAxiosFetch__WEBPACK_IMPORTED_MODULE_8__["default"])("http://localhost:4000/speakers", []),
      data = _useAxiosFetch.data,
      isLoading = _useAxiosFetch.isLoading,
      hasErrored = _useAxiosFetch.hasErrored,
      errorMessage = _useAxiosFetch.errorMessage,
      updateRecord = _useAxiosFetch.updateRecord; // useState calls for checkboxes and loading


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
  // const [speakerList, dispatch] = useReducer(SpeakersReducer, []);
  // const [isLoading, setIsLoading] = useState(true);
  // reference shared context with useContext hook


  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_7__["configContext"]); // useEffect call that simulates calling an outside service with a 1s delay then filters and sorts data on completion
  // useEffect(() => {
  //   setIsLoading(true);
  //   new Promise(function (resolve) {
  //     setTimeout(function () {
  //       resolve();
  //     }, 1000);
  //   }).then(() => {
  //     setIsLoading(false);
  //     const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
  //       return (speakingSaturday && sat) || (speakingSunday && sun);
  //     });
  //     // call dispatch to set speaker list and data to be used by reducer above
  //     dispatch({
  //       type: "setSpeakerList",
  //       data: speakerListServerFilter
  //     });
  //   });
  //   return () => {
  //     console.log('cleanup');
  //   };
  // }, []); // [speakingSunday, speakingSaturday]);

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  }; // filter speaker list based on wether they're speaking sat or sun, then sort them by firstname
  // wrap with useMemo to create a cache of the speaker data -- useMemo take in a function and an array -- the array is a dependency which means that if anything changes in the data the cache is dumped and run again


  var newSpeakerList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return data.filter(function (_ref2) {
      var sat = _ref2.sat,
          sun = _ref2.sun;
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
  }, [speakingSaturday, speakingSunday, data]); // parse the filtered list constant into this conditional because useMemo can't be used with conditionals 

  var speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (hasErrored) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, errorMessage, "&nsbp;\"Make sure you have launched 'npm run json-server'\"");

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
      lineNumber: 130,
      columnNumber: 25
    }
  }, "Loading...");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "btn-toolbar margintopbottom5 checkbox-bigger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, context.showSpeakerSpeakingDays === false ? null : __jsx("div", {
    className: "hide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 143,
      columnNumber: 19
    }
  }), "Saturday Speakers")), __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 154,
      columnNumber: 19
    }
  }), "Sunday Speakers"))), ";"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-deck",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, speakerListFiltered.map(function (_ref3) {
    var id = _ref3.id,
        firstName = _ref3.firstName,
        lastName = _ref3.lastName,
        bio = _ref3.bio,
        favorite = _ref3.favorite;
    return __jsx(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 171,
        columnNumber: 19
      }
    });
  })))));
};

_s(Speakers, "mRolj+TqZEyZOcVO2EbDj8MvgqE=", false, function () {
  return [_useAxiosFetch__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlQXhpb3NGZXRjaCIsImRhdGEiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwidXBkYXRlUmVjb3JkIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJTcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwic2Vzc2lvbklkIiwiZmF2b3JpdGUiLCJ0eXBlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjb25maWdDb250ZXh0IiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZGlzcGF0Y2giLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImxhc3ROYW1lIiwiYmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFDdkI7QUFEdUIsdUJBUW5CQyw4REFBYSxDQUFDLGdDQUFELEVBQW1DLEVBQW5DLENBUk07QUFBQSxNQUdy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U0FBRyxFQUFFRixFQURQO0FBRUUsUUFBRSxFQUFFQSxFQUZOO0FBR0UsY0FBUSxFQUFFRSxRQUhaO0FBSUUsNEJBQXNCLEVBQUVpQixvQkFKMUI7QUFLRSxlQUFTLEVBQUVILFNBTGI7QUFNRSxjQUFRLEVBQUVhLFFBTlo7QUFPRSxTQUFHLEVBQUVDLEdBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FiRixDQURILENBREYsQ0E5QkYsQ0FIRixDQURGO0FBd0RELENBbExEOztHQUFNbEQsUTtVQVFBQyxzRDs7O0tBUkFELFE7QUFvTFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmY1NDYxZTQzNzBjZWRiNTVjNGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zdGF0aWMvc2l0ZS5jc3NcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBjb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHVzZUF4aW9zRmV0Y2ggZnJvbSAnLi91c2VBeGlvc0ZldGNoJ1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICAvLyBpbnZva2UgQXhpb3MgZmV0Y2ggZnVuY3Rpb24oY3VzdG9tIGhvb2spXG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIGlzTG9hZGluZyxcbiAgICBoYXNFcnJvcmVkLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICB1cGRhdGVSZWNvcmRcbiAgfSA9IHVzZUF4aW9zRmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnNcIiwgW10pO1xuXG4gIC8vIHVzZVN0YXRlIGNhbGxzIGZvciBjaGVja2JveGVzIGFuZCBsb2FkaW5nXG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCB0YWtlcyAyIHBhcmFtZXRlcnMgLSBwcmV2aW91cyBzdGF0ZSBhbmQgYWN0aW9uIC0gdGhlbiByZXR1cm5zIGEgbmV3IHN0YXRlXG4gIGZ1bmN0aW9uIFNwZWFrZXJzUmVkdWNlciAoc3RhdGUsIGFjdGlvbil7XG4gICAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIGZhdm9yaXRlIHNwZWFrZXIgYnV0dG9uXG4gICAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSl7XG4gICAgICByZXR1cm4gc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnNlc3Npb25JZCl7XG4gICAgICAgICAgaXRlbS5mYXZvcml0ZSA9IGZhdm9yaXRlVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzd2l0Y2ggc3RhdGVtZW50IGJhc2VkIG9uIHBhcnNlZCBpbiBhY3Rpb24gdHlwZSAtIGlmIGFjdGlvbiB0eXBlIGluIFwiY2FzZVwiIHJldHVybnMgdHJ1ZSwgc2V0IGFjdGlvbi5kYXRhXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCIgOiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJmYXZvcml0ZVwiIDoge1xuICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3JpdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgICBjYXNlIFwidW5mYXZvcml0ZVwiIDoge1xuICAgICAgICByZXR1cm4gdXBkYXRlRmF2b3JpdGUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbiAgLy8gXCJkaXNwYXRjaFwiIGlzIGp1c3QgYSBuYW1lIHRoYXQgY2FuIGJlIGFueXRoaW5nIGp1c3Qgc28gYSBzZWNvbmQgcGFyYW1ldGVyIChtZXRob2QpIGNhbiBiZSBwYXJzZWQgaW50byB1c2VSZWR1Y2VyIGhvb2tcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFNwZWFrZXJzUmVkdWNlciwgW10pO1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gcmVmZXJlbmNlIHNoYXJlZCBjb250ZXh0IHdpdGggdXNlQ29udGV4dCBob29rXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KGNvbmZpZ0NvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdCBjYWxsIHRoYXQgc2ltdWxhdGVzIGNhbGxpbmcgYW4gb3V0c2lkZSBzZXJ2aWNlIHdpdGggYSAxcyBkZWxheSB0aGVuIGZpbHRlcnMgYW5kIHNvcnRzIGRhdGEgb24gY29tcGxldGlvblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgLy8gICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gIC8vICAgICAgIHJlc29sdmUoKTtcbiAgLy8gICAgIH0sIDEwMDApO1xuICAvLyAgIH0pLnRoZW4oKCkgPT4ge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIC8vIGNhbGwgZGlzcGF0Y2ggdG8gc2V0IHNwZWFrZXIgbGlzdCBhbmQgZGF0YSB0byBiZSB1c2VkIGJ5IHJlZHVjZXIgYWJvdmVcbiAgLy8gICAgIGRpc3BhdGNoKHtcbiAgLy8gICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxuICAvLyAgICAgICBkYXRhOiBzcGVha2VyTGlzdFNlcnZlckZpbHRlclxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pOyAvLyBbc3BlYWtpbmdTdW5kYXksIHNwZWFraW5nU2F0dXJkYXldKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcbiAgfTtcblxuICAvLyBmaWx0ZXIgc3BlYWtlciBsaXN0IGJhc2VkIG9uIHdldGhlciB0aGV5J3JlIHNwZWFraW5nIHNhdCBvciBzdW4sIHRoZW4gc29ydCB0aGVtIGJ5IGZpcnN0bmFtZVxuICAvLyB3cmFwIHdpdGggdXNlTWVtbyB0byBjcmVhdGUgYSBjYWNoZSBvZiB0aGUgc3BlYWtlciBkYXRhIC0tIHVzZU1lbW8gdGFrZSBpbiBhIGZ1bmN0aW9uIGFuZCBhbiBhcnJheSAtLSB0aGUgYXJyYXkgaXMgYSBkZXBlbmRlbmN5IHdoaWNoIG1lYW5zIHRoYXQgaWYgYW55dGhpbmcgY2hhbmdlcyBpbiB0aGUgZGF0YSB0aGUgY2FjaGUgaXMgZHVtcGVkIGFuZCBydW4gYWdhaW5cbiAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IGRhdGFcbiAgLmZpbHRlcihcbiAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcbiAgKVxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIGRhdGFdKTtcblxuICAvLyBwYXJzZSB0aGUgZmlsdGVyZWQgbGlzdCBjb25zdGFudCBpbnRvIHRoaXMgY29uZGl0aW9uYWwgYmVjYXVzZSB1c2VNZW1vIGNhbid0IGJlIHVzZWQgd2l0aCBjb25kaXRpb25hbHMgXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmcgPyBbXSA6IG5ld1NwZWFrZXJMaXN0O1xuXG4gIGlmKGhhc0Vycm9yZWQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvck1lc3NhZ2V9Jm5zYnA7XCJNYWtlIHN1cmUgeW91IGhhdmUgbGF1bmNoZWQgJ25wbSBydW4ganNvbi1zZXJ2ZXInXCJcbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgLy8gY2FsbCB1c2VDYWxsYmFjayB0byBtZW1vaXplKGNhY2hlKSB0aGlzIGZ1bmN0aW9uIHNvIHRoYXQgaXQgZG9lc24ndCByZXJlbmRlciBhbGwgY29tcG9uZW50cyBvbiBldmVyeSBjaGFuZ2VcbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcbiAgICAvLyBjYWxsIGRpc3BhdGNoIHRvIHNldCBmYXZvcml0ZSB2YWx1ZSBvbiByZWR1Y2VyXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3JpdGVcIiA6IFwidW5mYXZvcml0ZVwiLFxuICAgICAgc2Vzc2lvbklkXG4gICAgfSk7XG5cbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7LyogY2hlY2sgY29udGV4dCBvZiBzaG93U3BlYWtlclNwZWFraW5nRGF5cyBiZWZvcmUgZGlzcGxheWluZyB0aGUgY2hlY2tib3hlcyAqL31cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX07XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=