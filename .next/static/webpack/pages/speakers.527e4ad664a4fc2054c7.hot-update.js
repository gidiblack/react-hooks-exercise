webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/useAxiosFetch.js":
/*!******************************!*\
  !*** ./src/useAxiosFetch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var dataFetchReducer = function dataFetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        isError: false
      });

    case "FECTH_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: action.payload
      });

    case "FETCH_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        hasErrored: true,
        errorMessage: "Data Retrieve Failure"
      });

    case "REPLACE_DATA":
      // The record parsed (state.data) must had attribute "id"
      var newData = state.data.map(function (rec) {
        return rec.id === action.replacerecord.id ? action.replacerecord : rec;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: newData
      });
    // default:
    //     throw new Error();
  }
}; // REST data fetch call that takes a URL to call then ansynchronously return data
// this hook needs to survive state changes so initial url and data need to be parsed as parameters to return data immediately that will be used before the REST data is fetched


var useAxiosFetch = function useAxiosFetch(initialUrl, initialData) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialUrl),
      url = _useState[0]; // useReducer call that returns the state values for initial load


  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(dataFetchReducer, {
    isLoading: false,
    hasErrored: false,
    errorMessage: '',
    data: initialData
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // useEffect hook that executes when the component first is called with an async function to satisfy useEffect rules


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var didCancel = false; // async function

    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // dispatch to reducer
                dispatch({
                  type: "FETCH_INIT"
                }); // try to fetch data with axios

                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url);

              case 4:
                result = _context.sent;

                // if success dispatch success
                if (!didCancel) {
                  dispatch({
                    type: "FETCH_SUCCESS",
                    payload: result.data
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                // if error dispatch failure
                if (!didCancel) {
                  dispatch({
                    type: "FETCH_FAILURE"
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }(); // invoke async function


    fetchData();
    return function () {
      didCancel = true;
    };
  }, [url]); // function to update one data record

  var updateRecord = function updateRecord(record) {
    dispatch({
      type: "REPLACE_DATA",
      replacerecord: record
    });
  }; // return all the attributes of state and updateRecord function


  return _objectSpread(_objectSpread({}, state), {}, {
    updateRecord: updateRecord
  });
};

_s(useAxiosFetch, "Gr7Xat3+35pvybQ2vWk/9H2v/uM=");

/* harmony default export */ __webpack_exports__["default"] = (useAxiosFetch);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUF4aW9zRmV0Y2guanMiXSwibmFtZXMiOlsiZGF0YUZldGNoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJoYXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwiZGF0YSIsInBheWxvYWQiLCJuZXdEYXRhIiwibWFwIiwicmVjIiwiaWQiLCJyZXBsYWNlcmVjb3JkIiwidXNlQXhpb3NGZXRjaCIsImluaXRpYWxVcmwiLCJpbml0aWFsRGF0YSIsInVzZVN0YXRlIiwidXJsIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZGlkQ2FuY2VsIiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFlBQUw7QUFDSSw2Q0FDT0YsS0FEUDtBQUVJRyxpQkFBUyxFQUFFLElBRmY7QUFHSUMsZUFBTyxFQUFFO0FBSGI7O0FBTUosU0FBSyxlQUFMO0FBQ0ksNkNBQ09KLEtBRFA7QUFFSUcsaUJBQVMsRUFBRSxLQUZmO0FBR0lFLGtCQUFVLEVBQUcsS0FIakI7QUFJSUMsb0JBQVksRUFBRSxFQUpsQjtBQUtJQyxZQUFJLEVBQUVOLE1BQU0sQ0FBQ087QUFMakI7O0FBUUosU0FBSyxlQUFMO0FBQ0ksNkNBQ09SLEtBRFA7QUFFSUcsaUJBQVMsRUFBRSxLQUZmO0FBR0lFLGtCQUFVLEVBQUUsSUFIaEI7QUFJSUMsb0JBQVksRUFBRTtBQUpsQjs7QUFPSixTQUFLLGNBQUw7QUFDSTtBQUNBLFVBQU1HLE9BQU8sR0FBR1QsS0FBSyxDQUFDTyxJQUFOLENBQVdHLEdBQVgsQ0FBZSxVQUFBQyxHQUFHLEVBQUk7QUFDbEMsZUFBT0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdYLE1BQU0sQ0FBQ1ksYUFBUCxDQUFxQkQsRUFBaEMsR0FBcUNYLE1BQU0sQ0FBQ1ksYUFBNUMsR0FBNERGLEdBQW5FO0FBQ0gsT0FGZSxDQUFoQjtBQUdBLDZDQUNPWCxLQURQO0FBRUlHLGlCQUFTLEVBQUUsS0FGZjtBQUdJRSxrQkFBVSxFQUFFLEtBSGhCO0FBSUlDLG9CQUFZLEVBQUUsRUFKbEI7QUFLSUMsWUFBSSxFQUFFRTtBQUxWO0FBT0o7QUFDQTtBQXRDSjtBQXdDSCxDQXpDRCxDLENBMkNBO0FBQ0E7OztBQUNBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxXQUFiLEVBQTZCO0FBQUE7O0FBQUEsa0JBQ2pDQyxzREFBUSxDQUFDRixVQUFELENBRHlCO0FBQUEsTUFDeENHLEdBRHdDLGlCQUUvQzs7O0FBRitDLG9CQUdyQkMsd0RBQVUsQ0FBQ3BCLGdCQUFELEVBQW1CO0FBQ25ESSxhQUFTLEVBQUUsS0FEd0M7QUFFbkRFLGNBQVUsRUFBRSxLQUZ1QztBQUduREMsZ0JBQVksRUFBRSxFQUhxQztBQUluREMsUUFBSSxFQUFFUztBQUo2QyxHQUFuQixDQUhXO0FBQUEsTUFHeENoQixLQUh3QztBQUFBLE1BR2pDb0IsUUFIaUMsbUJBUy9DOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsU0FBUyxHQUFHLEtBQWhCLENBRFksQ0FFWjs7QUFDQSxRQUFNQyxTQUFTO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Q7QUFDQUgsd0JBQVEsQ0FBQztBQUFFbEIsc0JBQUksRUFBRTtBQUFSLGlCQUFELENBQVIsQ0FGYyxDQUdkOztBQUhjO0FBQUE7QUFBQSx1QkFLU3NCLDRDQUFLLENBQUNDLEdBQU4sQ0FBVVAsR0FBVixDQUxUOztBQUFBO0FBS05RLHNCQUxNOztBQU1WO0FBQ0Esb0JBQUksQ0FBQ0osU0FBTCxFQUFlO0FBQ1hGLDBCQUFRLENBQUM7QUFBQ2xCLHdCQUFJLEVBQUUsZUFBUDtBQUF3Qk0sMkJBQU8sRUFBRWtCLE1BQU0sQ0FBQ25CO0FBQXhDLG1CQUFELENBQVI7QUFDSDs7QUFUUztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFXVjtBQUNBLG9CQUFJLENBQUNlLFNBQUwsRUFBZTtBQUNYRiwwQkFBUSxDQUFDO0FBQUVsQix3QkFBSSxFQUFFO0FBQVIsbUJBQUQsQ0FBUjtBQUNIOztBQWRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRxQixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWYsQ0FIWSxDQW9CWjs7O0FBQ0FBLGFBQVM7QUFFVCxXQUFPLFlBQU07QUFDVEQsZUFBUyxHQUFHLElBQVo7QUFDSCxLQUZEO0FBR0gsR0ExQlEsRUEwQk4sQ0FBQ0osR0FBRCxDQTFCTSxDQUFULENBVitDLENBcUMvQzs7QUFDQSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxNQUFNLEVBQUk7QUFDM0JSLFlBQVEsQ0FBQztBQUNMbEIsVUFBSSxFQUFFLGNBREQ7QUFFTFcsbUJBQWEsRUFBRWU7QUFGVixLQUFELENBQVI7QUFJSCxHQUxELENBdEMrQyxDQTRDL0M7OztBQUNBLHlDQUFZNUIsS0FBWjtBQUFtQjJCLGdCQUFZLEVBQVpBO0FBQW5CO0FBQ0gsQ0E5Q0Q7O0dBQU1iLGE7O0FBZ0RTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy41MjdlNGFkNjY0YTRmYzIwNTRjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGRhdGFGZXRjaFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOSVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBpc0Vycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgXCJGRUNUSF9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcmVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFwiRkVUQ0hfRkFJTFVSRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3JlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJEYXRhIFJldHJpZXZlIEZhaWx1cmVcIlxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFwiUkVQTEFDRV9EQVRBXCI6XHJcbiAgICAgICAgICAgIC8vIFRoZSByZWNvcmQgcGFyc2VkIChzdGF0ZS5kYXRhKSBtdXN0IGhhZCBhdHRyaWJ1dGUgXCJpZFwiXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBzdGF0ZS5kYXRhLm1hcChyZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gYWN0aW9uLnJlcGxhY2VyZWNvcmQuaWQgPyBhY3Rpb24ucmVwbGFjZXJlY29yZCA6IHJlYztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IG5ld0RhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAvLyBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIFJFU1QgZGF0YSBmZXRjaCBjYWxsIHRoYXQgdGFrZXMgYSBVUkwgdG8gY2FsbCB0aGVuIGFuc3luY2hyb25vdXNseSByZXR1cm4gZGF0YVxyXG4vLyB0aGlzIGhvb2sgbmVlZHMgdG8gc3Vydml2ZSBzdGF0ZSBjaGFuZ2VzIHNvIGluaXRpYWwgdXJsIGFuZCBkYXRhIG5lZWQgdG8gYmUgcGFyc2VkIGFzIHBhcmFtZXRlcnMgdG8gcmV0dXJuIGRhdGEgaW1tZWRpYXRlbHkgdGhhdCB3aWxsIGJlIHVzZWQgYmVmb3JlIHRoZSBSRVNUIGRhdGEgaXMgZmV0Y2hlZFxyXG5jb25zdCB1c2VBeGlvc0ZldGNoID0gKGluaXRpYWxVcmwsIGluaXRpYWxEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBbdXJsXSA9IHVzZVN0YXRlKGluaXRpYWxVcmwpO1xyXG4gICAgLy8gdXNlUmVkdWNlciBjYWxsIHRoYXQgcmV0dXJucyB0aGUgc3RhdGUgdmFsdWVzIGZvciBpbml0aWFsIGxvYWRcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihkYXRhRmV0Y2hSZWR1Y2VyLCB7XHJcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhXHJcbiAgICB9KTtcclxuICAgIC8vIHVzZUVmZmVjdCBob29rIHRoYXQgZXhlY3V0ZXMgd2hlbiB0aGUgY29tcG9uZW50IGZpcnN0IGlzIGNhbGxlZCB3aXRoIGFuIGFzeW5jIGZ1bmN0aW9uIHRvIHNhdGlzZnkgdXNlRWZmZWN0IHJ1bGVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaWRDYW5jZWwgPSBmYWxzZTtcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZGlzcGF0Y2ggdG8gcmVkdWNlclxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfSU5JVFwifSk7XHJcbiAgICAgICAgICAgIC8vIHRyeSB0byBmZXRjaCBkYXRhIHdpdGggYXhpb3NcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHN1Y2Nlc3MgZGlzcGF0Y2ggc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWRDYW5jZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX1NVQ0NFU1NcIiwgcGF5bG9hZDogcmVzdWx0LmRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgZXJyb3IgZGlzcGF0Y2ggZmFpbHVyZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWRDYW5jZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9GQUlMVVJFXCJ9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gaW52b2tlIGFzeW5jIGZ1bmN0aW9uXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpZENhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1cmxdKTtcclxuICAgIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvbmUgZGF0YSByZWNvcmRcclxuICAgIGNvbnN0IHVwZGF0ZVJlY29yZCA9IHJlY29yZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlJFUExBQ0VfREFUQVwiLFxyXG4gICAgICAgICAgICByZXBsYWNlcmVjb3JkOiByZWNvcmRcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyByZXR1cm4gYWxsIHRoZSBhdHRyaWJ1dGVzIG9mIHN0YXRlIGFuZCB1cGRhdGVSZWNvcmQgZnVuY3Rpb25cclxuICAgIHJldHVybiB7IC4uLnN0YXRlLCB1cGRhdGVSZWNvcmR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXhpb3NGZXRjaDsgICAiXSwic291cmNlUm9vdCI6IiJ9