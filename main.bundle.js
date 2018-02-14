webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vendor_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/vendor/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vendor_view_orders_view_orders_component__ = __webpack_require__("../../../../../src/app/vendor/view-orders/view-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_role_guard_service__ = __webpack_require__("../../../../../src/app/services/role-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__app_register_register_component__["a" /* RegisterComponent */] },
    {
        path: 'user', data: { userType: [__WEBPACK_IMPORTED_MODULE_11_app_model_app_modelClasses__["h" /* usertTypeEnum */].DEFAULT] }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_role_guard_service__["a" /* RoleGuardService */]],
        children: [
            { path: '', redirectTo: '/user/home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__app_home_home_component__["a" /* HomeComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_7__app_my_orders_my_orders_component__["a" /* MyOrdersComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'thankyou/:id', component: __WEBPACK_IMPORTED_MODULE_3__app_thankyou_component__["a" /* ThankYouComponent */] }
        ]
    },
    {
        path: 'vendor', data: { userType: [__WEBPACK_IMPORTED_MODULE_11_app_model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR] }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_role_guard_service__["a" /* RoleGuardService */]],
        children: [
            { path: '', redirectTo: '/vendor/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__vendor_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_9__vendor_view_orders_view_orders_component__["a" /* ViewOrdersComponent */] }
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".main-wrapper {\n  min-height: 100vh;\n  padding-bottom: 120px;\n  font-family: 'Source Sans Pro', cursive, sans-serif !important;\n  font-size: .9rem !important;\n  padding-top: 110px;\n  padding-bottom: 50px;\n  background: linear-gradient(135deg, #172a74, #21a9af) no-repeat;\n  background-color: #184e8e; }\n  .main-wrapper.vendor {\n    background: url(" + __webpack_require__("../../../../../src/assets/bg1.png") + ") transparent; }\n\n.wrapper {\n  max-width: 1100px;\n  margin: auto;\n  padding-top: 30px; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/D:/Other/Study/Angular 2/LunchOrderApp/src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACC,kBAAiB;EACd,sBAAqB;EACrB,+DAA8D;EAC9D,4BAA2B;EAC3B,mBAAkB;EAClB,qBAAoB;EACpB,gEAA+D;EAClE,0BAAyB,EAIzB;EAZD;IAUE,sDAAgD,EAChD;;AAEF;EACC,kBAAiB;EACjB,aAAY;EACZ,kBAAiB,EACjB","file":"app.component.scss","sourcesContent":[".main-wrapper {\r\n\tmin-height: 100vh;\r\n    padding-bottom: 120px;\r\n    font-family: 'Source Sans Pro', cursive, sans-serif !important;\r\n    font-size: .9rem !important;\r\n    padding-top: 110px;\r\n    padding-bottom: 50px;\r\n    background: linear-gradient(135deg, #172a74, #21a9af) no-repeat;\r\n\tbackground-color: #184e8e;\r\n\t&.vendor {\r\n\t\tbackground: url('../assets/bg1.png') transparent;\r\n\t}\r\n}\r\n.wrapper {\r\n\tmax-width: 1100px;\r\n\tmargin: auto;\r\n\tpadding-top: 30px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _sharedService, _dataService) {
        var _this = this;
        this._router = _router;
        this._sharedService = _sharedService;
        this._dataService = _dataService;
        this.loginStatus = false;
        this.isVendor = false;
        _sharedService.loginStatus$.subscribe(function (x) {
            _this.loginStatus = (x != null);
            _this.isVendor = x != null && x.userType == __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isVendor = this._dataService.isVendor();
    };
    AppComponent.prototype.handleLogoutClick = function () {
        // this._loggedIn.next(false);
        this._router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "\n    <div class=\"main-wrapper\" [class.vendor]=\"isVendor\">\n        <app-header (loggedOut)=\"handleLogoutClick()\"></app-header>\n          <div class=\"wrapper\">\n            <router-outlet></router-outlet>\n          </div>\n    </div>",
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_app_service__["a" /* DataService */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_extensions__ = __webpack_require__("../../../../../src/app/rxjs-extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_role_guard_service__ = __webpack_require__("../../../../../src/app/services/role-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vendor_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/vendor/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vendor_view_orders_view_orders_component__ = __webpack_require__("../../../../../src/app/vendor/view-orders/view-orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Service import



// Components import











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__thankyou_component__["a" /* ThankYouComponent */], __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_14__my_orders_my_orders_component__["a" /* MyOrdersComponent */], __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_17__change_password_change_password_component__["a" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_18__vendor_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_19__vendor_view_orders_view_orders_component__["a" /* ViewOrdersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_services_app_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_7__app_services_shared_service_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_8__app_services_role_guard_service__["a" /* RoleGuardService */]] /* Service reference here to make available through all application*/,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-change-password\">\n    <form (submit)=\"submitPasswordData(cpForm)\" novalidate #cpForm=\"ngForm\">\n        <h4 class=\"form-registration-heading\">Please provide following details</h4>\n        <br>\n        <div [attr.class]=\"'alert alert-' + (serverMsg.isError?'danger':'success')\" *ngIf=\"serverMsg.msg\">\n            {{serverMsg.msg}}\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" (keyup)=\"serverMsg.isError && resetErrorMsg()\" class=\"form-control\" name=\"oldpassword\" [(ngModel)]=\"_data.currentPassword\" #currpass=\"ngModel\" placeholder=\"Current password\"\n                required pattern=\"(?=.*\\d).{8,20}\" />\n            <div *ngIf=\"currpass.errors && (currpass.dirty || currpass.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!currpass.errors.required\">Please provide password</div>\n                <div [hidden]=\"!currpass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" (keyup)=\"serverMsg.isError && resetErrorMsg()\" class=\"form-control\" name=\"newpassword\" [(ngModel)]=\"_data.newPassword\" #newpass=\"ngModel\" placeholder=\"New password\"\n                required pattern=\"(?=.*\\d).{8,20}\" />\n            <div *ngIf=\"newpass.errors && (newpass.dirty || newpass.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!newpass.errors.required\">Please provide password</div>\n                <div [hidden]=\"!newpass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" (keyup)=\"serverMsg.isError && resetErrorMsg()\" class=\"form-control\" name=\"matchPassword\" [(ngModel)]=\"repeatPassword\" #matchPass=\"ngModel\" placeholder=\"Repeat new password\" required/>\n            <!-- <div *ngIf=\"matchPass.dirty || matchPass.touched\" class=\"alert alert-danger\"> -->\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && matchPass.errors && matchPass.errors.required)\">Please re-enter password</div>\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && !(matchPass.errors && matchPass.errors.required) && repeatPassword!==_data.newPassword)\">Password do not match</div>\n            <!-- </div> -->\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!(cpForm.form.valid && repeatPassword===_data.newPassword)\">Change Password</button>\n\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".app-change-password {\n  font-size: .8em; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/change-password/D:/Other/Study/Angular 2/LunchOrderApp/src/app/change-password/change-password.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAe,EAClB","file":"change-password.component.scss","sourcesContent":[".app-change-password{\r\n    font-size: .8em;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { element } from 'protractor';



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(dataService) {
        this.dataService = dataService;
        this.serverMsg = {
            msg: "",
            isError: false
        };
        this._data = new __WEBPACK_IMPORTED_MODULE_1__model_app_modelClasses__["d" /* changePasswordData */]();
        this._data.userId = this.dataService.getCurrentUser().userId;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.submitPasswordData = function (form) {
        var _this = this;
        this.dataService.changePassword(this._data).then(function (x) {
            _this.serverMsg = {
                msg: x ? "Password changed successfully" : "Current password is invalid",
                isError: !x
            };
            if (x) {
                _this._data = new __WEBPACK_IMPORTED_MODULE_1__model_app_modelClasses__["d" /* changePasswordData */]();
                _this.repeatPassword = "";
                form.resetForm();
            }
        });
    };
    ChangePasswordComponent.prototype.resetErrorMsg = function () {
        // console.log("reset");
        this.serverMsg = {
            msg: "",
            isError: false
        };
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_app_service__["a" /* DataService */]) === "function" && _a || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a;
}());

//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'header '+(_isVendor?'header-purple':'header-blue')\" [class.header-purple]=\"_isVendor\" [class.scrolled]=\"_isScrolled\">\r\n    <nav class=\"navbar navbar-default navigation-clean-search\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand navbar-link\" [routerLink]=\"['/home']\" title=\"LunchOrderApp\">\r\n                    <img src=\"./assets/logo.png\" alt=\"logo\">\r\n                </a>\r\n                <ul class=\"navbar-menu\" *ngIf=\"_currectUser\">\r\n                    <li class=\"navbar-menu-item\" *ngIf=\"!_isVendor\">\r\n                        <a [routerLink]=\"['user','orders']\">My Orders</a>\r\n                    </li>\r\n                    <li class=\"navbar-menu-item\" *ngIf=\"_isVendor\">\r\n                        <a [routerLink]=\"['vendor','dashboard']\">Dashboard</a>\r\n                    </li>\r\n                </ul>\r\n                <!-- <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\r\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t</button> -->\r\n                <span class=\"float-right\">\r\n                    <a class=\"btn btn-default action-button login\" [routerLink]=\"['/login']\" *ngIf=\"!_currectUser\">Log In</a>\r\n                    <a class=\"btn btn-default action-button\" role=\"button\" [routerLink]=\"['/register']\" *ngIf=\"!_currectUser\">Sign Up</a>\r\n\r\n                    <a class=\"btn btn-default action-button\" [routerLink]=\"['user','profile']\" *ngIf=\"_currectUser && !_isVendor\">My Profile</a>\r\n                    <a class=\"btn btn-default action-button\" role=\"button\" (click)=\"_logoutClick()\" *ngIf=\"_currectUser\">Log Out</a>\r\n                </span>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li class=\"active\" role=\"presentation\"><a href=\"#\">Link</a></li>\r\n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\">Dropdown <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li role=\"presentation\"><a href=\"#\">First Item</a></li>\r\n                            <li role=\"presentation\"><a href=\"#\">Second Item</a></li>\r\n                            <li role=\"presentation\"><a href=\"#\">Third Item</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n                <form class=\"navbar-form navbar-left\" target=\"_self\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"search-field\"><i class=\"glyphicon glyphicon-search\"></i></label>\r\n                        <input class=\"form-control search-field\" type=\"search\" name=\"search\" id=\"search-field\">\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".header {\n  font-family: 'Source Sans Pro', sans-serif; }\n  @media (max-width: 767px) {\n    .header {\n      padding-bottom: 80px; } }\n  .header .navbar {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    background: #356396;\n    padding-top: 12px;\n    padding-bottom: 10px;\n    color: #fff;\n    border-radius: 0;\n    box-shadow: none;\n    border: none;\n    box-shadow: 0 0 7px -1px #000;\n    z-index: 99; }\n    .header .navbar .navbar-brand {\n      font-weight: bold;\n      color: inherit;\n      width: 40px;\n      height: 20px;\n      padding: 0; }\n      .header .navbar .navbar-brand img {\n        height: 100%;\n        margin-right: 10px;\n        width: 130px;\n        height: auto;\n        float: left;\n        margin-top: -20px;\n        transition: all ease .3s; }\n      .header .navbar .navbar-brand:hover {\n        color: #f0f0f0; }\n    .header .navbar .navbar-collapse p {\n      margin-top: 10px;\n      margin-bottom: 0; }\n      .header .navbar .navbar-collapse p .login {\n        color: #d9d9d9;\n        margin-right: 10px;\n        text-decoration: none; }\n        .header .navbar .navbar-collapse p .login:hover {\n          color: #fff; }\n    .header .navbar .navbar-toggle {\n      border-color: rgba(255, 255, 255, 0.3); }\n      .header .navbar .navbar-toggle:hover, .header .navbar .navbar-toggle:focus {\n        background: none; }\n      .header .navbar .navbar-toggle .icon-bar {\n        background-color: #eee; }\n    .header .navbar .navbar-nav > .active > a,\n    .header .navbar .navbar-nav > .open > a {\n      background: none;\n      box-shadow: none; }\n    .header .navbar .navbar-nav > li > a {\n      padding-left: 18px;\n      padding-right: 18px; }\n    .header .navbar .navbar-nav > li > .dropdown-menu {\n      margin-top: -5px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      background-color: #fff;\n      border-radius: 2px; }\n    @media (max-width: 767px) {\n      .header .navbar .navbar-nav .open .dropdown-menu {\n        box-shadow: none;\n        background: none;\n        color: #fff; }\n        .header .navbar .navbar-nav .open .dropdown-menu > li > a {\n          color: #fdfeff;\n          padding-top: 12px;\n          padding-bottom: 12px;\n          line-height: 1; } }\n    .header .navbar .dropdown-menu > li > a, .header .navbar .dropdown-menu > li > a:focus {\n      line-height: 2;\n      font-size: 14px;\n      color: #37434d; }\n    .header .navbar .dropdown-menu > li > a:focus, .header .navbar .dropdown-menu > li > a:hover {\n      background: #ebeff1; }\n    .header .navbar .navbar-form label {\n      color: #ccc; }\n    .header .navbar .navbar-form .search-field {\n      background: none;\n      border: none;\n      border-bottom: 1px solid transparent;\n      border-radius: 0;\n      color: #ccc;\n      box-shadow: none;\n      color: inherit;\n      transition: border-bottom-color 0.3s; }\n      @media (max-width: 767px) {\n        .header .navbar .navbar-form .search-field {\n          display: inline-block;\n          width: 80%; }\n          .header .navbar .navbar-form .search-field:focus {\n            border-bottom: 1px solid #ccc; } }\n    .header .navbar .navbar-collapse,\n    .header .navbar .navbar-form {\n      border-color: rgba(255, 255, 255, 0.3); }\n    .header .navbar.navbar-default .navbar-nav > .active > a,\n    .header .navbar.navbar-default .navbar-nav > .active > a:focus,\n    .header .navbar.navbar-default .navbar-nav > .active > a:hover {\n      color: rgba(255, 255, 255, 0.3);\n      box-shadow: none;\n      background: none;\n      pointer-events: none; }\n    .header .navbar.navbar-default .navbar-nav > li > a {\n      color: #d9d9d9; }\n      .header .navbar.navbar-default .navbar-nav > li > a:focus, .header .navbar.navbar-default .navbar-nav > li > a:hover {\n        color: #fcfeff !important;\n        background-color: transparent; }\n    @media (max-width: 767px) {\n      .header .navbar {\n        padding-top: 0;\n        padding-bottom: 0; }\n        .header .navbar .navbar-header {\n          padding-top: 10px;\n          padding-bottom: 10px; }\n        .header .navbar .navbar-right {\n          margin-bottom: 20px; } }\n  .header .action-button, .header .action-button:active {\n    border: 2px solid rgba(255, 255, 255, 0.7);\n    border-radius: 20px;\n    color: #ebeff1;\n    box-shadow: none;\n    text-shadow: none;\n    padding: 6px 15px;\n    background: transparent;\n    transition: background-color 0.25s;\n    outline: none;\n    margin-left: 10px; }\n  .header .action-button:hover {\n    color: #44649e;\n    background: white; }\n  .header .action-button.btn-lg {\n    padding: 7px 18px; }\n  .header.scrolled .navbar .navbar-brand img {\n    width: 50px;\n    margin-top: -10px; }\n  .header.scrolled .navbar-menu {\n    margin-left: 0; }\n\n.header-purple .navbar {\n  background: #a137d9; }\n\n.header-purple .action-button {\n  border-color: white;\n  color: white; }\n\n.navbar-menu {\n  display: inline-block;\n  margin: 0 0 0 70px;\n  padding: 0;\n  transition: all .3s ease; }\n  .navbar-menu-item {\n    display: inline-block; }\n    .navbar-menu-item > a {\n      padding: 0 20px;\n      color: white; }\n      .navbar-menu-item > a:focus {\n        text-decoration: none; }\n      .navbar-menu-item > a:hover {\n        color: white;\n        text-decoration: underline; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/header/D:/Other/Study/Angular 2/LunchOrderApp/src/app/header/header.component.scss"],"names":[],"mappings":"AAAA;EACC,2CAA0C,EAgM1C;EA/LA;IAFD;MAGE,qBAAoB,EA8LrB,EAAA;EAjMD;IAME,gBAAe;IACf,YAAW;IACX,OAAM;IACN,oBAA4B;IAC5B,kBAAiB;IACjB,qBAAoB;IACpB,YAAW;IACX,iBAAgB;IAChB,iBAAgB;IAChB,aAAY;IACZ,8BAA6B;IAC7B,YAAW,EAkJX;IAnKF;MAmBG,kBAAiB;MACjB,eAAc;MACd,YAAW;MACX,aAAY;MACZ,WAAU,EAeV;MAtCH;QAyBI,aAAY;QACZ,mBAAkB;QAClB,aAAY;QACZ,aAAY;QACZ,YAAW;QACX,kBAAiB;QAGjB,yBAAwB,EACxB;MAlCJ;QAoCI,eAAc,EACd;IArCJ;MAyCI,iBAAgB;MAChB,iBAAgB,EAShB;MAnDJ;QA4CK,eAAc;QACd,mBAAkB;QAClB,sBAAqB,EAIrB;QAlDL;UAgDM,YAAW,EACX;IAjDN;MAsDG,uCAAsC,EAQtC;MA9DH;QAyDI,iBAAgB,EAChB;MA1DJ;QA4DI,uBAAsB,EACtB;IA7DJ;;MAkEI,iBAAgB;MAChB,iBAAgB,EAChB;IApEJ;MAuEK,mBAAkB;MAClB,oBAAmB,EACnB;IAzEL;MA2EK,iBAAgB;MAChB,yCAAuC;MACvC,uBAAsB;MACtB,mBAAkB,EAClB;IAEF;MAjFH;QAmFK,iBAAgB;QAChB,iBAAgB;QAChB,YAAW,EAOX;QA5FL;UAuFM,eAAc;UACd,kBAAiB;UACjB,qBAAoB;UACpB,eAAc,EACd,EAAA;IA3FN;MAmGI,eAAc;MACd,gBAAe;MACf,eAAc,EACd;IAtGJ;MAyGI,oBAAmB,EACnB;IA1GJ;MA8GI,YAAW,EACX;IA/GJ;MAiHI,iBAAgB;MAChB,aAAY;MACZ,qCAAoC;MACpC,iBAAgB;MAChB,YAAW;MACX,iBAAgB;MAChB,eAAc;MACd,qCAAoC,EAQpC;MAPA;QAzHJ;UA0HK,sBAAqB;UACrB,WAAU,EAKX;UAhIJ;YA6HM,8BAA6B,EAC7B,EAAA;IA9HN;;MAoIG,uCAAsC,EACtC;IArIH;;;MA0II,gCAA+B;MAC/B,iBAAgB;MAChB,iBAAgB;MAChB,qBAAoB,EACpB;IA9IJ;MAgJI,eAAc,EAMd;MAtJJ;QAmJK,0BAAyB;QACzB,8BAA6B,EAC7B;IAGH;MAxJF;QAyJG,eAAc;QACd,kBAAiB,EASlB;QAnKF;UA4JI,kBAAiB;UACjB,qBAAoB,EACpB;QA9JJ;UAgKI,oBAAmB,EACnB,EAAA;EAjKJ;IAuKG,2CAA0C;IAC1C,oBAAmB;IACnB,eAAc;IACd,iBAAgB;IAChB,kBAAiB;IACjB,kBAAiB;IACjB,wBAAuB;IACvB,mCAAkC;IAClC,cAAa;IACb,kBAAiB,EACjB;EAjLH;IAmLG,eAAc;IACd,kBAAiB,EACjB;EArLH;IAuLG,kBAAiB,EACjB;EAxLH;IA2LE,YAAW;IACX,kBAAiB,EACjB;EA7LF;IA+LE,eAAc,EACd;;AAGF;EAEE,oBAAmB,EAChB;;AAHL;EAKQ,oBAAmB;EACnB,aAAY,EACf;;AAGL;EACC,sBAAqB;EACrB,mBAAkB;EAClB,WAAU;EAGV,yBAAwB,EAexB;EAdA;IACC,sBAAqB,EAYrB;IAbD;MAGE,gBAAe;MACf,aAAY,EAQZ;MAZF;QAMG,sBAAqB,EACrB;MAPH;QASG,aAAY;QACZ,2BAA0B,EAC1B","file":"header.component.scss","sourcesContent":[".header {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\t@media (max-width: 767px) {\r\n\t\tpadding-bottom: 80px;\r\n\t}\r\n\t.navbar {\r\n\t\tposition: fixed;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tbackground: rgb(53, 99, 150);\r\n\t\tpadding-top: 12px;\r\n\t\tpadding-bottom: 10px;\r\n\t\tcolor: #fff;\r\n\t\tborder-radius: 0;\r\n\t\tbox-shadow: none;\r\n\t\tborder: none;\r\n\t\tbox-shadow: 0 0 7px -1px #000;\r\n\t\tz-index: 99;\r\n\t\t.navbar-brand {\r\n\t\t\tfont-weight: bold;\r\n\t\t\tcolor: inherit;\r\n\t\t\twidth: 40px;\r\n\t\t\theight: 20px;\r\n\t\t\tpadding: 0;\r\n\t\t\timg {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tmargin-right: 10px;\r\n\t\t\t\twidth: 130px;\r\n\t\t\t\theight: auto;\r\n\t\t\t\tfloat: left;\r\n\t\t\t\tmargin-top: -20px;\r\n\t\t\t\t-webkit-transition: all ease .3s;\r\n\t\t\t\t-moz-transition: all ease .3s;\r\n\t\t\t\ttransition: all ease .3s;\r\n\t\t\t}\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: #f0f0f0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.navbar-collapse {\r\n\t\t\tp {\r\n\t\t\t\tmargin-top: 10px;\r\n\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t.login {\r\n\t\t\t\t\tcolor: #d9d9d9;\r\n\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t.navbar-toggle {\r\n\t\t\tborder-color: rgba(255, 255, 255, 0.3);\r\n\t\t\t&:hover,\r\n\t\t\t&:focus {\r\n\t\t\t\tbackground: none;\r\n\t\t\t}\r\n\t\t\t.icon-bar {\r\n\t\t\t\tbackground-color: #eee;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.navbar-nav {\r\n\t\t\t&>.active>a,\r\n\t\t\t&>.open>a {\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tbox-shadow: none;\r\n\t\t\t}\r\n\t\t\t&>li {\r\n\t\t\t\t&>a {\r\n\t\t\t\t\tpadding-left: 18px;\r\n\t\t\t\t\tpadding-right: 18px;\r\n\t\t\t\t}\r\n\t\t\t\t&>.dropdown-menu {\r\n\t\t\t\t\tmargin-top: -5px;\r\n\t\t\t\t\tbox-shadow: 0 4px 8px rgba(0, 0, 0, .1);\r\n\t\t\t\t\tbackground-color: #fff;\r\n\t\t\t\t\tborder-radius: 2px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:767px) {\r\n\t\t\t\t.open .dropdown-menu {\r\n\t\t\t\t\tbox-shadow: none;\r\n\t\t\t\t\tbackground: none;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t&>li>a {\r\n\t\t\t\t\t\tcolor: #fdfeff;\r\n\t\t\t\t\t\tpadding-top: 12px;\r\n\t\t\t\t\t\tpadding-bottom: 12px;\r\n\t\t\t\t\t\tline-height: 1;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t@media (max-width:767px) {}\r\n\t\t}\r\n\t\t.dropdown-menu>li>a {\r\n\t\t\t&,\r\n\t\t\t&:focus {\r\n\t\t\t\tline-height: 2;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tcolor: #37434d;\r\n\t\t\t}\r\n\t\t\t&:focus,\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground: #ebeff1;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.navbar-form {\r\n\t\t\tlabel {\r\n\t\t\t\tcolor: #ccc;\r\n\t\t\t}\r\n\t\t\t.search-field {\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-bottom: 1px solid transparent;\r\n\t\t\t\tborder-radius: 0;\r\n\t\t\t\tcolor: #ccc;\r\n\t\t\t\tbox-shadow: none;\r\n\t\t\t\tcolor: inherit;\r\n\t\t\t\ttransition: border-bottom-color 0.3s;\r\n\t\t\t\t@media (max-width: 767px) {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\twidth: 80%;\r\n\t\t\t\t\t&:focus {\r\n\t\t\t\t\t\tborder-bottom: 1px solid #ccc;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t.navbar-collapse,\r\n\t\t.navbar-form {\r\n\t\t\tborder-color: rgba(255, 255, 255, 0.3);\r\n\t\t}\r\n\t\t&.navbar-default .navbar-nav {\r\n\t\t\t&>.active>a,\r\n\t\t\t&>.active>a:focus,\r\n\t\t\t&>.active>a:hover {\r\n\t\t\t\tcolor: rgba(255, 255, 255, 0.3);\r\n\t\t\t\tbox-shadow: none;\r\n\t\t\t\tbackground: none;\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t}\r\n\t\t\t&>li>a {\r\n\t\t\t\tcolor: #d9d9d9;\r\n\t\t\t\t&:focus,\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tcolor: #fcfeff !important;\r\n\t\t\t\t\tbackground-color: transparent;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: 767px) {\r\n\t\t\tpadding-top: 0;\r\n\t\t\tpadding-bottom: 0;\r\n\t\t\t.navbar-header {\r\n\t\t\t\tpadding-top: 10px;\r\n\t\t\t\tpadding-bottom: 10px;\r\n\t\t\t}\r\n\t\t\t.navbar-right {\r\n\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.action-button {\r\n\t\t&,\r\n\t\t&:active {\r\n\t\t\tborder: 2px solid rgba(255, 255, 255, 0.7);\r\n\t\t\tborder-radius: 20px;\r\n\t\t\tcolor: #ebeff1;\r\n\t\t\tbox-shadow: none;\r\n\t\t\ttext-shadow: none;\r\n\t\t\tpadding: 6px 15px;\r\n\t\t\tbackground: transparent;\r\n\t\t\ttransition: background-color 0.25s;\r\n\t\t\toutline: none;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t\t&:hover {\r\n\t\t\tcolor: #44649e;\r\n\t\t\tbackground: white;\r\n\t\t}\r\n\t\t&.btn-lg {\r\n\t\t\tpadding: 7px 18px;\r\n\t\t}\r\n\t}\r\n\t&.scrolled .navbar .navbar-brand img {\r\n\t\twidth: 50px;\r\n\t\tmargin-top: -10px;\r\n\t}\r\n\t&.scrolled .navbar-menu {\r\n\t\tmargin-left: 0;\r\n\t}\r\n}\r\n\r\n.header-purple {\r\n\t.navbar {\r\n\t\tbackground: #a137d9;\r\n    }\r\n    .action-button{\r\n        border-color: white;\r\n        color: white;\r\n    }\r\n}\r\n\r\n.navbar-menu {\r\n\tdisplay: inline-block;\r\n\tmargin: 0 0 0 70px;\r\n\tpadding: 0;\r\n\t-webkit-transition: all .3s ease;\r\n\t-moz-transition: all .3s ease;\r\n\ttransition: all .3s ease;\r\n\t&-item {\r\n\t\tdisplay: inline-block;\r\n\t\t&>a {\r\n\t\t\tpadding: 0 20px;\r\n\t\t\tcolor: white;\r\n\t\t\t&:focus {\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\ttext-decoration: underline;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_dataservice, _sharedService) {
        var _this = this;
        this._dataservice = _dataservice;
        this._sharedService = _sharedService;
        this.loggedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._isScrolled = false;
        this._isVendor = false;
        _sharedService.loginStatus$.subscribe(function (x) {
            _this._currectUser = x;
            _this._isVendor = x != null && x.userType == __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this._currectUser = this._dataservice.getCurrentUser();
        this._isVendor = this._currectUser != null && this._currectUser.userType == __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR;
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 35) {
            this._isScrolled = true;
        }
        else if (this._isScrolled && number < 10) {
            this._isScrolled = false;
        }
    };
    HeaderComponent.prototype._logoutClick = function () {
        this._dataservice.logoutUser();
        this.loggedOut.emit();
        this._sharedService.emitLoginStatus(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "loggedOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "_isScrolled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-conmponent main-container\">\r\n\t<div class=\"section-title\">\r\n\t\tWhat do you want for lunch today?\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-8\">\r\n\t\t\t<div class=\"menu-container\">\r\n\t\t\t\t<ul class=\"menu\">\r\n\t\t\t\t\t<li class=\"menu-item col-sm-6\" *ngFor=\"let op of mealOptions\">\r\n                        <div class=\"menu-item-inner\">\r\n                            <img src=\"../../assets/order-default.png\" alt=\"thumbnail\">\r\n                            <div class=\"menu-item-overlay\">\r\n                                <div class=\"menu-item-detail\">\r\n                                    <span>\r\n                                        {{op.OptionDetail}}\r\n                                    </span>\r\n                                    <span class=\"price\">\r\n                                        Rs. {{op.Price}}\r\n                                    </span>\r\n                                    <a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"addItemToCart(op)\">ADD TO CART</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-4\">\r\n\t\t\t<form class=\"cart-container\" (submit)=\"submitForm()\" #myform=\"ngForm\" novalidate [style.top]=\"_cartTopOffset+'px'\">\r\n\t\t\t\t<h4 class=\"cart-title\">Your Cart</h4>\r\n\t\t\t\t<div class=\"cart-head clearfix\">\r\n\t\t\t\t\t<div class=\"pull-left\">Item</div>\r\n\t\t\t\t\t<div class=\"pull-right\">Price</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"cart-body\">\r\n                    <li class=\"cart-item\" *ngIf=\"_cart.length==0\">No item in the cart</li>\r\n\t\t\t\t\t<li class=\"cart-item clearfix\" *ngFor=\"let co of _cart\">\r\n\t\t\t\t\t\t<span class=\"cart-item-detail\">\r\n                            {{co.OptionDetail}}\r\n                            <i class=\"fa fa-minus\" (click)=\"decreaseItemCount(co)\"></i>\r\n                            <i class=\"fa fa-plus\" (click)=\"increaseItemCount(co)\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"cart-item-price\">\r\n\t\t\t\t\t\t\t{{co.Price}} x {{co.Count}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"cart-total clearfix\">\r\n\t\t\t\t\t<div class=\"pull-left\">Total</div>\r\n\t\t\t\t\t<div class=\"pull-right\">{{_cartTotal}}</div>\r\n\t\t\t\t</div>\r\n                <br>\r\n                <div class=\"btn-container\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                        <i class=\"fa fa-shopping-cart\"></i>\r\n                        Place Order\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            <!-- {{_cartTopOffset}} -->\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- <div class=\"alert alert-info\">\r\n        <h3>\r\n            Lunch Time!\r\n        </h3>\r\n        <hr>\r\n        <p class=\"mb-0\">\r\n            Tell us what you wanna have in lunch ...\r\n        </p>\r\n    </div> -->\r\n\t<!-- <div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<form (submit)=\"submitForm()\" #myform=\"ngForm\" novalidate>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"selectedMealOption\">Options</label>\r\n\t\t\t\t\t\t\t<select class=\"custom-select form-control\" [(ngModel)]=\"selectedOption\" name=\"selectedMealOption\" #option=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let o of mealOptions\" [ngValue]=\"o\" [attr.data-price]=\"o.Price\">{{o.OptionDetail}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!(selectedOption.Price<=0 && (option.dirty || option.touched))\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\tPlease select quantity\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"selected-quantity\">How many?</label>\r\n\t\t\t\t\t\t\t<select class=\"custom-select form-control\" [(ngModel)]=\"selectedQuantity\" name=\"selected-quantity\" #qty=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t<option value=\"0\">- select -</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let q of _quantity\" [ngValue]=\"q\">{{q}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!(selectedQuantity<=0 && (qty.dirty || qty.touched))\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\tPlease select quantity\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"Comments\">Any instructions? </label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"Comments\" cols=\"30\" rows=\"3\" [(ngModel)]=\"_comments\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<div class=\"alert alert-success text-right\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tTotal:\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" disabled=\"disabled\" name=\"totalCost\" [(ngModel)]=\"(selectedOption?selectedOption.Price:0)*selectedQuantity\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"btn-container\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(myform.form.valid && selectedQuantity>0 && selectedOption.Price>0)\">Submit</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 0 15px; }\n  @media screen and (min-width: 1200px) {\n    .main-container {\n      max-width: 1200px;\n      position: relative;\n      min-height: 100vh; } }\n\n.home-conmponent .section-title {\n  color: white;\n  padding: 0 10px;\n  font-size: 1.6rem; }\n\n.home-conmponent .menu-container .menu {\n  padding: 0; }\n  .home-conmponent .menu-container .menu-item {\n    display: inline-block;\n    list-style-type: none;\n    padding: 10px; }\n    @media screen and (min-width: 1200px) {\n      .home-conmponent .menu-container .menu-item:hover img {\n        -webkit-transform: scale(1.5, 1.5);\n                transform: scale(1.5, 1.5); }\n      .home-conmponent .menu-container .menu-item:hover .menu-item-overlay {\n        background-color: rgba(255, 255, 255, 0.7); }\n      .home-conmponent .menu-container .menu-item:hover .add-to-cart {\n        visibility: visible;\n        opacity: 1; } }\n    .home-conmponent .menu-container .menu-item img {\n      width: 100%;\n      transition: all .4s ease; }\n    .home-conmponent .menu-container .menu-item-inner {\n      overflow: hidden; }\n    .home-conmponent .menu-container .menu-item-overlay {\n      background-color: rgba(255, 255, 255, 0.2);\n      display: block;\n      text-align: center;\n      position: absolute;\n      top: 10px;\n      bottom: 10px;\n      left: 10px;\n      right: 10px;\n      transition: background .4s ease; }\n    .home-conmponent .menu-container .menu-item-detail {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      display: table;\n      width: 100%;\n      padding: 0 15px; }\n      .home-conmponent .menu-container .menu-item-detail span {\n        text-align: center;\n        font-size: 24px;\n        display: block; }\n        .home-conmponent .menu-container .menu-item-detail span.price {\n          font-size: 18px; }\n    .home-conmponent .menu-container .menu-item .add-to-cart {\n      background: #3d5cf5;\n      color: white;\n      text-decoration: none;\n      padding: 2px 7px;\n      margin-top: 6px;\n      display: inline-block;\n      font-size: .8em;\n      transition: all .4s ease; }\n      @media screen and (min-width: 1200px) {\n        .home-conmponent .menu-container .menu-item .add-to-cart {\n          visibility: hidden;\n          opacity: 0; } }\n\n.home-conmponent .cart-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 15px;\n  background: white;\n  padding: 10px 15px;\n  margin-top: 10px; }\n  .home-conmponent .cart-container .cart-title {\n    margin-bottom: 10px; }\n  .home-conmponent .cart-container .cart-head {\n    padding: 10px 0;\n    border-bottom: 1px solid gray; }\n  .home-conmponent .cart-container .cart-body {\n    padding: 0;\n    margin: 15px 0;\n    max-height: 175px;\n    overflow: auto; }\n  .home-conmponent .cart-container .cart-item {\n    list-style: none;\n    padding: 7px 0; }\n    .home-conmponent .cart-container .cart-item-detail {\n      width: 80%;\n      float: left; }\n      .home-conmponent .cart-container .cart-item-detail i {\n        visibility: hidden;\n        opacity: 0;\n        transition: all .4s ease; }\n      .home-conmponent .cart-container .cart-item-detail:hover i {\n        cursor: pointer;\n        visibility: visible;\n        opacity: 1; }\n        .home-conmponent .cart-container .cart-item-detail:hover i.fa-plus {\n          color: limegreen; }\n        .home-conmponent .cart-container .cart-item-detail:hover i.fa-minus {\n          color: red; }\n    .home-conmponent .cart-container .cart-item-price {\n      width: 20%;\n      float: right;\n      text-align: right; }\n  .home-conmponent .cart-container .cart-total {\n    font-weight: bold;\n    text-align: right;\n    border-width: 1px 0;\n    background: lightgray;\n    padding: 5px; }\n\n.home-conmponent .btn-container {\n  text-align: center; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/home/D:/Other/Study/Angular 2/LunchOrderApp/src/app/home/home.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAe,EAMlB;EALG;IAFJ;MAGQ,kBAAiB;MACvB,mBAAkB;MAClB,kBAAiB,EAElB,EAAA;;AACD;EAGQ,aAAY;EACZ,gBAAe;EACf,kBAAiB,EACpB;;AANL;EASG,WAAU,EAqEV;EA9EH;IAWI,sBAAqB;IACrB,sBAAqB;IACT,cAAa,EAgEzB;IA/DY;MAdhB;QAiB4B,mCAAyB;gBAAzB,2BAAyB,EAC5B;MAlBzB;QAoB4B,2CAA0C,EAC7C;MArBzB;QAuB4B,oBAAmB;QACnB,WAAU,EACb,EAAA;IAzBzB;MA6BoB,YAAW;MACX,yBAAwB,EAC3B;IA/BjB;MAiCoB,iBAAgB,EACnB;IAlCjB;MAoCK,2CAA0C;MAC1C,eAAc;MACd,mBAAkB;MAClB,mBAAkB;MAClB,UAAS;MACT,aAAY;MACZ,WAAU;MACV,YAAW;MACX,gCAA+B,EAC/B;IA7CL;MA+CK,mBAAkB;MAClB,OAAM;MACN,UAAS;MACT,aAAY;MACZ,eAAc;MACC,YAAW;MACX,gBAAe,EAS9B;MA9DL;QAuDM,mBAAkB;QAClB,gBAAe;QACf,eAAc,EAId;QA7DN;UA2DO,gBAAe,EACf;IA5DP;MAgEK,oBAAmB;MACnB,aAAY;MACZ,sBAAqB;MACrB,iBAAgB;MAChB,gBAAe;MACf,sBAAqB;MACrB,gBAAe;MACA,yBAAwB,EAKvC;MAJe;QAxEpB;UAyEwB,mBAAkB;UAClB,WAAU,EAE7B,EAAA;;AA5EL;EAiFQ,mBAAkB;EAClB,OAAM;EACN,QAAO;EACP,YAAW;EAEjB,kBAAiB;EACjB,mBAAkB;EAClB,iBAAgB,EAyDhB;EAjJF;IA2FI,oBAAmB,EACnB;EA5FJ;IA8FI,gBAAe;IACf,8BAA6B,EAC7B;EAhGJ;IAmGI,WAAU;IACE,eAAc;IACd,kBAAiB;IACjB,eAAc,EAC1B;EAvGJ;IAyGI,iBAAgB;IAChB,eAAc,EA6Bd;IAvIJ;MA6GK,WAAU;MACV,YAAW,EAmBX;MAjIL;QAgHwB,mBAAkB;QAClB,WAAU;QACV,yBAAwB,EAC1C;MAnHN;QAsH4B,gBAAe;QACf,oBAAmB;QACnB,WAAU,EAO/B;QA/HP;UA0HgC,iBAAgB,EACnB;QA3H7B;UA6HgC,WAAU,EACb;IA9H7B;MAmIK,WAAU;MACV,aAAY;MACZ,kBAAiB,EACjB;EAtIL;IA0II,kBAAiB;IACjB,kBAAiB;IACjB,oBAAmB;IACnB,sBAAqB;IACrB,aAAY,EACZ;;AA/IJ;EAmJE,mBAAkB,EAClB","file":"home.component.scss","sourcesContent":[".main-container{\r\n    padding: 0 15px;\r\n    @media screen and (min-width: 1200px){\r\n        max-width: 1200px;\r\n\t\tposition: relative;\r\n\t\tmin-height: 100vh;\r\n    }\r\n}\r\n.home-conmponent {\r\n\t// font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n\t.section-title {\r\n        color: white;\r\n        padding: 0 10px;\r\n        font-size: 1.6rem;\r\n    }\r\n\t.menu-container {\r\n\t\t.menu {\r\n\t\t\tpadding: 0;\r\n\t\t\t&-item {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tlist-style-type: none;\r\n                padding: 10px;\r\n                @media screen and (min-width:1200px){\r\n                    &:hover {\r\n                        img {\r\n                            transform: scale(1.5,1.5)\r\n                        }\r\n                        .menu-item-overlay {\r\n                            background-color: rgba(255, 255, 255, 0.7);\r\n                        }\r\n                        .add-to-cart {\r\n                            visibility: visible;\r\n                            opacity: 1;\r\n                        }\r\n                    }\r\n                }\r\n\t\t\t\timg {\r\n                    width: 100%;\r\n                    transition: all .4s ease;\r\n                }\r\n                &-inner{\r\n                    overflow: hidden;\r\n                }\r\n\t\t\t\t&-overlay {\r\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 10px;\r\n\t\t\t\t\tbottom: 10px;\r\n\t\t\t\t\tleft: 10px;\r\n\t\t\t\t\tright: 10px;\r\n\t\t\t\t\ttransition: background .4s ease;\r\n\t\t\t\t}\r\n\t\t\t\t&-detail {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tbottom: 0;\r\n\t\t\t\t\tmargin: auto;\r\n\t\t\t\t\tdisplay: table;\r\n                    width: 100%;\r\n                    padding: 0 15px;\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\tfont-size: 24px;\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\t&.price {\r\n\t\t\t\t\t\t\tfont-size: 18px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t.add-to-cart {\r\n\t\t\t\t\tbackground: #3d5cf5;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\tpadding: 2px 7px;\r\n\t\t\t\t\tmargin-top: 6px;\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tfont-size: .8em;\r\n                    transition: all .4s ease;\r\n                    @media screen and (min-width:1200px){\r\n                        visibility: hidden;\r\n                        opacity: 0;\r\n                    }\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.cart-container {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 15px;\r\n\t\t// width: 100%;\r\n\t\tbackground: white;\r\n\t\tpadding: 10px 15px;\r\n\t\tmargin-top: 10px;\r\n\t\t.cart {\r\n\t\t\t&-title {\r\n\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t}\r\n\t\t\t&-head {\r\n\t\t\t\tpadding: 10px 0;\r\n\t\t\t\tborder-bottom: 1px solid gray;\r\n\t\t\t}\r\n\t\t\t&-body {\r\n\t\t\t\t// min-height: 50px;\r\n\t\t\t\tpadding: 0;\r\n                margin: 15px 0;\r\n                max-height: 175px;\r\n                overflow: auto;\r\n\t\t\t}\r\n\t\t\t&-item {\r\n\t\t\t\tlist-style: none;\r\n\t\t\t\tpadding: 7px 0;\r\n\t\t\t\t&-detail {\r\n\t\t\t\t\t// display: inline-block;\r\n\t\t\t\t\twidth: 80%;\r\n\t\t\t\t\tfloat: left;\r\n\t\t\t\t\ti {\r\n                        visibility: hidden;\r\n                        opacity: 0;\r\n                        transition: all .4s ease;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\ti {\r\n                            cursor: pointer;\r\n                            visibility: visible;\r\n                            opacity: 1;\r\n                            &.fa-plus{\r\n                                color: limegreen;\r\n                            }\r\n                            &.fa-minus{\r\n                                color: red;\r\n                            }\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&-price {\r\n\t\t\t\t\twidth: 20%;\r\n\t\t\t\t\tfloat: right;\r\n\t\t\t\t\ttext-align: right;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-total {\r\n\t\t\t\t// border: 1px solid black;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\ttext-align: right;\r\n\t\t\t\tborder-width: 1px 0;\r\n\t\t\t\tbackground: lightgray;\r\n\t\t\t\tpadding: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.btn-container {\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, document) {
        this.dataService = dataService;
        this.router = router;
        this.document = document;
        this._comments = "";
        this._quantity = [1, 2, 3, 4, 5];
        this.mealOptions = [];
        this._cart = [];
        this._cartTotal = 0;
        this._cartTopOffset = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //>> Redirect to login page if not logged in
        // if (!this.dataService.isLoggedIn()) {
        //     this.router.navigate(['/login']);
        //     return
        // }
        var _this = this;
        this.dataService.getMealOptions().then(function (x) {
            if (x.length)
                _this.mealOptions = x; //x.slice(0, 5);
            // this.mealOptions.unshift(this.defaultMealOption);
        });
    };
    HomeComponent.prototype.onWindowScroll = function () {
        var topOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (topOffset > 100) {
            this._cartTopOffset = topOffset - 100;
        }
        else {
            this._cartTopOffset = 0;
        }
    };
    HomeComponent.prototype.addItemToCart = function (e) {
        var _new = new __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__["c" /* OrderItem */]();
        var _selected = this._cart.find(function (x) { return x.OptionId == e._id; });
        _new.OptionId = e._id;
        _new.Price = e.Price;
        _new.OptionDetail = e.OptionDetail;
        if (_selected == null) {
            _new.Count = 1;
            this._cart.push(_new);
        }
        else {
            _selected.Count++;
        }
        this._cartTotal += e.Price;
    };
    HomeComponent.prototype.increaseItemCount = function (item) {
        var _selected = this._cart.find(function (x) { return x.OptionId == item.OptionId; });
        _selected.Count++;
        this._cartTotal += item.Price;
    };
    HomeComponent.prototype.decreaseItemCount = function (item) {
        var _selected = this._cart.find(function (x) { return x.OptionId == item.OptionId; });
        if (_selected != null) {
            _selected.Count > 1 ? _selected.Count-- : this._cart.splice(this._cart.indexOf(_selected), 1);
        }
        this._cartTotal -= item.Price;
    };
    HomeComponent.prototype.submitForm = function () {
        var _this = this;
        if (this._cart.length == 0) {
            alert("Cart is empty.");
            return;
        }
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__["a" /* Order */]();
        orderDetail.CreatedBy = this.dataService.getCurrentUser().userId;
        orderDetail.OrderItems = this._cart;
        this.dataService.placeOrder(orderDetail).then(function (x) {
            if (x._id !== "") {
                //redirect ot Thank you page
                _this.router.navigate(['user', 'thankyou', x._id]);
                return false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <form class=\"form-signin\" (submit)=\"doLogin()\" novalidate>\r\n        <h2 class=\"form-signin-heading\">Please login</h2>\r\n        <div class=\"alert alert-danger\" *ngIf=\"serverError\">\r\n            {{serverError}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"emailid1\" [(ngModel)]=\"_data.EmailId\" #email=\"ngModel\" pattern=\"\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\"\r\n            placeholder=\"Email Id\" required/>\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">Please provide email id</div>\r\n                <div [hidden]=\"!email.errors.pattern\">Invalid email id</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password1\" [(ngModel)]=\"_data.Password\" #pass=\"ngModel\" placeholder=\"Password\" required \r\n            pattern=\"(?=.*\\d).{8,20}\" />\r\n            <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!pass.errors.required\">Please provide password</div>\r\n                <div [hidden]=\"!pass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\r\n            </div>\r\n        </div>\r\n        <label class=\"checkbox\">\r\n          <input type=\"checkbox\" value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\" [(ngModel)]=\"_data.rememberMe\"> Remember me\r\n        </label>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  background: #eee !important; }\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 30px; }\n\n.form-signin .checkbox {\n  font-weight: normal; }\n\n.form-signin .form-control {\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  border-radius: 0; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"text\"] {\n  margin-bottom: -1px;\n  /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */ }\n\n.form-signin input[type=\"password\"] {\n  /* margin-bottom: 20px; */\n  /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */ }\n\n.alert {\n  border-radius: 0;\n  padding: 3px 10px;\n  font-size: .8em;\n  /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */ }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/login/D:/Other/Study/Angular 2/LunchOrderApp/src/app/login/login.component.scss"],"names":[],"mappings":"AAAA;EACI,4BAA2B,EAC9B;;AAED;EACI,iBAAgB;EAChB,wBAAuB;EACvB,eAAc;EACd,uBAAsB;EACtB,qCAAoC,EACvC;;AAED;;EAEI,oBAAmB,EACtB;;AAED;EACI,oBAAmB,EACtB;;AAED;EACI,mBAAkB;EAClB,gBAAe;EACf,aAAY;EACZ,cAAa;EACb,iBAAgB,EACnB;;AAED;EACI,WAAU,EACb;;AAED;EACI,oBAAmB;EACnB;qCACiC,EACpC;;AAED;EACI,0BAA0B;EAC1B;kCAC8B,EACjC;;AAED;EACI,iBAAgB;EAChB,kBAAiB;EACjB,gBAAe;EACf;kCAC8B,EACjC","file":"login.component.scss","sourcesContent":["body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-signin {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n    /* margin-bottom: 20px; */\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataservice, _router, sharedservice) {
        this.dataservice = dataservice;
        this._router = _router;
        this.sharedservice = sharedservice;
        this._data = new __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["e" /* loginData */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        //>> Redirect to home page if already logged in
        if (this.dataservice.isLoggedIn()) {
            var loggedInUserDetail = this.dataservice.getCurrentUser();
            if (loggedInUserDetail.userType == __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR)
                this._router.navigate(['vendor', 'dashboard']);
            else if (loggedInUserDetail.userType == __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["h" /* usertTypeEnum */].DEFAULT)
                this._router.navigate(['user', 'home']);
        }
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        // let _data: loginData
        this.dataservice.loginUser(this._data).then(function (x) {
            if (!x.isUsernameValid) {
                _this.serverError = "Email id does not exists";
            }
            else if (!x.isPasswordValid) {
                _this.serverError = "Password invalid";
            }
            else if (x.userId) {
                var _status = { userId: x.userId, userType: x.userType };
                _this.sharedservice.emitLoginStatus(_status);
                if (x.userType == __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR)
                    _this._router.navigate(['vendor', 'dashboard']);
                else
                    _this._router.navigate(['user', 'home']);
            }
        })
            .catch(function () { return _this.serverError = "Unable to login, please try after some time."; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/app.modelClasses.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MealOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OrderItem; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registrationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changePasswordData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginData; });
/* unused harmony export loginResponse */
/* unused harmony export registrationResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return usertTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return userLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Order4Dashboard; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MealOptions = /** @class */ (function () {
    function MealOptions() {
        this._id = "";
        this.OptionDetail = "- select -";
        this.Price = 0;
        this.IsActive = true;
        // Remarks: string = "";
    }
    return MealOptions;
}());

var Order = /** @class */ (function () {
    function Order() {
        // OptionId: string = "";
        // Count: number = 0;
        // Remarks: string = "";
        this.IsAccepted = null;
        this.IsPaid = false;
        this.IsActive = true;
        this.CreatedOn = new Date();
        this.CreatedBy = "";
    }
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
        this.OptionId = "";
        this.OptionDetail = "";
        this.Price = 0;
        this.Count = 0;
    }
    return OrderItem;
}());

var User = /** @class */ (function () {
    function User() {
        this.EmailId = "";
        this.CreatedOn = new Date();
    }
    return User;
}());

var registrationData = /** @class */ (function (_super) {
    __extends(registrationData, _super);
    function registrationData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Password = "";
        return _this;
    }
    return registrationData;
}(User));

var changePasswordData = /** @class */ (function () {
    function changePasswordData() {
    }
    return changePasswordData;
}());

var loginData = /** @class */ (function () {
    function loginData() {
    }
    return loginData;
}());

var loginResponse = /** @class */ (function () {
    function loginResponse() {
        this.userType = usertTypeEnum.DEFAULT;
    }
    return loginResponse;
}());

var registrationResponse = /** @class */ (function () {
    function registrationResponse() {
        this.userType = usertTypeEnum.DEFAULT;
    }
    return registrationResponse;
}());

var usertTypeEnum;
(function (usertTypeEnum) {
    usertTypeEnum["VENDOR"] = "VENDOR";
    usertTypeEnum["DEFAULT"] = "DEFAULT";
})(usertTypeEnum || (usertTypeEnum = {}));
var userLoginStatus = /** @class */ (function () {
    function userLoginStatus() {
        this.userId = "";
        this.userType = usertTypeEnum.DEFAULT;
    }
    return userLoginStatus;
}());

var Order4Dashboard = /** @class */ (function () {
    function Order4Dashboard() {
    }
    return Order4Dashboard;
}());

//# sourceMappingURL=app.modelClasses.js.map

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 class=\"page-headeing\">My Orders</h3>\r\n    <br>\r\n\t<div class=\"row filter\">\r\n\t\t<div class=\"col-sm-4\">Product Description</div>\r\n\t\t<div class=\"col-sm-2\">Status</div>\r\n\t\t<div class=\"col-sm-2\">Date</div>\r\n\t\t<div class=\"col-sm-3\">Order No.</div>\r\n\t\t<div class=\"col-sm-1\">Price</div>\r\n\t</div>\r\n\t<div class=\"row order-item\" *ngFor=\"let order of orderList\">\r\n\t\t<div class=\"col-sm-4\">\r\n\t\t\t<img src=\"./assets/order-default.png\" class=\"order-thumbnail\" alt=\"sample image\">\r\n\t\t\t<div class=\"order-detail\">\r\n\t\t\t\t<div *ngFor=\"let o of order.OrderItems\" class=\"clearfix\">\r\n\t\t\t\t\t<span class=\"order-detail-text\" [title]=\"o.OptionDetail\">{{o.OptionDetail}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<div class=\"order-status\">\r\n\t\t\t\t<span class=\"badge badge-success\"></span>\r\n\t\t\t\t<div *ngIf=\"order.IsActive\" [class]=\"'badge ' + (order.IsAccepted?'badge-success':'badge-warning')\">{{order.IsAccepted?\"Accepted\":\"Not Accepted\"}}</div>\r\n\t\t\t\t<div *ngIf=\"order.IsActive\" [class]=\"'badge ' + (order.IsPaid?'badge-success':'badge-warning')\">{{order.IsPaid?\"Paid\":\"Not Paid\"}}</div>\r\n\t\t\t\t<div *ngIf=\"!order.IsActive\" class=\"badge badge-danger\">Cancelled</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<div class=\"order-date\">{{order.CreatedOn|date: 'dd-MM-yyyy hh:mm a'}}</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<div class=\"order-id\">\r\n\t\t\t\t<span class=\"bg-info\">\r\n\t\t\t\t\t{{order._id}}\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-1\">\r\n\t\t\t<div class=\"small\">\r\n\t\t\t\t<div *ngFor=\"let o of order.OrderItems\">\r\n\t\t\t\t\t<span class=\"order-detail-text\">{{o.Price}} x {{o.Count}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"price-total\">\r\n\t\t\t\tRs {{getSum(order.OrderItems)}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"action-button\">\r\n\t\t\t\t<a (click)=\"cancelOrder(order)\" [hidden]=\"!order.IsActive\" [class]=\"((order.IsAccepted||order.IsPaid)?' disabled':'')+' fa fa-times'\"\r\n\t\t\t\ttitle=\"Cancel order\"></a>\r\n\t\t\t\t<a (click)=\"repeatOrder(order)\" class=\"fa fa-repeat repeat-order\" title=\"Repeat order\"></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".page-headeing {\n  color: white; }\n\n.filter {\n  padding: 10px 0;\n  border: 1px solid white;\n  border-width: 1px 0;\n  color: white; }\n\n.order-item {\n  margin-top: 2px;\n  margin-bottom: 2px;\n  padding: 15px 0;\n  background: rgba(255, 255, 255, 0.75);\n  /* cursor: pointer; */\n  overflow: hidden;\n  transition: all .3s ease; }\n  .order-item:hover {\n    background: white; }\n  .order-item .order-thumbnail {\n    float: left;\n    width: 50px;\n    height: 50px; }\n  .order-item .order-detail {\n    display: inline-block;\n    width: calc(100% - 110px);\n    padding: 0 10px; }\n    .order-item .order-detail span {\n      float: left; }\n    .order-item .order-detail-text {\n      overflow: hidden;\n      display: inline-block;\n      width: 100%;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .order-item .order-status .badge {\n    border-radius: 0;\n    font-weight: normal;\n    text-transform: uppercase; }\n  .order-item .order-date {\n    font-size: .8em; }\n  .order-item .order-id > span {\n    font-weight: 500;\n    font-size: 0.9em; }\n  .order-item .price-total {\n    font-weight: 700;\n    font-size: 0.9em; }\n  .order-item .action-button {\n    position: absolute;\n    top: 0;\n    right: -25px;\n    width: 25px;\n    height: 100%;\n    text-align: center;\n    transition: all .2s ease-in-out; }\n    .order-item .action-button > a {\n      text-decoration: none;\n      padding: 0;\n      cursor: pointer;\n      color: red; }\n      .order-item .action-button > a.repeat-order {\n        color: limegreen; }\n      .order-item .action-button > a.disabled {\n        color: gray;\n        cursor: not-allowed; }\n  .order-item:hover .action-button,\n  .order-item:focus .action-button {\n    right: 10px; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/my-orders/D:/Other/Study/Angular 2/LunchOrderApp/src/app/my-orders/my-orders.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAY,EACf;;AAED;EACI,gBAAe;EACf,wBAAuB;EACvB,oBAAmB;EACnB,aAAY,EACf;;AAED;EACI,gBAAe;EACf,mBAAkB;EAClB,gBAAe;EACf,sCAAoC;EACpC,sBAAsB;EACtB,iBAAgB;EAGhB,yBAAwB,EAqE3B;EA9ED;IAWQ,kBAAiB,EACpB;EAZL;IAcQ,YAAW;IACX,YAAW;IACX,aAAY,EACf;EAjBL;IAmBQ,sBAAqB;IACrB,0BAAyB;IACzB,gBAAe,EAYlB;IAjCL;MAuBY,YAAW,EACd;IAxBT;MA2BY,iBAAgB;MAChB,sBAAqB;MACrB,YAAW;MACX,wBAAuB;MACvB,oBAAmB,EACtB;EAhCT;IAmCQ,iBAAgB;IAChB,oBAAmB;IACnB,0BAAyB,EAC5B;EAtCL;IAwCQ,gBAAe,EAClB;EAzCL;IA2CQ,iBAAgB;IAChB,iBAAgB,EACnB;EA7CL;IA+CQ,iBAAgB;IAChB,iBAAgB,EACnB;EAjDL;IAmDQ,mBAAkB;IAClB,OAAM;IACN,aAAY;IACZ,YAAW;IACX,aAAY;IACZ,mBAAkB;IAGlB,gCAA+B,EAclC;IAzEL;MA6DY,sBAAqB;MACrB,WAAU;MACV,gBAAe;MACf,WAAU,EAQb;MAxET;QAkEgB,iBAAgB,EACnB;MAnEb;QAqEgB,YAAW;QACX,oBAAmB,EACtB;EAvEb;;IA4EQ,YAAW,EACd","file":"my-orders.component.scss","sourcesContent":[".page-headeing {\r\n    color: white;\r\n}\r\n\r\n.filter {\r\n    padding: 10px 0;\r\n    border: 1px solid white;\r\n    border-width: 1px 0;\r\n    color: white;\r\n}\r\n\r\n.order-item {\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    padding: 15px 0;\r\n    background: rgba(255, 255, 255, .75);\r\n    /* cursor: pointer; */\r\n    overflow: hidden;\r\n    -webkit-transition: all .3s ease;\r\n    -moz-transition: all .3s ease;\r\n    transition: all .3s ease;\r\n    &:hover {\r\n        background: white;\r\n    }\r\n    .order-thumbnail{\r\n        float: left;\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    .order-detail {\r\n        display: inline-block;\r\n        width: calc(100% - 110px);\r\n        padding: 0 10px;\r\n        span{\r\n            float: left;\r\n        }\r\n        &-text{\r\n            // max-width: 150px;\r\n            overflow: hidden;\r\n            display: inline-block;\r\n            width: 100%;\r\n            text-overflow: ellipsis;\r\n            white-space: nowrap;\r\n        }\r\n    }\r\n    .order-status .badge {\r\n        border-radius: 0;\r\n        font-weight: normal;\r\n        text-transform: uppercase;\r\n    }\r\n    .order-date {\r\n        font-size: .8em;\r\n    }\r\n    .order-id>span {\r\n        font-weight: 500;\r\n        font-size: 0.9em;\r\n    }\r\n    .price-total{\r\n        font-weight: 700;\r\n        font-size: 0.9em;\r\n    }\r\n    .action-button {\r\n        position: absolute;\r\n        top: 0;\r\n        right: -25px;\r\n        width: 25px;\r\n        height: 100%;\r\n        text-align: center;\r\n        -webkit-transition: all .2s ease-in-out;\r\n        -moz-transition: all .2s ease-in-out;\r\n        transition: all .2s ease-in-out;\r\n        &>a {\r\n            text-decoration: none;\r\n            padding: 0;\r\n            cursor: pointer;\r\n            color: red;\r\n            &.repeat-order {\r\n                color: limegreen;\r\n            }\r\n            &.disabled {\r\n                color: gray;\r\n                cursor: not-allowed;\r\n            }\r\n        }\r\n    }\r\n    &:hover .action-button,\r\n    &:focus .action-button {\r\n        right: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getUserOrderList(this.dataservice.getCurrentUser().userId)
            .then(function (x) {
            _this.orderList = x.sort(function (a, b) { return a.CreatedOn < b.CreatedOn ? 1 : 0; });
            // console.log(this.orderList[0].getTotalCost());
        });
    };
    MyOrdersComponent.prototype.getSum = function (arr) {
        var totatlCost = 0;
        arr.forEach(function (x) { return totatlCost += x.Price; });
        return totatlCost;
    };
    MyOrdersComponent.prototype.repeatOrder = function (o) {
        var _this = this;
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__["a" /* Order */]();
        orderDetail.CreatedBy = o.CreatedBy;
        orderDetail.OrderItems = o.OrderItems;
        this.dataservice.placeOrder(orderDetail).then(function (x) {
            if (x._id !== "") {
                //redirect ot Thank you page
                _this.router.navigate(['/thankyou', x._id]);
                return false;
            }
        });
    };
    MyOrdersComponent.prototype.cancelOrder = function (o) {
        this.dataservice.cancelOrder(o._id).then(function (x) {
            if (x) {
                o.IsActive = false;
            }
        });
    };
    MyOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-my-orders',
            template: __webpack_require__("../../../../../src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-orders/my-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], MyOrdersComponent);
    return MyOrdersComponent;
    var _a, _b;
}());

//# sourceMappingURL=my-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-component container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 col-lg-2\">\n\t\t\t<ul class=\"tab-header\">\n\t\t\t\t<li *ngFor=\"let t of tabState\" class=\"tab-item\" [(class.active)]=\"t.isActive\">\n\t\t\t\t\t<a (click)=\"selectTab(t)\">{{t.linkText}}</a>\n\t\t\t\t</li>\n            </ul>\n            <br/>\n            <br/>\n            <br/>\n            <br/>\n\t\t</div>\n\t\t<div class=\"col-md-9 col-lg-10 tab-wrapper\">\n\t\t\t<div class=\"tab-body\" [hidden]=\"!tabState[0].isActive\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<app-change-password></app-change-password>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-body\" [hidden]=\"!tabState[1].isActive\">\n\t\t\t\t<h3 class=\"alert alert-warning\">Under development !</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".profile-component {\n  color: white; }\n  .profile-component .tab-header {\n    padding: 0;\n    margin: 15px -15px 15px 0; }\n    .profile-component .tab-header > li {\n      list-style-type: none;\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n      text-align: right;\n      transition: all ease .3s; }\n      .profile-component .tab-header > li.active {\n        background: rgba(255, 255, 255, 0.35); }\n      .profile-component .tab-header > li a {\n        display: block;\n        padding: 10px 15px;\n        cursor: pointer; }\n  .profile-component .tab-wrapper {\n    border-left: 1px solid rgba(255, 255, 255, 0.5);\n    padding: 15px 25px; }\n    @media (min-width: 768px) {\n      .profile-component .tab-wrapper {\n        padding: 15px 40px; } }\n    @media (min-width: 992px) {\n      .profile-component .tab-wrapper {\n        padding: 15px 60px; } }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/profile/D:/Other/Study/Angular 2/LunchOrderApp/src/app/profile/profile.component.scss","D:/Other/Study/Angular 2/LunchOrderApp/src/app/profile/D:/Other/Study/Angular 2/LunchOrderApp/node_modules/bootstrap/scss/mixins/_breakpoints.scss"],"names":[],"mappings":"AAGA;EACI,aAAY,EAmCf;EApCD;IAGE,WAAU;IACV,0BAAyB,EAkBzB;IAtBF;MAMG,sBAAqB;MACrB,6BAA4B;MAC5B,gCAA+B;MAC/B,kBAAiB;MAGjB,yBAAwB,EASxB;MArBH;QAcI,sCAAqC,EACrC;MAfJ;QAiBI,eAAc;QACd,mBAAkB;QAClB,gBAAe,EACf;EApBJ;IAwBE,gDAA+C;IAC/C,mBAAkB,EAUlB;ICkBE;MDrDJ;QA2BG,mBAAkB,EAQnB,EAAA;ICkBE;MDrDJ;QA8BG,mBAAkB,EAKnB,EAAA","file":"profile.component.scss","sourcesContent":["@import \"../../../node_modules/bootstrap/scss/_variables.scss\";\r\n@import \"../../../node_modules/bootstrap/scss/mixins/_breakpoints.scss\";\r\n\r\n.profile-component {\r\n    color: white;\r\n\t.tab-header {\r\n\t\tpadding: 0;\r\n\t\tmargin: 15px -15px 15px 0;\r\n\t\t&>li {\r\n\t\t\tlist-style-type: none;\r\n\t\t\tborder-top-left-radius: 20px;\r\n\t\t\tborder-bottom-left-radius: 20px;\r\n\t\t\ttext-align: right;\r\n\t\t\t-webkit-transition: all ease .3s;\r\n\t\t\t-moz-transition: all ease .3s;\r\n\t\t\ttransition: all ease .3s;\r\n\t\t\t&.active {\r\n\t\t\t\tbackground: rgba(255, 255, 255, 0.35);\r\n\t\t\t}\r\n\t\t\ta {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.tab-wrapper {\r\n\t\tborder-left: 1px solid rgba(255, 255, 255, 0.5);\r\n\t\tpadding: 15px 25px;\r\n\t\t@include media-breakpoint-up(md) {\r\n\t\t\tpadding: 15px 40px;\r\n\t\t}\r\n\t\t@include media-breakpoint-up(lg) {\r\n\t\t\tpadding: 15px 60px;\r\n\t\t}\r\n\t\t.tab-body {\r\n\t\t\t&.active {}\r\n\t\t}\r\n\t}\r\n}\r\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.1.\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px))\n//    767px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - 1px, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-up($lower, $breakpoints) {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  @include media-breakpoint-between($name, $name, $breakpoints) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.tabState = [{
                i: 0,
                isActive: true,
                linkText: "Change Password"
            }, {
                i: 1,
                isActive: false,
                linkText: "Delete account"
            }];
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.selectTab = function (t) {
        this.tabState.forEach(function (x) { return x.isActive = false; });
        t.isActive = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <form class=\"form-registration\" (submit)=\"doRegister()\" novalidate #regForm=\"ngForm\">\r\n        <h2 class=\"form-registration-heading\">Please register</h2>\r\n        <div class=\"alert alert-danger\" *ngIf=\"serverError\">\r\n            {{serverError}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"emailid\" [(ngModel)]=\"_data.EmailId\" #email=\"ngModel\" pattern=\"\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\"\r\n                placeholder=\"Email Id\" required/>\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">Please provide email id</div>\r\n                <div [hidden]=\"!email.errors.pattern\">Invalid email id</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"_data.Password\" #pass=\"ngModel\" placeholder=\"Password\"\r\n                required pattern=\"(?=.*\\d).{8,20}\" />\r\n            <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!pass.errors.required\">Please provide password</div>\r\n                <div [hidden]=\"!pass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"matchPassword\" [(ngModel)]=\"repeatPassword\" #matchPass=\"ngModel\" placeholder=\"Repeat password\" required/>\r\n            <!-- <div *ngIf=\"matchPass.dirty || matchPass.touched\" class=\"alert alert-danger\"> -->\r\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && matchPass.errors && matchPass.errors.required)\">Please re-enter password</div>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && !(matchPass.errors && matchPass.errors.required) && repeatPassword!==_data.Password)\">Password do not match</div>\r\n            <!-- </div> -->\r\n        </div>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!(regForm.form.valid && repeatPassword===_data.Password)\">Register</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\n  background: #eee !important; }\n\n.form-registration {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n  .form-registration .form-registration-heading,\n  .form-registration .checkbox {\n    margin-bottom: 30px; }\n  .form-registration .checkbox {\n    font-weight: normal; }\n  .form-registration .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    border-radius: 0; }\n    .form-registration .form-control:focus {\n      z-index: 2; }\n  .form-registration input[type=\"text\"] {\n    margin-bottom: -1px;\n    /* border-bottom-left-radius: 0;\r\n        border-bottom-right-radius: 0; */ }\n  .form-registration input[type=\"password\"] {\n    /* margin-bottom: 20px; */\n    /* border-top-left-radius: 0;\r\n        border-top-right-radius: 0; */ }\n\n.alert {\n  border-radius: 0;\n  padding: 3px 10px;\n  font-size: .8em;\n  /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */ }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/register/D:/Other/Study/Angular 2/LunchOrderApp/src/app/register/register.component.scss"],"names":[],"mappings":"AAAA;EACI,4BAA2B,EAC9B;;AAED;EACI,iBAAgB;EAChB,wBAAuB;EACvB,eAAc;EACd,uBAAsB;EACtB,qCAAoC,EAiCvC;EAtCD;;IAQQ,oBAAmB,EACtB;EATL;IAYQ,oBAAmB,EACtB;EAbL;IAgBQ,mBAAkB;IAClB,gBAAe;IACf,aAAY;IACZ,cAAa;IACb,iBAAgB,EAInB;IAxBL;MAsBY,WAAU,EACb;EAvBT;IA4BQ,oBAAmB;IACnB;yCACiC,EACpC;EA/BL;IAkCQ,0BAA0B;IAC1B;sCAC8B,EACjC;;AAKL;EACI,iBAAgB;EAChB,kBAAiB;EACjB,gBAAe;EACf;kCAC8B,EACjC","file":"register.component.scss","sourcesContent":["body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-registration {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    & &-heading,\r\n    .checkbox {\r\n        margin-bottom: 30px;\r\n    }\r\n    \r\n    .checkbox {\r\n        font-weight: normal;\r\n    }\r\n    \r\n    .form-control {\r\n        position: relative;\r\n        font-size: 16px;\r\n        height: auto;\r\n        padding: 10px;\r\n        border-radius: 0;\r\n        &:focus {\r\n            z-index: 2;\r\n        }\r\n    }\r\n    \r\n    \r\n    input[type=\"text\"] {\r\n        margin-bottom: -1px;\r\n        /* border-bottom-left-radius: 0;\r\n        border-bottom-right-radius: 0; */\r\n    }\r\n    \r\n    input[type=\"password\"] {\r\n        /* margin-bottom: 20px; */\r\n        /* border-top-left-radius: 0;\r\n        border-top-right-radius: 0; */\r\n    }\r\n}\r\n\r\n\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dataservice, _router, sharedservice) {
        this.dataservice = dataservice;
        this._router = _router;
        this.sharedservice = sharedservice;
        this._data = new __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["f" /* registrationData */]();
        this.repeatPassword = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //>> Redirect to home page if already logged in
        if (this.dataservice.isLoggedIn()) {
            this._router.navigate(['/home']);
        }
    };
    RegisterComponent.prototype.doRegister = function () {
        var _this = this;
        this.dataservice.registerUser(this._data).then(function (x) {
            if (x.isAlreadyRegistered) {
                _this.serverError = "Email id already registered.";
            }
            else if (x.isRegistered) {
                var _status = { userId: x.userId, userType: x.userType };
                _this._router.navigate(['/home']);
                _this.sharedservice.emitLoginStatus(_status);
            }
        })
            .catch(function () { return _this.serverError = "Unable to register, please try after some time."; });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
// Observable class extensions


// Observable operators







//# sourceMappingURL=rxjs-extensions.js.map

/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'https://mealappserver.appspot.com'; // URL to web api
        // private baseUrl = 'http://localhost:8080';  // URL to web api
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:*' });
        this.isUserLoggedInKey = "_iuli";
        this.lastLoginDateKey = "lastLogin";
    }
    //#region AUTHENTICATION
    DataService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem(this.isUserLoggedInKey) || sessionStorage.getItem(this.isUserLoggedInKey));
    };
    DataService.prototype.isVendor = function () {
        var currentUser = this.getCurrentUser();
        return currentUser != null && currentUser.userType == __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__["h" /* usertTypeEnum */].VENDOR;
    };
    DataService.prototype.isLoggedIn = function () {
        var today = new Date();
        today.setDate(today.getDate() - 30);
        var lastLoginDate = localStorage.getItem(this.lastLoginDateKey) && new Date(localStorage.getItem(this.lastLoginDateKey));
        //>> log out if 30 days passed since last login
        if (lastLoginDate && today > lastLoginDate) {
            this.logoutUser();
            return false;
        }
        else if (localStorage.getItem(this.isUserLoggedInKey) || sessionStorage.getItem(this.isUserLoggedInKey)) {
            return true;
        }
        return false;
    };
    DataService.prototype.logoutUser = function () {
        sessionStorage.removeItem(this.isUserLoggedInKey);
        localStorage.removeItem(this.isUserLoggedInKey);
        localStorage.removeItem(this.lastLoginDateKey);
    };
    DataService.prototype.createLoginSession = function (_userid, _usertype, _remember) {
        var loginStatus = new __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__["g" /* userLoginStatus */]();
        loginStatus.userId = _userid;
        loginStatus.userType = _usertype;
        // iuli => is user logged in
        if (_remember) {
            localStorage.setItem(this.isUserLoggedInKey, JSON.stringify(loginStatus));
            localStorage.setItem(this.lastLoginDateKey, (new Date()).toUTCString());
        }
        else {
            sessionStorage.setItem(this.isUserLoggedInKey, JSON.stringify(loginStatus));
        }
    };
    DataService.prototype.loginUser = function (_logindata) {
        var _this = this;
        return this.http.post(this.baseUrl + "/loginUser", _logindata, { headers: this._headers }).toPromise()
            .then(function (x) {
            var res = x.json();
            if (!res.userType)
                res.userType = __WEBPACK_IMPORTED_MODULE_3__model_app_modelClasses__["h" /* usertTypeEnum */].DEFAULT;
            if (res.isUsernameValid && res.isPasswordValid)
                _this.createLoginSession(res.userId, res.userType, _logindata.rememberMe);
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.registerUser = function (userdata) {
        var _this = this;
        var url = this.baseUrl + "/registerUser";
        return this.http.post(url, userdata, { headers: this._headers }).toPromise()
            .then(function (x) {
            if (x != null) {
                var res = x.json();
                if (res.isRegistered)
                    _this.createLoginSession(res.userId, res.userType, false);
                return res;
            }
        }).catch(this.handleError);
    };
    DataService.prototype.changePassword = function (_data) {
        var url = this.baseUrl + "/changePassword";
        return this.http.post(url, _data, { headers: this._headers }).toPromise()
            .then(function (x) { return x.json(); })
            .catch(this.handleError);
    };
    //#endregion
    DataService.prototype.getMealOptions = function () {
        return this.http.get(this.baseUrl + "/getMealOptions", { headers: this._headers }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.placeOrder = function (order) {
        var url = this.baseUrl + "/placeOrder";
        return this.http.post(url, order, { headers: this._headers }).toPromise()
            .then(function (res) {
            if (res != null) {
                // console.log(res);
                return res.json();
            }
        }).catch(this.handleError);
    };
    DataService.prototype.updateOrderStatus_Vendor = function (orderid, _isAccepted) {
        var url = this.baseUrl + "/" + (_isAccepted ? 'acceptOrder' : 'rejectOrder');
        return this.http.post(url, { id: orderid }, { headers: this._headers }).toPromise()
            .then(function (res) {
            if (res != null) {
                // console.log(res);
                return res.json();
            }
        }).catch(this.handleError);
    };
    DataService.prototype.cancelOrder = function (orderid) {
        var url = this.baseUrl + "/cancelOrder";
        return this.http.post(url, { id: orderid }, { headers: this._headers }).toPromise()
            .then(function (res) {
            if (res != null) {
                // console.log(res);
                return res.json();
            }
        }).catch(this.handleError);
    };
    DataService.prototype.getUserOrderList = function (userid) {
        return this.http.get(this.baseUrl + "/getUserOrders/" + userid, { headers: this._headers }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getAllOrders = function () {
        return this.http.get(this.baseUrl + "/getAllOrders", { headers: this._headers }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getFilterdOrders = function (_filterObj) {
        return this.http.post(this.baseUrl + "/getFilteredOrders", _filterObj, { headers: this._headers }).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/role-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    RoleGuardService.prototype.canActivate = function (route, state) {
        //>> Authentication check
        var _currectUser = this.dataservice.getCurrentUser();
        if (_currectUser == null) {
            this.router.navigate(['']);
            return false;
        }
        //>> Authorization check
        var userType = route.data["userType"];
        if (userType == null || userType == _currectUser.userType) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    RoleGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], RoleGuardService);
    return RoleGuardService;
    var _a, _b;
}());

//# sourceMappingURL=role-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        // Observable string sources
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.loginStatus$ = this.loginStatus.asObservable();
    }
    // Service message commands
    SharedService.prototype.emitLoginStatus = function (change) {
        this.loginStatus.next(change);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/thankyou.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"alert alert-success\">\r\n        <h3>Thank You for your order!</h3>\r\n        <p>Your order id is <b>{{_orderid}}</b></p>\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"goHome()\" role=\"button\">Go Back</button>\r\n    <button class=\"btn btn-success\" [routerLink]=\"['user','orders']\" role=\"button\">View All Orders</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/thankyou.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ThankYouComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (paramArr) { return paramArr['id']; })
            .subscribe(function (h) {
            if (!h) {
                _this.goHome();
                return false;
            }
            else
                _this._orderid = h;
        });
    };
    ThankYouComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    ThankYouComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'thankyou',
            template: __webpack_require__("../../../../../src/app/thankyou.component.html"),
            styles: ["\n  .wrapper{\n    width: 600px;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: table;\n    text-align: center;\n  }\n  .btn{\n    margin: 0 10px;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ThankYouComponent);
    return ThankYouComponent;
    var _a, _b;
}());

//# sourceMappingURL=thankyou.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendor/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper clearfix\">\n\t<a [routerLink]=\"['/vendor','orders']\" [queryParams]=\"{filterby:'NEW'}\" class=\"tile new\" title=\"New order requests\">\n\t\t<span class=\"thumb\">\n\t\t\t<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<div class=\"tile-detail\">\n\t\t\tOrder\n\t\t\t<div>{{_neworders}}</div>\n\t\t</div>\n\t</a>\n\t<a [routerLink]=\"['/vendor','orders']\" [queryParams]=\"{filterby:'PENDING'}\" class=\"tile accepted\" title=\"Pending for delivery\">\n\t\t<span class=\"thumb\">\n\t\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<div class=\"tile-detail\">\n\t\t\tPending\n\t\t\t<div>{{_pendingorders}}</div>\n\t\t</div>\n\t</a>\n\t<a [routerLink]=\"['/vendor','orders']\" [queryParams]=\"{filterby:'CANCELLED'}\" class=\"tile cancelled\" title=\"Cancelled by user\">\n\t\t<span class=\"thumb\">\n\t\t\t<i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<div class=\"tile-detail\">\n\t\t\tCancelled\n\t\t\t<div>{{_cacelledorders}}\n\t\t\t</div>\n\t\t</div>\n\t</a>\n\t<a [routerLink]=\"['/vendor','orders']\" [queryParams]=\"{filterby:'COMPLETED'}\" class=\"tile completed\" title=\"Completed orders\">\n\t\t<span class=\"thumb\">\n\t\t\t<i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<div class=\"tile-detail\">\n\t\t\tCompleted\n\t\t\t<div>{{_completedorders}}</div>\n\t\t</div>\n\t</a>\n\t<a [routerLink]=\"['/vendor','orders']\" [queryParams]=\"{filterby:'REJECTED'}\" class=\"tile rejected\" title=\"Rejected by you\">\n\t\t<span class=\"thumb\">\n\t\t\t<i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n\t\t</span>\n\t\t<div class=\"tile-detail\">\n\t\t\tRejected\n\t\t\t<div>{{_rejectedorders}}</div>\n\t\t</div>\n\t</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vendor/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".dashboard-wrapper {\n  display: table;\n  margin: auto; }\n  .dashboard-wrapper .tile {\n    display: block;\n    width: calc(50% - 30px);\n    width: 300px;\n    height: 300px;\n    margin: 15px;\n    float: left;\n    text-align: center;\n    transition: all .3s ease; }\n    .dashboard-wrapper .tile:nth-child(2n+1) {\n      clear: left; }\n    .dashboard-wrapper .tile:hover, .dashboard-wrapper .tile:focus {\n      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.27);\n      text-decoration: none; }\n    .dashboard-wrapper .tile.new {\n      background: #6ef53d; }\n    .dashboard-wrapper .tile.accepted {\n      background: #ffbf00; }\n    .dashboard-wrapper .tile.cancelled {\n      background: #ff2c29; }\n    .dashboard-wrapper .tile.rejected {\n      background: gray; }\n    .dashboard-wrapper .tile.completed {\n      background: #33adeb; }\n    .dashboard-wrapper .tile .thumb {\n      color: white;\n      font-size: 4em;\n      margin: 20px 0 0;\n      display: inline-block;\n      text-shadow: 0 0 7px rgba(0, 0, 0, 0.33); }\n    .dashboard-wrapper .tile-detail {\n      color: white;\n      font-size: 2.5em; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/vendor/dashboard/D:/Other/Study/Angular 2/LunchOrderApp/src/app/vendor/dashboard/dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,eAAc;EACd,aAAY,EA4Cf;EA9CD;IAIQ,eAAc;IACpB,wBAAuB;IACvB,aAAY;IACZ,cAAa;IACb,aAAY;IACZ,YAAW;IACL,mBAAkB;IAClB,yBAAwB,EAkC9B;IA7CF;MAaG,YAAW,EACL;IAdT;MAgBY,6CAA4C;MAC5C,sBAAqB,EACxB;IAlBT;MAoBG,oBAAmB,EACnB;IArBH;MAuBG,oBAAmB,EACnB;IAxBH;MA0BG,oBAAmB,EACnB;IA3BH;MA6BG,iBAAgB,EAChB;IA9BH;MAgCG,oBAAmB,EACnB;IAjCH;MAmCG,aAAY;MACH,eAAc;MACd,iBAAgB;MAChB,sBAAqB;MACrB,yCAAwC,EACjD;IAxCH;MA0CY,aAAY;MACZ,iBAAgB,EACnB","file":"dashboard.component.scss","sourcesContent":[".dashboard-wrapper {\r\n    display: table;\r\n    margin: auto;\r\n\t.tile {\r\n        display: block;\r\n\t\twidth: calc(50% - 30px);\r\n\t\twidth: 300px;\r\n\t\theight: 300px;\r\n\t\tmargin: 15px;\r\n\t\tfloat: left;\r\n        text-align: center;\r\n        transition: all .3s ease;\r\n\t\t&:nth-child(2n+1) {\r\n\t\t\tclear: left;\r\n        }\r\n        &:hover, &:focus{\r\n            box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.27);\r\n            text-decoration: none;\r\n        }\r\n\t\t&.new {\r\n\t\t\tbackground: #6ef53d;\r\n\t\t}\r\n\t\t&.accepted {\r\n\t\t\tbackground: #ffbf00;\r\n\t\t}\r\n\t\t&.cancelled {\r\n\t\t\tbackground: #ff2c29;\r\n\t\t}\r\n\t\t&.rejected {\r\n\t\t\tbackground: gray;\r\n\t\t}\r\n\t\t&.completed {\r\n\t\t\tbackground: #33adeb;\r\n\t\t}\r\n\t\t.thumb {\r\n\t\t\tcolor: white;\r\n            font-size: 4em;\r\n            margin: 20px 0 0;\r\n            display: inline-block;\r\n            text-shadow: 0 0 7px rgba(0, 0, 0, 0.33);\r\n\t\t}\r\n\t\t&-detail {\r\n            color: white;\r\n            font-size: 2.5em;\r\n        }\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendor/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_dataservice) {
        this._dataservice = _dataservice;
        this._neworders = 0;
        this._pendingorders = 0;
        this._cacelledorders = 0;
        this._rejectedorders = 0;
        this._completedorders = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataservice.getAllOrders().then(function (x) {
            return x.filter(function (y) {
                if (y.IsActive) {
                    if (y.IsAccepted == null)
                        _this._neworders++;
                    else if (y.IsAccepted)
                        if (y.IsPaid)
                            _this._completedorders++;
                        else
                            _this._pendingorders++;
                    else
                        _this._rejectedorders++;
                }
                else {
                    _this._cacelledorders++;
                }
            });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/vendor/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendor/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_app_service__["a" /* DataService */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/vendor/view-orders/view-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 class=\"page-heading\">Orders status </h3>\n    <div class=\"list-info clearfix\">\n        <span [hidden]=\"!orderList.length\">\n            {{orderList.length + \" items found\"}}\n        </span>\n        <div class=\"form-group order-filter pull-right\">\n          <select class=\"form-control\" (change)=\"filterChange()\" [(ngModel)]=\"selectedFilter\" #orderFilter>\n            <option value=\"\">- Select -</option>\n            <option value=\"NEW\">New</option>\n            <option value=\"PENDING\">  Pending</option>\n            <option value=\"CANCELLED\">Cancelled</option>\n            <option value=\"COMPLETED\">Completed</option>\n            <option value=\"REJECTED\">Rejected</option>\n          </select>\n        </div>\n    </div>\n\t<br>\n\t<div class=\"row filter\">\n\t\t<div class=\"col-sm-5\">Ordered Items</div>\n\t\t<div class=\"col-sm-3\">Order detail</div>\n\t\t<div class=\"col-sm-2\">Price</div>\n\t\t<div class=\"col-sm-2\">Action</div>\n    </div>\n    <span class=\"list-info\" [hidden]=\"orderList.length\">\n        {{orderList.length + \" items found\"}}\n    </span>\n\t<div class=\"row order-item\" *ngFor=\"let order of orderList\">\n\t\t<div class=\"col-sm-5\">\n\t\t\t<img src=\"./assets/order-default.png\" class=\"order-thumbnail\" alt=\"sample image\">\n\t\t\t<div class=\"order-detail\">\n\t\t\t\t<div *ngFor=\"let o of order.OrderItems\" class=\"clearfix\">\n\t\t\t\t\t<span class=\"order-detail-text\" [title]=\"o.OptionDetail\">\n                        <i class=\"badge badge-success\">{{o.Count}}</i>\n                        {{o.OptionDetail}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3\">\n\t\t\t<div class=\"order-id\">\n                <span>\n                    {{order._id}}\n                </span>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"order-date\">{{order.CreatedOn|date: 'dd-MM-yyyy hh:mm a'}}</div> -->\n\t\t</div>\n\t\t<div class=\"col-sm-2\">\n\t\t\t<div class=\"order-price\">\n                Rs. {{getSum(order.OrderItems)}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2\">\n\t\t\t<div class=\"action-button\">\n\t\t\t\t<a (click)=\"acceptOrder(order)\" [hidden]=\"!(order.IsActive && order.IsAccepted==null)\" class=\"btn btn-success\" title=\"Accept order\">\n                    <i class=\"fa fa-check\"></i>Accept\n                </a>\n\t\t\t\t<a (click)=\"rejectOrder(order)\" [hidden]=\"!(order.IsActive && order.IsAccepted==null)\" class=\"btn btn-danger\" title=\"Cancel order\">\n                    <i class=\"fa fa-ban\"></i>\n                    Reject\n                </a>\n                <span class=\"badge badge-danger action-button-msg\" *ngIf=\"order.IsAccepted==false\">You rejected this order</span>\n                <span class=\"badge badge-success action-button-msg\" *ngIf=\"order.IsAccepted==true\">You accepted this order</span>\n                <span class=\"badge badge-danger action-button-msg\" *ngIf=\"!order.IsActive\">User cancelled this order</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vendor/view-orders/view-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.filter {\n  padding: 10px 0;\n  border: 1px solid black;\n  border-width: 1px 0; }\n\n.list-info {\n  font-weight: bold;\n  margin: 10px 0 0;\n  display: block; }\n\n.order-filter {\n  margin: 0; }\n  .order-filter select {\n    width: 200px;\n    font-family: inherit;\n    font-size: inherit; }\n\n.order-item {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding: 15px 0;\n  background: white;\n  overflow: hidden;\n  transition: all .2s ease-in-out;\n  border: 1px solid rgba(161, 54, 218, 0.2); }\n  .order-item:hover {\n    background: white;\n    -webkit-transform: scale(1.02, 1.1);\n            transform: scale(1.02, 1.1);\n    box-shadow: 0 0 10px 0 rgba(161, 54, 218, 0.4); }\n  .order-item .order-thumbnail {\n    float: left;\n    width: 50px;\n    height: 50px; }\n  .order-item .order-detail {\n    display: inline-block;\n    width: calc(100% - 110px);\n    padding: 0 10px; }\n    .order-item .order-detail span {\n      float: left; }\n    .order-item .order-detail-text {\n      overflow: hidden;\n      display: inline-block;\n      width: 100%;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n      .order-item .order-detail-text .badge {\n        width: 16.5px;\n        height: 16.5px;\n        border-radius: 50%;\n        font-weight: 400;\n        font-style: normal; }\n  .order-item .order-price {\n    font-size: 1em; }\n  .order-item .order-id {\n    font-weight: 500;\n    font-size: 0.8em; }\n  .order-item .action-button {\n    transition: all .2s ease-in-out; }\n    .order-item .action-button > a {\n      text-decoration: none;\n      padding: 0;\n      cursor: pointer;\n      display: table;\n      margin: 10px;\n      padding: 4px 10px;\n      color: white; }\n      .order-item .action-button > a.repeat-order {\n        color: limegreen; }\n      .order-item .action-button > a.disabled {\n        color: gray;\n        cursor: not-allowed; }\n    .order-item .action-button-msg {\n      font-weight: 300; }\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/vendor/view-orders/D:/Other/Study/Angular 2/LunchOrderApp/src/app/vendor/view-orders/view-orders.component.scss"],"names":[],"mappings":"AAAA;EACI,wCAA6B;UAA7B,gCAA6B,EAChC;;AACD;EACI,gBAAe;EACf,wBAAuB;EACvB,oBAAmB,EACtB;;AACD;EACI,kBAAiB;EACjB,iBAAgB;EAChB,eAAc,EACjB;;AACD;EACI,UAAS,EAMZ;EAPD;IAGQ,aAAY;IACZ,qBAAoB;IACpB,mBAAkB,EACrB;;AAEL;EACI,gBAAe;EACf,mBAAkB;EAClB,gBAAe;EACf,kBAAiB;EACjB,iBAAgB;EAGhB,gCAA+B;EAC/B,0CAAyC,EAkF5C;EA3FD;IAaQ,kBAAiB;IACjB,oCAA0B;YAA1B,4BAA0B;IAC1B,+CAA8C,EACjD;EAhBL;IAkBQ,YAAW;IACX,YAAW;IACX,aAAY,EACf;EArBL;IAuBQ,sBAAqB;IACrB,0BAAyB;IACzB,gBAAe,EAmBlB;IA5CL;MA2BY,YAAW,EACd;IA5BT;MA+BY,iBAAgB;MAChB,sBAAqB;MACrB,YAAW;MACX,wBAAuB;MACvB,oBAAmB,EAQtB;MA3CT;QAqCgB,cAAa;QACb,eAAc;QACd,mBAAkB;QAClB,iBAAgB;QAChB,mBAAkB,EACrB;EA1Cb;IAmDQ,eAAc,EACjB;EApDL;IAsDQ,iBAAgB;IAChB,iBAAgB,EACnB;EAxDL;IAkEQ,gCAA+B,EAoBlC;IAtFL;MAoEY,sBAAqB;MACrB,WAAU;MACV,gBAAe;MACf,eAAc;MACd,aAAY;MACZ,kBAAiB;MACjB,aAAY,EAQf;MAlFT;QA4EgB,iBAAgB,EACnB;MA7Eb;QA+EgB,YAAW;QACX,oBAAmB,EACtB;IAjFb;MAoFY,iBAAgB,EACnB","file":"view-orders.component.scss","sourcesContent":[".container{\r\n    transform: translate3d(0,0,0);\r\n}\r\n.filter {\r\n    padding: 10px 0;\r\n    border: 1px solid black;\r\n    border-width: 1px 0;\r\n}\r\n.list-info{\r\n    font-weight: bold;\r\n    margin: 10px 0 0;\r\n    display: block;\r\n}\r\n.order-filter{\r\n    margin: 0;\r\n    select{\r\n        width: 200px;\r\n        font-family: inherit;\r\n        font-size: inherit;\r\n    }\r\n}\r\n.order-item {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    padding: 15px 0;\r\n    background: white;\r\n    overflow: hidden;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    -moz-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n    border: 1px solid rgba(161, 54, 218, 0.2);\r\n    \r\n    &:hover {\r\n        // background: rgba(161, 54, 218, 0.4);\r\n        background: white;    \r\n        transform: scale(1.02,1.1);\r\n        box-shadow: 0 0 10px 0 rgba(161, 54, 218, 0.4);\r\n    }\r\n    .order-thumbnail{\r\n        float: left;\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    .order-detail {\r\n        display: inline-block;\r\n        width: calc(100% - 110px);\r\n        padding: 0 10px;\r\n        span{\r\n            float: left;\r\n        }\r\n        &-text{\r\n            // max-width: 150px;\r\n            overflow: hidden;\r\n            display: inline-block;\r\n            width: 100%;\r\n            text-overflow: ellipsis;\r\n            white-space: nowrap;\r\n            .badge{\r\n                width: 16.5px;\r\n                height: 16.5px;\r\n                border-radius: 50%;\r\n                font-weight: 400;\r\n                font-style: normal;\r\n            }\r\n        }\r\n    }\r\n    // .order-status .badge {\r\n    //     border-radius: 0;\r\n    //     font-weight: normal;\r\n    //     text-transform: uppercase;\r\n    // }\r\n    .order-price {\r\n        font-size: 1em;\r\n    }\r\n    .order-id {\r\n        font-weight: 500;\r\n        font-size: 0.8em;\r\n    }\r\n    .action-button {\r\n        // position: absolute;\r\n        // top: 0;\r\n        // right: -25px;\r\n        // width: 25px;\r\n        // height: 100%;\r\n        // text-align: center;\r\n        -webkit-transition: all .2s ease-in-out;\r\n        -moz-transition: all .2s ease-in-out;\r\n        transition: all .2s ease-in-out;\r\n        &>a {\r\n            text-decoration: none;\r\n            padding: 0;\r\n            cursor: pointer;\r\n            display: table;\r\n            margin: 10px;\r\n            padding: 4px 10px;\r\n            color: white;\r\n            &.repeat-order {\r\n                color: limegreen;\r\n            }\r\n            &.disabled {\r\n                color: gray;\r\n                cursor: not-allowed;\r\n            }\r\n        }\r\n        &-msg{\r\n            font-weight: 300;\r\n        }\r\n    }\r\n    &:hover .action-button,\r\n    &:focus .action-button {\r\n        // right: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendor/view-orders/view-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__ = __webpack_require__("../../../../../src/app/model/app.modelClasses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewOrdersComponent = /** @class */ (function () {
    // (_today-(new Date()));
    function ViewOrdersComponent(_dataService, _router, route) {
        this._dataService = _dataService;
        this._router = _router;
        this.route = route;
        this.orderList = [];
        this._filter = new __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__["b" /* Order4Dashboard */]();
        this._today = new Date();
        this.selectedFilter = "";
    }
    ViewOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            var f = params['filterby'] || "";
            _this.generateFilter(f);
        });
        this._dataService.getFilterdOrders(this._filter).then(function (x) {
            return x.filter(function (y) {
                _this.orderList = x.sort(function (a, b) { return a.CreatedOn < b.CreatedOn ? 1 : 0; });
            });
        });
    };
    ViewOrdersComponent.prototype.generateFilter = function (_filter) {
        switch (_filter.toLocaleLowerCase()) {
            case "cancelled":
                this._filter.IsActive = false;
                break;
            case "new":
                this._filter.IsActive = true;
                this._filter.IsAccepted = null;
                break;
            case "rejected":
                this._filter.IsActive = true;
                this._filter.IsAccepted = false;
                break;
            case "pending":
                this._filter.IsActive = true;
                this._filter.IsAccepted = true;
                this._filter.IsPaid = false;
                break;
            case "completed":
                this._filter.IsActive = true;
                this._filter.IsAccepted = true;
                this._filter.IsPaid = true;
                break;
            default:
                //>> All
                this._filter.IsActive = true;
                this._filter.IsAccepted = null;
                this._filter.IsPaid = false;
                break;
        }
    };
    ViewOrdersComponent.prototype.getDateInString = function (d) {
        var diff = this._today.valueOf() - d.valueOf();
        if (diff <= 24 * 60 * 60)
            return "today";
        else if (diff <= 2 * 24 * 60 * 60)
            return "yesterday";
        else
            return d.toLocaleDateString();
    };
    ViewOrdersComponent.prototype.getSum = function (arr) {
        var totatlCost = 0;
        arr.forEach(function (x) { return totatlCost += x.Price; });
        return totatlCost;
    };
    ViewOrdersComponent.prototype.acceptOrder = function (o) {
        this._dataService.updateOrderStatus_Vendor(o._id, true).then(function (x) {
            if (x) {
                o.IsAccepted = true;
            }
        });
    };
    ViewOrdersComponent.prototype.rejectOrder = function (o) {
        this._dataService.updateOrderStatus_Vendor(o._id, false).then(function (x) {
            if (x) {
                o.IsAccepted = false;
            }
        });
    };
    ViewOrdersComponent.prototype.filterChange = function () {
        var _this = this;
        this._filter = new __WEBPACK_IMPORTED_MODULE_3_app_model_app_modelClasses__["b" /* Order4Dashboard */]();
        this.generateFilter(this.selectedFilter);
        this.orderList = [];
        this._dataService.getFilterdOrders(this._filter).then(function (x) {
            return x.filter(function (y) {
                _this.orderList = x.sort(function (a, b) { return a.CreatedOn < b.CreatedOn ? 1 : 0; });
            });
        });
        this._router.navigate(['vendor', 'orders'], { queryParams: { filterby: this.selectedFilter } });
    };
    ViewOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-view-orders',
            template: __webpack_require__("../../../../../src/app/vendor/view-orders/view-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendor/view-orders/view-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], ViewOrdersComponent);
    return ViewOrdersComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=view-orders.component.js.map

/***/ }),

/***/ "../../../../../src/assets/bg1.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMJDhMYEkBm58sAAABISURBVHhe7dExEQAwFINQrMRD/Gurhix/6LGwc48AmUKBToGQMZSOgcyhY25eblx+0ldfffXVV1999dVXX3311VdfffXVV/8Btlgq5Eo+mtMAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map