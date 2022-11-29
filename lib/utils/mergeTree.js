"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var mergeTree = function mergeTree(a, b) {
  var _config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var config = {};
  config.children = _config.children || 'children';
  config.key = _config.key || 'name';
  if (!Array.isArray(a)) a = [a];
  if (!Array.isArray(b)) b = [b];
  return [].concat(_toConsumableArray(a), _toConsumableArray(b)).reduce(function (r, o) {
    r = r || [];
    var item = r.find(function (_item) {
      if (_item !== null && _item !== void 0 && _item[config.key]) {
        return (o === null || o === void 0 ? void 0 : o[config.key]) === (_item === null || _item === void 0 ? void 0 : _item[config.key]);
      }
      return false;
    });
    if (item && item[config.children]) {
      item[config.children] = mergeTree(item === null || item === void 0 ? void 0 : item[config.children], o === null || o === void 0 ? void 0 : o[config.children]);
    } else if (o) {
      var index = r.findIndex(function (item) {
        return item[config.key] === o[config.key];
      });
      if (index === -1) {
        r.push(o);
      } else {
        r.splice(index, 1);
      }
    }
    ;
    return r;
  }, undefined) || [];
};
var _default = mergeTree;
exports["default"] = _default;