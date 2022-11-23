"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var result = [];
var config = {};
var initConfig = function initConfig(_config) {
  config.callback = _config.callback || function () {
    return true;
  };
  config.key = _config.key || 'name';
};
var dig = function dig(tree, key) {
  var len = tree.length;
  for (var i = 0; i < len; i++) {
    var treeItem = tree[i];
    if (key) {
      treeItem[config.key] = "".concat(key, "-").concat(i);
    } else {
      treeItem[config.key] = "".concat(i);
    }
    result.push(treeItem[config.key]);
    if (treeItem.children && treeItem.children.length > 0) {
      dig(treeItem.children, treeItem[config.key]);
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
    tree: dig(tree),
    result: result
  };
};
var _default = exploreTreeDataWithRecursion;
exports["default"] = _default;