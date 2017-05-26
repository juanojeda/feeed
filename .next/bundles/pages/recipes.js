
          window.__NEXT_REGISTER_PAGE('/recipes', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentSpaceName = exports.resetClient = exports.getClient = exports.initClient = undefined;

var _contentful = __webpack_require__(583);

var client = void 0;
var authorized = void 0;
var currentSpace = void 0;

function initClient(space, accessToken, preview) {
  client = (0, _contentful.createClient)({
    space: space,
    accessToken: accessToken,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  });
  return client.getSpace().then(function (space) {
    authorized = true;
    currentSpace = space;
    return space;
  });
}

function getClient() {
  return authorized && client;
}

function getCurrentSpaceName() {
  var currentSpaceName = currentSpace && currentSpace.name ? currentSpace.name : '';
  return currentSpaceName;
}

function resetClient() {
  window.sessionStorage.clear();
  authorized = false;
}

exports.initClient = initClient;
exports.getClient = getClient;
exports.resetClient = resetClient;
exports.getCurrentSpaceName = getCurrentSpaceName;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/services/contentfulClient.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/services/contentfulClient.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findContentType = exports.findContentTypeInList = exports.getContentTypes = undefined;

var _contentfulClient = __webpack_require__(561);

var contentTypesStorage = void 0;

function getContentTypes() {
  return (0, _contentfulClient.getClient)().getContentTypes().then(function (response) {
    return response;
  });
}

function findContentTypeInList(contentTypes, id) {
  return contentTypes.items.find(function (item) {
    return item.sys.id === id;
  });
}

function findContentType(id) {
  return getContentTypes().then(function (contentTypes) {
    return findContentTypeInList(contentTypes, id);
  });
}

exports.getContentTypes = getContentTypes;
exports.findContentTypeInList = findContentTypeInList;
exports.findContentType = findContentType;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/services/contentTypeStore.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/services/contentTypeStore.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectDestructuringEmpty2 = __webpack_require__(582);

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(586);

var _contentfulClient = __webpack_require__(561);

var _contentTypeStore = __webpack_require__(565);

var _entriesStore = __webpack_require__(613);

var _entriesStore2 = _interopRequireDefault(_entriesStore);

var _layout = __webpack_require__(588);

var _layout2 = _interopRequireDefault(_layout);

var _contentTypeBlurb = __webpack_require__(589);

var _contentTypeBlurb2 = _interopRequireDefault(_contentTypeBlurb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanojeda/dev/next-react-redux/pages/recipes.js?entry';


var CONTENTFUL = {
  SPACE_ID: '6gudwzhnyzfa',
  ACCESS_TOKEN: '0a0236e09641790c4a16872fe54978a3acffa547640245a6538349b7b0085af1',
  PREVIEW_ACCESS_TOKEN: '785dc12d8b76dedce8ba5057f4d5777b17e3ffe4ec2cde2d798cf4ff2bef04c5',
  DELIVERY_ACCESS_TOKEN: null
};

var CONTENT_TYPES = {
  RECIPES: 'recipePost',
  NOTES: 'notePost',
  MEDIA: 'mediaPost'
};

var Contentful = function (_Component) {
  (0, _inherits3.default)(Contentful, _Component);

  function Contentful(props) {
    (0, _classCallCheck3.default)(this, Contentful);

    return (0, _possibleConstructorReturn3.default)(this, (Contentful.__proto__ || (0, _getPrototypeOf2.default)(Contentful)).call(this, props));
  }

  (0, _createClass3.default)(Contentful, [{
    key: 'render',
    value: function render() {
      var recipesType = this.props.recipesType;
      var title = recipesType.name,
          blurb = recipesType.description;

      return _react2.default.createElement(_layout2.default, { title: 'recipes', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_contentTypeBlurb2.default, { title: title, blurb: blurb, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var entries, space, recipesType, recipesEntries;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _objectDestructuringEmpty3.default)(_ref);

                entries = new _entriesStore2.default();
                _context.next = 4;
                return (0, _contentfulClient.initClient)(CONTENTFUL.SPACE_ID, CONTENTFUL.ACCESS_TOKEN, false);

              case 4:
                space = _context.sent;
                _context.next = 7;
                return (0, _contentTypeStore.findContentType)(CONTENT_TYPES.RECIPES);

              case 7:
                recipesType = _context.sent;
                _context.next = 10;
                return entries.fetchEntries().then(function (entries) {
                  // console.log(entries);
                  return entries.allRecipes;
                });

              case 10:
                recipesEntries = _context.sent;
                return _context.abrupt('return', { recipesType: recipesType, recipesEntries: recipesEntries });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Contentful;
}(_react.Component);

exports.default = Contentful;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/pages/recipes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/pages/recipes.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/recipes")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = [
	{
		"key": "home",
		"label": "Home",
		"path": "/",
		"title": ""
	},
	{
		"key": "logo",
		"label": "Logo",
		"path": "/logo",
		"title": "Logo"
	},
	{
		"key": "recipes",
		"label": "Recipes",
		"path": "/recipes",
		"title": "Recipes"
	}
];

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = ".home-header {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.users-header {\n  font-family: \"Open Sans\"; }\n\n.logo-size {\n  width: 250px;\n  height: 250px; }\n\n.bg-logo {\n  background: url(\"../../static/logo.svg\") center no-repeat; }\n\n.red {\n  color: red; }\n\n.orange {\n  color: orange; }\n\n.yellow {\n  color: yellow; }\n\n.green {\n  color: green; }\n\n.blue {\n  color: blue; }\n\n.indigo {\n  color: indigo; }\n\n.violet {\n  color: violet; }\n\n.flex {\n  display: flex; }\n";

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(564);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _navigation = __webpack_require__(590);

var _navigation2 = _interopRequireDefault(_navigation);

var _routes = __webpack_require__(585);

var _routes2 = _interopRequireDefault(_routes);

var _global = __webpack_require__(587);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanojeda/dev/next-react-redux/components/layout.js';


var getPageTitle = function getPageTitle(title, routesArr) {
  var pageTitle = routesArr.filter(function (route) {
    return route.key === title;
  }).reduce(function (initial, route) {
    var isHome = route.title === '';
    return isHome ? initial : initial + ' | ' + route.title;
  }, 'Juan Ojeda');

  return pageTitle;
};

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'index' : _ref$title;

  var pageTitle = getPageTitle(title, _routes2.default);
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, pageTitle), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0,   width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _global2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Open+Sans', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_navigation2.default, { links: _routes2.default, activeLink: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'I am a footer. I am here to stay.'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/components/layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/components/layout.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanojeda/dev/next-react-redux/components/molecules/contentTypeBlurb.js';


var ContentTypeBlurb = function (_Component) {
  (0, _inherits3.default)(ContentTypeBlurb, _Component);

  function ContentTypeBlurb() {
    (0, _classCallCheck3.default)(this, ContentTypeBlurb);

    return (0, _possibleConstructorReturn3.default)(this, (ContentTypeBlurb.__proto__ || (0, _getPrototypeOf2.default)(ContentTypeBlurb)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentTypeBlurb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          blurb = _props.blurb;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, title), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, blurb));
    }
  }]);

  return ContentTypeBlurb;
}(_react.Component);

exports.default = ContentTypeBlurb;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/components/molecules/contentTypeBlurb.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/components/molecules/contentTypeBlurb.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(564);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanojeda/dev/next-react-redux/components/molecules/navigation.js';


/**
* Navigation component that takes a json config and renders navigation links.
* Optional active property defines which link is active.
* 
* @class Navigation
* @extends {React.Component}
*/

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'render',
    value: function render() {
      /**
       * links is an array of links
       * eg: [
       *    {
       *      label: 'label name'   //  string,
       *      link: '/path/to/link' //  string
       *    }
       */
      var _props = this.props,
          links = _props.links,
          activeLink = _props.activeLink;

      var classes = 'navigation__item';

      return _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, links.map(function (link) {
        var isActive = activeLink === link.key;
        return _react2.default.createElement('li', { key: link.path, className: classes + ' ' + (isActive ? 'navigation__item--active' : ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement(_link2.default, { href: link.path, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, link.label)));
      })));
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/components/molecules/navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/components/molecules/navigation.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadEntries = undefined;

var _slicedToArray2 = __webpack_require__(244);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _scourjs = __webpack_require__(596);

var _scourjs2 = _interopRequireDefault(_scourjs);

var _contentfulClient = __webpack_require__(561);

var _contentTypeStore = __webpack_require__(565);

var _uniqueConcat = __webpack_require__(606);

var _uniqueConcat2 = _interopRequireDefault(_uniqueConcat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadEntries(entries) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      entryId = _ref.entryId,
      contentTypeId = _ref.contentTypeId,
      contentTypeChanged = _ref.contentTypeChanged;

  var skip = contentTypeChanged ? 0 : entries.skip;
  return _promise2.default.all([(0, _contentfulClient.getClient)().getEntries({
    content_type: contentTypeId,
    skip: skip || 0,
    limit: 100,
    order: 'sys.createdAt'
  }), (0, _contentTypeStore.getContentTypes)(), findEntry(entryId, entries)]).then(function (_ref2) {
    var _ref3 = (0, _slicedToArray3.default)(_ref2, 3),
        entriesResponse = _ref3[0],
        contentTypes = _ref3[1],
        entry = _ref3[2];

    entriesResponse = (0, _scourjs2.default)(entriesResponse).set('items', appendAndAugmentEntries(contentTypeChanged ? [] : entries.payload.value, entriesResponse.items, contentTypes));
    return {
      entry: entry ? (0, _scourjs2.default)(addContentTypeToEntry(entry, contentTypes)) : entry,
      entries: entriesResponse.go('items'),
      skip: skip + entriesResponse.limit,
      contentTypes: contentTypes,
      total: entriesResponse.total
    };
  });
}

function findEntry(id, entries) {
  if (!id) return _promise2.default.resolve(undefined);
  var entry = entries.payload.find({ 'sys.id': { '$eq': id } });
  if (entry) {
    return _promise2.default.resolve(entry.value);
  } else {
    return (0, _contentfulClient.getClient)().getEntries({ 'sys.id': id }).then(function (response) {
      if (response.total > 0) {
        return response.items[0];
      } else {
        throw new Error('Entry not found');
      }
    });
  }
}

function appendAndAugmentEntries(existingEntries, newEntries, contentTypes) {
  return (0, _uniqueConcat2.default)(existingEntries, addContentTypesToEntries(newEntries, contentTypes), function (entry) {
    return entry.sys.id;
  });
}

function addContentTypesToEntries(entries, contentTypes) {
  return entries.map(function (entry) {
    return addContentTypeToEntry(entry, contentTypes);
  });
}

function addContentTypeToEntry(entry, contentTypes) {
  var contentTypeId = entry.sys.contentType.sys.id;
  entry.sys.contentType = (0, _contentTypeStore.findContentTypeInList)(contentTypes, contentTypeId);
  return entry;
}

exports.loadEntries = loadEntries;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/services/entriesStore.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/services/entriesStore.js"); } } })();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(580);


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobxReact = __webpack_require__(611);

var _entriesStore = __webpack_require__(591);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntriesStore = function () {
  function EntriesStore(entries) {
    (0, _classCallCheck3.default)(this, EntriesStore);

    this.entries = {};
    this.contentTypes = {};

    this.entries = [];
    this.contentTypes = {};

    if (entries) {
      this.setEntries(entries);
    }
  }

  (0, _createClass3.default)(EntriesStore, [{
    key: 'fetchEntries',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var contentfulData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _entriesStore.loadEntries)(null, { contentTypeChanged: true });

              case 2:
                contentfulData = _context.sent;
                return _context.abrupt('return', new EntriesStore(contentfulData));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchEntries() {
        return _ref.apply(this, arguments);
      }

      return fetchEntries;
    }()
  }, {
    key: 'setEntries',
    value: function setEntries(contentfulData) {
      this.entries = contentfulData.entries.value;
      this.contentTypes = contentfulData.contentTypes.items;
    }
  }, {
    key: 'getEntriesByType',
    value: function getEntriesByType(type) {

      // does the contentType even exist?
      var matchedTypes = this.contentTypes.find(function (storedType) {
        return storedType.sys.id === type;
      });
      var entries = void 0;

      if (matchedTypes) {
        return this.entries.filter(function (entry) {
          console.log(entry.sys.contentType);
          return entry.sys.contentType.sys.id === type;
        });
      } else {
        return {
          error: 'content type doesn\'t exist'
        };
      }
    }
  }, {
    key: 'allRecipes',
    get: function get() {
      return this.getEntriesByType('recipePost');
    }

    // @computed get allNotes() {

    // }

    // @computed get allMedia() {

    // }

  }]);

  return EntriesStore;
}();

exports.default = EntriesStore;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanojeda/dev/next-react-redux/stores/entriesStore.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanojeda/dev/next-react-redux/stores/entriesStore.js"); } } })();

/***/ })

},[607]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9jb250ZW50ZnVsQ2xpZW50LmpzP2ZkN2ZjNTMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY29udGVudFR5cGVTdG9yZS5qcz9mZDdmYzUzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlY2lwZXMuanM/ZmQ3ZmM1MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JvdXRlcy5qc29uP2ZkN2ZjNTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXNoZWV0cy9nbG9iYWwuc2Nzcz9mZDdmYzUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzP2ZkN2ZjNTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvY29udGVudFR5cGVCbHVyYi5qcz9mZDdmYzUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL25hdmlnYXRpb24uanM/ZmQ3ZmM1MyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9lbnRyaWVzU3RvcmUuanM/ZmQ3ZmM1MyIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvZW50cmllc1N0b3JlLmpzP2ZkN2ZjNTMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBUzs7QUFFVCxJQUFJLGNBQUo7QUFDQSxJQUFJLGtCQUFKO0FBQ0EsSUFBSSxvQkFBSjs7QUFFQSxTQUFTLFdBQVksT0FBTyxhQUFhLFNBQ3ZDOztXQUVFO2lCQUNBO1VBQU0sVUFBVSwyQkFFbEI7QUFKRSxHQURPO2dCQUtLLFdBQ1gsS0FBSyxVQUFDLE9BQ0w7aUJBQ0E7bUJBQ0E7V0FDRDtBQUNKLEdBTlE7OztBQVFULFNBQVMsWUFDUDtTQUFPLGNBQ1I7OztBQUVELFNBQVMsc0JBQ1A7TUFBSSxtQkFBb0IsZ0JBQWdCLGFBQWEsT0FBUSxhQUFhLE9BQzFFO1NBQ0Q7OztBQUVELFNBQVMsY0FDUDtTQUFPLGVBQ1A7ZUFDRDtBQUVEOztRQUFTO1FB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YUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUdmLGdCQUNUO1dBQUssVUFBaUIsZUFBZSxRQUNyQztXQUFLLGVBQWlCLGVBQWUsYUFDdEM7Ozs7cUNBRWdCLE1BRWY7O0FBQ0E7VUFBSSxvQkFBb0IsYUFBYSxLQUFLLFVBQUMsWUFDekM7ZUFBTyxXQUFXLElBQUksT0FDdkI7QUFDRCxPQUhtQjtVQUdmLGVBRUo7O1VBQUksY0FDRjtvQkFBWSxRQUFRLE9BQU8sVUFBQyxPQUMxQjtrQkFBUSxJQUFJLE1BQU0sSUFDbEI7aUJBQU8sTUFBTSxJQUFJLFlBQVksSUFBSSxPQUNsQztBQUNGLFNBSlE7QUFEVCxhQU1FOztpQkFHRDtBQUZHO0FBS0w7Ozs7d0JBR0M7YUFBTyxLQUFLLGlCQUNiO0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFHRjs7a0JBQWUsYSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL3JlY2lwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdjb250ZW50ZnVsJ1xuXG5sZXQgY2xpZW50XG5sZXQgYXV0aG9yaXplZFxubGV0IGN1cnJlbnRTcGFjZVxuXG5mdW5jdGlvbiBpbml0Q2xpZW50IChzcGFjZSwgYWNjZXNzVG9rZW4sIHByZXZpZXcpIHtcbiAgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogc3BhY2UsXG4gICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgIGhvc3Q6IHByZXZpZXcgPyAncHJldmlldy5jb250ZW50ZnVsLmNvbScgOiAnY2RuLmNvbnRlbnRmdWwuY29tJ1xuICB9KVxuICByZXR1cm4gY2xpZW50LmdldFNwYWNlKClcbiAgICAudGhlbigoc3BhY2UpID0+IHtcbiAgICAgIGF1dGhvcml6ZWQgPSB0cnVlXG4gICAgICBjdXJyZW50U3BhY2UgPSBzcGFjZVxuICAgICAgcmV0dXJuIHNwYWNlXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50ICgpIHtcbiAgcmV0dXJuIGF1dGhvcml6ZWQgJiYgY2xpZW50XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTcGFjZU5hbWUgKCkge1xuICBsZXQgY3VycmVudFNwYWNlTmFtZSA9IChjdXJyZW50U3BhY2UgJiYgY3VycmVudFNwYWNlLm5hbWUpID8gY3VycmVudFNwYWNlLm5hbWUgOiAnJ1xuICByZXR1cm4gY3VycmVudFNwYWNlTmFtZVxufVxuXG5mdW5jdGlvbiByZXNldENsaWVudCAoKSB7XG4gIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpXG4gIGF1dGhvcml6ZWQgPSBmYWxzZVxufVxuXG5leHBvcnQgeyBpbml0Q2xpZW50LCBnZXRDbGllbnQsIHJlc2V0Q2xpZW50LCBnZXRDdXJyZW50U3BhY2VOYW1lIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9jb250ZW50ZnVsQ2xpZW50LmpzIiwiaW1wb3J0IHtnZXRDbGllbnR9IGZyb20gJy4vY29udGVudGZ1bENsaWVudCdcblxubGV0IGNvbnRlbnRUeXBlc1N0b3JhZ2VcblxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGVzICgpIHtcbiAgcmV0dXJuIGdldENsaWVudCgpLmdldENvbnRlbnRUeXBlcygpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZmluZENvbnRlbnRUeXBlSW5MaXN0IChjb250ZW50VHlwZXMsIGlkKSB7XG4gIHJldHVybiBjb250ZW50VHlwZXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5zeXMuaWQgPT09IGlkKVxufVxuXG5mdW5jdGlvbiBmaW5kQ29udGVudFR5cGUgKGlkKSB7XG4gIHJldHVybiBnZXRDb250ZW50VHlwZXMoKVxuICAudGhlbigoY29udGVudFR5cGVzKSA9PiBmaW5kQ29udGVudFR5cGVJbkxpc3QoY29udGVudFR5cGVzLCBpZCkpXG59XG5cbmV4cG9ydCB7XG4gIGdldENvbnRlbnRUeXBlcyxcbiAgZmluZENvbnRlbnRUeXBlSW5MaXN0LFxuICBmaW5kQ29udGVudFR5cGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9jb250ZW50VHlwZVN0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGluaXRDbGllbnQsIGdldENsaWVudCwgcmVzZXRDbGllbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb250ZW50ZnVsQ2xpZW50JztcbmltcG9ydCB7IGdldENvbnRlbnRUeXBlcywgZmluZENvbnRlbnRUeXBlIH0gZnJvbSAnLi4vc2VydmljZXMvY29udGVudFR5cGVTdG9yZSc7XG5cbmltcG9ydCBFbnRyaWVzU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2VudHJpZXNTdG9yZSc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IENvbnRlbnRUeXBlQmx1cmIgZnJvbSAnLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvY29udGVudFR5cGVCbHVyYic7XG5cbmNvbnN0IENPTlRFTlRGVUwgPSB7XG4gIFNQQUNFX0lEICAgICAgICAgICAgICA6ICc2Z3Vkd3pobnl6ZmEnLFxuICBBQ0NFU1NfVE9LRU4gICAgICAgICAgOiAnMGEwMjM2ZTA5NjQxNzkwYzRhMTY4NzJmZTU0OTc4YTNhY2ZmYTU0NzY0MDI0NWE2NTM4MzQ5YjdiMDA4NWFmMScsXG4gIFBSRVZJRVdfQUNDRVNTX1RPS0VOICA6ICc3ODVkYzEyZDhiNzZkZWRjZThiYTUwNTdmNGQ1Nzc3YjE3ZTNmZmU0ZWMyY2RlMmQ3OThjZjRmZjJiZWYwNGM1JyxcbiAgREVMSVZFUllfQUNDRVNTX1RPS0VOIDogbnVsbCxcbn07XG5cbmNvbnN0IENPTlRFTlRfVFlQRVMgPSB7XG4gIFJFQ0lQRVMgOiAncmVjaXBlUG9zdCcsXG4gIE5PVEVTICAgOiAnbm90ZVBvc3QnLFxuICBNRURJQSAgIDogJ21lZGlhUG9zdCcgXG59O1xuXG5jbGFzcyBDb250ZW50ZnVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtcbiAgICAvLyBwYXRoTmFtZSwgICAgIC8vIHBhdGggc2VjdGlvbiBvZiBVUkxcbiAgICAvLyBxdWVyeSwgICAgICAgIC8vIHF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIFVSTFxuICAgIC8vIGFzUGF0aCwgICAgICAgLy8gdGhlIGFjdHVhbCBVUkwgcGF0aFxuICAgIC8vIHJlcSwgICAgICAgICAgLy8gaHR0cCByZXF1ZXN0IG9iamVjdCAoc2VydmVyIG9ubHkpXG4gICAgLy8gcmVzLCAgICAgICAgICAvLyBodHRwIHJlc3BvbnNlIG9iamVjdCAoc2VydmVyIG9ubHkpXG4gICAgLy8ganNvblBhZ2VSZXMsICAvLyBmZXRjaCByZXNwb25zZSBvYmplY3QgKGNsaWVudCBvbmx5KVxuICAgIC8vIGVyciAgICAgICAgICAgLy8gZXJyb3Igb2JqZWN0IGZvciBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIHJlbmRlcmluZ1xuICB9KXtcbiAgICBjb25zdCBlbnRyaWVzID0gbmV3IEVudHJpZXNTdG9yZSgpO1xuICAgIGNvbnN0IHNwYWNlID0gYXdhaXQgaW5pdENsaWVudChDT05URU5URlVMLlNQQUNFX0lELCBDT05URU5URlVMLkFDQ0VTU19UT0tFTiwgZmFsc2UpO1xuICAgIGNvbnN0IHJlY2lwZXNUeXBlID0gYXdhaXQgZmluZENvbnRlbnRUeXBlKENPTlRFTlRfVFlQRVMuUkVDSVBFUyk7XG4gICAgY29uc3QgcmVjaXBlc0VudHJpZXMgPSBhd2FpdCBlbnRyaWVzLmZldGNoRW50cmllcygpLnRoZW4oKGVudHJpZXMpPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZW50cmllcyk7XG4gICAgICByZXR1cm4gZW50cmllcy5hbGxSZWNpcGVzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcmVjaXBlc1R5cGUsIHJlY2lwZXNFbnRyaWVzIH07XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY2lwZXNUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtuYW1lOiB0aXRsZSwgZGVzY3JpcHRpb246IGJsdXJiIH0gPSByZWNpcGVzVHlwZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPVwicmVjaXBlc1wiPlxuICAgICAgICA8Q29udGVudFR5cGVCbHVyYiB0aXRsZT17IHRpdGxlIH0gYmx1cmI9eyBibHVyYiB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudGZ1bDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9yZWNpcGVzLmpzP2VudHJ5IiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRcImtleVwiOiBcImhvbWVcIixcblx0XHRcImxhYmVsXCI6IFwiSG9tZVwiLFxuXHRcdFwicGF0aFwiOiBcIi9cIixcblx0XHRcInRpdGxlXCI6IFwiXCJcblx0fSxcblx0e1xuXHRcdFwia2V5XCI6IFwibG9nb1wiLFxuXHRcdFwibGFiZWxcIjogXCJMb2dvXCIsXG5cdFx0XCJwYXRoXCI6IFwiL2xvZ29cIixcblx0XHRcInRpdGxlXCI6IFwiTG9nb1wiXG5cdH0sXG5cdHtcblx0XHRcImtleVwiOiBcInJlY2lwZXNcIixcblx0XHRcImxhYmVsXCI6IFwiUmVjaXBlc1wiLFxuXHRcdFwicGF0aFwiOiBcIi9yZWNpcGVzXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIlJlY2lwZXNcIlxuXHR9XG5dO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9yb3V0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gNTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG5cXG4udXNlcnMtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIjsgfVxcblxcbi5sb2dvLXNpemUge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDsgfVxcblxcbi5iZy1sb2dvIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vc3RhdGljL2xvZ28uc3ZnXFxcIikgY2VudGVyIG5vLXJlcGVhdDsgfVxcblxcbi5yZWQge1xcbiAgY29sb3I6IHJlZDsgfVxcblxcbi5vcmFuZ2Uge1xcbiAgY29sb3I6IG9yYW5nZTsgfVxcblxcbi55ZWxsb3cge1xcbiAgY29sb3I6IHllbGxvdzsgfVxcblxcbi5ncmVlbiB7XFxuICBjb2xvcjogZ3JlZW47IH1cXG5cXG4uYmx1ZSB7XFxuICBjb2xvcjogYmx1ZTsgfVxcblxcbi5pbmRpZ28ge1xcbiAgY29sb3I6IGluZGlnbzsgfVxcblxcbi52aW9sZXQge1xcbiAgY29sb3I6IHZpb2xldDsgfVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3R5bGVzaGVldHMvZ2xvYmFsLnNjc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbW9sZWN1bGVzL25hdmlnYXRpb24nO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzb24nO1xuXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuL3N0eWxlc2hlZXRzL2dsb2JhbC5zY3NzJztcblxuY29uc3QgZ2V0UGFnZVRpdGxlID0gKHRpdGxlLCByb3V0ZXNBcnIpID0+IHtcbiAgbGV0IHBhZ2VUaXRsZSA9IHJvdXRlc0Fyci5maWx0ZXIoKHJvdXRlKT0+e1xuICAgICAgcmV0dXJuIHJvdXRlLmtleSA9PT0gdGl0bGU7XG4gICAgfSlcbiAgICAucmVkdWNlKChpbml0aWFsLCByb3V0ZSk9PiB7XG4gICAgICBsZXQgaXNIb21lID0gcm91dGUudGl0bGUgPT09ICcnO1xuICAgICAgcmV0dXJuIGlzSG9tZSA/IGluaXRpYWwgOiBgJHtpbml0aWFsfSB8ICR7cm91dGUudGl0bGV9YCB9LCAnSnVhbiBPamVkYScpO1xuXG4gIHJldHVybiBwYWdlVGl0bGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnaW5kZXgnIH0pID0+IHtcbiAgbGV0IHBhZ2VUaXRsZSA9IGdldFBhZ2VUaXRsZSh0aXRsZSwgcm91dGVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57IHBhZ2VUaXRsZSB9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgICB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX0gLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiICBocmVmPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxOYXZpZ2F0aW9uIGxpbmtzPXtyb3V0ZXN9IGFjdGl2ZUxpbms9e3RpdGxlfSAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgXG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICBcbiAgICAgIDxmb290ZXI+XG4gICAgICBJIGFtIGEgZm9vdGVyLiBJIGFtIGhlcmUgdG8gc3RheS5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDb250ZW50VHlwZUJsdXJiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyB0aXRsZSwgYmx1cmIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8cD57Ymx1cmJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50VHlwZUJsdXJiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbW9sZWN1bGVzL2NvbnRlbnRUeXBlQmx1cmIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqXG4qIE5hdmlnYXRpb24gY29tcG9uZW50IHRoYXQgdGFrZXMgYSBqc29uIGNvbmZpZyBhbmQgcmVuZGVycyBuYXZpZ2F0aW9uIGxpbmtzLlxuKiBPcHRpb25hbCBhY3RpdmUgcHJvcGVydHkgZGVmaW5lcyB3aGljaCBsaW5rIGlzIGFjdGl2ZS5cbiogXG4qIEBjbGFzcyBOYXZpZ2F0aW9uXG4qIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4qL1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICAvKipcbiAgICAgKiBsaW5rcyBpcyBhbiBhcnJheSBvZiBsaW5rc1xuICAgICAqIGVnOiBbXG4gICAgICogICAge1xuICAgICAqICAgICAgbGFiZWw6ICdsYWJlbCBuYW1lJyAgIC8vICBzdHJpbmcsXG4gICAgICogICAgICBsaW5rOiAnL3BhdGgvdG8vbGluaycgLy8gIHN0cmluZ1xuICAgICAqICAgIH1cbiAgICAgKi9cbiAgICBsZXQgeyBsaW5rcywgYWN0aXZlTGluayB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY2xhc3NlcyAgID0gJ25hdmlnYXRpb25fX2l0ZW0nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7IGxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gYWN0aXZlTGluayA9PT0gbGluay5rZXk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtsaW5rLnBhdGh9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlc30gJHtpc0FjdGl2ZSA/ICduYXZpZ2F0aW9uX19pdGVtLS1hY3RpdmUnOicnfWB9PjxMaW5rIGhyZWY9e2xpbmsucGF0aH0+PGE+e2xpbmsubGFiZWx9PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbW9sZWN1bGVzL25hdmlnYXRpb24uanMiLCJpbXBvcnQgc2NvdXIgZnJvbSAnc2NvdXJqcydcbmltcG9ydCB7Z2V0Q2xpZW50fSBmcm9tICcuL2NvbnRlbnRmdWxDbGllbnQnXG5pbXBvcnQge2dldENvbnRlbnRUeXBlcywgZmluZENvbnRlbnRUeXBlSW5MaXN0fSBmcm9tICcuL2NvbnRlbnRUeXBlU3RvcmUnXG5pbXBvcnQgY29uY2F0IGZyb20gJ3VuaXF1ZS1jb25jYXQnXG5cbmZ1bmN0aW9uIGxvYWRFbnRyaWVzIChlbnRyaWVzLCB7ZW50cnlJZCwgY29udGVudFR5cGVJZCwgY29udGVudFR5cGVDaGFuZ2VkfSA9IHt9KSB7XG4gIGNvbnN0IHNraXAgPSBjb250ZW50VHlwZUNoYW5nZWQgPyAwIDogZW50cmllcy5za2lwXG4gIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgZ2V0Q2xpZW50KCkuZ2V0RW50cmllcyh7XG4gICAgICBjb250ZW50X3R5cGU6IGNvbnRlbnRUeXBlSWQsXG4gICAgICBza2lwOiBza2lwIHx8IDAsXG4gICAgICBsaW1pdDogMTAwLFxuICAgICAgb3JkZXI6ICdzeXMuY3JlYXRlZEF0J1xuICAgIH0pLFxuICAgIGdldENvbnRlbnRUeXBlcygpLFxuICAgIGZpbmRFbnRyeShlbnRyeUlkLCBlbnRyaWVzKVxuICBdKS50aGVuKChbZW50cmllc1Jlc3BvbnNlLCBjb250ZW50VHlwZXMsIGVudHJ5XSkgPT4ge1xuICAgIGVudHJpZXNSZXNwb25zZSA9IHNjb3VyKGVudHJpZXNSZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAuc2V0KCdpdGVtcycsIGFwcGVuZEFuZEF1Z21lbnRFbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGVDaGFuZ2VkID8gW10gOiBlbnRyaWVzLnBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzUmVzcG9uc2UuaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgIHJldHVybiB7XG4gICAgICBlbnRyeTogZW50cnkgPyBzY291cihhZGRDb250ZW50VHlwZVRvRW50cnkoZW50cnksIGNvbnRlbnRUeXBlcykpIDogZW50cnksXG4gICAgICBlbnRyaWVzOiBlbnRyaWVzUmVzcG9uc2UuZ28oJ2l0ZW1zJyksXG4gICAgICBza2lwOiBza2lwICsgZW50cmllc1Jlc3BvbnNlLmxpbWl0LFxuICAgICAgY29udGVudFR5cGVzLFxuICAgICAgdG90YWw6IGVudHJpZXNSZXNwb25zZS50b3RhbFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmluZEVudHJ5IChpZCwgZW50cmllcykge1xuICBpZiAoIWlkKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZClcbiAgY29uc3QgZW50cnkgPSBlbnRyaWVzLnBheWxvYWQuZmluZCgoeydzeXMuaWQnOiB7JyRlcSc6IGlkfX0pKVxuICBpZiAoZW50cnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5LnZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRDbGllbnQoKS5nZXRFbnRyaWVzKHsnc3lzLmlkJzogaWR9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRvdGFsID4gMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuaXRlbXNbMF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRW50cnkgbm90IGZvdW5kJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFuZEF1Z21lbnRFbnRyaWVzIChleGlzdGluZ0VudHJpZXMsIG5ld0VudHJpZXMsIGNvbnRlbnRUeXBlcykge1xuICByZXR1cm4gY29uY2F0KFxuICAgIGV4aXN0aW5nRW50cmllcyxcbiAgICBhZGRDb250ZW50VHlwZXNUb0VudHJpZXMobmV3RW50cmllcywgY29udGVudFR5cGVzKSxcbiAgICAoZW50cnkpID0+IGVudHJ5LnN5cy5pZFxuICApXG59XG5cbmZ1bmN0aW9uIGFkZENvbnRlbnRUeXBlc1RvRW50cmllcyAoZW50cmllcywgY29udGVudFR5cGVzKSB7XG4gIHJldHVybiBlbnRyaWVzLm1hcCgoZW50cnkpID0+IGFkZENvbnRlbnRUeXBlVG9FbnRyeShlbnRyeSwgY29udGVudFR5cGVzKSlcbn1cblxuZnVuY3Rpb24gYWRkQ29udGVudFR5cGVUb0VudHJ5IChlbnRyeSwgY29udGVudFR5cGVzKSB7XG4gIGNvbnN0IGNvbnRlbnRUeXBlSWQgPSBlbnRyeS5zeXMuY29udGVudFR5cGUuc3lzLmlkXG4gIGVudHJ5LnN5cy5jb250ZW50VHlwZSA9IGZpbmRDb250ZW50VHlwZUluTGlzdChjb250ZW50VHlwZXMsIGNvbnRlbnRUeXBlSWQpXG4gIHJldHVybiBlbnRyeVxufVxuXG5leHBvcnQge1xuICBsb2FkRW50cmllc1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL2VudHJpZXNTdG9yZS5qcyIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyBsb2FkRW50cmllcyB9IGZyb20gJy4uL3NlcnZpY2VzL2VudHJpZXNTdG9yZSc7XG5cbmNsYXNzIEVudHJpZXNTdG9yZSB7XG4gIGVudHJpZXMgPSB7fTtcbiAgY29udGVudFR5cGVzID0ge307XG5cbiAgY29uc3RydWN0b3IoZW50cmllcykge1xuICAgIFxuICAgIHRoaXMuZW50cmllcyAgICAgICAgPSBbXTtcbiAgICB0aGlzLmNvbnRlbnRUeXBlcyAgID0ge307XG5cbiAgICBpZiAoZW50cmllcykge1xuICAgICAgdGhpcy5zZXRFbnRyaWVzKGVudHJpZXMpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoRW50cmllcygpIHtcbiAgICBjb25zdCBjb250ZW50ZnVsRGF0YSA9IGF3YWl0IGxvYWRFbnRyaWVzKG51bGwsIHtjb250ZW50VHlwZUNoYW5nZWQ6IHRydWV9KTtcblxuICAgIHJldHVybiBuZXcgRW50cmllc1N0b3JlKGNvbnRlbnRmdWxEYXRhKTtcbiAgfVxuXG4gIHNldEVudHJpZXMoY29udGVudGZ1bERhdGEpIHtcbiAgICB0aGlzLmVudHJpZXMgICAgICAgID0gY29udGVudGZ1bERhdGEuZW50cmllcy52YWx1ZTtcbiAgICB0aGlzLmNvbnRlbnRUeXBlcyAgID0gY29udGVudGZ1bERhdGEuY29udGVudFR5cGVzLml0ZW1zO1xuICB9XG5cbiAgZ2V0RW50cmllc0J5VHlwZSh0eXBlKSB7XG5cbiAgICAvLyBkb2VzIHRoZSBjb250ZW50VHlwZSBldmVuIGV4aXN0P1xuICAgIGxldCBtYXRjaGVkVHlwZXMgPSB0aGlzLmNvbnRlbnRUeXBlcy5maW5kKChzdG9yZWRUeXBlKSA9PiB7XG4gICAgICByZXR1cm4gc3RvcmVkVHlwZS5zeXMuaWQgPT09IHR5cGU7XG4gICAgfSk7XG4gICAgbGV0IGVudHJpZXM7XG5cbiAgICBpZiAobWF0Y2hlZFR5cGVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZW50cnkuc3lzLmNvbnRlbnRUeXBlKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnN5cy5jb250ZW50VHlwZS5zeXMuaWQgPT09IHR5cGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGBjb250ZW50IHR5cGUgZG9lc24ndCBleGlzdGAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgXG4gIH1cblxuICBnZXQgYWxsUmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbnRyaWVzQnlUeXBlKCdyZWNpcGVQb3N0Jyk7XG4gIH1cblxuICAvLyBAY29tcHV0ZWQgZ2V0IGFsbE5vdGVzKCkge1xuXG4gIC8vIH1cblxuICAvLyBAY29tcHV0ZWQgZ2V0IGFsbE1lZGlhKCkge1xuICAgIFxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJpZXNTdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZXMvZW50cmllc1N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        