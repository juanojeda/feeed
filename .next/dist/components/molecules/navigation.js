'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

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