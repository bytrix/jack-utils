"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _walkTreeDataWithStack = _interopRequireDefault(require("./walkTreeDataWithStack.js"));
var _walkTreeDataWithRecursion = _interopRequireDefault(require("./walkTreeDataWithRecursion.js"));
var _mergeTree = _interopRequireDefault(require("./utils/mergeTree.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
      parentKeysSeperator = _ref.parentKeysSeperator;
    _classCallCheck(this, Tree);
    this.alg = alg;
    this.data = data;
    this.key = key;
    this.autoKey = autoKey;
    this.spreadParentKey = spreadParentKey;
    this.parentKeysSeperator = parentKeysSeperator;
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
    key: "merge",
    value:

    function merge(otherTree) {
      return (0, _mergeTree["default"])(this.data, otherTree);
    }
  }]);
  return Tree;
}();
var _default = Tree;
exports["default"] = _default;