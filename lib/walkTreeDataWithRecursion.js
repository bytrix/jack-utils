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
var result = [];
var config = {};
var initConfig = function initConfig(_config) {
  config.callback = _config.callback;
  config.key = _config.key;
  config.autoKey = _config.autoKey;
  config.spreadParentKey = _config.spreadParentKey;
  config.parentKeysSeperator = _config.parentKeysSeperator;
  config.children = _config.children;
};

var dig = function dig(tree, parentKeys, key, otherTree) {
  var len = tree.length;
  if (!parentKeys) {
    parentKeys = [];
  }
  for (var i = 0; i < len; i++) {
    var treeItem = tree[i];
    if (!treeItem) {
      continue;
    }
    var otherTreeItem = (otherTree === null || otherTree === void 0 ? void 0 : otherTree[i]) || {};
    var walkWithCallbackRes = void 0;
    if (config.callback) {
      walkWithCallbackRes = config.callback([tree, i], [otherTree, i]);
    }
    if (config.spreadParentKey) {
      if (config.parentKeysSeperator) {
        treeItem.path = [].concat(parentKeys, treeItem[config.key]).join(config.parentKeysSeperator);
      } else {
        treeItem.path = [].concat(parentKeys, treeItem[config.key]);
      }
    }
    if (config.autoKey) {
      if (key) {
        treeItem[config.key] = "".concat(key, "-").concat(i);
      } else {
        treeItem[config.key] = "".concat(i);
      }
    }
    result.push(treeItem === null || treeItem === void 0 ? void 0 : treeItem[config.key]);
    var newParentKeys = [].concat(_toConsumableArray(parentKeys), [treeItem === null || treeItem === void 0 ? void 0 : treeItem[config.key]]);
    if (treeItem !== null && treeItem !== void 0 && treeItem[config.children] && (treeItem === null || treeItem === void 0 ? void 0 : treeItem[config.children].length) > 0) {
      if (config.autoKey) {
        dig(treeItem[config.children], newParentKeys, treeItem[config.key], otherTreeItem[config.children]);
      } else {
        dig(treeItem[config.children], newParentKeys, undefined, otherTreeItem[config.children]);
      }
    } else {
      continue;
    }
  }
  return tree;
};
var exploreTreeDataWithRecursion = function exploreTreeDataWithRecursion(tree) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  initConfig(config);
  return {
    tree: dig(tree, undefined, undefined, config.otherTree),
    result: result
  };
};
var _default = exploreTreeDataWithRecursion;
exports["default"] = _default;