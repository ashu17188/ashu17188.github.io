(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/authentication/services/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/authentication/services/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var USERS = [
    new _user__WEBPACK_IMPORTED_MODULE_3__["User"](1, 'mahesh', 'm123', 'ADMIN'),
    new _user__WEBPACK_IMPORTED_MODULE_3__["User"](2, 'krishna', 'k123', 'USER'),
    new _user__WEBPACK_IMPORTED_MODULE_3__["User"](3, 'admin', '123', 'ADMIN'),
    new _user__WEBPACK_IMPORTED_MODULE_3__["User"](4, 'user', '123', 'USER')
];
var usersObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(USERS);
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.redirectUrl = '/login1';
        this.loginUrl = '/login-basic';
        this.isloggedIn = false;
    }
    AuthService.prototype.getAllUsers = function () {
        return usersObservable;
    };
    AuthService.prototype.isUserAuthenticated = function (username, password) {
        var _this = this;
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
            var user = users.find(function (user) { return (user.username === username) && (user.password === password); });
            if (user) {
                _this.isloggedIn = true;
                _this.loggedInUser = user;
            }
            else {
                _this.isloggedIn = false;
            }
            return _this.isloggedIn;
        }));
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return this.isloggedIn;
    };
    AuthService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    AuthService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    AuthService.prototype.getLoginUrl = function () {
        return this.loginUrl;
    };
    AuthService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    AuthService.prototype.logoutUser = function () {
        this.isloggedIn = false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authentication/services/user.ts":
/*!*************************************************!*\
  !*** ./src/app/authentication/services/user.ts ***!
  \*************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userId, username, password, role) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    User.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map