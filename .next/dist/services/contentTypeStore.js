'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findContentType = exports.findContentTypeInList = exports.getContentTypes = undefined;

var _contentfulClient = require('./contentfulClient');

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