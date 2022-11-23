"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _exploreTreeDataWithStack = _interopRequireDefault(require("./exploreTreeDataWithStack.js"));
var _exploreTreeDataWithRecursion = _interopRequireDefault(require("./exploreTreeDataWithRecursion.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var AlgMapping = {
  recursion: _exploreTreeDataWithRecursion["default"],
  stack: _exploreTreeDataWithStack["default"]
};
var Tree = function () {
  function Tree(_ref) {
    var _ref$alg = _ref.alg,
      alg = _ref$alg === void 0 ? 'recursion' : _ref$alg,
      data = _ref.data,
      _ref$key = _ref.key,
      key = _ref$key === void 0 ? 'key' : _ref$key,
      _ref$autoKey = _ref.autoKey,
      autoKey = _ref$autoKey === void 0 ? false : _ref$autoKey;
    _classCallCheck(this, Tree);
    this.alg = alg;
    this.data = data;
    this.key = key;
    this.autoKey = autoKey;
  }
  _createClass(Tree, [{
    key: "_executeAlg",
    value: function _executeAlg() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return true;
      };
      var algFn = AlgMapping[this.alg];
      var _algFn = algFn(this.data, {
          key: this.key,
          autoKey: this.autoKey,
          callback: callback
        }),
        result = _algFn.result,
        tree = _algFn.tree;
      return {
        result: result,
        tree: tree
      };
    }
  }, {
    key: "explore",
    value: function explore(callback) {
      var _this$_executeAlg = this._executeAlg(callback),
        result = _this$_executeAlg.result,
        tree = _this$_executeAlg.tree;
      this.keys = result;
      return tree;
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      if (!this.keys) {
        var _this$_executeAlg2 = this._executeAlg(),
          result = _this$_executeAlg2.result;
        this.keys = result;
      }
      return this.keys;
    }
  }]);
  return Tree;
}();
var _default = Tree;
exports["default"] = _default;