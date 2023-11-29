"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var mockData_json_1 = require("./mockData.json");
var getAllId = function (values) {
    var idArr = [];
    values.forEach(function (item) {
        if (item.id) {
            idArr.push(item === null || item === void 0 ? void 0 : item.id);
            if (item === null || item === void 0 ? void 0 : item.child) {
                // getAllId(item.child)
                idArr = __spreadArray(__spreadArray([], idArr, true), getAllId(item.child), true);
            }
            else
                return;
        }
    });
    return idArr;
};
var allId = getAllId(mockData_json_1.data);
console.log(allId, allId.length);
