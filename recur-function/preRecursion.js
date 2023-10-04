"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockData_json_1 = require("./mockData.json");
var getAllId = function (values) {
    var idArr = [];
    values.forEach(function (item) {
        if (item.id) {
            idArr.push(item === null || item === void 0 ? void 0 : item.id);
            if (item === null || item === void 0 ? void 0 : item.child) {
                getAllId(item.child);
            }
            else
                return;
        }
    });
    return idArr;
};
var allId = getAllId(mockData_json_1.data);
console.log(allId, allId.length);
