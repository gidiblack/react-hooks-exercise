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
      lineNumber: 107,
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
      lineNumber: 128,
      columnNumber: 25
    }
  }, "Loading...");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "btn-toolbar margintopbottom5 checkbox-bigger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, context.showSpeakerSpeakingDays === false ? null : __jsx("div", {
    className: "hide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 19
    }
  }), "Saturday Speakers")), __jsx("div", {
    className: "form-check-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-check-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 152,
      columnNumber: 19
    }
  }), "Sunday Speakers"))), ";"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-deck",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
        lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlQXhpb3NGZXRjaCIsImRhdGEiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwidXBkYXRlUmVjb3JkIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJTcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwic2Vzc2lvbklkIiwiZmF2b3JpdGUiLCJ0eXBlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjb25maWdDb250ZXh0IiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwiZGlzcGF0Y2giLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImxhc3ROYW1lIiwiYmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFDdkI7QUFEdUIsdUJBUW5CQyw4REFBYSxDQUFDLGdDQUFELEVBQW1DLEVBQW5DLENBUk07QUFBQSxNQUdy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QUcsRUFBRUYsRUFEUDtBQUVFLFFBQUUsRUFBRUEsRUFGTjtBQUdFLGNBQVEsRUFBRUUsUUFIWjtBQUlFLDRCQUFzQixFQUFFaUIsb0JBSjFCO0FBS0UsZUFBUyxFQUFFSCxTQUxiO0FBTUUsY0FBUSxFQUFFYSxRQU5aO0FBT0UsU0FBRyxFQUFFQyxHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBYkYsQ0FESCxDQURGLENBOUJGLENBSEYsQ0FERjtBQXdERCxDQWhMRDs7R0FBTWxELFE7VUFRQUMsc0Q7OztLQVJBRCxRO0FBa0xTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5hODg1MThlMmMyMjAzMDI3N2M1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc3RhdGljL3NpdGUuY3NzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9zcmMvTWVudSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgY29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcbmltcG9ydCB1c2VBeGlvc0ZldGNoIGZyb20gJy4vdXNlQXhpb3NGZXRjaCdcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgLy8gaW52b2tlIEF4aW9zIGZldGNoIGZ1bmN0aW9uKGN1c3RvbSBob29rKVxuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBpc0xvYWRpbmcsXG4gICAgaGFzRXJyb3JlZCxcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgdXBkYXRlUmVjb3JkXG4gIH0gPSB1c2VBeGlvc0ZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIsIFtdKTtcblxuICAvLyB1c2VTdGF0ZSBjYWxscyBmb3IgY2hlY2tib3hlcyBhbmQgbG9hZGluZ1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgMiBwYXJhbWV0ZXJzIC0gcHJldmlvdXMgc3RhdGUgYW5kIGFjdGlvbiAtIHRoZW4gcmV0dXJucyBhIG5ldyBzdGF0ZVxuICBmdW5jdGlvbiBTcGVha2Vyc1JlZHVjZXIgKHN0YXRlLCBhY3Rpb24pe1xuICAgIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSBmYXZvcml0ZSBzcGVha2VyIGJ1dHRvblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlKGZhdm9yaXRlVmFsdWUpe1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpe1xuICAgICAgICAgIGl0ZW0uZmF2b3JpdGUgPSBmYXZvcml0ZVZhbHVlO1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3dpdGNoIHN0YXRlbWVudCBiYXNlZCBvbiBwYXJzZWQgaW4gYWN0aW9uIHR5cGUgLSBpZiBhY3Rpb24gdHlwZSBpbiBcImNhc2VcIiByZXR1cm5zIHRydWUsIHNldCBhY3Rpb24uZGF0YVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRTcGVha2VyTGlzdFwiIDoge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgICB9XG4gICAgICBjYXNlIFwiZmF2b3JpdGVcIiA6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKHRydWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBcInVuZmF2b3JpdGVcIiA6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIC8vXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG4gIC8vIFwiZGlzcGF0Y2hcIiBpcyBqdXN0IGEgbmFtZSB0aGF0IGNhbiBiZSBhbnl0aGluZyBqdXN0IHNvIGEgc2Vjb25kIHBhcmFtZXRlciAobWV0aG9kKSBjYW4gYmUgcGFyc2VkIGludG8gdXNlUmVkdWNlciBob29rXG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihTcGVha2Vyc1JlZHVjZXIsIFtdKTtcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIHJlZmVyZW5jZSBzaGFyZWQgY29udGV4dCB3aXRoIHVzZUNvbnRleHQgaG9va1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChjb25maWdDb250ZXh0KTtcblxuICAvLyB1c2VFZmZlY3QgY2FsbCB0aGF0IHNpbXVsYXRlcyBjYWxsaW5nIGFuIG91dHNpZGUgc2VydmljZSB3aXRoIGEgMXMgZGVsYXkgdGhlbiBmaWx0ZXJzIGFuZCBzb3J0cyBkYXRhIG9uIGNvbXBsZXRpb25cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAvLyAgICAgICByZXNvbHZlKCk7XG4gIC8vICAgICB9LCAxMDAwKTtcbiAgLy8gICB9KS50aGVuKCgpID0+IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gIC8vICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICAvLyBjYWxsIGRpc3BhdGNoIHRvIHNldCBzcGVha2VyIGxpc3QgYW5kIGRhdGEgdG8gYmUgdXNlZCBieSByZWR1Y2VyIGFib3ZlXG4gIC8vICAgICBkaXNwYXRjaCh7XG4gIC8vICAgICAgIHR5cGU6IFwic2V0U3BlYWtlckxpc3RcIixcbiAgLy8gICAgICAgZGF0YTogc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXJcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAvLyAgIH07XG4gIC8vIH0sIFtdKTsgLy8gW3NwZWFraW5nU3VuZGF5LCBzcGVha2luZ1NhdHVyZGF5XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgLy8gZmlsdGVyIHNwZWFrZXIgbGlzdCBiYXNlZCBvbiB3ZXRoZXIgdGhleSdyZSBzcGVha2luZyBzYXQgb3Igc3VuLCB0aGVuIHNvcnQgdGhlbSBieSBmaXJzdG5hbWVcbiAgLy8gd3JhcCB3aXRoIHVzZU1lbW8gdG8gY3JlYXRlIGEgY2FjaGUgb2YgdGhlIHNwZWFrZXIgZGF0YSAtLSB1c2VNZW1vIHRha2UgaW4gYSBmdW5jdGlvbiBhbmQgYW4gYXJyYXkgLS0gdGhlIGFycmF5IGlzIGEgZGVwZW5kZW5jeSB3aGljaCBtZWFucyB0aGF0IGlmIGFueXRoaW5nIGNoYW5nZXMgaW4gdGhlIGRhdGEgdGhlIGNhY2hlIGlzIGR1bXBlZCBhbmQgcnVuIGFnYWluXG4gIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBkYXRhLmZpbHRlcihcbiAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcbiAgKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSksIFtzcGVha2luZ1NhdHVyZGF5LCBzcGVha2luZ1N1bmRheSwgZGF0YV0pO1xuXG4gIC8vIHBhcnNlIHRoZSBmaWx0ZXJlZCBsaXN0IGNvbnN0YW50IGludG8gdGhpcyBjb25kaXRpb25hbCBiZWNhdXNlIHVzZU1lbW8gY2FuJ3QgYmUgdXNlZCB3aXRoIGNvbmRpdGlvbmFscyBcbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIDogbmV3U3BlYWtlckxpc3Q7XG5cbiAgaWYoaGFzRXJyb3JlZClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yTWVzc2FnZX0mbnNicDtcIk1ha2Ugc3VyZSB5b3UgaGF2ZSBsYXVuY2hlZCAnbnBtIHJ1biBqc29uLXNlcnZlcidcIlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICAvLyBjYWxsIHVzZUNhbGxiYWNrIHRvIG1lbW9pemUoY2FjaGUpIHRoaXMgZnVuY3Rpb24gc28gdGhhdCBpdCBkb2Vzbid0IHJlcmVuZGVyIGFsbCBjb21wb25lbnRzIG9uIGV2ZXJ5IGNoYW5nZVxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuICAgIC8vIGNhbGwgZGlzcGF0Y2ggdG8gc2V0IGZhdm9yaXRlIHZhbHVlIG9uIHJlZHVjZXJcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gXCJmYXZvcml0ZVwiIDogXCJ1bmZhdm9yaXRlXCIsXG4gICAgICBzZXNzaW9uSWRcbiAgICB9KTtcblxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIHsvKiBjaGVjayBjb250ZXh0IG9mIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzIGJlZm9yZSBkaXNwbGF5aW5nIHRoZSBjaGVja2JveGVzICovfVxuICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfTtcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==