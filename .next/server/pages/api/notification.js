"use strict";
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
exports.id = "pages/api/notification";
exports.ids = ["pages/api/notification"];
exports.modules = {

/***/ "web-push":
/*!***************************!*\
  !*** external "web-push" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("web-push");

/***/ }),

/***/ "(api)/./pages/api/notification.js":
/*!***********************************!*\
  !*** ./pages/api/notification.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst webPush = __webpack_require__(/*! web-push */ \"web-push\");\nwebPush.setGCMAPIKey(process.env.GCM_API_KEY);\nconst vapidKeys = webPush.generateVAPIDKeys();\nwebPush.setVapidDetails(`mailto:${process.env.WEB_PUSH_EMAIL}`, \"BHJu_YC1vdrONW4gDgxItVgXV2Zwjc8Wwzh1yCUsMQMw7iXYj5D1_KTMHBEVqMVcZG5n_W6Fw1rrxuC6ppPbv4I\", process.env.WEB_PUSH_PRIVATE_KEY);\nconsole.log(\"vapidKeys\", vapidKeys);\n//   `mailto:${process.env.WEB_PUSH_EMAIL}`,\n//   process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,\n//   process.env.WEB_PUSH_PRIVATE_KEY\n// )\nconst Notification = (req, res)=>{\n    if (req.method == \"POST\") {\n        const { subscription  } = req.body;\n        webPush.sendNotification(subscription, JSON.stringify({\n            title: \"Hello Web Push\",\n            message: \"Your web push notification is here!\"\n        })).then((response)=>{\n            res.writeHead(response.statusCode, response.headers).end(response.body);\n        }).catch((err)=>{\n            if (\"statusCode\" in err) {\n                res.writeHead(err.statusCode, err.headers).end(err.body);\n            } else {\n                console.error(err);\n                res.statusCode = 500;\n                res.end();\n            }\n        });\n    } else {\n        res.statusCode = 405;\n        res.end();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aWZpY2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUVuQ0QsT0FBTyxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsQ0FBQztBQUM5QyxNQUFNQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ08saUJBQWlCLEVBQUU7QUFDN0NQLE9BQU8sQ0FBQ1EsZUFBZSxDQUNyQixDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGNBQWMsQ0FBQyxDQUFDLEVBQ3RDTix5RkFBMkMsRUFDM0NBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxvQkFBb0IsQ0FDakMsQ0FBQztBQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVQLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLDRDQUE0QztBQUM1QyxpREFBaUQ7QUFDakQscUNBQXFDO0FBQ3JDLElBQUk7QUFFSixNQUFNUSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ3hCLE1BQU0sRUFBRUMsWUFBWSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVqQ25CLE9BQU8sQ0FDSm9CLGdCQUFnQixDQUNmRixZQUFZLEVBQ1pHLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQ2JDLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkJDLE9BQU8sRUFBRSxxQ0FBcUM7U0FDL0MsQ0FBQyxDQUNILENBQ0FDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7WUFDbEJWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDRCxRQUFRLENBQUNFLFVBQVUsRUFBRUYsUUFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUNQLElBQUksQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUNEWSxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2QsSUFBSSxZQUFZLElBQUlBLEdBQUcsRUFBRTtnQkFDdkJoQixHQUFHLENBQUNXLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDSixVQUFVLEVBQUVJLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDYixJQUFJLENBQUMsQ0FBQztZQUMzRCxPQUFPO2dCQUNMUCxPQUFPLENBQUNxQixLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUFDO2dCQUNuQmhCLEdBQUcsQ0FBQ1ksVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDckJaLEdBQUcsQ0FBQ2MsR0FBRyxFQUFFLENBQUM7WUFDWixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxPQUFPO1FBQ0xkLEdBQUcsQ0FBQ1ksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQlosR0FBRyxDQUFDYyxHQUFHLEVBQUUsQ0FBQztJQUNaLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVoQixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXB3YS1leGFtcGxlLy4vcGFnZXMvYXBpL25vdGlmaWNhdGlvbi5qcz8wM2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYlB1c2ggPSByZXF1aXJlKCd3ZWItcHVzaCcpO1xuXG53ZWJQdXNoLnNldEdDTUFQSUtleShwcm9jZXNzLmVudi5HQ01fQVBJX0tFWSk7XG5jb25zdCB2YXBpZEtleXMgPSB3ZWJQdXNoLmdlbmVyYXRlVkFQSURLZXlzKCk7XG53ZWJQdXNoLnNldFZhcGlkRGV0YWlscyhcbiAgYG1haWx0bzoke3Byb2Nlc3MuZW52LldFQl9QVVNIX0VNQUlMfWAsXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dFQl9QVVNIX1BVQkxJQ19LRVksXG4gIHByb2Nlc3MuZW52LldFQl9QVVNIX1BSSVZBVEVfS0VZXG4pO1xuY29uc29sZS5sb2coJ3ZhcGlkS2V5cycsIHZhcGlkS2V5cyk7XG4vLyAgIGBtYWlsdG86JHtwcm9jZXNzLmVudi5XRUJfUFVTSF9FTUFJTH1gLFxuLy8gICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XRUJfUFVTSF9QVUJMSUNfS0VZLFxuLy8gICBwcm9jZXNzLmVudi5XRUJfUFVTSF9QUklWQVRFX0tFWVxuLy8gKVxuXG5jb25zdCBOb3RpZmljYXRpb24gPSAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBzdWJzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xuXG4gICAgd2ViUHVzaFxuICAgICAgLnNlbmROb3RpZmljYXRpb24oXG4gICAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRpdGxlOiAnSGVsbG8gV2ViIFB1c2gnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdZb3VyIHdlYiBwdXNoIG5vdGlmaWNhdGlvbiBpcyBoZXJlIScsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzLndyaXRlSGVhZChyZXNwb25zZS5zdGF0dXNDb2RlLCByZXNwb25zZS5oZWFkZXJzKS5lbmQocmVzcG9uc2UuYm9keSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKCdzdGF0dXNDb2RlJyBpbiBlcnIpIHtcbiAgICAgICAgICByZXMud3JpdGVIZWFkKGVyci5zdGF0dXNDb2RlLCBlcnIuaGVhZGVycykuZW5kKGVyci5ib2R5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcbiAgICByZXMuZW5kKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiJdLCJuYW1lcyI6WyJ3ZWJQdXNoIiwicmVxdWlyZSIsInNldEdDTUFQSUtleSIsInByb2Nlc3MiLCJlbnYiLCJHQ01fQVBJX0tFWSIsInZhcGlkS2V5cyIsImdlbmVyYXRlVkFQSURLZXlzIiwic2V0VmFwaWREZXRhaWxzIiwiV0VCX1BVU0hfRU1BSUwiLCJORVhUX1BVQkxJQ19XRUJfUFVTSF9QVUJMSUNfS0VZIiwiV0VCX1BVU0hfUFJJVkFURV9LRVkiLCJjb25zb2xlIiwibG9nIiwiTm90aWZpY2F0aW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3Vic2NyaXB0aW9uIiwiYm9keSIsInNlbmROb3RpZmljYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJtZXNzYWdlIiwidGhlbiIsInJlc3BvbnNlIiwid3JpdGVIZWFkIiwic3RhdHVzQ29kZSIsImhlYWRlcnMiLCJlbmQiLCJjYXRjaCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/notification.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notification.js"));
module.exports = __webpack_exports__;

})();