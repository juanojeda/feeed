'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _navigation = require('./molecules/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _routes = require('./routes.json');

var _routes2 = _interopRequireDefault(_routes);

var _global = require('./stylesheets/global.scss');

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