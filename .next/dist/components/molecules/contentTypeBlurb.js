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