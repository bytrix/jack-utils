"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;
Object.defineProperty(exports, "arrayIntegrate", {
  enumerable: true,
  get: function get() {
    return _arrayIntegrate["default"];
  }
});
exports["default"] = void 0;
Object.defineProperty(exports, "uniqConcat", {
  enumerable: true,
  get: function get() {
    return _uniqConcat["default"];
  }
});
var _walkTreeDataWithStack = _interopRequireDefault(require("./walkTreeDataWithStack.js"));
var _walkTreeDataWithRecursion = _interopRequireDefault(require("./walkTreeDataWithRecursion.js"));
var _mergeTree = _interopRequireDefault(require("./utils/mergeTree.js"));
var _uniqConcat = _interopRequireDefault(require("./uniqConcat.js"));
var _arrayIntegrate = _interopRequireDefault(require("./arrayIntegrate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
      this.walk(function (_ref3, currentRoot) {
        var _ref4 = _slicedToArray(_ref3, 2),
          children = _ref4[0],
          index = _ref4[1];
        var child = children[index];
        var parentKeys = {};
        if (inherit) {
          parentKeys = inheritKeys.reduce(function (total, inheritKey) {
            if (typeof inheritKey === 'string') {
              total[inheritKey] = total[inheritKey] || (currentRoot === null || currentRoot === void 0 ? void 0 : currentRoot[inheritKey]);
            } else if (_typeof(inheritKey) === 'object') {
              var sourceKey = inheritKey.sourceKey,
                targetKey = inheritKey.targetKey;
              total[targetKey] = total[targetKey] || (currentRoot === null || currentRoot === void 0 ? void 0 : currentRoot[sourceKey]);
            }
            return total;
          }, parentKeys);
        }
        if (!child) return;
        var childrenOfChild = child === null || child === void 0 ? void 0 : child[_this.children];
        if (!childrenOfChild || childrenOfChild && childrenOfChild.length === 0) {
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
exports.Tree = Tree;
var _default = {};
exports["default"] = _default;