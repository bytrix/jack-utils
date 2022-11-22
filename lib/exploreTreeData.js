"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initConfig = function initConfig(config) {
  config.callback = config.callback || function () {
    return true;
  };
  config.key = config.key || 'name';
};
var exploreTreeData = function exploreTreeData(tree) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  initConfig(config);
  var index = 0;
  var root;
  var stack = [];
  var result = [];
  if (tree.length === 1) {
    root = tree[0];
    result.push(root[config.key]);
  } else if (tree.length > 1) {
    var _root;
    root = (_root = {}, _defineProperty(_root, config.key, '<root>'), _defineProperty(_root, "children", tree), _root);
  }
  stack.push([root, index]);
  while (stack.length > 0) {
    var _stack$pop = stack.pop(),
      _stack$pop2 = _slicedToArray(_stack$pop, 2),
      currentRootNode = _stack$pop2[0],
      _index = _stack$pop2[1];
    while (_index < currentRootNode.children.length) {
      var childNode = currentRootNode.children[_index];
      var isNeedToPush = config.callback(currentRootNode.children, _index);
      if (!isNeedToPush) {
        currentRootNode.children.splice(_index, 1);
        continue;
      }
      if (isNeedToPush) {
        result.push(childNode[config.key]);
      }
      _index += 1;
      if (childNode.children && childNode.children.length > 0) {
        stack.push([currentRootNode, _index]);
        _index = 0;
        currentRootNode = childNode;
      }
    }
  }
  return {
    result: result,
    tree: tree
  };
};
var _default = exploreTreeData;
exports["default"] = _default;