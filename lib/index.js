"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _walkTreeDataWithStack = _interopRequireDefault(require("./walkTreeDataWithStack.js"));
var _walkTreeDataWithRecursion = _interopRequireDefault(require("./walkTreeDataWithRecursion.js"));
var _mergeTree = _interopRequireDefault(require("./utils/mergeTree.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var AlgMapping = {
  recursion: _walkTreeDataWithRecursion["default"],
  stack: _walkTreeDataWithStack["default"]
};
var Tree = function () {
  function Tree(_ref) {
    var _ref$alg = _ref.alg,
      alg = _ref$alg === void 0 ? 'recursion' : _ref$alg,
      data = _ref.data,
      _ref$key = _ref.key,
      key = _ref$key === void 0 ? 'key' : _ref$key,
      _ref$autoKey = _ref.autoKey,
      autoKey = _ref$autoKey === void 0 ? false : _ref$autoKey,
      _ref$spreadParentKey = _ref.spreadParentKey,
      spreadParentKey = _ref$spreadParentKey === void 0 ? false : _ref$spreadParentKey,
      parentKeysSeperator = _ref.parentKeysSeperator,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'children' : _ref$children;
    _classCallCheck(this, Tree);
    this.alg = alg;
    this.data = data;
    this.key = key;
    this.autoKey = autoKey;
    this.spreadParentKey = spreadParentKey;
    this.parentKeysSeperator = parentKeysSeperator;
    this.children = children;
  }
  _createClass(Tree, [{
    key: "_executeAlg",
    value: function _executeAlg() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return true;
      };
      var otherTree = arguments.length > 1 ? arguments[1] : undefined;
      var algFn = AlgMapping[this.alg];
      var _algFn = algFn(this.data, {
          key: this.key,
          autoKey: this.autoKey,
          spreadParentKey: this.spreadParentKey,
          parentKeysSeperator: this.parentKeysSeperator,
          children: this.children,
          callback: callback,
          otherTree: otherTree
        }),
        result = _algFn.result,
        tree = _algFn.tree;
      return {
        result: result,
        tree: tree
      };
    }
  }, {
    key: "walk",
    value: function walk(callback) {
      var _this$_executeAlg = this._executeAlg(callback),
        result = _this$_executeAlg.result,
        tree = _this$_executeAlg.tree;
      this.keys = result;
      return tree;
    }
  }, {
    key: "walkWith",
    value: function walkWith(otherTree, callback) {
      this.otherTree = otherTree;
      var _this$_executeAlg2 = this._executeAlg(callback, otherTree),
        result = _this$_executeAlg2.result,
        tree = _this$_executeAlg2.tree;
      this.key = result;
      return tree;
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      if (!this.keys) {
        var _this$_executeAlg3 = this._executeAlg(),
          result = _this$_executeAlg3.result;
        this.keys = result;
      }
      return this.keys;
    }
  }, {
    key: "getLeafs",
    value: function getLeafs() {
      var _this = this;
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$inherit = _ref2.inherit,
        inherit = _ref2$inherit === void 0 ? false : _ref2$inherit,
        _ref2$inheritKeys = _ref2.inheritKeys,
        inheritKeys = _ref2$inheritKeys === void 0 ? [] : _ref2$inheritKeys;
      var leafs = [];
      var parentKeys = {};
      this.walk(function (children, index, currentRoot) {
        var child = children[index];
        if (inherit) {
          parentKeys = inheritKeys.reduce(function (total, num) {
            total[num] = total[num] || (currentRoot === null || currentRoot === void 0 ? void 0 : currentRoot[num]);
            return total;
          }, parentKeys);
        }
        if ((child === null || child === void 0 ? void 0 : child[_this.children].length) === 0) {
          if (inherit) {
            leafs.push(_objectSpread(_objectSpread({}, child), parentKeys));
          } else {
            leafs.push(child);
          }
        }
        return true;
      });
      return leafs;
    }
  }, {
    key: "merge",
    value: function merge(otherTree) {
      return (0, _mergeTree["default"])(this.data, otherTree, {
        key: this.key,
        children: this.children
      });
    }
  }]);
  return Tree;
}();
var _default = Tree;
exports["default"] = _default;