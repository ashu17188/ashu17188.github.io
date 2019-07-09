(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login1-login1-module"],{

/***/ "./src/app/authentication/login-basic/logout-basic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/login-basic/logout-basic.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogoutBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutBasicComponent", function() { return LogoutBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutBasicComponent = /** @class */ (function () {
    function LogoutBasicComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutBasicComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.authService.getLoggedInUser();
    };
    LogoutBasicComponent.prototype.logout = function () {
        this.authService.logoutUser();
        this.router.navigate([this.authService.getLoginUrl()]);
    };
    LogoutBasicComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    LogoutBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-logout',
            template: "Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} | \n           <button input='input' (click)=\"logout()\">Logout</button>\n\t"
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutBasicComponent);
    return LogoutBasicComponent;
}());



/***/ }),

/***/ "./src/app/authentication/services/auth-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/services/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('Url:' + url);
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.authService.setRedirectUrl(url);
        this.router.navigate([this.authService.getLoginUrl()]);
        return false;
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        var loggedInUser = this.authService.getLoggedInUser();
        if (loggedInUser.role === 'ADMIN') {
            return true;
        }
        else {
            console.log('Unauthorized to open link: ' + state.url);
            return false;
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/login1/address/address.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login1/address/address.component.ts ***!
  \*****************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n      <h3>ADDRESS</h3>\n      <p><b> Article: Child routing & Relative navigation </b></p>\n\t  <p><b> Category: Angular </b></p>\n\t  <p><b> Website: CONCRETEPAGE.COM </b></p>\n  "
        })
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/login1/layout/dashboard.layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/login1/layout/dashboard.layout.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLayoutComponent", function() { return DashboardLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent() {
    }
    DashboardLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n\t <ul>\n\t <li><a routerLink=\"./article\" routerLinkActive=\"active\" >Article</a></li>\n   <li><a routerLink=\"./address\" routerLinkActive=\"active\">Address</a></li>\n  </ul> \n  <app-basic-logout></app-basic-logout>\n\n  <div [ngClass] = \"'parent-container'\">\t\n\t  <router-outlet></router-outlet>\t\n\t</div>\n  "
        })
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login1/login1-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login1/login1-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Login1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1RoutingModule", function() { return Login1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/dashboard.layout.component */ "./src/app/login1/layout/dashboard.layout.component.ts");
/* harmony import */ var _authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/services/auth-guard.service */ "./src/app/authentication/services/auth-guard.service.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address/address.component */ "./src/app/login1/address/address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__["DashboardLayoutComponent"],
        canActivate: [_authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        children: [
            {
                path: 'article',
                loadChildren: function () { return __webpack_require__.e(/*! import() | article-article-module */ "article-article-module").then(__webpack_require__.bind(null, /*! ./article/article.module */ "./src/app/login1/article/article.module.ts")).then(function (mod) { return mod.ArticleModule; }); }
                // './article/article.module#ArticleModule'
            },
            {
                path: 'address',
                component: _address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]
            }
        ]
    }
];
var Login1RoutingModule = /** @class */ (function () {
    function Login1RoutingModule() {
    }
    Login1RoutingModule.components = [_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__["DashboardLayoutComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]];
    Login1RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Login1RoutingModule);
    return Login1RoutingModule;
}());



/***/ }),

/***/ "./src/app/login1/login1.module.ts":
/*!*****************************************!*\
  !*** ./src/app/login1/login1.module.ts ***!
  \*****************************************/
/*! exports provided: Login1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Module", function() { return Login1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login1-routing.module */ "./src/app/login1/login1-routing.module.ts");
/* harmony import */ var _authentication_login_basic_logout_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/login-basic/logout-basic.component */ "./src/app/authentication/login-basic/logout-basic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Login1Module = /** @class */ (function () {
    function Login1Module() {
    }
    Login1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Login1RoutingModule"].components, _authentication_login_basic_logout_basic_component__WEBPACK_IMPORTED_MODULE_3__["LogoutBasicComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Login1RoutingModule"]
            ],
            exports: [_login1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Login1RoutingModule"].components],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], Login1Module);
    return Login1Module;
}());



/***/ })

}]);
//# sourceMappingURL=login1-login1-module.js.map