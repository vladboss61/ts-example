"use strict";
exports.__esModule = true;
var process = require("process");
var Department = /** @class */ (function () {
    function Department(name) {
        var _this = this;
        this.other = function () {
            console.log("Print");
            console.log(_this.name);
        };
        this.name = name;
    }
    Department.prototype.print = function () {
        console.log("Print");
        console.log(this.name);
    };
    return Department;
}());
var main = function (args) {
    var some = {
        field: "something"
    };
    var array = [1, 4, 5, 6, "123123"];
    var cacheCounter = counterWrapper();
    console.log(cacheCounter(10));
    console.log(cacheCounter(20));
    console.log(cacheCounter(2));
    console.log('Args');
    console.log(args);
};
var counterWrapper = function () {
    console.log("Fist Execution counterWrapper");
    var count = 0;
    return function (accumulator) {
        console.log("Annonimys function");
        return count + accumulator;
    };
};
main(process.argv);
