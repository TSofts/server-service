webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _reactDom = __webpack_require__(158);

	var _reactRouter = __webpack_require__(159);

	var _viewsCarsHeaderpage = __webpack_require__(206);

	var _viewsCarsHeaderpage2 = _interopRequireDefault(_viewsCarsHeaderpage);

	var _viewsCarsFooterpage = __webpack_require__(492);

	var _viewsCarsFooterpage2 = _interopRequireDefault(_viewsCarsFooterpage);

	var _viewsCarsWelcomepage = __webpack_require__(493);

	var _viewsCarsWelcomepage2 = _interopRequireDefault(_viewsCarsWelcomepage);

	__webpack_require__(648);
	__webpack_require__(649);
	__webpack_require__(653);
	__webpack_require__(655);

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', null, React.createElement(_viewsCarsHeaderpage2['default'], null), React.createElement('div', { className: 'container-body' }, this.props.children), React.createElement(_viewsCarsFooterpage2['default'], null));
	        }
	    }]);

	    return App;
	})(React.Component);

	(0, _reactDom.render)(React.createElement(_reactRouter.Router, null, React.createElement(_reactRouter.Route, { path: '/', component: App }, React.createElement(_reactRouter.IndexRoute, { component: _viewsCarsWelcomepage2['default'] }))), document.getElementById('content'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by Shawn on 15/11/19.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _reactRouter = __webpack_require__(159);

	var _reactBootstrap = __webpack_require__(207);

	var _altAltContainer = __webpack_require__(449);

	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);

	var _storeCarsHeaderstore = __webpack_require__(473);

	var _storeCarsHeaderstore2 = _interopRequireDefault(_storeCarsHeaderstore);

	var _storeCarsLoginstore = __webpack_require__(487);

	var _storeCarsLoginstore2 = _interopRequireDefault(_storeCarsLoginstore);

	var _actionCarsLoginaction = __webpack_require__(488);

	var _actionCarsLoginaction2 = _interopRequireDefault(_actionCarsLoginaction);

	var _actionCarsMainaction = __webpack_require__(490);

	var _actionCarsMainaction2 = _interopRequireDefault(_actionCarsMainaction);

	var _actionCarsHeaderaction = __webpack_require__(474);

	var _actionCarsHeaderaction2 = _interopRequireDefault(_actionCarsHeaderaction);

	var _imageTestPng = __webpack_require__(491);

	var _imageTestPng2 = _interopRequireDefault(_imageTestPng);

	var UserType = (function (_React$Component) {
	    _inherits(UserType, _React$Component);

	    function UserType() {
	        _classCallCheck(this, UserType);

	        _get(Object.getPrototypeOf(UserType.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(UserType, [{
	        key: 'getTypeText',
	        value: function getTypeText() {
	            var type = this.props.userType;
	            switch (type) {
	                case "owner":
	                    return "我是车主";
	                case "operator":
	                    return "我是技工";
	                default:
	                    return "other";

	            }
	        }
	    }, {
	        key: 'handleResetType',
	        value: function handleResetType() {
	            _actionCarsMainaction2['default'].updateCurrentTag('reset');
	            _actionCarsHeaderaction2['default'].updateUserType('');
	        }
	    }, {
	        key: 'getResetButton',
	        value: function getResetButton() {
	            return React.createElement(_reactBootstrap.Button, { className: 'cars-button', onClick: this.handleResetType.bind(this) }, React.createElement(_reactBootstrap.Glyphicon, { glyph: 'repeat' }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var typeText = this.getTypeText();
	            if (typeText == 'other') {
	                return React.createElement('div', null);
	            }

	            var button = this.getResetButton();
	            return React.createElement(_reactBootstrap.Input, { className: 'cars-input', type: 'text', bsSize: 'small', placeholder: typeText, readOnly: true, buttonAfter: button });
	        }
	    }]);

	    return UserType;
	})(React.Component);

	var LoginPanel = (function (_React$Component2) {
	    _inherits(LoginPanel, _React$Component2);

	    function LoginPanel() {
	        _classCallCheck(this, LoginPanel);

	        _get(Object.getPrototypeOf(LoginPanel.prototype), 'constructor', this).call(this);
	    }

	    _createClass(LoginPanel, [{
	        key: 'handleLoginProceed',
	        value: function handleLoginProceed() {
	            var user = {
	                username: this.refs.username.getValue(),
	                password: this.refs.password.getValue()
	            };
	            _storeCarsLoginstore2['default'].loginProceed(user);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('form', { className: 'header-loginform' }, React.createElement(_reactBootstrap.Input, { className: 'cars-input', ref: 'username', type: 'text', placeholder: '注册邮箱/用户名' }), React.createElement(_reactBootstrap.Input, { className: 'cars-input', ref: 'password', type: 'password', placeholder: '登陆密码' }), React.createElement(_reactBootstrap.MenuItem, { divider: true }), React.createElement('a', { style: { "float": "left" } }, '忘记密码'), React.createElement('a', { style: { "float": "right" } }, '免费注册'), React.createElement(_reactBootstrap.Button, { className: 'cars-button', onClick: this.handleLoginProceed.bind(this) }, _storeCarsLoginstore2['default'].isLoading() == true ? "登录中..." : "登陆"));
	        }
	    }]);

	    return LoginPanel;
	})(React.Component);

	var UserInfo = (function (_React$Component3) {
	    _inherits(UserInfo, _React$Component3);

	    function UserInfo() {
	        _classCallCheck(this, UserInfo);

	        _get(Object.getPrototypeOf(UserInfo.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(UserInfo, [{
	        key: 'getDropDownPanel',
	        value: function getDropDownPanel() {
	            if (this.props.isLogged) {
	                return React.createElement('div', null, this.props.user.username);
	            } else {
	                return React.createElement(LoginPanel, null);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dropDown = this.getDropDownPanel();
	            return React.createElement(_reactBootstrap.NavDropdown, { eventKey: 3, title: '', id: 'basic-nav-dropdown' }, dropDown);
	        }
	    }]);

	    return UserInfo;
	})(React.Component);

	var TopNav = (function (_React$Component4) {
	    _inherits(TopNav, _React$Component4);

	    function TopNav() {
	        _classCallCheck(this, TopNav);

	        _get(Object.getPrototypeOf(TopNav.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TopNav, [{
	        key: 'getUserType',
	        value: function getUserType() {
	            return React.createElement(_altAltContainer2['default'], { store: _storeCarsHeaderstore2['default'] }, React.createElement(UserType, null));
	        }
	    }, {
	        key: 'getUserInfo',
	        value: function getUserInfo() {
	            return React.createElement(_altAltContainer2['default'], { store: _storeCarsLoginstore2['default'] }, React.createElement(UserInfo, null));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var userType = this.getUserType();
	            var userInfo = this.getUserInfo();
	            return React.createElement(_reactBootstrap.Navbar, { inverse: true }, React.createElement(_reactBootstrap.Navbar.Header, null, React.createElement(_reactBootstrap.Navbar.Brand, null, 'Cars')), React.createElement(_reactBootstrap.Navbar.Collapse, null, React.createElement(_reactBootstrap.Nav, null), React.createElement(_reactBootstrap.Nav, { pullRight: true }, React.createElement(_reactBootstrap.NavItem, { eventKey: 1, href: '#' }, React.createElement('div', { className: 'header-type' }, userType)), userInfo)));
	        }
	    }]);

	    return TopNav;
	})(React.Component);

	var TopNavPage = (function (_React$Component5) {
	    _inherits(TopNavPage, _React$Component5);

	    function TopNavPage() {
	        _classCallCheck(this, TopNavPage);

	        _get(Object.getPrototypeOf(TopNavPage.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(TopNavPage, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(TopNav, null);
	        }
	    }]);

	    return TopNavPage;
	})(React.Component);

	exports['default'] = TopNavPage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.headerpage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(450)


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable*/
	/**
	 * AltContainer.
	 *
	 * There are many ways to use AltContainer.
	 *
	 * Using the `stores` prop.
	 *
	 * <AltContainer stores={{ FooStore: FooStore }}>
	 *   children get this.props.FooStore.storeData
	 * </AltContainer>
	 *
	 * You can also pass in functions.
	 *
	 * <AltContainer stores={{ FooStore: function () { return { storeData: true } } }}>
	 *   children get this.props.FooStore.storeData
	 * </AltContainer>
	 *
	 * Using the `store` prop.
	 *
	 * <AltContainer store={FooStore}>
	 *   children get this.props.storeData
	 * </AltContainer>
	 *
	 * Passing in `flux` because you're using alt instances
	 *
	 * <AltContainer flux={flux}>
	 *   children get this.props.flux
	 * </AltContainer>
	 *
	 * Using a custom render function.
	 *
	 * <AltContainer
	 *   render={function (props) {
	 *     return <div />;
	 *   }}
	 * />
	 *
	 * Using the `transform` prop.
	 *
	 * <AltContainer
	 *   stores={{ FooStore: FooStore, BarStore: BarStore }}
	 *   transform={function(stores) {
	 *     var FooStore = stores.FooStore;
	 *     var BarStore = stores.BarStore;
	 *     var products =
	 *       FooStore.products
	 *         .slice(0, 10)
	 *         .concat(BarStore.products);
	 *     return { products: products };
	 *   }}
	 * >
	 *   children get this.props.products
	 * </AltContainer>
	 *
	 * Full docs available at http://goatslacker.github.io/alt/
	 */
	var React = __webpack_require__(451)
	var mixinContainer = __webpack_require__(470)
	var assign = __webpack_require__(472).assign

	var AltContainer = React.createClass(assign({
	  displayName: 'AltContainer',

	  render: function () {
	    return this.altRender('div')
	  }
	}, mixinContainer(React)))

	module.exports = AltContainer


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var warning = __webpack_require__(25);
	warning(
	  false,
	  // Require examples in this string must be split to prevent React's
	  // build tools from mistaking them for real requires.
	  // Otherwise the build tools will attempt to build a 'react-addons-{addon}' module.
	  'require' + "('react/addons') is deprecated. " +
	  'Access using require' + "('react-addons-{addon}') instead."
	);

	module.exports = __webpack_require__(452);


/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */

	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */

	'use strict';

	var LinkedStateMixin = __webpack_require__(453);
	var React = __webpack_require__(2);
	var ReactComponentWithPureRenderMixin = __webpack_require__(456);
	var ReactCSSTransitionGroup = __webpack_require__(458);
	var ReactFragment = __webpack_require__(464);
	var ReactTransitionGroup = __webpack_require__(459);
	var ReactUpdates = __webpack_require__(54);

	var cloneWithProps = __webpack_require__(465);
	var shallowCompare = __webpack_require__(457);
	var update = __webpack_require__(468);
	var warning = __webpack_require__(25);

	var warnedAboutBatchedUpdates = false;

	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,

	  batchedUpdates: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(warnedAboutBatchedUpdates, 'React.addons.batchedUpdates is deprecated. Use ' + 'ReactDOM.unstable_batchedUpdates instead.') : undefined;
	      warnedAboutBatchedUpdates = true;
	    }
	    return ReactUpdates.batchedUpdates.apply(this, arguments);
	  },
	  cloneWithProps: cloneWithProps,
	  createFragment: ReactFragment.create,
	  shallowCompare: shallowCompare,
	  update: update
	};

	if (process.env.NODE_ENV !== 'production') {
	  React.addons.Perf = __webpack_require__(142);
	  React.addons.TestUtils = __webpack_require__(469);
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */

	'use strict';

	var ReactLink = __webpack_require__(454);
	var ReactStateSetters = __webpack_require__(455);

	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function (key) {
	    return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
	  }
	};

	module.exports = LinkedStateMixin;

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   _handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */

	var React = __webpack_require__(2);

	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}

	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ? React.PropTypes.any.isRequired : linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}

	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};

	module.exports = ReactLink;

/***/ },
/* 455 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */

	'use strict';

	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (component, funcReturningState) {
	    return function (a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};

	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}

	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};

	module.exports = ReactStateSetters;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(457);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(117);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(2);

	var assign = __webpack_require__(39);

	var ReactTransitionGroup = __webpack_require__(459);
	var ReactCSSTransitionGroupChild = __webpack_require__(461);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },

	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },

	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});

	module.exports = ReactCSSTransitionGroup;

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(2);
	var ReactTransitionChildMapping = __webpack_require__(460);

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(116);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);

	var CSSCore = __webpack_require__(462);
	var ReactTransitionEvents = __webpack_require__(463);

	var onlyChild = __webpack_require__(156);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClass: function (className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(13);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(9);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */

	'use strict';

	var ReactChildren = __webpack_require__(110);
	var ReactElement = __webpack_require__(42);

	var emptyFunction = __webpack_require__(15);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */

	var numericPropertyRegex = /^\d+$/;

	var warnedAboutNumeric = false;

	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }

	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;

	    var result = [];

	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }

	    return result;
	  }
	};

	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule cloneWithProps
	 */

	'use strict';

	var ReactElement = __webpack_require__(42);
	var ReactPropTransferer = __webpack_require__(466);

	var keyOf = __webpack_require__(79);
	var warning = __webpack_require__(25);

	var CHILDREN_PROP = keyOf({ children: null });

	var didDeprecatedWarn = false;

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {ReactElement} child child element you'd like to clone
	 * @param {object} props props you'd like to modify. className and style will be
	 * merged automatically.
	 * @return {ReactElement} a clone of child with props merged in.
	 * @deprecated
	 */
	function cloneWithProps(child, props) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(didDeprecatedWarn, 'cloneWithProps(...) is deprecated. ' + 'Please use React.cloneElement instead.') : undefined;
	    didDeprecatedWarn = true;
	    process.env.NODE_ENV !== 'production' ? warning(!child.ref, 'You are calling cloneWithProps() on a child with a ref. This is ' + 'dangerous because you\'re creating a new child which will not be ' + 'added as a ref to its parent.') : undefined;
	  }

	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) && child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  // The current API doesn't retain _owner, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}

	module.exports = cloneWithProps;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */

	'use strict';

	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var joinClasses = __webpack_require__(467);

	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function (props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}

	var transferStrategyMerge = createTransferStrategy(function (a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});

	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};

	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }

	    var transferStrategy = TransferStrategies[thisKey];

	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}

	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {

	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function (oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  }

	};

	module.exports = ReactPropTransferer;

/***/ },
/* 467 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var assign = __webpack_require__(39);
	var keyOf = __webpack_require__(79);
	var invariant = __webpack_require__(13);
	var hasOwnProperty = ({}).hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}

	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPropagators = __webpack_require__(73);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var ReactElement = __webpack_require__(42);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactCompositeComponent = __webpack_require__(63);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);
	var SyntheticEvent = __webpack_require__(77);

	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var findDOMNode = __webpack_require__(91);
	var invariant = __webpack_require__(13);

	var topLevelTypes = EventConstants.topLevelTypes;

	function Event(suffix) {}

	/**
	 * @class ReactTestUtils
	 */

	function findAllInRenderedTreeInternal(inst, test) {
	  if (!inst || !inst.getPublicInstance) {
	    return [];
	  }
	  var publicInst = inst.getPublicInstance();
	  var ret = test(publicInst) ? [publicInst] : [];
	  var currentElement = inst._currentElement;
	  if (ReactTestUtils.isDOMComponent(publicInst)) {
	    var renderedChildren = inst._renderedChildren;
	    var key;
	    for (key in renderedChildren) {
	      if (!renderedChildren.hasOwnProperty(key)) {
	        continue;
	      }
	      ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
	    }
	  } else if (ReactElement.isValidElement(currentElement) && typeof currentElement.type === 'function') {
	    ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
	  }
	  return ret;
	}

	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function (instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return ReactDOM.render(instance, div);
	  },

	  isElement: function (element) {
	    return ReactElement.isValidElement(element);
	  },

	  isElementOfType: function (inst, convenienceConstructor) {
	    return ReactElement.isValidElement(inst) && inst.type === convenienceConstructor;
	  },

	  isDOMComponent: function (inst) {
	    return !!(inst && inst.nodeType === 1 && inst.tagName);
	  },

	  isDOMComponentElement: function (inst) {
	    return !!(inst && ReactElement.isValidElement(inst) && !!inst.tagName);
	  },

	  isCompositeComponent: function (inst) {
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      // Accessing inst.setState warns; just return false as that'll be what
	      // this returns when we have DOM nodes as refs directly
	      return false;
	    }
	    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
	  },

	  isCompositeComponentWithType: function (inst, type) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return false;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;

	    return constructor === type;
	  },

	  isCompositeComponentElement: function (inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
	  },

	  isCompositeComponentElementWithType: function (inst, type) {
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;

	    return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
	  },

	  getRenderedChildOfCompositeComponent: function (inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },

	  findAllInRenderedTree: function (inst, test) {
	    if (!inst) {
	      return [];
	    }
	    !ReactTestUtils.isCompositeComponent(inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : invariant(false) : undefined;
	    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function (root, classNames) {
	    if (!Array.isArray(classNames)) {
	      classNames = classNames.split(/\s+/);
	    }
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      if (ReactTestUtils.isDOMComponent(inst)) {
	        var className = inst.className;
	        if (typeof className !== 'string') {
	          // SVG, probably.
	          className = inst.getAttribute('class') || '';
	        }
	        var classList = className.split(/\s+/);
	        return classNames.every(function (name) {
	          return classList.indexOf(name) !== -1;
	        });
	      }
	      return false;
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function (root, className) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match ' + '(found: ' + all.length + ') for class:' + className);
	    }
	    return all[0];
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function (root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function (root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },

	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function (root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
	    });
	  },

	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function (root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for componentType:' + componentType + ' (found ' + all.length + ')');
	    }
	    return all[0];
	  },

	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function (module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || 'div';

	    module.prototype.render.mockImplementation(function () {
	      return React.createElement(mockTagName, null, this.props.children);
	    });

	    return this;
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on an `Element` node.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on the `ReactDOMComponent` `comp`.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
	   * @param {!ReactDOMComponent} comp
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function (topLevelType, comp, fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
	  },

	  nativeTouchData: function (x, y) {
	    return {
	      touches: [{ pageX: x, pageY: y }]
	    };
	  },

	  createRenderer: function () {
	    return new ReactShallowRenderer();
	  },

	  Simulate: null,
	  SimulateNative: {}
	};

	/**
	 * @class ReactShallowRenderer
	 */
	var ReactShallowRenderer = function () {
	  this._instance = null;
	};

	ReactShallowRenderer.prototype.getRenderOutput = function () {
	  return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
	};

	var NoopInternalComponent = function (element) {
	  this._renderedOutput = element;
	  this._currentElement = element;
	};

	NoopInternalComponent.prototype = {

	  mountComponent: function () {},

	  receiveComponent: function (element) {
	    this._renderedOutput = element;
	    this._currentElement = element;
	  },

	  unmountComponent: function () {},

	  getPublicInstance: function () {
	    return null;
	  }
	};

	var ShallowComponentWrapper = function () {};
	assign(ShallowComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: function (element) {
	    return new NoopInternalComponent(element);
	  },
	  _replaceNodeWithMarkupByID: function () {},
	  _renderValidatedComponent: ReactCompositeComponent.Mixin._renderValidatedComponentWithoutOwnerOrContext
	});

	ReactShallowRenderer.prototype.render = function (element, context) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : invariant(false) : undefined;
	  !(typeof element.type !== 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom ' + 'components, not primitives (%s). Instead of calling `.render(el)` and ' + 'inspecting the rendered output, look at `el.props` directly instead.', element.type) : invariant(false) : undefined;

	  if (!context) {
	    context = emptyObject;
	  }
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);
	  this._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	};

	ReactShallowRenderer.prototype.unmount = function () {
	  if (this._instance) {
	    this._instance.unmountComponent();
	  }
	};

	ReactShallowRenderer.prototype._render = function (element, transaction, context) {
	  if (this._instance) {
	    this._instance.receiveComponent(element, transaction, context);
	  } else {
	    var rootID = ReactInstanceHandles.createReactRootID();
	    var instance = new ShallowComponentWrapper(element.type);
	    instance.construct(element);

	    instance.mountComponent(rootID, transaction, context);

	    this._instance = instance;
	  }
	};

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function (domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = findDOMNode(domComponentOrNode);
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }

	    var dispatchConfig = ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType];

	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(dispatchConfig, ReactMount.getID(node), fakeNativeEvent, node);
	    assign(event, eventData);

	    if (dispatchConfig.phasedRegistrationNames) {
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	    } else {
	      EventPropagators.accumulateDirectDispatches(event);
	    }

	    ReactUpdates.batchedUpdates(function () {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue(true);
	    });
	  };
	}

	function buildSimulators() {
	  ReactTestUtils.Simulate = {};

	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element|ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}

	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function () {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function () {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};

	buildSimulators();

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */

	function makeNativeSimulator(eventType) {
	  return function (domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
	    } else if (domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
	    }
	  };
	}

	Object.keys(topLevelTypes).forEach(function (eventType) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element|ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
	});

	module.exports = ReactTestUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable*/
	var Subscribe = __webpack_require__(471)
	var assign = __webpack_require__(472).assign

	function id(it) {
	  return it
	}

	function getStateFromStore(store, props) {
	  return typeof store === 'function' ? store(props).value : store.getState()
	}

	function getStateFromKey(actions, props) {
	  return typeof actions === 'function' ? actions(props) : actions
	}

	function mixinContainer(React) {
	  var cloneWithProps = React.addons.cloneWithProps

	  return {
	    contextTypes: {
	      flux: React.PropTypes.object
	    },

	    childContextTypes: {
	      flux: React.PropTypes.object
	    },

	    getChildContext: function () {
	      var flux = this.props.flux || this.context.flux
	      return flux ? { flux: flux } : {}
	    },

	    getInitialState: function () {
	      if (this.props.stores && this.props.store) {
	        throw new ReferenceError('Cannot define both store and stores')
	      }

	      return this.reduceState(this.props)
	    },

	    componentWillReceiveProps: function (nextProps) {
	      this.destroySubscriptions()
	      this.setState(this.reduceState(nextProps))
	      this.registerStores(nextProps)
	    },

	    componentDidMount: function () {
	      this.registerStores(this.props)
	      if (this.props.onMount) this.props.onMount(this.props, this.context)
	    },

	    componentWillUnmount: function () {
	      this.destroySubscriptions()
	    },

	    registerStores: function (props) {
	      var stores = props.stores
	      Subscribe.create(this)

	      if (props.store) {
	        this.addSubscription(props.store)
	      } else if (props.stores) {
	        if (Array.isArray(stores)) {
	          stores.forEach(function (store) {
	            this.addSubscription(store)
	          }, this)
	        } else {
	          Object.keys(stores).forEach(function (formatter) {
	            this.addSubscription(stores[formatter])
	          }, this)
	        }
	      }
	    },

	    destroySubscriptions: function () {
	      Subscribe.destroy(this)
	    },

	    getStateFromStores: function (props) {
	      var stores = props.stores
	      if (props.store) {
	        return getStateFromStore(props.store, props)
	      } else if (props.stores) {
	        // If you pass in an array of stores then we are just listening to them
	        // it should be an object then the state is added to the key specified
	        if (!Array.isArray(stores)) {
	          return Object.keys(stores).reduce(function (obj, key) {
	            obj[key] = getStateFromStore(stores[key], props)
	            return obj
	          }, {})
	        }
	      } else {
	        return {}
	      }
	    },

	    getStateFromActions: function (props) {
	      if (props.actions) {
	        return getStateFromKey(props.actions, props)
	      } else {
	        return {}
	      }
	    },

	    getInjected: function (props) {
	      if (props.inject) {
	        return Object.keys(props.inject).reduce(function (obj, key) {
	          obj[key] = getStateFromKey(props.inject[key], props)
	          return obj
	        }, {})
	      } else {
	        return {}
	      }
	    },

	    reduceState: function (props) {
	      return assign(
	        {},
	        this.getStateFromStores(props),
	        this.getStateFromActions(props),
	        this.getInjected(props)
	      )
	    },

	    addSubscription: function (store) {
	      if (typeof store === 'function') {
	        Subscribe.add(this, store(this.props).store, this.altSetState)
	      } else {
	        Subscribe.add(this, store, this.altSetState)
	      }
	    },

	    altSetState: function () {
	      this.setState(this.reduceState(this.props))
	    },

	    getProps: function () {
	      var flux = this.props.flux || this.context.flux
	      var transform = typeof this.props.transform === 'function'
	        ? this.props.transform
	        : id
	      return transform(assign(
	        flux ? { flux: flux } : {},
	        this.state
	      ))
	    },

	    shouldComponentUpdate: function () {
	      return this.props.shouldComponentUpdate
	        ? this.props.shouldComponentUpdate(this.getProps())
	        : true
	    },

	    altRender: function (Node) {
	      var children = this.props.children
	      // Custom rendering function
	      if (typeof this.props.render === 'function') {
	        return this.props.render(this.getProps())
	      } else if (this.props.component) {
	        return React.createElement(this.props.component, this.getProps())
	      }

	      // Does not wrap child in a div if we don't have to.
	      if (Array.isArray(children)) {
	        return React.createElement(Node, null, children.map(function (child, i) {
	          return cloneWithProps(child, assign({ key: i }, this.getProps()))
	        }, this))
	      } else if (children) {
	        return cloneWithProps(children, this.getProps())
	      } else {
	        return React.createElement(Node, this.getProps())
	      }
	    }
	  }
	}

	module.exports = mixinContainer


/***/ },
/* 471 */
/***/ function(module, exports) {

	'use strict'

	var Subscribe = {
	  create: function (context) {
	    context._AltMixinRegistry = context._AltMixinRegistry || []
	  },

	  add: function (context, store, handler) {
	    context._AltMixinRegistry.push(store.listen(handler))
	  },

	  destroy: function (context) {
	    context._AltMixinRegistry.forEach(function (f) { f() })
	    context._AltMixinRegistry = []
	  },

	  listeners: function (context) {
	    return context._AltMixinRegistry
	  }
	}

	module.exports = Subscribe


/***/ },
/* 472 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isMutableObject = isMutableObject;
	exports.isPromise = isPromise;
	exports.eachObject = eachObject;
	exports.assign = assign;
	var isFunction = function isFunction(x) {
	  return typeof x === 'function';
	};

	exports.isFunction = isFunction;

	function isMutableObject(target) {
	  var Ctor = target.constructor;

	  return !!target && typeof target === 'object' && !Object.isFrozen(target) && Object.prototype.toString.call(target) === '[object Object]' && isFunction(Ctor) && (Ctor instanceof Ctor || target.type === 'AltStore');
	}

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}

	function eachObject(f, o) {
	  o.forEach(function (from) {
	    Object.keys(Object(from)).forEach(function (key) {
	      f(key, from[key]);
	    });
	  });
	}

	function assign(target) {
	  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    source[_key - 1] = arguments[_key];
	  }

	  eachObject(function (key, value) {
	    return target[key] = value;
	  }, source);
	  return target;
	}

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _actionCarsHeaderaction = __webpack_require__(474);

	var _actionCarsHeaderaction2 = _interopRequireDefault(_actionCarsHeaderaction);

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var HeaderStore = (function () {
	    function HeaderStore() {
	        _classCallCheck(this, HeaderStore);

	        this.headerState = "";

	        this.bindListeners({
	            handleUpdateUserType: _actionCarsHeaderaction2['default'].updateUserType
	        });
	    }

	    _createClass(HeaderStore, [{
	        key: 'handleUpdateUserType',
	        value: function handleUpdateUserType(type) {
	            this.userType = type;
	        }
	    }]);

	    return HeaderStore;
	})();

	exports['default'] = _alt2['default'].createStore(HeaderStore, 'HeaderStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.headerstore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var HeaderActions = (function () {
	    function HeaderActions() {
	        _classCallCheck(this, HeaderActions);
	    }

	    _createClass(HeaderActions, [{
	        key: 'updateUserType',
	        value: function updateUserType(type) {
	            this.dispatch(type);
	        }
	    }]);

	    return HeaderActions;
	})();

	exports['default'] = _alt2['default'].createActions(HeaderActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.headeraction.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by abby on 15/11/27.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _alt = __webpack_require__(476);

	var _alt2 = _interopRequireDefault(_alt);

	var alt = new _alt2['default']();

	exports['default'] = alt;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	/* global window */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _flux = __webpack_require__(477);

	var _utilsStateFunctions = __webpack_require__(480);

	var StateFunctions = _interopRequireWildcard(_utilsStateFunctions);

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	var _store = __webpack_require__(481);

	var store = _interopRequireWildcard(_store);

	var _utilsAltUtils = __webpack_require__(482);

	var utils = _interopRequireWildcard(_utilsAltUtils);

	var _actions = __webpack_require__(486);

	var _actions2 = _interopRequireDefault(_actions);

	var Alt = (function () {
	  function Alt() {
	    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Alt);

	    this.config = config;
	    this.serialize = config.serialize || JSON.stringify;
	    this.deserialize = config.deserialize || JSON.parse;
	    this.dispatcher = config.dispatcher || new _flux.Dispatcher();
	    this.batchingFunction = config.batchingFunction || function (callback) {
	      return callback();
	    };
	    this.actions = { global: {} };
	    this.stores = {};
	    this.storeTransforms = config.storeTransforms || [];
	    this.trapAsync = false;
	    this._actionsRegistry = {};
	    this._initSnapshot = {};
	    this._lastSnapshot = {};
	  }

	  _createClass(Alt, [{
	    key: 'dispatch',
	    value: function dispatch(action, data, details) {
	      var _this = this;

	      this.batchingFunction(function () {
	        var id = Math.random().toString(18).substr(2, 16);

	        // support straight dispatching of FSA-style actions
	        if (action.hasOwnProperty('type') && action.hasOwnProperty('payload')) {
	          var fsaDetails = {
	            id: action.type,
	            namespace: action.type,
	            name: action.type
	          };
	          return _this.dispatcher.dispatch(utils.fsa(id, action.type, action.payload, fsaDetails));
	        }

	        if (action.id && action.dispatch) {
	          return utils.dispatch(id, action, data, _this);
	        }

	        return _this.dispatcher.dispatch(utils.fsa(id, action, data, details));
	      });
	    }
	  }, {
	    key: 'createUnsavedStore',
	    value: function createUnsavedStore(StoreModel) {
	      var key = StoreModel.displayName || '';
	      store.createStoreConfig(this.config, StoreModel);
	      var Store = store.transformStore(this.storeTransforms, StoreModel);

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);
	    }
	  }, {
	    key: 'createStore',
	    value: function createStore(StoreModel, iden) {
	      var key = iden || StoreModel.displayName || StoreModel.name || '';
	      store.createStoreConfig(this.config, StoreModel);
	      var Store = store.transformStore(this.storeTransforms, StoreModel);

	      /* istanbul ignore next */
	      if (false) delete this.stores[key];

	      if (this.stores[key] || !key) {
	        if (this.stores[key]) {
	          utils.warn('A store named ' + key + ' already exists, double check your store ' + 'names or pass in your own custom identifier for each store');
	        } else {
	          utils.warn('Store name was not specified');
	        }

	        key = utils.uid(this.stores, key);
	      }

	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      var storeInstance = fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);

	      this.stores[key] = storeInstance;
	      StateFunctions.saveInitialSnapshot(this, key);

	      return storeInstance;
	    }
	  }, {
	    key: 'generateActions',
	    value: function generateActions() {
	      var actions = { name: 'global' };

	      for (var _len3 = arguments.length, actionNames = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        actionNames[_key3] = arguments[_key3];
	      }

	      return this.createActions(actionNames.reduce(function (obj, action) {
	        obj[action] = utils.dispatchIdentity;
	        return obj;
	      }, actions));
	    }
	  }, {
	    key: 'createAction',
	    value: function createAction(name, implementation, obj) {
	      return (0, _actions2['default'])(this, 'global', name, implementation, obj);
	    }
	  }, {
	    key: 'createActions',
	    value: function createActions(ActionsClass) {
	      var _arguments2 = arguments,
	          _this2 = this;

	      var exportObj = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var actions = {};
	      var key = utils.uid(this._actionsRegistry, ActionsClass.displayName || ActionsClass.name || 'Unknown');

	      if (fn.isFunction(ActionsClass)) {
	        var _len4, argsForConstructor, _key4;

	        (function () {
	          fn.assign(actions, utils.getInternalMethods(ActionsClass, true));

	          var ActionsGenerator = (function (_ActionsClass) {
	            _inherits(ActionsGenerator, _ActionsClass);

	            function ActionsGenerator() {
	              _classCallCheck(this, ActionsGenerator);

	              for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                args[_key5] = arguments[_key5];
	              }

	              _get(Object.getPrototypeOf(ActionsGenerator.prototype), 'constructor', this).apply(this, args);
	            }

	            _createClass(ActionsGenerator, [{
	              key: 'generateActions',
	              value: function generateActions() {
	                for (var _len6 = arguments.length, actionNames = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                  actionNames[_key6] = arguments[_key6];
	                }

	                actionNames.forEach(function (actionName) {
	                  actions[actionName] = utils.dispatchIdentity;
	                });
	              }
	            }]);

	            return ActionsGenerator;
	          })(ActionsClass);

	          for (_len4 = _arguments2.length, argsForConstructor = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	            argsForConstructor[_key4 - 2] = _arguments2[_key4];
	          }

	          fn.assign(actions, new (_bind.apply(ActionsGenerator, [null].concat(_toConsumableArray(argsForConstructor))))());
	        })();
	      } else {
	        fn.assign(actions, ActionsClass);
	      }

	      this.actions[key] = this.actions[key] || {};

	      fn.eachObject(function (actionName, action) {
	        if (!fn.isFunction(action)) {
	          return;
	        }

	        // create the action
	        exportObj[actionName] = (0, _actions2['default'])(_this2, key, actionName, action, exportObj);

	        // generate a constant
	        var constant = utils.formatAsConstant(actionName);
	        exportObj[constant] = exportObj[actionName].id;
	      }, [actions]);
	      return exportObj;
	    }
	  }, {
	    key: 'takeSnapshot',
	    value: function takeSnapshot() {
	      for (var _len7 = arguments.length, storeNames = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        storeNames[_key7] = arguments[_key7];
	      }

	      var state = StateFunctions.snapshot(this, storeNames);
	      fn.assign(this._lastSnapshot, state);
	      return this.serialize(state);
	    }
	  }, {
	    key: 'rollback',
	    value: function rollback() {
	      StateFunctions.setAppState(this, this.serialize(this._lastSnapshot), function (storeInst) {
	        storeInst.lifecycle('rollback');
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'recycle',
	    value: function recycle() {
	      for (var _len8 = arguments.length, storeNames = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        storeNames[_key8] = arguments[_key8];
	      }

	      var initialSnapshot = storeNames.length ? StateFunctions.filterSnapshots(this, this._initSnapshot, storeNames) : this._initSnapshot;

	      StateFunctions.setAppState(this, this.serialize(initialSnapshot), function (storeInst) {
	        storeInst.lifecycle('init');
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      var state = this.serialize(StateFunctions.snapshot(this));
	      this.recycle();
	      return state;
	    }
	  }, {
	    key: 'bootstrap',
	    value: function bootstrap(data) {
	      StateFunctions.setAppState(this, data, function (storeInst, state) {
	        storeInst.lifecycle('bootstrap', state);
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'prepare',
	    value: function prepare(storeInst, payload) {
	      var data = {};
	      if (!storeInst.displayName) {
	        throw new ReferenceError('Store provided does not have a name');
	      }
	      data[storeInst.displayName] = payload;
	      return this.serialize(data);
	    }

	    // Instance type methods for injecting alt into your application as context

	  }, {
	    key: 'addActions',
	    value: function addActions(name, ActionsClass) {
	      for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
	        args[_key9 - 2] = arguments[_key9];
	      }

	      this.actions[name] = Array.isArray(ActionsClass) ? this.generateActions.apply(this, ActionsClass) : this.createActions.apply(this, [ActionsClass].concat(args));
	    }
	  }, {
	    key: 'addStore',
	    value: function addStore(name, StoreModel) {
	      for (var _len10 = arguments.length, args = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
	        args[_key10 - 2] = arguments[_key10];
	      }

	      this.createStore.apply(this, [StoreModel, name].concat(args));
	    }
	  }, {
	    key: 'getActions',
	    value: function getActions(name) {
	      return this.actions[name];
	    }
	  }, {
	    key: 'getStore',
	    value: function getStore(name) {
	      return this.stores[name];
	    }
	  }], [{
	    key: 'debug',
	    value: function debug(name, alt) {
	      var key = 'alt.js.org';
	      if (typeof window !== 'undefined') {
	        window[key] = window[key] || [];
	        window[key].push({ name: name, alt: alt });
	      }
	      return alt;
	    }
	  }]);

	  return Alt;
	})();

	exports['default'] = Alt;
	module.exports = exports['default'];

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(478)


/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */

	"use strict";

	var invariant = __webpack_require__(479);

	var _lastID = 1;
	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };


	module.exports = Dispatcher;


/***/ },
/* 479 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.setAppState = setAppState;
	exports.snapshot = snapshot;
	exports.saveInitialSnapshot = saveInitialSnapshot;
	exports.filterSnapshots = filterSnapshots;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	function setAppState(instance, data, onStore) {
	  var obj = instance.deserialize(data);
	  fn.eachObject(function (key, value) {
	    var store = instance.stores[key];
	    if (store) {
	      (function () {
	        var config = store.StoreModel.config;

	        var state = store.state;
	        if (config.onDeserialize) obj[key] = config.onDeserialize(value) || value;
	        if (fn.isMutableObject(state)) {
	          fn.eachObject(function (k) {
	            return delete state[k];
	          }, [state]);
	          fn.assign(state, obj[key]);
	        } else {
	          store.state = obj[key];
	        }
	        onStore(store, store.state);
	      })();
	    }
	  }, [obj]);
	}

	function snapshot(instance) {
	  var storeNames = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  var stores = storeNames.length ? storeNames : Object.keys(instance.stores);
	  return stores.reduce(function (obj, storeHandle) {
	    var storeName = storeHandle.displayName || storeHandle;
	    var store = instance.stores[storeName];
	    var config = store.StoreModel.config;

	    store.lifecycle('snapshot');
	    var customSnapshot = config.onSerialize && config.onSerialize(store.state);
	    obj[storeName] = customSnapshot ? customSnapshot : store.getState();
	    return obj;
	  }, {});
	}

	function saveInitialSnapshot(instance, key) {
	  var state = instance.deserialize(instance.serialize(instance.stores[key].state));
	  instance._initSnapshot[key] = state;
	  instance._lastSnapshot[key] = state;
	}

	function filterSnapshots(instance, state, stores) {
	  return stores.reduce(function (obj, store) {
	    var storeName = store.displayName || store;
	    if (!state[storeName]) {
	      throw new ReferenceError(storeName + ' is not a valid store');
	    }
	    obj[storeName] = state[storeName];
	    return obj;
	  }, {});
	}

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	exports.createStoreConfig = createStoreConfig;
	exports.transformStore = transformStore;
	exports.createStoreFromObject = createStoreFromObject;
	exports.createStoreFromClass = createStoreFromClass;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsAltUtils = __webpack_require__(482);

	var utils = _interopRequireWildcard(_utilsAltUtils);

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	var _AltStore = __webpack_require__(483);

	var _AltStore2 = _interopRequireDefault(_AltStore);

	var _StoreMixin = __webpack_require__(485);

	var _StoreMixin2 = _interopRequireDefault(_StoreMixin);

	function doSetState(store, storeInstance, state) {
	  if (!state) {
	    return;
	  }

	  var config = storeInstance.StoreModel.config;

	  var nextState = fn.isFunction(state) ? state(storeInstance.state) : state;

	  storeInstance.state = config.setState.call(store, storeInstance.state, nextState);

	  if (!store.alt.dispatcher.isDispatching()) {
	    store.emitChange();
	  }
	}

	function createPrototype(proto, alt, key, extras) {
	  return fn.assign(proto, _StoreMixin2['default'], {
	    displayName: key,
	    alt: alt,
	    dispatcher: alt.dispatcher,
	    preventDefault: function preventDefault() {
	      this.getInstance().preventDefault = true;
	    },
	    boundListeners: [],
	    lifecycleEvents: {},
	    actionListeners: {},
	    actionListenerHandlers: {},
	    publicMethods: {},
	    handlesOwnErrors: false
	  }, extras);
	}

	function createStoreConfig(globalConfig, StoreModel) {
	  StoreModel.config = fn.assign({
	    getState: function getState(state) {
	      if (Array.isArray(state)) {
	        return state.slice();
	      } else if (fn.isMutableObject(state)) {
	        return fn.assign({}, state);
	      }

	      return state;
	    },
	    setState: function setState(currentState, nextState) {
	      if (fn.isMutableObject(nextState)) {
	        return fn.assign(currentState, nextState);
	      }
	      return nextState;
	    }
	  }, globalConfig, StoreModel.config);
	}

	function transformStore(transforms, StoreModel) {
	  return transforms.reduce(function (Store, transform) {
	    return transform(Store);
	  }, StoreModel);
	}

	function createStoreFromObject(alt, StoreModel, key) {
	  var storeInstance = undefined;

	  var StoreProto = createPrototype({}, alt, key, fn.assign({
	    getInstance: function getInstance() {
	      return storeInstance;
	    },
	    setState: function setState(nextState) {
	      doSetState(this, storeInstance, nextState);
	    }
	  }, StoreModel));

	  // bind the store listeners
	  /* istanbul ignore else */
	  if (StoreProto.bindListeners) {
	    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.bindListeners);
	  }
	  /* istanbul ignore else */
	  if (StoreProto.observe) {
	    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.observe(alt));
	  }

	  // bind the lifecycle events
	  /* istanbul ignore else */
	  if (StoreProto.lifecycle) {
	    fn.eachObject(function (eventName, event) {
	      _StoreMixin2['default'].on.call(StoreProto, eventName, event);
	    }, [StoreProto.lifecycle]);
	  }

	  // create the instance and fn.assign the public methods to the instance
	  storeInstance = fn.assign(new _AltStore2['default'](alt, StoreProto, StoreProto.state !== undefined ? StoreProto.state : {}, StoreModel), StoreProto.publicMethods, {
	    displayName: key,
	    config: StoreModel.config
	  });

	  return storeInstance;
	}

	function createStoreFromClass(alt, StoreModel, key) {
	  var storeInstance = undefined;
	  var config = StoreModel.config;

	  // Creating a class here so we don't overload the provided store's
	  // prototype with the mixin behaviour and I'm extending from StoreModel
	  // so we can inherit any extensions from the provided store.

	  var Store = (function (_StoreModel) {
	    _inherits(Store, _StoreModel);

	    function Store() {
	      _classCallCheck(this, Store);

	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      _get(Object.getPrototypeOf(Store.prototype), 'constructor', this).apply(this, args);
	    }

	    return Store;
	  })(StoreModel);

	  createPrototype(Store.prototype, alt, key, {
	    type: 'AltStore',
	    getInstance: function getInstance() {
	      return storeInstance;
	    },
	    setState: function setState(nextState) {
	      doSetState(this, storeInstance, nextState);
	    }
	  });

	  for (var _len = arguments.length, argsForClass = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    argsForClass[_key - 3] = arguments[_key];
	  }

	  var store = new (_bind.apply(Store, [null].concat(argsForClass)))();

	  if (config.bindListeners) store.bindListeners(config.bindListeners);
	  if (config.datasource) store.registerAsync(config.datasource);

	  storeInstance = fn.assign(new _AltStore2['default'](alt, store, store.state !== undefined ? store.state : store, StoreModel), utils.getInternalMethods(StoreModel), config.publicMethods, { displayName: key });

	  return storeInstance;
	}

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getInternalMethods = getInternalMethods;
	exports.warn = warn;
	exports.uid = uid;
	exports.formatAsConstant = formatAsConstant;
	exports.dispatchIdentity = dispatchIdentity;
	exports.fsa = fsa;
	exports.dispatch = dispatch;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	/*eslint-disable*/
	var builtIns = Object.getOwnPropertyNames(NoopClass);
	var builtInProto = Object.getOwnPropertyNames(NoopClass.prototype);
	/*eslint-enable*/

	function getInternalMethods(Obj, isProto) {
	  var excluded = isProto ? builtInProto : builtIns;
	  var obj = isProto ? Obj.prototype : Obj;
	  return Object.getOwnPropertyNames(obj).reduce(function (value, m) {
	    if (excluded.indexOf(m) !== -1) {
	      return value;
	    }

	    value[m] = obj[m];
	    return value;
	  }, {});
	}

	function warn(msg) {
	  /* istanbul ignore else */
	  /*eslint-disable*/
	  if (typeof console !== 'undefined') {
	    console.warn(new ReferenceError(msg));
	  }
	  /*eslint-enable*/
	}

	function uid(container, name) {
	  var count = 0;
	  var key = name;
	  while (Object.hasOwnProperty.call(container, key)) {
	    key = name + String(++count);
	  }
	  return key;
	}

	function formatAsConstant(name) {
	  return name.replace(/[a-z]([A-Z])/g, function (i) {
	    return i[0] + '_' + i[1].toLowerCase();
	  }).toUpperCase();
	}

	function dispatchIdentity(x) {
	  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    a[_key - 1] = arguments[_key];
	  }

	  this.dispatch(a.length ? [x].concat(a) : x);
	}

	function fsa(id, type, payload, details) {
	  return {
	    type: type,
	    payload: payload,
	    meta: _extends({
	      dispatchId: id
	    }, details),

	    id: id,
	    action: type,
	    data: payload,
	    details: details
	  };
	}

	function dispatch(id, actionObj, payload, alt) {
	  var data = actionObj.dispatch(payload);
	  if (data === undefined) return null;

	  var type = actionObj.id;
	  var namespace = type;
	  var name = type;
	  var details = { id: type, namespace: namespace, name: name };

	  var dispatchLater = function dispatchLater(x) {
	    return alt.dispatch(type, x, details);
	  };

	  if (fn.isFunction(data)) return data(dispatchLater, alt);

	  // XXX standardize this
	  return alt.dispatcher.dispatch(fsa(id, type, data, details));
	}

	/* istanbul ignore next */
	function NoopClass() {}

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	var _transmitter = __webpack_require__(484);

	var _transmitter2 = _interopRequireDefault(_transmitter);

	var AltStore = (function () {
	  function AltStore(alt, model, state, StoreModel) {
	    var _this = this;

	    _classCallCheck(this, AltStore);

	    var lifecycleEvents = model.lifecycleEvents;
	    this.transmitter = (0, _transmitter2['default'])();
	    this.lifecycle = function (event, x) {
	      if (lifecycleEvents[event]) lifecycleEvents[event].push(x);
	    };
	    this.state = state;

	    this.alt = alt;
	    this.preventDefault = false;
	    this.displayName = model.displayName;
	    this.boundListeners = model.boundListeners;
	    this.StoreModel = StoreModel;
	    this.reduce = model.reduce || function (x) {
	      return x;
	    };

	    var output = model.output || function (x) {
	      return x;
	    };

	    this.emitChange = function () {
	      return _this.transmitter.push(output(_this.state));
	    };

	    var handleDispatch = function handleDispatch(f, payload) {
	      try {
	        return f();
	      } catch (e) {
	        if (model.handlesOwnErrors) {
	          _this.lifecycle('error', {
	            error: e,
	            payload: payload,
	            state: _this.state
	          });
	          return false;
	        }

	        throw e;
	      }
	    };

	    fn.assign(this, model.publicMethods);

	    // Register dispatcher
	    this.dispatchToken = alt.dispatcher.register(function (payload) {
	      _this.preventDefault = false;

	      _this.lifecycle('beforeEach', {
	        payload: payload,
	        state: _this.state
	      });

	      var actionHandlers = model.actionListeners[payload.action];

	      if (actionHandlers || model.otherwise) {
	        var result = undefined;

	        if (actionHandlers) {
	          result = handleDispatch(function () {
	            return actionHandlers.filter(Boolean).every(function (handler) {
	              return handler.call(model, payload.data, payload.action) !== false;
	            });
	          }, payload);
	        } else {
	          result = handleDispatch(function () {
	            return model.otherwise(payload.data, payload.action);
	          }, payload);
	        }

	        if (result !== false && !_this.preventDefault) _this.emitChange();
	      }

	      if (model.reduce) {
	        handleDispatch(function () {
	          var value = model.reduce(_this.state, payload);
	          if (value !== undefined) _this.state = value;
	        }, payload);
	        if (!_this.preventDefault) _this.emitChange();
	      }

	      _this.lifecycle('afterEach', {
	        payload: payload,
	        state: _this.state
	      });
	    });

	    this.lifecycle('init');
	  }

	  _createClass(AltStore, [{
	    key: 'listen',
	    value: function listen(cb) {
	      var _this2 = this;

	      if (!fn.isFunction(cb)) throw new TypeError('listen expects a function');
	      this.transmitter.subscribe(cb);
	      return function () {
	        return _this2.unlisten(cb);
	      };
	    }
	  }, {
	    key: 'unlisten',
	    value: function unlisten(cb) {
	      this.lifecycle('unlisten');
	      this.transmitter.unsubscribe(cb);
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.StoreModel.config.getState.call(this, this.state);
	    }
	  }]);

	  return AltStore;
	})();

	exports['default'] = AltStore;
	module.exports = exports['default'];

/***/ },
/* 484 */
/***/ function(module, exports) {

	"use strict";

	function transmitter() {
	  var subscriptions = [];

	  var unsubscribe = function unsubscribe(onChange) {
	    var id = subscriptions.indexOf(onChange);
	    if (id >= 0) subscriptions.splice(id, 1);
	  };

	  var subscribe = function subscribe(onChange) {
	    subscriptions.push(onChange);
	    var dispose = function dispose() {
	      return unsubscribe(onChange);
	    };
	    return { dispose: dispose };
	  };

	  var push = function push(value) {
	    subscriptions.forEach(function (subscription) {
	      return subscription(value);
	    });
	  };

	  return { subscribe: subscribe, push: push, unsubscribe: unsubscribe };
	}

	module.exports = transmitter;

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _transmitter = __webpack_require__(484);

	var _transmitter2 = _interopRequireDefault(_transmitter);

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	var StoreMixin = {
	  waitFor: function waitFor() {
	    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	      sources[_key] = arguments[_key];
	    }

	    if (!sources.length) {
	      throw new ReferenceError('Dispatch tokens not provided');
	    }

	    var sourcesArray = sources;
	    if (sources.length === 1) {
	      sourcesArray = Array.isArray(sources[0]) ? sources[0] : sources;
	    }

	    var tokens = sourcesArray.map(function (source) {
	      return source.dispatchToken || source;
	    });

	    this.dispatcher.waitFor(tokens);
	  },

	  exportAsync: function exportAsync(asyncMethods) {
	    this.registerAsync(asyncMethods);
	  },

	  registerAsync: function registerAsync(asyncDef) {
	    var _this = this;

	    var loadCounter = 0;

	    var asyncMethods = fn.isFunction(asyncDef) ? asyncDef(this.alt) : asyncDef;

	    var toExport = Object.keys(asyncMethods).reduce(function (publicMethods, methodName) {
	      var desc = asyncMethods[methodName];
	      var spec = fn.isFunction(desc) ? desc(_this) : desc;

	      var validHandlers = ['success', 'error', 'loading'];
	      validHandlers.forEach(function (handler) {
	        if (spec[handler] && !spec[handler].id) {
	          throw new Error(handler + ' handler must be an action function');
	        }
	      });

	      publicMethods[methodName] = function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        var state = _this.getInstance().getState();
	        var value = spec.local && spec.local.apply(spec, [state].concat(args));
	        var shouldFetch = spec.shouldFetch ? spec.shouldFetch.apply(spec, [state].concat(args))
	        /*eslint-disable*/
	        : value == null;
	        /*eslint-enable*/
	        var intercept = spec.interceptResponse || function (x) {
	          return x;
	        };

	        var makeActionHandler = function makeActionHandler(action, isError) {
	          return function (x) {
	            var fire = function fire() {
	              loadCounter -= 1;
	              action(intercept(x, action, args));
	              if (isError) throw x;
	            };
	            return _this.alt.trapAsync ? function () {
	              return fire();
	            } : fire();
	          };
	        };

	        // if we don't have it in cache then fetch it
	        if (shouldFetch) {
	          loadCounter += 1;
	          /* istanbul ignore else */
	          if (spec.loading) spec.loading(intercept(null, spec.loading, args));
	          return spec.remote.apply(spec, [state].concat(args)).then(makeActionHandler(spec.success), makeActionHandler(spec.error, 1));
	        }

	        // otherwise emit the change now
	        _this.emitChange();
	        return value;
	      };

	      return publicMethods;
	    }, {});

	    this.exportPublicMethods(toExport);
	    this.exportPublicMethods({
	      isLoading: function isLoading() {
	        return loadCounter > 0;
	      }
	    });
	  },

	  exportPublicMethods: function exportPublicMethods(methods) {
	    var _this2 = this;

	    fn.eachObject(function (methodName, value) {
	      if (!fn.isFunction(value)) {
	        throw new TypeError('exportPublicMethods expects a function');
	      }

	      _this2.publicMethods[methodName] = value;
	    }, [methods]);
	  },

	  emitChange: function emitChange() {
	    this.getInstance().emitChange();
	  },

	  on: function on(lifecycleEvent, handler) {
	    if (lifecycleEvent === 'error') this.handlesOwnErrors = true;
	    var bus = this.lifecycleEvents[lifecycleEvent] || (0, _transmitter2['default'])();
	    this.lifecycleEvents[lifecycleEvent] = bus;
	    return bus.subscribe(handler.bind(this));
	  },

	  bindAction: function bindAction(symbol, handler) {
	    if (!symbol) {
	      throw new ReferenceError('Invalid action reference passed in');
	    }
	    if (!fn.isFunction(handler)) {
	      throw new TypeError('bindAction expects a function');
	    }

	    if (handler.length > 1) {
	      throw new TypeError('Action handler in store ' + this.displayName + ' for ' + ((symbol.id || symbol).toString() + ' was defined with ') + 'two parameters. Only a single parameter is passed through the ' + 'dispatcher, did you mean to pass in an Object instead?');
	    }

	    // You can pass in the constant or the function itself
	    var key = symbol.id ? symbol.id : symbol;
	    this.actionListeners[key] = this.actionListeners[key] || [];
	    this.actionListenerHandlers[key] = this.actionListenerHandlers[key] || [];

	    if (this.actionListenerHandlers[key].indexOf(handler) === -1) {
	      this.actionListenerHandlers[key].push(handler);
	      this.actionListeners[key].push(handler.bind(this));
	    }

	    this.boundListeners.push(key);
	  },

	  bindActions: function bindActions(actions) {
	    var _this3 = this;

	    fn.eachObject(function (action, symbol) {
	      var matchFirstCharacter = /./;
	      var assumedEventHandler = action.replace(matchFirstCharacter, function (x) {
	        return 'on' + x[0].toUpperCase();
	      });

	      if (_this3[action] && _this3[assumedEventHandler]) {
	        // If you have both action and onAction
	        throw new ReferenceError('You have multiple action handlers bound to an action: ' + (action + ' and ' + assumedEventHandler));
	      }

	      var handler = _this3[action] || _this3[assumedEventHandler];
	      if (handler) {
	        _this3.bindAction(symbol, handler);
	      }
	    }, [actions]);
	  },

	  bindListeners: function bindListeners(obj) {
	    var _this4 = this;

	    fn.eachObject(function (methodName, symbol) {
	      var listener = _this4[methodName];

	      if (!listener) {
	        throw new ReferenceError(methodName + ' defined but does not exist in ' + _this4.displayName);
	      }

	      if (Array.isArray(symbol)) {
	        symbol.forEach(function (action) {
	          _this4.bindAction(action, listener);
	        });
	      } else {
	        _this4.bindAction(symbol, listener);
	      }
	    }, [obj]);
	  }
	};

	exports['default'] = StoreMixin;
	module.exports = exports['default'];

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = makeAction;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsFunctions = __webpack_require__(472);

	var fn = _interopRequireWildcard(_utilsFunctions);

	var _utilsAltUtils = __webpack_require__(482);

	var utils = _interopRequireWildcard(_utilsAltUtils);

	var AltAction = (function () {
	  function AltAction(alt, id, action, actions, actionDetails) {
	    _classCallCheck(this, AltAction);

	    this.id = id;
	    this._dispatch = action.bind(this);
	    this.actions = actions;
	    this.actionDetails = actionDetails;
	    this.alt = alt;
	  }

	  _createClass(AltAction, [{
	    key: 'dispatch',
	    value: function dispatch(data) {
	      this.dispatched = true;
	      this.alt.dispatch(this.id, data, this.actionDetails);
	    }
	  }]);

	  return AltAction;
	})();

	function makeAction(alt, namespace, name, implementation, obj) {
	  var id = utils.uid(alt._actionsRegistry, namespace + '.' + name);
	  alt._actionsRegistry[id] = 1;

	  var data = { id: id, namespace: namespace, name: name };

	  // Wrap the action so we can provide a dispatch method
	  var newAction = new AltAction(alt, id, implementation, obj, data);

	  var dispatch = function dispatch(payload) {
	    return alt.dispatch(id, payload, data);
	  };

	  // the action itself
	  var action = function action() {
	    newAction.dispatched = false;
	    var result = newAction._dispatch.apply(newAction, arguments);
	    // async functions that return promises should not be dispatched
	    if (!newAction.dispatched && result !== undefined && !fn.isPromise(result)) {
	      if (fn.isFunction(result)) {
	        result(dispatch, alt);
	      } else {
	        dispatch(result);
	      }
	    }

	    return result;
	  };
	  action.defer = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    setTimeout(function () {
	      newAction._dispatch.apply(null, args);
	    });
	  };
	  action.id = id;
	  action.data = data;

	  // ensure each reference is unique in the namespace
	  var container = alt.actions[namespace];
	  var namespaceId = utils.uid(container, name);
	  container[namespaceId] = action;

	  return action;
	}

	module.exports = exports['default'];

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _actionCarsLoginaction = __webpack_require__(488);

	var _actionCarsLoginaction2 = _interopRequireDefault(_actionCarsLoginaction);

	var _sourceCarsLoginsource = __webpack_require__(489);

	var _sourceCarsLoginsource2 = _interopRequireDefault(_sourceCarsLoginsource);

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var LoginStore = (function () {
	    function LoginStore() {
	        _classCallCheck(this, LoginStore);

	        this.session = localStorage.getItem("*cars-sessioninfo");
	        this.isLogged = this.session != null && this.session != undefined;
	        console.debug("loginStore" + this.isLogged);
	        this.user = {};
	        if (this.isLogged) {
	            this.user = JSON.parse(this.session);
	        }
	        this.errorMessage = "";
	        this.bindListeners({
	            handleLoginProceed: _actionCarsLoginaction2['default'].loginProceed,
	            handleUpdateLoggingStatus: _actionCarsLoginaction2['default'].updateLoggingStatus,
	            handleLoginFailed: _actionCarsLoginaction2['default'].loginFailed,
	            handleLoginSucceed: _actionCarsLoginaction2['default'].loginSucceed
	        });

	        this.exportAsync(_sourceCarsLoginsource2['default']);
	    }

	    _createClass(LoginStore, [{
	        key: 'handleLoginProceed',
	        value: function handleLoginProceed(usr) {
	            console.debug("222");
	            this.isLogged = true;
	        }
	    }, {
	        key: 'handleUpdateLoggingStatus',
	        value: function handleUpdateLoggingStatus(flag) {
	            this.isLogged = flag;
	        }
	    }, {
	        key: 'handleLoginFailed',
	        value: function handleLoginFailed(errorMessage) {
	            console.debug("store");
	            this.errorMessage = errorMessage;
	            this.isLogged = false;
	        }
	    }, {
	        key: 'handleLoginSucceed',
	        value: function handleLoginSucceed(user) {
	            this.isLogged = true;
	            this.user = user;
	            localStorage.setItem("*cars-sessioninfo", JSON.stringify(user));
	        }
	    }]);

	    return LoginStore;
	})();

	exports['default'] = _alt2['default'].createStore(LoginStore, 'LoginStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.loginstore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var LoginActions = (function () {
	    function LoginActions() {
	        _classCallCheck(this, LoginActions);
	    }

	    _createClass(LoginActions, [{
	        key: "updateLoggingStatus",
	        value: function updateLoggingStatus(flag) {
	            this.dispatch(flag);
	        }
	    }, {
	        key: "loginSucceed",
	        value: function loginSucceed(usr) {
	            this.dispatch(usr);
	        }
	    }, {
	        key: "loginProceed",
	        value: function loginProceed(usr) {
	            console.debug("3333");
	            this.dispatch(usr);
	        }
	    }, {
	        key: "loginFailed",
	        value: function loginFailed(error) {
	            console.debug("action");
	            console.debug(error);
	            this.dispatch(error);
	        }
	    }]);

	    return LoginActions;
	})();

	exports["default"] = _alt2["default"].createActions(LoginActions);
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.loginaction.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _actionCarsLoginaction = __webpack_require__(488);

	var _actionCarsLoginaction2 = _interopRequireDefault(_actionCarsLoginaction);

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var LoginSource = {
	    loginProceed: function loginProceed() {
	        return {
	            remote: function remote(store, usr) {
	                return new Promise(function (resolve, reject) {
	                    console.debug(usr);
	                    // Completed of async action, set loading state back
	                    if (usr.username == "test" && (usr.password = '123')) {
	                        console.debug("123");
	                        resolve(usr);
	                    } else {
	                        console.debug("321");
	                        reject("登录失败");
	                    }
	                });
	            },
	            success: _actionCarsLoginaction2['default'].loginSucceed,
	            error: _actionCarsLoginaction2['default'].loginFailed
	        };
	    }

	};

	exports['default'] = LoginSource;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.loginsource.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var MainActions = (function () {
	    function MainActions() {
	        _classCallCheck(this, MainActions);
	    }

	    _createClass(MainActions, [{
	        key: 'updateCurrentTag',
	        value: function updateCurrentTag(tag) {
	            this.dispatch(tag);
	        }
	    }]);

	    return MainActions;
	})();

	exports['default'] = _alt2['default'].createActions(MainActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.mainaction.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2885cdb57f913ed832df4a0731bdc765.png";

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by Shawn on 15/11/19.
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Footer = (function (_React$Component) {
	    _inherits(Footer, _React$Component);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { className: "footer", style: { "background-color": "#ddd" }, fluid: true }, React.createElement("ul", null, React.createElement("li", null, "关于养车网"), React.createElement("li", null, "联系我们"), React.createElement("li", null, "商务合作"), React.createElement("li", { className: "lastli" }, "隐私声明")), React.createElement("br", null), React.createElement("p", null, "CopyRight @ 2015 苏州长锦电子商务有限公司 ,All Rights Reserved."));
	        }
	    }]);

	    return Footer;
	})(React.Component);

	exports["default"] = Footer;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.footerpage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by Shawn on 15/11/19.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _reactBootstrap = __webpack_require__(207);

	var _carsOwnerpage = __webpack_require__(494);

	var _carsOwnerpage2 = _interopRequireDefault(_carsOwnerpage);

	var _carsOperatorpage = __webpack_require__(497);

	var _carsOperatorpage2 = _interopRequireDefault(_carsOperatorpage);

	var _actionCarsHeaderaction = __webpack_require__(474);

	var _actionCarsHeaderaction2 = _interopRequireDefault(_actionCarsHeaderaction);

	var _storeCarsMainstore = __webpack_require__(646);

	var _storeCarsMainstore2 = _interopRequireDefault(_storeCarsMainstore);

	var _actionCarsMainaction = __webpack_require__(490);

	var _actionCarsMainaction2 = _interopRequireDefault(_actionCarsMainaction);

	var _altAltContainer = __webpack_require__(449);

	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);

	var Main = (function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main() {
	        _classCallCheck(this, Main);

	        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Main, [{
	        key: 'handleUpdateState',
	        value: function handleUpdateState(state) {
	            _actionCarsMainaction2['default'].updateCurrentTag(state);
	        }
	    }, {
	        key: 'getOwnerPage',
	        value: function getOwnerPage() {
	            return React.createElement('div', null, React.createElement(_carsOwnerpage2['default'], null));
	        }
	    }, {
	        key: 'getOperatorPage',
	        value: function getOperatorPage() {
	            return React.createElement('div', null, React.createElement(_carsOperatorpage2['default'], null));
	        }
	    }, {
	        key: 'getWelcomePage',
	        value: function getWelcomePage() {
	            return React.createElement(_reactBootstrap.Grid, null, React.createElement(_reactBootstrap.Row, null, React.createElement(_reactBootstrap.Col, { xs: 12, md: 6 }, React.createElement('div', { className: 'container-box operator' }, React.createElement('a', { onClick: this.handleUpdateState.bind(this, "operator") }, '我是技师'))), React.createElement(_reactBootstrap.Col, { xs: 12, md: 6 }, React.createElement('div', { className: 'container-box owner' }, React.createElement('a', { onClick: this.handleUpdateState.bind(this, "owner") }, '我是车主')))));
	        }
	    }, {
	        key: 'getCurrentPage',
	        value: function getCurrentPage() {
	            switch (this.props.currentTag) {
	                case "operator":
	                    return this.getOperatorPage();
	                    break;
	                case "owner":
	                    return this.getOwnerPage();
	                    break;
	                default:
	                    return this.getWelcomePage();
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var page = this.getCurrentPage();
	            return React.createElement('div', null, page);
	        }
	    }]);

	    return Main;
	})(React.Component);

	var MainPage = (function (_React$Component2) {
	    _inherits(MainPage, _React$Component2);

	    function MainPage() {
	        _classCallCheck(this, MainPage);

	        _get(Object.getPrototypeOf(MainPage.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(MainPage, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(_altAltContainer2['default'], { store: _storeCarsMainstore2['default'] }, React.createElement(Main, null));
	        }
	    }]);

	    return MainPage;
	})(React.Component);

	exports['default'] = MainPage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.welcomepage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by Shawn on 15/11/19.
	 */

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _reactBootstrap = __webpack_require__(207);

	var _image2Jpg = __webpack_require__(496);

	var _image2Jpg2 = _interopRequireDefault(_image2Jpg);

	var _actionCarsHeaderaction = __webpack_require__(474);

	var _actionCarsHeaderaction2 = _interopRequireDefault(_actionCarsHeaderaction);

	var ElementComponent = (function (_React$Component) {
	    _inherits(ElementComponent, _React$Component);

	    function ElementComponent() {
	        _classCallCheck(this, ElementComponent);

	        _get(Object.getPrototypeOf(ElementComponent.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ElementComponent, [{
	        key: 'getRates',
	        value: function getRates() {
	            var rates = [];
	            for (var i = 0; i < 5; i++) {
	                var className = "cars-icon-tools";
	                if (i < this.props.item.rate) {
	                    className += " rate";
	                }
	                if (i < 4) {
	                    className += " left";
	                }
	                rates.push(React.createElement('li', { className: className }));
	            }
	            return rates;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var rates = this.getRates();
	            return React.createElement('li', { className: 'element left' }, React.createElement('div', { className: 'element-left' }, React.createElement(_reactBootstrap.Image, { className: 'element-pic', src: _image2Jpg2['default'], responsive: true })), React.createElement('div', { className: 'element-right' }, React.createElement('div', { className: 'element-description' }, React.createElement('p', null, this.props.item.operator), React.createElement('ul', { className: 'cross element-rate' }, rates), React.createElement('div', { className: 'description' }, React.createElement('label', null, '擅长技能:', React.createElement('p', null), React.createElement('span', null, "   " + this.props.item.domain)), React.createElement('p', { style: { "margin": "0" } }), React.createElement('label', null, '擅长车型:', React.createElement('p', null), React.createElement('span', null, 'test')))), React.createElement(_reactBootstrap.Button, { className: 'element-button', bsStyle: 'default' }, '预约')));
	        }
	    }]);

	    return ElementComponent;
	})(React.Component);

	var OperatorFeedsPage = (function (_React$Component2) {
	    _inherits(OperatorFeedsPage, _React$Component2);

	    function OperatorFeedsPage() {
	        _classCallCheck(this, OperatorFeedsPage);

	        _get(Object.getPrototypeOf(OperatorFeedsPage.prototype), 'constructor', this).call(this);
	        this.state = {
	            feeds: []
	        };
	    }

	    _createClass(OperatorFeedsPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var mockup = [{
	                operator: "Shawn",
	                rate: 5,
	                domain: "cars,test",
	                cartype: [{
	                    brand: "大众",
	                    logo: "DaZhong"
	                }, {
	                    brand: "奥迪",
	                    logo: "aodi"
	                }]
	            }, {
	                operator: "Abby",
	                rate: 4,
	                domain: "cars,tet,test"
	            }, {
	                operator: "Abby2",
	                rate: 4,
	                domain: "cars,tet,test"
	            }];
	            this.setState({
	                feeds: mockup
	            });
	            _actionCarsHeaderaction2['default'].updateUserType("owner");
	        }
	    }, {
	        key: 'getFeeds',
	        value: function getFeeds() {
	            return _.map(this.state.feeds, function (item) {
	                return React.createElement(ElementComponent, { item: item });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var feeds = this.getFeeds();
	            return React.createElement('div', { className: 'feed-container' }, React.createElement('div', { className: 'element-container' }, React.createElement('ul', { className: 'cross' }, feeds)));
	        }
	    }]);

	    return OperatorFeedsPage;
	})(React.Component);

	exports['default'] = OperatorFeedsPage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.ownerpage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(495)))

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2885cdb57f913ed832df4a0731bdc765.jpg";

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, _) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by Shawn on 15/11/19.
	 */

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _reactBootstrap = __webpack_require__(207);

	var _imageTestPng = __webpack_require__(491);

	var _imageTestPng2 = _interopRequireDefault(_imageTestPng);

	var _commonCars = __webpack_require__(498);

	var _commonCars2 = _interopRequireDefault(_commonCars);

	var _actionCarsHeaderaction = __webpack_require__(474);

	var _actionCarsHeaderaction2 = _interopRequireDefault(_actionCarsHeaderaction);

	var FeedComponent = (function (_React$Component) {
	    _inherits(FeedComponent, _React$Component);

	    function FeedComponent() {
	        _classCallCheck(this, FeedComponent);

	        _get(Object.getPrototypeOf(FeedComponent.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(FeedComponent, [{
	        key: 'getRates',
	        value: function getRates() {
	            var rates = [];
	            for (var i = 0; i < 5; i++) {
	                var className = "cars-icon-tools left";
	                if (i < this.props.item.level) {
	                    className += " rate";
	                }
	                rates.push(React.createElement('li', { className: className }));
	            }
	            return rates;
	        }
	    }, {
	        key: 'getCarDescription',
	        value: function getCarDescription() {
	            var des = " " + _commonCars2['default'].get(this.props.item.car.brand) + " " + this.props.item.car.series + " " + this.props.item.car.displacement + " " + this.props.item.car.year;
	            return React.createElement('span', { className: 'feed-title' }, React.createElement(_reactBootstrap.Image, { className: 'feed-car-brand',
	                src: __webpack_require__(499)("./" + this.props.item.car.brand + ".png") }), React.createElement('a', null, des));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var rates = this.getRates();
	            var car = this.getCarDescription();
	            return React.createElement('div', { className: 'feed' }, React.createElement('div', { className: 'feed-top' }, React.createElement(_reactBootstrap.Image, { className: 'feed-element userpic', src: '', responsive: true }), React.createElement('div', { className: 'feed-element info' }, React.createElement('p', null, car), React.createElement('div', { className: 'description' }, React.createElement('label', null, '服务类型:', React.createElement('span', null, "   " + this.props.item.requestType)), React.createElement('p', { style: { "margin": "0" } }), React.createElement('label', null, '备注:'))), React.createElement(_reactBootstrap.Button, { className: 'feed-button', bsStyle: 'default' }, '接单')), React.createElement('div', { className: 'feed-bottom' }, React.createElement('ul', { className: 'cross feed-rate' }, rates)));
	        }
	    }]);

	    return FeedComponent;
	})(React.Component);

	var UserRequestFeedsPage = (function (_React$Component2) {
	    _inherits(UserRequestFeedsPage, _React$Component2);

	    function UserRequestFeedsPage() {
	        _classCallCheck(this, UserRequestFeedsPage);

	        _get(Object.getPrototypeOf(UserRequestFeedsPage.prototype), 'constructor', this).call(this);
	        this.state = {
	            feeds: []
	        };
	    }

	    _createClass(UserRequestFeedsPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var mockup = [{
	                user: "Shawn",
	                level: 5,
	                requestType: "保养",
	                car: {
	                    brand: "audi",
	                    series: "100",
	                    year: "2001",
	                    displacement: "1.8L"

	                },
	                summary: "I wan to asdfasdf..."
	            }, {
	                user: "Abby",
	                level: 5,
	                requestType: "保养",
	                car: {
	                    brand: "AnChi",
	                    series: "100",
	                    year: "2001",
	                    displacement: "1.8L"
	                },
	                summary: "I wan to asdfasdf..."
	            }];
	            this.setState({
	                feeds: mockup
	            });

	            _actionCarsHeaderaction2['default'].updateUserType("operator");
	        }
	    }, {
	        key: 'getFeeds',
	        value: function getFeeds() {
	            return _.map(this.state.feeds, function (item) {
	                return React.createElement(FeedComponent, { item: item });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var feeds = this.getFeeds();
	            return React.createElement('div', { className: 'feed-container' }, feeds);
	        }
	    }]);

	    return UserRequestFeedsPage;
	})(React.Component);

	exports['default'] = UserRequestFeedsPage;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.operatorpage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(495)))

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * Created by abby on 15/11/22.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cars = new Map();
	cars.set("audi", "奥迪");

	exports["default"] = cars;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AErFa路LuoMiOu.png": 500,
		"./ASiDun路MaDing.png": 501,
		"./AnChi.png": 502,
		"./AoDi.png": 503,
		"./BaBoSi.png": 504,
		"./BaoJun.png": 505,
		"./BaoLong.png": 506,
		"./BaoMa.png": 507,
		"./BaoShiJie.png": 508,
		"./BeiJingQiChe.png": 509,
		"./BeiQiZhiZao.png": 510,
		"./BenChi.png": 511,
		"./BenTian.png": 512,
		"./BiYaDi.png": 513,
		"./BiaoZhi.png": 514,
		"./BieKe.png": 515,
		"./BinLi.png": 516,
		"./BuJiaDi.png": 517,
		"./ChangAn.png": 518,
		"./ChangCheng.png": 519,
		"./ChangHe.png": 520,
		"./DS.png": 521,
		"./DaDi.png": 522,
		"./DaFa.png": 523,
		"./DaTong.png": 524,
		"./DaYu.png": 525,
		"./DaZhong.png": 526,
		"./DaoQi.png": 527,
		"./DiHao.png": 528,
		"./DongFeng.png": 529,
		"./DongNan.png": 530,
		"./FaLaLi.png": 531,
		"./FeiYaTe.png": 532,
		"./FengTian.png": 533,
		"./FuDi.png": 534,
		"./FuQi.png": 535,
		"./FuShiDa.png": 536,
		"./FuTe.png": 537,
		"./FuTian.png": 538,
		"./JiAo.png": 539,
		"./JiLi.png": 540,
		"./JiPu.png": 541,
		"./JiangHuai.png": 542,
		"./JiangLing.png": 543,
		"./JiangNan.png": 544,
		"./JiangSuNanYa.png": 545,
		"./JieBao.png": 546,
		"./JieFang.png": 547,
		"./JinBei.png": 548,
		"./JinCheng.png": 549,
		"./JiuLong.png": 550,
		"./KaErSen.png": 551,
		"./KaWei.png": 552,
		"./KaiDiLaKe.png": 553,
		"./KaiRui.png": 554,
		"./KaiYi.png": 555,
		"./KeLaiSiLe.png": 556,
		"./KeNiSaiKe.png": 557,
		"./LanBoJiNi.png": 558,
		"./LaoLunShi.png": 559,
		"./LaoSiLaiSi.png": 560,
		"./LeiKeSaSi.png": 561,
		"./LeiNuo.png": 562,
		"./LiFan.png": 563,
		"./LiNian.png": 564,
		"./LianHua.png": 565,
		"./LieBao.png": 566,
		"./LinKen.png": 567,
		"./LingMu.png": 568,
		"./LuDiFangZhou.png": 569,
		"./LuFeng.png": 570,
		"./LuHu.png": 571,
		"./LuTeSi.png": 572,
		"./LuoZuo.png": 573,
		"./MG.png": 574,
		"./MINI.png": 575,
		"./MaShaLaDi.png": 576,
		"./MaZiDa.png": 577,
		"./MaiBaHe.png": 578,
		"./MaiKaiLun.png": 579,
		"./MeiYa.png": 580,
		"./NaZhiJie.png": 581,
		"./OuBao.png": 582,
		"./OuLang.png": 583,
		"./PaJiaNi.png": 584,
		"./QiChen.png": 585,
		"./QiRui.png": 586,
		"./QiTeng.png": 587,
		"./QiYa.png": 588,
		"./QingLing.png": 589,
		"./QuanQiuYing.png": 590,
		"./RUF.png": 591,
		"./RiChan.png": 592,
		"./RongWei.png": 593,
		"./RuiZuo.png": 594,
		"./SaBo.png": 595,
		"./SaiBao.png": 596,
		"./SanLing.png": 597,
		"./ShanQiTongJia.png": 598,
		"./ShenBao.png": 599,
		"./ShiJue.png": 600,
		"./ShuangHuan.png": 601,
		"./ShuangLong.png": 602,
		"./SiBaLu.png": 603,
		"./SiKeDa.png": 604,
		"./Smart.png": 605,
		"./TeSiLa.png": 606,
		"./TengShi.png": 607,
		"./TianJinYiQi.png": 608,
		"./TianMa.png": 609,
		"./TongTian.png": 610,
		"./WanFeng.png": 611,
		"./WeiWang.png": 612,
		"./WeiZiMan.png": 613,
		"./WeiZuo.png": 614,
		"./WoErWo.png": 615,
		"./WuLing.png": 616,
		"./WuShiLing.png": 617,
		"./XiYaTe.png": 618,
		"./XiaMenJinLong.png": 619,
		"./XianDai.png": 620,
		"./XinKai.png": 621,
		"./XinYaTu.png": 622,
		"./XueFoLan.png": 623,
		"./XueTieLong.png": 624,
		"./YeMa.png": 625,
		"./YiQiBenTeng.png": 626,
		"./YiQiHuaLi.png": 627,
		"./YiQiJiLin.png": 628,
		"./YiQiTongYong.png": 629,
		"./YiWeiKe.png": 630,
		"./YingFeiNiDi.png": 631,
		"./YingLun.png": 632,
		"./YingZhi.png": 633,
		"./YongYuan.png": 634,
		"./YunQue.png": 635,
		"./ZheJiangKaErSen.png": 636,
		"./ZhiDou.png": 637,
		"./ZhongHua.png": 638,
		"./ZhongOu.png": 639,
		"./ZhongShun.png": 640,
		"./ZhongTai.png": 641,
		"./ZhongXing.png": 642,
		"./ZuoGe.png": 643,
		"./audi.png": 644,
		"./front_next.png": 645
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 499;


/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e9594154e09c199c2621ec1d83a8d7bd.png";

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5fffa2905ce6e5418863559ba2edfea3.png";

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8ab3eb6176cc74649a6af586f09f05cf.png";

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e890ee3c05e9a7194e0801998266c964.png";

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "70ac8127838e6cd97cc3ad0513fcf6e0.png";

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d468f0124de1dc1d47dc035a1a722f70.png";

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9d170907c516151b6167757c5fe15766.png";

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5585a3a887204a21380ce9bd2ce83ca6.png";

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c415d44e42145714cc7a3a02d3708367.png";

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5ce4fe40e85494f300f6bda5bb6252ee.png";

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "86c0d1b41788c6b09e863abf0ec4ea2d.png";

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6ad156306f2c07e1cac6928f364632b2.png";

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "999fa4797fcecaf6e7ad5203df5ea026.png";

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4aa8a45f039eebe7cd668892864f5fc.png";

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adb9b6a0759b7707ba8ffb424175ce79.png";

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "15cb34dcaa3b5a9a5a41d225d84b8b08.png";

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3c870b27840f5a6a06e8291bbbc44b30.png";

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8798507d881947b3b42f004bebba9a04.png";

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4e310dadf11353ad83539abf7601762f.png";

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "51d15b13975eea9606cf9e380be9b1c5.png";

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3503b1b805a1d342286f5d70c29af866.png";

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a427e4afd6de20270d05a20885907aa5.png";

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a7208be78564572d7697f4f15537f9c2.png";

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "368e4a6ed90080e9cb2b95ae189af6ee.png";

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fd436eb8059b15f40738e8fa608c08cf.png";

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e5ae831f049b313dacbb6a8145eaf800.png";

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b1d5af45a70b361bbffd9162271481af.png";

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6abe9d8055a1424dfce79df9c59b8243.png";

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3471b3f2746c80e76cdff17a0ace951e.png";

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b074b352449adc2f76e631952b8d67b4.png";

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "127f2dadb7076cc7c9e07c1bd2cf27f7.png";

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b42a53638222546d91f5d4db9445cf56.png";

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b39517419e7a25dfd8ae3823fac2cc40.png";

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f2e66a9e8d9206756eaea7fbdd0b567c.png";

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f767e05c4f3a45633d159be20cc58df1.png";

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e628b6bd38c89f92e87eadc27bb3e12c.png";

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bff952b82cbd70682301871a43ae0078.png";

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e745c1e1da54092261be698cf30c6009.png";

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5800a129cbaeb6568617f30cd9565828.png";

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "feb9afc9c5b71e5a99df066f6d743dc9.png";

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4af93cba4e9918a4f429696771929bb3.png";

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "07f45f712dd096c71fe013a725efdff1.png";

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "368389858bced3079fc06a123955bb84.png";

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3239aeb978c10e701107c21d5d5f738d.png";

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "45886d2e626381b90448d3ab51f11fbc.png";

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df380e066f4dff27ab674b4c14cc6a30.png";

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1360a2d779977fc77a9b0003205f0391.png";

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7dd6570122d24586746a8b27e8f02bdc.png";

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee36080b7d7e4e836cf6994fdb32cb4a.png";

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "827027eeff28eff9f25fa3a6bdc1d076.png";

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ec2c6cd6643a37858a190ff07a9ebcbd.png";

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b08ce088a37315adfaead3944da7ff0b.png";

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c862360eebf849eba8644695813a08a4.png";

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "45c2c126df97fb979534628beb94033c.png";

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e063f3d58e68da55c4a5da7078913ca.png";

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "778161a847c16ba7de2b6be42c8e8740.png";

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "980424e877c5027f612b15516659e7ae.png";

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2c5f5f6f2d66f5a487f6abddec303f5e.png";

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d2b37a10aec375f8f6fb7ad41ea0ba50.png";

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f03b5912f673300e1a7836b7c383d4f0.png";

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "72dc4438c5fc139a92de8bb5c52c9a5e.png";

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2ee0a5e9752954f449091c21b1971556.png";

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92953bf63b15eba4e5b422167fcc5735.png";

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd315e8c51f06882011fade606ac8715.png";

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee8ecd67f85b2f3c653f4538bbb64b5.png";

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b5effa010c2d2bbcf05e6bd8e2ac1571.png";

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd78bb99af7966ff1c3129afa7b72522.png";

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2fab80aa823a6419e6849ad5e4410c8e.png";

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "91dfaee740031e16ea6599871ded3590.png";

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1d442f2adeff847007bed098e61f7b4f.png";

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4f5cba5ebcd4a1876e36d3abb462008d.png";

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8badd8acce321cec42358403aaf9bb2.png";

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e8df38f64730ca5e932049425871efae.png";

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1d442f2adeff847007bed098e61f7b4f.png";

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "395f6d2df3eabd5c49bbdae944594197.png";

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c03812131a0b09a358c3b14350188670.png";

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8dc52074728bafd544ee74a17a6d757e.png";

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3037202e369897af0b6bddf503136896.png";

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c4a9a41d257380fbb18ea6bdbe058159.png";

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0254241c9c5464adea8bead6c33eff92.png";

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0dc63a4b77b98d9477750f18de3e8353.png";

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c7f2aa7d80038861b5733e4046e19502.png";

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4985e1bd1e24d3f6c86f9a542f5a5c6e.png";

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de16e8487f6f0ee66bbbf2bf5f724fd3.png";

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ac5e296749d09c6fbd845f36a437fae9.png";

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adf830afdaf04bb68303542617024adc.png";

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7d67027955990890841eab92079e43cb.png";

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6558422ab0f776324d01e3c5a2bd77b5.png";

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6759632f932f2297c52e8943d59fc05c.png";

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "07a6edfbbd25ada0c81b910dcec0aeea.png";

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "62f97cd9e2c83ef3f8870c7148b6ab83.png";

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecc8b61501c8bac0eca41a78f03591fb.png";

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c6fe3c4afd59449f9245c3c8b72d1e73.png";

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "17bc1b86c96928ce708e9bacac468aea.png";

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f8ee281c072277fe58c00703806f09c9.png";

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "34bb1608ae7d1015ad9fd733731c7cf7.png";

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9411033defb17616630e3955d310ce09.png";

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b51c7f1d182f0bb4bfe50190d1318c18.png";

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "40d469b0782f878d202eeabdec6f5a9c.png";

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ec469bb537b2e2e2e5a35d8db5cfc652.png";

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fcaed7d176f4eb62d10888ece64754c9.png";

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92c9105b6570fa6897d9140f520625c1.png";

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8211d672f2debe038fe1a998e1ee495.png";

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "639b8603f558ec600b49377b64a1137b.png";

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "afd59741bfc865c68cf6e22d2c1dfbba.png";

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a1cf300d08e3bbb9be6b533ce97aad2d.png";

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f2e425f4e981549548eec73b923a5be0.png";

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d326d5da782fdccd6232af1f2af9cf91.png";

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8d5c8f21209e9dfaa18125832a058bd0.png";

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "310e2c374c44dab83dc78bee77fd01b8.png";

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b9474d1731fbfd06641239442e32dd4f.png";

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a778477eb5d04078fc63beb042707e6c.png";

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "649cf286ed6635cbdd19b5fb67a47b23.png";

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3fd4f6833596d1098d0dc64275055985.png";

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0aea1ef068cfc4f6cd7aaffbb6a00df.png";

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e6c7007f58b50d94f751b93f594d655c.png";

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "70c5450ca3e1b49058fc17b5c1b8cf5b.png";

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9cc44fa46de514db5e93522c2e477f9d.png";

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f183da2df1ac57c8ca8a1d2d354a369c.png";

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "609dd97fe53280552cd6e6496dd1139f.png";

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4419305e589eb6b4aee768d6d43a51fe.png";

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d8989cb76186cc3300fd079c3be9780a.png";

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0732939fbf1f48848ac2d9d5dd812a37.png";

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dba563bf423d031c83fc95a0f323431d.png";

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89fd73ec1d67258b7d0c26800c99d508.png";

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f5fa3a562d7c214686dfc8a2ee52536.png";

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de16e8487f6f0ee66bbbf2bf5f724fd3.png";

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de16e8487f6f0ee66bbbf2bf5f724fd3.png";

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de16e8487f6f0ee66bbbf2bf5f724fd3.png";

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "de16e8487f6f0ee66bbbf2bf5f724fd3.png";

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "54dd00e393a5739d2453ade31208003a.png";

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "98fcb7065aa41b7f7a576640b862dd35.png";

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d4b6301cdef85cbcbccbd645effcbe90.png";

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f978fb9c200eef172b112c6599ff4ee.png";

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b5bf69ce802b2279ae0ecc2f394deb06.png";

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "634438d649d63edc7bc64a72262d9900.png";

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ef10beddc9eb89500126462f8a74a346.png";

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e62790cfedb2c07b8188c074b3ad5312.png";

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "244f4bdf3470000e0d4f0eedbba9faf9.png";

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6ebf4dc15c0baf6c0b20bb150274c092.png";

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89edf1b24c818e9fb44de5a88a353912.png";

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "56884c64f6c6176326efed897f98e7c8.png";

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a316d83a6e4cd037711d2cbf639155fe.png";

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c2aef511fb8f7ae45b4eb96cf2f240a5.png";

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e890ee3c05e9a7194e0801998266c964.png";

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5ef47f3bb7c76cefa923c8047c076247.png";

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	var _actionCarsMainaction = __webpack_require__(490);

	var _actionCarsMainaction2 = _interopRequireDefault(_actionCarsMainaction);

	var _alt = __webpack_require__(475);

	var _alt2 = _interopRequireDefault(_alt);

	var MainStore = (function () {
	    function MainStore() {
	        _classCallCheck(this, MainStore);

	        this.currentTag = $.cookie('type');

	        this.bindListeners({
	            handleUpdateCurrentTag: _actionCarsMainaction2['default'].updateCurrentTag
	        });
	    }

	    _createClass(MainStore, [{
	        key: 'handleUpdateCurrentTag',
	        value: function handleUpdateCurrentTag(tag) {
	            $.cookie('type', tag);
	            this.currentTag = tag;
	        }
	    }]);

	    return MainStore;
	})();

	exports['default'] = _alt2['default'].createStore(MainStore, 'MainStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/shawn/Work/cars/code/cars/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "cars.mainstore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(647)))

/***/ },
/* 647 */,
/* 648 */,
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(650);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./override.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./override.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports


	// module
	exports.push([module.id, ".navbar {\n    border-radius: 0;\n}\n\ninput.cars-input.form-control,button.cars-button.btn.btn-default {\n    border-radius: 0;\n}", ""]);

	// exports


/***/ },
/* 651 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(654);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports


	// module
	exports.push([module.id, "html body {\n    height: 100%;\n}\n\n.container-box {\n    height: 300px;\n\n}\n\n.operator {\n    background-color: #00b3ee;\n}\n\n.owner {\n    background-color: #880000;\n}\n\n.container-body {\n    height: 70%;\n}\n\n.footer {\n    margin-top: 15px;\n    text-align: center\n}\n\n.footer > ul {\n    display: inline-block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.footer > ul > .lastli {\n    border: none;\n}\n\n.footer > ul > li {\n    float: left;\n    padding-right: 10px;\n    padding-left: 10px;\n    border-right: 1px solid #000000;\n}\n\n/******     feed      ********/\n.feed-container {\n    margin: 0 auto;\n    width: 70%;\n    height: auto;\n    min-width: 250px;\n}\n\n.feed-top {\n    width: 100%;\n    height: 85%;\n    position: relative;\n}\n\n.feed-bottom {\n    width: 100%;\n    height: 20%;\n}\n\n.feed-top > button {\n    float: right\n}\n\n.feed {\n    /*TODO: test*/\n    border: 1px solid;\n    width: 100%;\n    height: 150px;\n    margin: 20px 10px;\n    padding: 5px 10px;\n\n}\n\n.userpic {\n    background-color: #9d9d9d;\n    width: 100px;\n    height: 110px;\n}\n\n.feed-element {\n    float: left;\n}\n\n.feed-rate {\n    padding-left: 0px;\n    height: 100%;\n}\n\n.feed-rate > li {\n    margin: 0 5px;\n    font-size: 18px;\n    color: #bbbbbb;\n}\n\n.feed-rate > li.rate {\n\n    color: #ccc421;\n}\n\n.info {\n    margin: 0 5px;\n    height: 100%;\n    width: auto;\n}\n\n.info > dl > dt, .info > dl > dd {\n    font-size: 12px;\n}\n\n.feed-button {\n    border-radius: 0px;\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n}\n\n.feed-button:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n}\n\n.feed-button:hover, .feed-button:focus, .feed-button.focus {\n    color: #333;\n    text-decoration: none;\n    outline: 0px;\n}\n\n.feed-button:focus, .feed-button:active:focus, .feed-button.active:focus, .feed-button.focus, .feed-button:active.focus, .feed-button.active.focus {\n    outline: 1px auto -webkit-focus-ring-color;\n}\n\n.feed-car-brand {\n    width: 40px;\n    height: 40px;\n}\n\n.feed-title {\n    font-size: 18px;\n\n}\n\n.description {\n    margin-top: 5px;\n}\n\n.description > label {\n    font-size: 12px;\n    color: #919191;\n    font-weight: normal;\n}\n\n/*************************/\n\n/******* element *********/\n.element-container {\n    display: inline-block;\n}\n\n.element {\n    border: 1px solid;\n    width: 250px;\n    height: 180px;\n    margin: 0 10px;\n}\n\n.element-left {\n    width: 50%;\n    height: 100%;\n    float: left;\n}\n\n.element-pic {\n    width: 100%;\n    height: 100%;\n}\n\n.element-right {\n    width: 50%;\n    height: 100%;\n    float: right;\n    position: relative;\n}\n\n.element-rate {\n    padding-left: 0;\n    margin-top: 5px;\n}\n\n.element-button {\n    width: 95%;\n    border-radius: 0;\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n    position: absolute;\n    bottom: 5px;\n}\n\n.elemen-button:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n}\n\n.elemen-button:hover, .elemen-button:focus, .elemen-button.focus {\n    color: #333;\n    text-decoration: none;\n    outline: 0;\n}\n\n.elemen-button:focus, .elemen-button:active:focus, .elemen-button.active:focus, .elemen-button.focus, .elemen-button:active.focus, .elemen-button.active.focus {\n    outline: 1px auto -webkit-focus-ring-color;\n}\n\nul.element-rate > li {\n    margin: 0 2px;\n}\n\n/*************************/\n\n/*******header************/\n.header-pic {\n    width: 70px;\n}\n\n.header-type {\n    width: 110px;\n}\n\n.header-type > .form-group {\n    margin-bottom: 0;\n}\n\n.header-loginform {\n    margin: 0 10px;\n\n}\n\n.header-loginform > button {\n    width: 100%;\n}\n\n.header-loginform > a {\n    font-size:12px;\n}\n\n/*************************/", ""]);

	// exports


/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(656);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./static.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./static.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports


	// module
	exports.push([module.id, "li {\n    list-style-type: none\n}\n\nul.cross > li.left {\n    float: left\n}\n\na:hover {\n    cursor: pointer\n}\n\np {\n    margin: 0;\n}\n\n.navbar>.container {\n    margin: 0;\n    padding:0;\n    width:100%;\n}", ""]);

	// exports


/***/ }
]);