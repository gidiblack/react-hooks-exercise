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

    default:
      throw Error();
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
    }(); // call async function


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZUF4aW9zRmV0Y2guanMiXSwibmFtZXMiOlsiZGF0YUZldGNoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJoYXNFcnJvcmVkIiwiZXJyb3JNZXNzYWdlIiwiZGF0YSIsInBheWxvYWQiLCJuZXdEYXRhIiwibWFwIiwicmVjIiwiaWQiLCJyZXBsYWNlcmVjb3JkIiwiRXJyb3IiLCJ1c2VBeGlvc0ZldGNoIiwiaW5pdGlhbFVybCIsImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJ1cmwiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJkaWRDYW5jZWwiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3VsdCIsInVwZGF0ZVJlY29yZCIsInJlY29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssWUFBTDtBQUNJLDZDQUNPRixLQURQO0FBRUlHLGlCQUFTLEVBQUUsSUFGZjtBQUdJQyxlQUFPLEVBQUU7QUFIYjs7QUFNSixTQUFLLGVBQUw7QUFDSSw2Q0FDT0osS0FEUDtBQUVJRyxpQkFBUyxFQUFFLEtBRmY7QUFHSUUsa0JBQVUsRUFBRyxLQUhqQjtBQUlJQyxvQkFBWSxFQUFFLEVBSmxCO0FBS0lDLFlBQUksRUFBRU4sTUFBTSxDQUFDTztBQUxqQjs7QUFRSixTQUFLLGVBQUw7QUFDSSw2Q0FDT1IsS0FEUDtBQUVJRyxpQkFBUyxFQUFFLEtBRmY7QUFHSUUsa0JBQVUsRUFBRSxJQUhoQjtBQUlJQyxvQkFBWSxFQUFFO0FBSmxCOztBQU9KLFNBQUssY0FBTDtBQUNJO0FBQ0EsVUFBTUcsT0FBTyxHQUFHVCxLQUFLLENBQUNPLElBQU4sQ0FBV0csR0FBWCxDQUFlLFVBQUFDLEdBQUcsRUFBSTtBQUNsQyxlQUFPQSxHQUFHLENBQUNDLEVBQUosS0FBV1gsTUFBTSxDQUFDWSxhQUFQLENBQXFCRCxFQUFoQyxHQUFxQ1gsTUFBTSxDQUFDWSxhQUE1QyxHQUE0REYsR0FBbkU7QUFDSCxPQUZlLENBQWhCO0FBR0EsNkNBQ09YLEtBRFA7QUFFSUcsaUJBQVMsRUFBRSxLQUZmO0FBR0lFLGtCQUFVLEVBQUUsS0FIaEI7QUFJSUMsb0JBQVksRUFBRSxFQUpsQjtBQUtJQyxZQUFJLEVBQUVFO0FBTFY7O0FBT0o7QUFDSSxZQUFNSyxLQUFLLEVBQVg7QUF0Q1I7QUF3Q0gsQ0F6Q0QsQyxDQTJDQTtBQUNBOzs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBYUMsV0FBYixFQUE2QjtBQUFBOztBQUFBLGtCQUNqQ0Msc0RBQVEsQ0FBQ0YsVUFBRCxDQUR5QjtBQUFBLE1BQ3hDRyxHQUR3QyxpQkFFL0M7OztBQUYrQyxvQkFHckJDLHdEQUFVLENBQUNyQixnQkFBRCxFQUFtQjtBQUNuREksYUFBUyxFQUFFLEtBRHdDO0FBRW5ERSxjQUFVLEVBQUUsS0FGdUM7QUFHbkRDLGdCQUFZLEVBQUUsRUFIcUM7QUFJbkRDLFFBQUksRUFBRVU7QUFKNkMsR0FBbkIsQ0FIVztBQUFBLE1BR3hDakIsS0FId0M7QUFBQSxNQUdqQ3FCLFFBSGlDLG1CQVMvQzs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFNBQVMsR0FBRyxLQUFoQixDQURZLENBRVo7O0FBQ0EsUUFBTUMsU0FBUztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkO0FBQ0FILHdCQUFRLENBQUM7QUFBRW5CLHNCQUFJLEVBQUU7QUFBUixpQkFBRCxDQUFSLENBRmMsQ0FHZDs7QUFIYztBQUFBO0FBQUEsdUJBS1N1Qiw0Q0FBSyxDQUFDQyxHQUFOLENBQVVQLEdBQVYsQ0FMVDs7QUFBQTtBQUtOUSxzQkFMTTs7QUFNVjtBQUNBLG9CQUFJLENBQUNKLFNBQUwsRUFBZTtBQUNYRiwwQkFBUSxDQUFDO0FBQUNuQix3QkFBSSxFQUFFLGVBQVA7QUFBd0JNLDJCQUFPLEVBQUVtQixNQUFNLENBQUNwQjtBQUF4QyxtQkFBRCxDQUFSO0FBQ0g7O0FBVFM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBV1Y7QUFDQSxvQkFBSSxDQUFDZ0IsU0FBTCxFQUFlO0FBQ1hGLDBCQUFRLENBQUM7QUFBRW5CLHdCQUFJLEVBQUU7QUFBUixtQkFBRCxDQUFSO0FBQ0g7O0FBZFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVHNCLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZixDQUhZLENBb0JaOzs7QUFDQUEsYUFBUztBQUVULFdBQU8sWUFBTTtBQUNURCxlQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7QUFHSCxHQTFCUSxFQTBCTixDQUFDSixHQUFELENBMUJNLENBQVQsQ0FWK0MsQ0FxQy9DOztBQUNBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLE1BQU0sRUFBSTtBQUMzQlIsWUFBUSxDQUFDO0FBQ0xuQixVQUFJLEVBQUUsY0FERDtBQUVMVyxtQkFBYSxFQUFFZ0I7QUFGVixLQUFELENBQVI7QUFJSCxHQUxELENBdEMrQyxDQTRDL0M7OztBQUNBLHlDQUFZN0IsS0FBWjtBQUFtQjRCLGdCQUFZLEVBQVpBO0FBQW5CO0FBQ0gsQ0E5Q0Q7O0dBQU1iLGE7O0FBZ0RTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4wNTk2MjgxODk4MjFmNmFjNjQ2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGRhdGFGZXRjaFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOSVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBpc0Vycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgXCJGRUNUSF9TVUNDRVNTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcmVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFwiRkVUQ0hfRkFJTFVSRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFzRXJyb3JlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJEYXRhIFJldHJpZXZlIEZhaWx1cmVcIlxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFwiUkVQTEFDRV9EQVRBXCI6XHJcbiAgICAgICAgICAgIC8vIFRoZSByZWNvcmQgcGFyc2VkIChzdGF0ZS5kYXRhKSBtdXN0IGhhZCBhdHRyaWJ1dGUgXCJpZFwiXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBzdGF0ZS5kYXRhLm1hcChyZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gYWN0aW9uLnJlcGxhY2VyZWNvcmQuaWQgPyBhY3Rpb24ucmVwbGFjZXJlY29yZCA6IHJlYztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IG5ld0RhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gUkVTVCBkYXRhIGZldGNoIGNhbGwgdGhhdCB0YWtlcyBhIFVSTCB0byBjYWxsIHRoZW4gYW5zeW5jaHJvbm91c2x5IHJldHVybiBkYXRhXHJcbi8vIHRoaXMgaG9vayBuZWVkcyB0byBzdXJ2aXZlIHN0YXRlIGNoYW5nZXMgc28gaW5pdGlhbCB1cmwgYW5kIGRhdGEgbmVlZCB0byBiZSBwYXJzZWQgYXMgcGFyYW1ldGVycyB0byByZXR1cm4gZGF0YSBpbW1lZGlhdGVseSB0aGF0IHdpbGwgYmUgdXNlZCBiZWZvcmUgdGhlIFJFU1QgZGF0YSBpcyBmZXRjaGVkXHJcbmNvbnN0IHVzZUF4aW9zRmV0Y2ggPSAoaW5pdGlhbFVybCwgaW5pdGlhbERhdGEpID0+IHtcclxuICAgIGNvbnN0IFt1cmxdID0gdXNlU3RhdGUoaW5pdGlhbFVybCk7XHJcbiAgICAvLyB1c2VSZWR1Y2VyIGNhbGwgdGhhdCByZXR1cm5zIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGluaXRpYWwgbG9hZFxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGRhdGFGZXRjaFJlZHVjZXIsIHtcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGhhc0Vycm9yZWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcclxuICAgIH0pO1xyXG4gICAgLy8gdXNlRWZmZWN0IGhvb2sgdGhhdCBleGVjdXRlcyB3aGVuIHRoZSBjb21wb25lbnQgZmlyc3QgaXMgY2FsbGVkIHdpdGggYW4gYXN5bmMgZnVuY3Rpb24gdG8gc2F0aXNmeSB1c2VFZmZlY3QgcnVsZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpZENhbmNlbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaCB0byByZWR1Y2VyXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9JTklUXCJ9KTtcclxuICAgICAgICAgICAgLy8gdHJ5IHRvIGZldGNoIGRhdGEgd2l0aCBheGlvc1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgc3VjY2VzcyBkaXNwYXRjaCBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpZENhbmNlbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfU1VDQ0VTU1wiLCBwYXlsb2FkOiByZXN1bHQuZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBkaXNwYXRjaCBmYWlsdXJlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpZENhbmNlbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX0ZBSUxVUkVcIn0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjYWxsIGFzeW5jIGZ1bmN0aW9uXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpZENhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1cmxdKTtcclxuICAgIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvbmUgZGF0YSByZWNvcmRcclxuICAgIGNvbnN0IHVwZGF0ZVJlY29yZCA9IHJlY29yZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlJFUExBQ0VfREFUQVwiLFxyXG4gICAgICAgICAgICByZXBsYWNlcmVjb3JkOiByZWNvcmRcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyByZXR1cm4gYWxsIHRoZSBhdHRyaWJ1dGVzIG9mIHN0YXRlIGFuZCB1cGRhdGVSZWNvcmQgZnVuY3Rpb25cclxuICAgIHJldHVybiB7IC4uLnN0YXRlLCB1cGRhdGVSZWNvcmR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXhpb3NGZXRjaDsgICAiXSwic291cmNlUm9vdCI6IiJ9