'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobxReact = require('mobx-react');

var _entriesStore = require('../services/entriesStore');

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