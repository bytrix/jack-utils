"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mergeArray = function mergeArray(arr1, arr2, config) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  var arr = len1 > len2 ? arr1 : arr2;
  var restArr = len1 > len2 ? arr2 : arr1;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var item = arr[i];
    var restItem = restArr[i];
    if ((item === null || item === void 0 ? void 0 : item[config.key]) === undefined) {
      throw new Error('Invalid key!');
    }
    if (restItem !== undefined && (item === null || item === void 0 ? void 0 : item[config.key]) !== (restItem === null || restItem === void 0 ? void 0 : restItem[config.key])) {
      arr.push(restItem);
    }
  }
  return arr;
};
var _default = mergeArray;
exports["default"] = _default;