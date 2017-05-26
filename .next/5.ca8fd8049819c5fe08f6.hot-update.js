webpackHotUpdate(5,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZXMvZW50cmllc1N0b3JlLmpzP2I1MGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQjs7QUFDWjs7OztJQUVILDJCQUlKO3dCQUFZLFNBQVM7d0NBQUE7O1NBQUE7U0FBQSxlQUVuQjs7U0FBSyxVQUNMO1NBQUssZUFFTDs7UUFBSSxTQUNGO1dBQUssV0FDTjtBQUNGOzs7Ozs7Ozs7Ozs7O3VCQUc4QiwrQkFBWSxNQUFNLEVBQUMsb0JBQW9COzttQkFBOUQ7O2lEQUVDLElBQUksYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUdmLGdCQUNUO1dBQUssVUFBaUIsZUFBZSxRQUNyQztXQUFLLGVBQWlCLGVBQWUsYUFDdEM7Ozs7cUNBRWdCLE1BRWY7O0FBQ0E7VUFBSSxvQkFBb0IsYUFBYSxLQUFLLFVBQUMsWUFDekM7ZUFBTyxXQUFXLElBQUksT0FDdkI7QUFDRCxPQUhtQjtVQUdmLGVBRUo7O1VBQUksY0FDRjtvQkFBWSxRQUFRLE9BQU8sVUFBQyxPQUMxQjtrQkFBUSxJQUFJLE1BQU0sSUFDbEI7aUJBQU8sTUFBTSxJQUFJLFlBQVksSUFBSSxPQUNsQztBQUNGLFNBSlE7QUFEVCxhQU1FOztpQkFHRDtBQUZHO0FBS0w7Ozs7d0JBR0M7YUFBTyxLQUFLLGlCQUNiO0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFHRjs7a0JBQWUsYSIsImZpbGUiOiI1LmNhOGZkODA0OTgxOWM1ZmUwOGY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgbG9hZEVudHJpZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9lbnRyaWVzU3RvcmUnO1xuXG5jbGFzcyBFbnRyaWVzU3RvcmUge1xuICBlbnRyaWVzID0ge307XG4gIGNvbnRlbnRUeXBlcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVudHJpZXMpIHtcbiAgICBcbiAgICB0aGlzLmVudHJpZXMgICAgICAgID0gW107XG4gICAgdGhpcy5jb250ZW50VHlwZXMgICA9IHt9O1xuXG4gICAgaWYgKGVudHJpZXMpIHtcbiAgICAgIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaEVudHJpZXMoKSB7XG4gICAgY29uc3QgY29udGVudGZ1bERhdGEgPSBhd2FpdCBsb2FkRW50cmllcyhudWxsLCB7Y29udGVudFR5cGVDaGFuZ2VkOiB0cnVlfSk7XG5cbiAgICByZXR1cm4gbmV3IEVudHJpZXNTdG9yZShjb250ZW50ZnVsRGF0YSk7XG4gIH1cblxuICBzZXRFbnRyaWVzKGNvbnRlbnRmdWxEYXRhKSB7XG4gICAgdGhpcy5lbnRyaWVzICAgICAgICA9IGNvbnRlbnRmdWxEYXRhLmVudHJpZXMudmFsdWU7XG4gICAgdGhpcy5jb250ZW50VHlwZXMgICA9IGNvbnRlbnRmdWxEYXRhLmNvbnRlbnRUeXBlcy5pdGVtcztcbiAgfVxuXG4gIGdldEVudHJpZXNCeVR5cGUodHlwZSkge1xuXG4gICAgLy8gZG9lcyB0aGUgY29udGVudFR5cGUgZXZlbiBleGlzdD9cbiAgICBsZXQgbWF0Y2hlZFR5cGVzID0gdGhpcy5jb250ZW50VHlwZXMuZmluZCgoc3RvcmVkVHlwZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0b3JlZFR5cGUuc3lzLmlkID09PSB0eXBlO1xuICAgIH0pO1xuICAgIGxldCBlbnRyaWVzO1xuXG4gICAgaWYgKG1hdGNoZWRUeXBlcykge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVudHJ5LnN5cy5jb250ZW50VHlwZSk7XG4gICAgICAgIHJldHVybiBlbnRyeS5zeXMuY29udGVudFR5cGUuc3lzLmlkID09PSB0eXBlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgY29udGVudCB0eXBlIGRvZXNuJ3QgZXhpc3RgIFxuICAgICAgfVxuICAgIH1cblxuICAgIFxuICB9XG5cbiAgZ2V0IGFsbFJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW50cmllc0J5VHlwZSgncmVjaXBlUG9zdCcpO1xuICB9XG5cbiAgLy8gQGNvbXB1dGVkIGdldCBhbGxOb3RlcygpIHtcblxuICAvLyB9XG5cbiAgLy8gQGNvbXB1dGVkIGdldCBhbGxNZWRpYSgpIHtcbiAgICBcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRyaWVzU3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmVzL2VudHJpZXNTdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=