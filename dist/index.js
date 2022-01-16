"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var test_js_1 = require("./test.js");
var UserLocation;
(function (UserLocation) {
    UserLocation["tokyo"] = "tokyo";
    UserLocation["berlin"] = "berlin";
})(UserLocation || (UserLocation = {}));
var getUserData = function (user) {
    return "".concat(user.name, " is ").concat(user.age, " and lives in ").concat(user.city, " He is an ").concat(user.isAdult(user.age) ? 'adult' : 'child');
};
var changeLocation = function (location, user) {
    // user.location = location;
};
var user = {
    name: 'Max',
    age: 30,
    location: UserLocation.berlin,
    sex: "male",
    isAdult: function (age) {
        return age > 16;
    },
    city: test_js_1.city
};
// changeLocation("tokyo", user)
console.log(getUserData(user));
var person = { age: 5, sex: "male" };
// Object.freeze(person)
person.age = 45;
console.log(person.age);
var School = /** @class */ (function () {
    function School(name) {
        this._offersDegree = true;
        this._hasTeacher = true;
        this.name = name;
    }
    Object.defineProperty(School.prototype, "offersDegree", {
        get: function () {
            return this._offersDegree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "hasTeacher", {
        get: function () {
            return this._hasTeacher;
        },
        enumerable: false,
        configurable: true
    });
    return School;
}());
var University = /** @class */ (function (_super) {
    __extends(University, _super);
    function University(name) {
        return _super.call(this, name) || this;
    }
    return University;
}(School));
var uniben = new University("Uniben");
var toUpperCase = function (obj) {
    return obj;
};
var ans = toUpperCase({ name: "John", age: 15 });
console.log(ans);
// identity function
function identity(obj) {
    return obj;
}
console.log(identity("spiff"));
console.log(identity(15));
