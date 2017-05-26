'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentSpaceName = exports.resetClient = exports.getClient = exports.initClient = undefined;

var _contentful = require('contentful');

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