'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _lodash = require('lodash');

var _contentfulClient = require('../services/contentfulClient');

var _contentTypeStore = require('../services/contentTypeStore');

var _entriesStore = require('../stores/entriesStore');

var _entriesStore2 = _interopRequireDefault(_entriesStore);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _contentTypeBlurb = require('../components/molecules/contentTypeBlurb');

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