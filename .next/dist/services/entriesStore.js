'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadEntries = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _scourjs = require('scourjs');

var _scourjs2 = _interopRequireDefault(_scourjs);

var _contentfulClient = require('./contentfulClient');

var _contentTypeStore = require('./contentTypeStore');

var _uniqueConcat = require('unique-concat');

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