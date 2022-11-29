"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(arr1, arr2) {
  var restArr = [];
  var _loop = function _loop(i) {
    var arr1Item = arr1[i];
    restArr = [].concat(restArr, arr2.filter(function (arr2Item) {
      return arr2Item.id !== arr1Item.id;
    }));
  };
  for (var i = 0; i < arr1.length; i++) {
    _loop(i);
  }
  return [].concat(arr1, restArr);
};
exports["default"] = _default;