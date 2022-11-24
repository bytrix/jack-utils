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
  if (!Array.isArray(a)) a = [a];
  if (!Array.isArray(b)) b = [b];
  return [].concat(_toConsumableArray(a), _toConsumableArray(b)).reduce(function (r, o) {
    r = r || [];
    var item = r.find(function (item) {
      if (item !== null && item !== void 0 && item.name) {
        return (o === null || o === void 0 ? void 0 : o.name) === (item === null || item === void 0 ? void 0 : item.name);
      }
      return false;
    });
    if (item) {
      item.children = mergeTree(item.children, o.children);
    } else if (o) {
      r.push(o);
    }
    ;
    return r;
  }, undefined);
};
var _default = mergeTree;
exports["default"] = _default;