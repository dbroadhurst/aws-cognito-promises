(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("amazon-cognito-identity-js"), require("aws-sdk"));
	else if(typeof define === 'function' && define.amd)
		define(["amazon-cognito-identity-js", "aws-sdk"], factory);
	else if(typeof exports === 'object')
		exports["aws-cognito-promises"] = factory(require("amazon-cognito-identity-js"), require("aws-sdk"));
	else
		root["aws-cognito-promises"] = factory(root["amazon-cognito-identity-js"], root["aws-sdk"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.getUserPool = exports.get = exports.set = undefined;

var _awsSdk = __webpack_require__(5);

var _amazonCognitoIdentityJs = __webpack_require__(1);

var appConfig = void 0;
var userPool = void 0;

var set = exports.set = function set(config) {
  appConfig = config;

  _awsSdk.Config.region = appConfig.region;
  _awsSdk.Config.credentials = new _awsSdk.CognitoIdentityCredentials({
    IdentityPoolId: appConfig.IdentityPoolId
  });

  userPool = new _amazonCognitoIdentityJs.CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId
  });
};

var get = exports.get = function get() {
  return appConfig;
};

var getUserPool = exports.getUserPool = function getUserPool() {
  return userPool;
};

var getUser = exports.getUser = function getUser() {
  return userPool.getCurrentUser();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.changePassword = exports.forgotPassword = exports.getSession = exports.signOut = exports.signIn = exports.confirmation = exports.register = undefined;

var _register = __webpack_require__(4);

var _register2 = _interopRequireDefault(_register);

var _confirmation = __webpack_require__(6);

var _confirmation2 = _interopRequireDefault(_confirmation);

var _authenticate = __webpack_require__(7);

var _authenticate2 = _interopRequireDefault(_authenticate);

var _signOut = __webpack_require__(8);

var _signOut2 = _interopRequireDefault(_signOut);

var _getSession = __webpack_require__(9);

var _getSession2 = _interopRequireDefault(_getSession);

var _forgotPassword = __webpack_require__(10);

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _changePassword = __webpack_require__(11);

var _changePassword2 = _interopRequireDefault(_changePassword);

var _config = __webpack_require__(0);

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.register = _register2.default;
exports.confirmation = _confirmation2.default;
exports.signIn = _authenticate2.default;
exports.signOut = _signOut2.default;
exports.getSession = _getSession2.default;
exports.forgotPassword = _forgotPassword2.default;
exports.changePassword = _changePassword2.default;
exports.config = config;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (email, password) {
  var userPool = (0, _config.getUserPool)();

  var attributeList = [new _amazonCognitoIdentityJs.CognitoUserAttribute({
    Name: 'email',
    Value: email
  })];
  return new Promise(function (resolve, reject) {
    userPool.signUp(email, password, attributeList, null, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

var _amazonCognitoIdentityJs = __webpack_require__(1);

var _config = __webpack_require__(0);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (email, code) {
  var userData = {
    Username: email,
    Pool: (0, _config.getUserPool)()
  };

  var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

  return new Promise(function (resolve, reject) {
    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

var _amazonCognitoIdentityJs = __webpack_require__(1);

var _config = __webpack_require__(0);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (username, password) {
  var authenticationData = {
    Username: username,
    Password: password
  };
  var authenticationDetails = new _amazonCognitoIdentityJs.AuthenticationDetails(authenticationData);

  var userData = {
    Username: username,
    Pool: (0, _config.getUserPool)()
  };

  var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

  return new Promise(function (resolve, reject) {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function onSuccess(result) {
        resolve(result);
      },
      onFailure: function onFailure(err) {
        reject(err);
      }
    });
  });
};

var _amazonCognitoIdentityJs = __webpack_require__(1);

var _config = __webpack_require__(0);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var cognitoUser = (0, _config.getUser)();

  if (cognitoUser) {
    cognitoUser.signOut();
    Promise.resolve();
  } else {
    throw new Error('no cognitiveUser value');
  }
};

var _config = __webpack_require__(0);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var cognitoUser = (0, _config.getUser)();

  if (cognitoUser) {
    return new Promise(function (resolve, reject) {
      cognitoUser.getSession(function (err, session) {
        if (err) {
          reject(err);
        } else {
          resolve(session);
        }
      });
    });
  } else {
    throw new Error('no cognitiveUser value');
  }
};

var _config = __webpack_require__(0);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (username) {
  var userData = {
    Username: username,
    Pool: (0, _config.getUserPool)()
  };

  var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

  return new Promise(function (resolve, reject) {
    cognitoUser.forgotPassword({
      onSuccess: function onSuccess(result) {
        resolve(result);
      },
      onFailure: function onFailure(err) {
        reject(err);
      }
    });
  });
};

var _amazonCognitoIdentityJs = __webpack_require__(1);

var _config = __webpack_require__(0);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (username, code, password) {
  var userData = {
    Username: username,
    Pool: (0, _config.getUserPool)()
  };

  var cognitoUser = new _amazonCognitoIdentityJs.CognitoUser(userData);

  return new Promise(function (resolve, reject) {
    cognitoUser.confirmPassword(code, password, {
      onSuccess: function onSuccess(result) {
        resolve(result);
      },
      onFailure: function onFailure(err) {
        reject(err);
      }
    });
  });
};

var _amazonCognitoIdentityJs = __webpack_require__(1);

var _config = __webpack_require__(0);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map