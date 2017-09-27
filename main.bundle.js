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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__app_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__["a" /* RegisterComponent */] },
    { path: 'Orders', component: __WEBPACK_IMPORTED_MODULE_6__app_my_orders_my_orders_component__["a" /* MyOrdersComponent */] },
    // { path: 'thankyou', component: ThankYouComponent },
    { path: 'thankyou/:id', component: __WEBPACK_IMPORTED_MODULE_2__app_thankyou_component__["a" /* ThankYouComponent */] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
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

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Subject } from "rxjs";

var AppComponent = /** @class */ (function () {
    function AppComponent(_router, _sharedService) {
        var _this = this;
        this._router = _router;
        this._sharedService = _sharedService;
        this.loginStatus = false;
        _sharedService.loginStatus$.subscribe(function (x) { return _this.loginStatus = x; });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.handleLogoutClick = function () {
        // this._loggedIn.next(false);
        this._router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "<app-header (loggedOut)=\"handleLogoutClick()\"></app-header>\n  <div class=\"wrapper\">\n    <router-outlet></router-outlet>\n  </div>",
            styles: ["\n  .wrapper{\n    max-width: 1100px;\n    margin: auto;\n    padding-top: 30px;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_shared_service_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__thankyou_component__["a" /* ThankYouComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_13__my_orders_my_orders_component__["a" /* MyOrdersComponent */], __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_services_app_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_7__app_services_shared_service_service__["a" /* SharedService */]] /* Service reference here to make available through all application*/,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".header-blue {\r\n    /* background: linear-gradient(135deg, #172a74, #21a9af);\r\n    background-color: #184e8e; */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue {\r\n        padding-bottom: 80px;\r\n    }\r\n}\r\n\r\n.header-blue .navbar {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: rgb(53, 99, 150);\r\n    padding-top: 12px;\r\n    padding-bottom: 10px;\r\n    color: #fff;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n    box-shadow: 0 0 7px -1px #000;\r\n    z-index: 99;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar {\r\n        padding-top: 0;\r\n        padding-bottom: 0;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-header {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-right {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n\r\n.header-blue .navbar .navbar-brand {\r\n    font-weight: bold;\r\n    color: inherit;\r\n    width: 40px;\r\n\theight: 20px;\r\n\tpadding: 0;\r\n}\r\n\r\n.header-blue .navbar .navbar-brand:hover {\r\n    color: #f0f0f0;\r\n}\r\n\r\n.header-blue .navbar .navbar-brand img {\r\n    height: 100%;\r\n    /* display: inline-block; */\r\n    margin-right: 10px;\r\n    width: 130px;\r\n\theight: auto;\r\n\tfloat: left;\r\n    margin-top: -20px;\r\n    transition: all ease .3s;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p {\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p .login {\r\n    color: #d9d9d9;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p .login:hover {\r\n    color: #fff;\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle {\r\n    border-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle:hover,\r\n.header-blue .navbar-toggle:focus {\r\n    background: none;\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle .icon-bar {\r\n    background-color: #eee;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse,\r\n.header-blue .navbar .navbar-form {\r\n    border-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.header-blue .navbar .navbar-nav>.active>a,\r\n.header-blue .navbar .navbar-nav>.open>a {\r\n    background: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a,\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a:focus,\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a:hover {\r\n    color: rgba(255, 255, 255, 0.3);\r\n    box-shadow: none;\r\n    background: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.header-blue .navbar.navbar .navbar-nav>li>a {\r\n    padding-left: 18px;\r\n    padding-right: 18px;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a {\r\n    color: #d9d9d9;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a:focus,\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a:hover {\r\n    color: #fcfeff !important;\r\n    background-color: transparent;\r\n}\r\n\r\n.header-blue .navbar .navbar-nav>li>.dropdown-menu {\r\n    margin-top: -5px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n}\r\n\r\n.header-blue .navbar .dropdown-menu>li>a:focus,\r\n.header-blue .navbar .dropdown-menu>li>a {\r\n    line-height: 2;\r\n    font-size: 14px;\r\n    color: #37434d;\r\n}\r\n\r\n.header-blue .navbar .dropdown-menu>li>a:focus,\r\n.header-blue .navbar .dropdown-menu>li>a:hover {\r\n    background: #ebeff1;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-nav .open .dropdown-menu {\r\n        box-shadow: none;\r\n        background: none;\r\n        color: #fff;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-nav .open .dropdown-menu>li>a {\r\n        color: #fdfeff;\r\n        padding-top: 12px;\r\n        padding-bottom: 12px;\r\n        line-height: 1;\r\n    }\r\n}\r\n\r\n.header-blue .action-button,\r\n.header-blue .action-button:active {\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    border-radius: 20px;\r\n    color: #ebeff1;\r\n    box-shadow: none;\r\n    text-shadow: none;\r\n    padding: 6px 15px;\r\n    background: transparent;\r\n    transition: background-color 0.25s;\r\n    outline: none;\r\n    margin-left: 10px;\r\n}\r\n\r\n.header-blue .action-button:hover {\r\n    color: #44649e;\r\n    background: white;\r\n}\r\n\r\n.header-blue .action-button.btn-lg {\r\n    padding: 7px 18px;\r\n}\r\n\r\n.header-blue .navbar .navbar-form label {\r\n    color: #ccc;\r\n}\r\n\r\n.header-blue .navbar .navbar-form .search-field {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid transparent;\r\n    border-radius: 0;\r\n    color: #ccc;\r\n    box-shadow: none;\r\n    color: inherit;\r\n    transition: border-bottom-color 0.3s;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-form .search-field {\r\n        display: inline-block;\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n.header-blue .navbar .navbar-form .search-field:focus {\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.header-blue .hero {\r\n    margin-top: 60px;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .hero {\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.header-blue .hero h1 {\r\n    color: #fff;\r\n    font-size: 40px;\r\n    margin-top: 190px;\r\n    margin-bottom: 24px;\r\n    font-weight: 300;\r\n}\r\n\r\n@media (max-width:991px) {\r\n    .header-blue .hero h1 {\r\n        margin-top: 0;\r\n        margin-bottom: 15px;\r\n        line-height: 1.4;\r\n    }\r\n}\r\n\r\n.header-blue .hero p {\r\n    color: rgba(255, 255, 255, 0.8);\r\n    font-size: 20px;\r\n    margin-bottom: 30px;\r\n    font-weight: 300;\r\n}\r\n\r\n.navbar-menu{\r\n    display: inline-block;\r\n    margin: 0 0 0 70px;\r\n    padding: 0;\r\n    transition: all .3s ease;\r\n}\r\n.navbar-menu-item{\r\n    display: inline-block;\r\n}\r\n.navbar-menu-item>a{\r\n    padding: 0 20px;\r\n    color: white;\r\n}\r\n.navbar-menu-item>a:focus{\r\n    text-decoration: none;\r\n}\r\n.navbar-menu-item>a:hover{\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\n.header-blue.scrolled .navbar .navbar-brand img{\r\n    width: 50px;\r\n    margin-top: -10px;\r\n}\r\n.header-blue.scrolled .navbar-menu{\r\n    margin-left: 0;\r\n}", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/header/header.component.css"],"names":[],"mappings":"AAAA;IACI;iCAC6B;IAC7B,2CAA2C;CAC9C;;AAED;IACI;QACI,qBAAqB;KACxB;CACJ;;AAED;IACI,gBAAgB;IAChB,YAAY;IACZ,OAAO;IACP,6BAA6B;IAC7B,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,YAAY;CACf;;AAED;IACI;QACI,eAAe;QACf,kBAAkB;KACrB;CACJ;;AAED;IACI;QACI,kBAAkB;QAClB,qBAAqB;KACxB;CACJ;;AAED;IACI;QACI,oBAAoB;KACvB;CACJ;;AAED;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;CACf,aAAa;CACb,WAAW;CACX;;AAED;IACI,eAAe;CAClB;;AAED;IACI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;IACnB,aAAa;CAChB,aAAa;CACb,YAAY;IACT,kBAAkB;IAGlB,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,iBAAiB;CACpB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,sBAAsB;CACzB;;AAED;IACI,YAAY;CACf;;AAED;IACI,uCAAuC;CAC1C;;AAED;;IAEI,iBAAiB;CACpB;;AAED;IACI,uBAAuB;CAC1B;;AAED;;IAEI,uCAAuC;CAC1C;;AAED;;IAEI,iBAAiB;IACjB,iBAAiB;CACpB;;AAED;;;IAGI,gCAAgC;IAChC,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;CACxB;;AAED;IACI,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,eAAe;CAClB;;AAED;;IAEI,0BAA0B;IAC1B,8BAA8B;CACjC;;AAED;IACI,iBAAiB;IACjB,wCAAwC;IACxC,uBAAuB;IACvB,mBAAmB;CACtB;;AAED;;IAEI,eAAe;IACf,gBAAgB;IAChB,eAAe;CAClB;;AAED;;IAEI,oBAAoB;CACvB;;AAED;IACI;QACI,iBAAiB;QACjB,iBAAiB;QACjB,YAAY;KACf;CACJ;;AAED;IACI;QACI,eAAe;QACf,kBAAkB;QAClB,qBAAqB;QACrB,eAAe;KAClB;CACJ;;AAED;;IAEI,2CAA2C;IAC3C,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;IACxB,mCAAmC;IACnC,cAAc;IACd,kBAAkB;CACrB;;AAED;IACI,eAAe;IACf,kBAAkB;CACrB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,YAAY;CACf;;AAED;IACI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,qCAAqC;CACxC;;AAED;IACI;QACI,sBAAsB;QACtB,WAAW;KACd;CACJ;;AAED;IACI,8BAA8B;CACjC;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI;QACI,iBAAiB;QACjB,mBAAmB;KACtB;CACJ;;AAED;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;CACpB;;AAED;IACI;QACI,cAAc;QACd,oBAAoB;QACpB,iBAAiB;KACpB;CACJ;;AAED;IACI,gCAAgC;IAChC,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IAGX,yBAAyB;CAC5B;AACD;IACI,sBAAsB;CACzB;AACD;IACI,gBAAgB;IAChB,aAAa;CAChB;AACD;IACI,sBAAsB;CACzB;AACD;IACI,aAAa;IACb,2BAA2B;CAC9B;;AAED;IACI,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB","file":"header.component.css","sourcesContent":[".header-blue {\r\n    /* background: linear-gradient(135deg, #172a74, #21a9af);\r\n    background-color: #184e8e; */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue {\r\n        padding-bottom: 80px;\r\n    }\r\n}\r\n\r\n.header-blue .navbar {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: rgb(53, 99, 150);\r\n    padding-top: 12px;\r\n    padding-bottom: 10px;\r\n    color: #fff;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n    box-shadow: 0 0 7px -1px #000;\r\n    z-index: 99;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar {\r\n        padding-top: 0;\r\n        padding-bottom: 0;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-header {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-right {\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n\r\n.header-blue .navbar .navbar-brand {\r\n    font-weight: bold;\r\n    color: inherit;\r\n    width: 40px;\r\n\theight: 20px;\r\n\tpadding: 0;\r\n}\r\n\r\n.header-blue .navbar .navbar-brand:hover {\r\n    color: #f0f0f0;\r\n}\r\n\r\n.header-blue .navbar .navbar-brand img {\r\n    height: 100%;\r\n    /* display: inline-block; */\r\n    margin-right: 10px;\r\n    width: 130px;\r\n\theight: auto;\r\n\tfloat: left;\r\n    margin-top: -20px;\r\n    -webkit-transition: all ease .3s;\r\n    -moz-transition: all ease .3s;\r\n    transition: all ease .3s;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p {\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p .login {\r\n    color: #d9d9d9;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse p .login:hover {\r\n    color: #fff;\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle {\r\n    border-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle:hover,\r\n.header-blue .navbar-toggle:focus {\r\n    background: none;\r\n}\r\n\r\n.header-blue .navbar .navbar-toggle .icon-bar {\r\n    background-color: #eee;\r\n}\r\n\r\n.header-blue .navbar .navbar-collapse,\r\n.header-blue .navbar .navbar-form {\r\n    border-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.header-blue .navbar .navbar-nav>.active>a,\r\n.header-blue .navbar .navbar-nav>.open>a {\r\n    background: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a,\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a:focus,\r\n.header-blue .navbar.navbar-default .navbar-nav>.active>a:hover {\r\n    color: rgba(255, 255, 255, 0.3);\r\n    box-shadow: none;\r\n    background: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.header-blue .navbar.navbar .navbar-nav>li>a {\r\n    padding-left: 18px;\r\n    padding-right: 18px;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a {\r\n    color: #d9d9d9;\r\n}\r\n\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a:focus,\r\n.header-blue .navbar.navbar-default .navbar-nav>li>a:hover {\r\n    color: #fcfeff !important;\r\n    background-color: transparent;\r\n}\r\n\r\n.header-blue .navbar .navbar-nav>li>.dropdown-menu {\r\n    margin-top: -5px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n}\r\n\r\n.header-blue .navbar .dropdown-menu>li>a:focus,\r\n.header-blue .navbar .dropdown-menu>li>a {\r\n    line-height: 2;\r\n    font-size: 14px;\r\n    color: #37434d;\r\n}\r\n\r\n.header-blue .navbar .dropdown-menu>li>a:focus,\r\n.header-blue .navbar .dropdown-menu>li>a:hover {\r\n    background: #ebeff1;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-nav .open .dropdown-menu {\r\n        box-shadow: none;\r\n        background: none;\r\n        color: #fff;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-nav .open .dropdown-menu>li>a {\r\n        color: #fdfeff;\r\n        padding-top: 12px;\r\n        padding-bottom: 12px;\r\n        line-height: 1;\r\n    }\r\n}\r\n\r\n.header-blue .action-button,\r\n.header-blue .action-button:active {\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    border-radius: 20px;\r\n    color: #ebeff1;\r\n    box-shadow: none;\r\n    text-shadow: none;\r\n    padding: 6px 15px;\r\n    background: transparent;\r\n    transition: background-color 0.25s;\r\n    outline: none;\r\n    margin-left: 10px;\r\n}\r\n\r\n.header-blue .action-button:hover {\r\n    color: #44649e;\r\n    background: white;\r\n}\r\n\r\n.header-blue .action-button.btn-lg {\r\n    padding: 7px 18px;\r\n}\r\n\r\n.header-blue .navbar .navbar-form label {\r\n    color: #ccc;\r\n}\r\n\r\n.header-blue .navbar .navbar-form .search-field {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid transparent;\r\n    border-radius: 0;\r\n    color: #ccc;\r\n    box-shadow: none;\r\n    color: inherit;\r\n    transition: border-bottom-color 0.3s;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .navbar .navbar-form .search-field {\r\n        display: inline-block;\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n.header-blue .navbar .navbar-form .search-field:focus {\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.header-blue .hero {\r\n    margin-top: 60px;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .header-blue .hero {\r\n        margin-top: 20px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.header-blue .hero h1 {\r\n    color: #fff;\r\n    font-size: 40px;\r\n    margin-top: 190px;\r\n    margin-bottom: 24px;\r\n    font-weight: 300;\r\n}\r\n\r\n@media (max-width:991px) {\r\n    .header-blue .hero h1 {\r\n        margin-top: 0;\r\n        margin-bottom: 15px;\r\n        line-height: 1.4;\r\n    }\r\n}\r\n\r\n.header-blue .hero p {\r\n    color: rgba(255, 255, 255, 0.8);\r\n    font-size: 20px;\r\n    margin-bottom: 30px;\r\n    font-weight: 300;\r\n}\r\n\r\n.navbar-menu{\r\n    display: inline-block;\r\n    margin: 0 0 0 70px;\r\n    padding: 0;\r\n    -webkit-transition: all .3s ease;\r\n    -moz-transition: all .3s ease;\r\n    transition: all .3s ease;\r\n}\r\n.navbar-menu-item{\r\n    display: inline-block;\r\n}\r\n.navbar-menu-item>a{\r\n    padding: 0 20px;\r\n    color: white;\r\n}\r\n.navbar-menu-item>a:focus{\r\n    text-decoration: none;\r\n}\r\n.navbar-menu-item>a:hover{\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\n.header-blue.scrolled .navbar .navbar-brand img{\r\n    width: 50px;\r\n    margin-top: -10px;\r\n}\r\n.header-blue.scrolled .navbar-menu{\r\n    margin-left: 0;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'header-blue '+(_isScrolled?'scrolled':'')\">\r\n    <nav class=\"navbar navbar-default navigation-clean-search\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand navbar-link\" [routerLink]=\"['/home']\" title=\"LunchOrderApp\">\r\n                    <img src=\"./assets/logo.png\" alt=\"logo\">\r\n                </a>\r\n                <ul class=\"navbar-menu\" *ngIf=\"_isLoggedIn\">\r\n                    <li class=\"navbar-menu-item\">\r\n                        <a [routerLink]=\"['/Orders']\">My Orders</a>\r\n                    </li>\r\n                </ul>\r\n                <!-- <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\r\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t</button> -->\r\n                <span class=\"float-right\">\r\n                    <a class=\"btn btn-default action-button login\" [routerLink]=\"['/login']\" [hidden]=\"_isLoggedIn\">Log In</a>\r\n                    <a class=\"btn btn-default action-button\" role=\"button\" [routerLink]=\"['/register']\" [hidden]=\"_isLoggedIn\">Sign Up</a>\r\n                    <a class=\"btn btn-default action-button\" [routerLink]=\"['/profile']\" [hidden]=\"!_isLoggedIn\">My Profile</a>\r\n                    <a class=\"btn btn-default action-button\" role=\"button\" (click)=\"_logoutClick()\" [hidden]=\"!_isLoggedIn\">Log Out</a>\r\n                </span>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li class=\"active\" role=\"presentation\"><a href=\"#\">Link</a></li>\r\n                    <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\">Dropdown <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li role=\"presentation\"><a href=\"#\">First Item</a></li>\r\n                            <li role=\"presentation\"><a href=\"#\">Second Item</a></li>\r\n                            <li role=\"presentation\"><a href=\"#\">Third Item</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n                <form class=\"navbar-form navbar-left\" target=\"_self\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"search-field\"><i class=\"glyphicon glyphicon-search\"></i></label>\r\n                        <input class=\"form-control search-field\" type=\"search\" name=\"search\" id=\"search-field\">\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!-- <div class=\"container hero\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0\">\r\n                <button class=\"btn btn-default btn-lg action-button\" type=\"button\">Learn More</button>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__ = __webpack_require__("../../../../../src/app/services/shared-service.service.ts");
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
        this._isLoggedIn = false;
        this._isScrolled = false;
        _sharedService.loginStatus$.subscribe(function (x) { return _this._isLoggedIn = x; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this._isLoggedIn = this._dataservice.isLoggedIn();
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
        this._isLoggedIn = false;
        this.loggedOut.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "loggedOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "_isLoggedIn", void 0);
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
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1199px) {\r\n    .container {\r\n      max-width: 600px;\r\n      position: relative;\r\n      min-height: 100vh;\r\n    }\r\n    .card{\r\n        padding: 15px;\r\n    }\r\n  }\r\n  .form-control[name='totalCost']{\r\n      text-align: right;\r\n  }\r\n  .btn-container{\r\n    text-align: right;\r\n  }\r\n  /* .form-control[required].ng-touched.ng-invalid[required].ng-touched{\r\n    border-color: rgba(210, 55, 55, 0.48);\r\n  } */\r\n  ", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/home/home.component.css"],"names":[],"mappings":"AAAA;IACI;MACE,iBAAiB;MACjB,mBAAmB;MACnB,kBAAkB;KACnB;IACD;QACI,cAAc;KACjB;GACF;EACD;MACI,kBAAkB;GACrB;EACD;IACE,kBAAkB;GACnB;EACD;;MAEI","file":"home.component.css","sourcesContent":["@media screen and (min-width: 1199px) {\r\n    .container {\r\n      max-width: 600px;\r\n      position: relative;\r\n      min-height: 100vh;\r\n    }\r\n    .card{\r\n        padding: 15px;\r\n    }\r\n  }\r\n  .form-control[name='totalCost']{\r\n      text-align: right;\r\n  }\r\n  .btn-container{\r\n    text-align: right;\r\n  }\r\n  /* .form-control[required].ng-touched.ng-invalid[required].ng-touched{\r\n    border-color: rgba(210, 55, 55, 0.48);\r\n  } */\r\n  "],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"alert alert-info\">\r\n        <h3>\r\n            Lunch Time!\r\n        </h3>\r\n        <hr>\r\n        <p class=\"mb-0\">\r\n            Tell us what you wanna have in lunch ...\r\n        </p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <form (submit)=\"submitForm()\" #myform=\"ngForm\" novalidate>\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"emailid\">Email address</label>\r\n                            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"_emailid\" placeholder=\"someone@example.com\" name=\"emailid\"\r\n                                #e=\"ngModel\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\r\n                            <div *ngIf=\"e.errors && (e.dirty || e.touched)\" class=\"alert alert-danger\">\r\n                                <div [hidden]=\"!e.errors.required\">\r\n                                    Email id is required\r\n                                </div>\r\n                                <div [hidden]=\"!e.errors.pattern\">\r\n                                    Please provide a valid email\r\n                                </div>\r\n                            </div>\r\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"selectedMealOption\">Options</label>\r\n                            <select class=\"custom-select form-control\" [(ngModel)]=\"selectedOption\" name=\"selectedMealOption\" #option=\"ngModel\" required>\r\n                              <option *ngFor=\"let o of mealOptions\" [ngValue]=\"o\" [attr.data-price]=\"o.Price\">{{o.OptionDetail}}</option>\r\n                          </select>\r\n                            <div [hidden]=\"!(selectedOption.Price<=0 && (option.dirty || option.touched))\" class=\"alert alert-danger\">\r\n                                Please select quantity\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"selected-quantity\">How many?</label>\r\n                            <select class=\"custom-select form-control\" [(ngModel)]=\"selectedQuantity\" name=\"selected-quantity\" #qty=\"ngModel\" required>\r\n                              <option value=\"0\">- select -</option>\r\n                              <option *ngFor=\"let q of _quantity\" [ngValue]=\"q\">{{q}}</option>\r\n                          </select>\r\n                            <div [hidden]=\"!(selectedQuantity<=0 && (qty.dirty || qty.touched))\" class=\"alert alert-danger\">\r\n                                Please select quantity\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"Comments\">Any instructions? </label>\r\n                            <textarea class=\"form-control\" name=\"Comments\" cols=\"30\" rows=\"3\" [(ngModel)]=\"_comments\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"alert alert-success text-right\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            Total:\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" class=\"form-control\" disabled=\"disabled\" name=\"totalCost\" [(ngModel)]=\"(selectedOption?selectedOption.Price:0)*selectedQuantity\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn-container\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(myform.form.valid && selectedQuantity>0 && selectedOption.Price>0)\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        // _emailid: string = "";
        this._comments = "";
        this._quantity = [1, 2, 3, 4, 5];
        this.mealOptions = [];
        this.defaultMealOption = new __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__["a" /* MealOptions */](); //{ _id: "", IsActive: true, OptionDetail: "- select -", Price: 0 };
        this.selectedOption = this.defaultMealOption;
        this.selectedQuantity = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //>> Redirect to login page if not logged in
        if (!this.dataService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        this.dataService.getMealOptions().then(function (x) {
            if (x.length)
                _this.mealOptions = x.slice(0, 5);
            _this.mealOptions.unshift(_this.defaultMealOption);
        });
    };
    HomeComponent.prototype.submitForm = function () {
        var _this = this;
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__["b" /* Order */]();
        orderDetail.Count = this.selectedQuantity;
        orderDetail.CreatedBy = this.dataService.getCurrentUserId();
        orderDetail.Remarks = this._comments;
        orderDetail.OptionId = this.selectedOption._id;
        this.dataService.placeOrder(orderDetail).then(function (x) {
            if (x._id !== "") {
                //redirect ot Thank you page
                _this.router.navigate(['/thankyou', x._id]);
                return false;
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-signin {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n    /* margin-bottom: 20px; */\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/login/login.component.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;CAC/B;;AAED;IACI,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,uBAAuB;IACvB,qCAAqC;CACxC;;AAED;;IAEI,oBAAoB;CACvB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,iBAAiB;CACpB;;AAED;IACI,WAAW;CACd;;AAED;IACI,oBAAoB;IACpB;qCACiC;CACpC;;AAED;IACI,0BAA0B;IAC1B;kCAC8B;CACjC;;AAED;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB;kCAC8B;CACjC","file":"login.component.css","sourcesContent":["body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-signin {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n    /* margin-bottom: 20px; */\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <form class=\"form-signin\" (submit)=\"doLogin()\" novalidate>\r\n        <h2 class=\"form-signin-heading\">Please login</h2>\r\n        <div class=\"alert alert-danger\" *ngIf=\"serverError\">\r\n            {{serverError}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"emailid1\" [(ngModel)]=\"_data.EmailId\" #email=\"ngModel\" pattern=\"\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\"\r\n            placeholder=\"Email Id\" required/>\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">Please provide email id</div>\r\n                <div [hidden]=\"!email.errors.pattern\">Invalid email id</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password1\" [(ngModel)]=\"_data.Password\" #pass=\"ngModel\" placeholder=\"Password\" required \r\n            pattern=\"(?=.*\\d).{8,20}\" />\r\n            <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!pass.errors.required\">Please provide password</div>\r\n                <div [hidden]=\"!pass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\r\n            </div>\r\n        </div>\r\n        <label class=\"checkbox\">\r\n          <input type=\"checkbox\" value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\" [(ngModel)]=\"_data.rememberMe\"> Remember me\r\n        </label>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\r\n    </form>\r\n</div>\r\n"

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
        // _emailid: string = "";
        // _password: string = "";
        // _rememberMe: boolean = false;
        this._data = new __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["c" /* loginData */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        //>> Redirect to home page if already logged in
        if (this.dataservice.isLoggedIn()) {
            this._router.navigate(['/home']);
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
                _this._router.navigate(['/home']);
                _this.sharedservice.emitLoginStatus(true);
            }
        })
            .catch(function () { return _this.serverError = "Unable to login, please try after some time."; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Order; });
/* unused harmony export UserOrders */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registrationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginData; });
/* unused harmony export loginResponse */
/* unused harmony export registrationResponse */
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
        this.OptionId = "";
        this.Count = 0;
        this.Remarks = "";
        this.IsAccepted = false;
        this.IsPaid = false;
        this.IsActive = true;
        this.CreatedOn = new Date();
        this.CreatedBy = "";
    }
    return Order;
}());

var UserOrders = /** @class */ (function (_super) {
    __extends(UserOrders, _super);
    function UserOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserOrders;
}(Order));

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

var loginData = /** @class */ (function () {
    function loginData() {
    }
    return loginData;
}());

var loginResponse = /** @class */ (function () {
    function loginResponse() {
    }
    return loginResponse;
}());

var registrationResponse = /** @class */ (function () {
    function registrationResponse() {
    }
    return registrationResponse;
}());

//# sourceMappingURL=app.modelClasses.js.map

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".page-headeing {\r\n    color: white;\r\n}\r\n\r\n.filter {\r\n    padding: 10px 0;\r\n    border: 1px solid white;\r\n    border-width: 1px 0;\r\n    color: white;\r\n}\r\n\r\n.order-item {\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    padding: 15px 0;\r\n    background: rgba(255, 255, 255, .75);\r\n    /* cursor: pointer; */\r\n    overflow: hidden;\r\n    transition: all .3s ease;\r\n}\r\n\r\n.order-item:hover {\r\n    background: white;\r\n}\r\n\r\n.order-item .order-item:nth-child(odd) {}\r\n\r\n.order-item .order-detail {\r\n    display: inline-block;\r\n    width: calc(100% - 110px);\r\n    padding: 0 10px;\r\n}\r\n\r\n.order-item .order-status .badge {\r\n    border-radius: 0;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.order-item .order-date {\r\n    font-size: .8em;\r\n}\r\n\r\n.order-item .order-id>span,\r\n.order-item .price-total {\r\n    font-weight: 500;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.action-button {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -25px;\r\n    width: 25px;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.order-item:hover .action-button,\r\n.order-item:focus .action-button {\r\n    right: 10px;\r\n}\r\n\r\n.action-button>a {\r\n    text-decoration: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    color: red;\r\n}\r\n\r\n.action-button>a.repeat-order {\r\n    color: limegreen;\r\n}\r\n\r\n.action-button>a.disabled {\r\n    color: gray;\r\n    cursor: not-allowed;\r\n}\r\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/my-orders/my-orders.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,wBAAwB;IACxB,oBAAoB;IACpB,aAAa;CAChB;;AAED;IACI,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,qCAAqC;IACrC,sBAAsB;IACtB,iBAAiB;IAGjB,yBAAyB;CAC5B;;AAED;IACI,kBAAkB;CACrB;;AAED,yCAAyC;;AAEzC;IACI,sBAAsB;IACtB,0BAA0B;IAC1B,gBAAgB;CACnB;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;CACnB;;AAED;;IAEI,iBAAiB;IACjB,iBAAiB;CACpB;;AAED;IACI,mBAAmB;IACnB,OAAO;IACP,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IAGnB,gCAAgC;CACnC;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,WAAW;CACd;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,YAAY;IACZ,oBAAoB;CACvB","file":"my-orders.component.css","sourcesContent":[".page-headeing {\r\n    color: white;\r\n}\r\n\r\n.filter {\r\n    padding: 10px 0;\r\n    border: 1px solid white;\r\n    border-width: 1px 0;\r\n    color: white;\r\n}\r\n\r\n.order-item {\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    padding: 15px 0;\r\n    background: rgba(255, 255, 255, .75);\r\n    /* cursor: pointer; */\r\n    overflow: hidden;\r\n    -webkit-transition: all .3s ease;\r\n    -moz-transition: all .3s ease;\r\n    transition: all .3s ease;\r\n}\r\n\r\n.order-item:hover {\r\n    background: white;\r\n}\r\n\r\n.order-item .order-item:nth-child(odd) {}\r\n\r\n.order-item .order-detail {\r\n    display: inline-block;\r\n    width: calc(100% - 110px);\r\n    padding: 0 10px;\r\n}\r\n\r\n.order-item .order-status .badge {\r\n    border-radius: 0;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.order-item .order-date {\r\n    font-size: .8em;\r\n}\r\n\r\n.order-item .order-id>span,\r\n.order-item .price-total {\r\n    font-weight: 500;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.action-button {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -25px;\r\n    width: 25px;\r\n    height: 100%;\r\n    text-align: center;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    -moz-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.order-item:hover .action-button,\r\n.order-item:focus .action-button {\r\n    right: 10px;\r\n}\r\n\r\n.action-button>a {\r\n    text-decoration: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    color: red;\r\n}\r\n\r\n.action-button>a.repeat-order {\r\n    color: limegreen;\r\n}\r\n\r\n.action-button>a.disabled {\r\n    color: gray;\r\n    cursor: not-allowed;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-headeing\">My Orders</h3>\r\n<br>\r\n<div class=\"container\">\r\n    <div class=\"row filter\">\r\n        <div class=\"col-sm-4\">Product Description</div>\r\n        <div class=\"col-sm-2\">Status</div>\r\n        <div class=\"col-sm-2\">Date</div>\r\n        <div class=\"col-sm-3\">Order No.</div>\r\n        <div class=\"col-sm-1\">Price</div>\r\n    </div>\r\n    <div class=\"row order-item\" *ngFor=\"let order of orderList\">\r\n        <div class=\"col-sm-4\">\r\n            <img src=\"./assets/order-default.png\" width=\"50px\" height=\"50px\" alt=\"sample image\">\r\n            <div class=\"order-detail\">\r\n                {{order.OrderedMeal[0].OptionDetail}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"order-status\">\r\n                <span class=\"badge badge-success\"></span>\r\n                <div *ngIf=\"order.IsActive\" [class]=\"'badge ' + (order.IsAccepted?'badge-success':'badge-warning')\">{{order.IsAccepted?\"Accepted\":\"Not Accepted\"}}</div>\r\n                <div *ngIf=\"order.IsActive\" [class]=\"'badge ' + (order.IsPaid?'badge-success':'badge-warning')\">{{order.IsPaid?\"Paid\":\"Not Paid\"}}</div>\r\n                <div *ngIf=\"!order.IsActive\" class=\"badge badge-danger\">Cancelled</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"order-date\">{{order.CreatedOn|date: 'dd-MM-yyyy hh:mm a'}}</div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"order-id\">\r\n                <span class=\"bg-info\">\r\n\t\t\t\t\t{{order._id}}\r\n\t\t\t\t</span>\r\n                <div *ngIf=\"order.Remarks\" class=\"small\"><b>Your remarks:</b> {{order.Remarks}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <div class=\"small\">{{order.Count +' * '+order.OrderedMeal[0].Price}}</div>\r\n            <div class=\"price-total\">\r\n                Rs {{order.Count*order.OrderedMeal[0].Price}}\r\n            </div>\r\n            <div class=\"action-button\">\r\n                <a (click)=\"cancelOrder(order)\" [hidden]=\"!order.IsActive\" [class]=\"((order.IsAccepted||order.IsPaid)?' disabled':'')+' fa fa-times'\" title=\"Cancel order\"></a>\r\n                <a (click)=\"repeatOrder(order)\" class=\"fa fa-repeat repeat-order\" title=\"Repeat order\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
        this.dataservice.getUserOrderList(this.dataservice.getCurrentUserId())
            .then(function (x) {
            _this.orderList = x.sort(function (a, b) { return a.CreatedOn < b.CreatedOn ? 1 : 0; });
            // console.log(this.orderList);
        });
    };
    MyOrdersComponent.prototype.repeatOrder = function (o) {
        var _this = this;
        var orderDetail = new __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__["b" /* Order */]();
        orderDetail.Count = o.Count;
        orderDetail.CreatedBy = o.CreatedBy;
        orderDetail.Remarks = o.Remarks;
        orderDetail.OptionId = o.OptionId;
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
            styles: [__webpack_require__("../../../../../src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], MyOrdersComponent);
    return MyOrdersComponent;
    var _a, _b;
}());

//# sourceMappingURL=my-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-registration {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-registration .form-registration-heading,\r\n.form-registration .checkbox {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-registration .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-registration .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n}\r\n\r\n.form-registration .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-registration input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n}\r\n\r\n.form-registration input[type=\"password\"] {\r\n    /* margin-bottom: 20px; */\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/register/register.component.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;CAC/B;;AAED;IACI,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,uBAAuB;IACvB,qCAAqC;CACxC;;AAED;;IAEI,oBAAoB;CACvB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,iBAAiB;CACpB;;AAED;IACI,WAAW;CACd;;AAED;IACI,oBAAoB;IACpB;qCACiC;CACpC;;AAED;IACI,0BAA0B;IAC1B;kCAC8B;CACjC;;AAED;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB;kCAC8B;CACjC","file":"register.component.css","sourcesContent":["body {\r\n    background: #eee !important;\r\n}\r\n\r\n.form-registration {\r\n    max-width: 380px;\r\n    padding: 15px 35px 45px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.form-registration .form-registration-heading,\r\n.form-registration .checkbox {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.form-registration .checkbox {\r\n    font-weight: normal;\r\n}\r\n\r\n.form-registration .form-control {\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n}\r\n\r\n.form-registration .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-registration input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    /* border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n}\r\n\r\n.form-registration input[type=\"password\"] {\r\n    /* margin-bottom: 20px; */\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n\r\n.alert{\r\n    border-radius: 0;\r\n    padding: 3px 10px;\r\n    font-size: .8em;\r\n    /* border-top-left-radius: 0;\r\n    border-top-right-radius: 0; */\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <form class=\"form-registration\" (submit)=\"doRegister()\" novalidate #regForm=\"ngForm\">\r\n        <h2 class=\"form-registration-heading\">Please register</h2>\r\n        <div class=\"alert alert-danger\" *ngIf=\"serverError\">\r\n            {{serverError}}\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"emailid\" [(ngModel)]=\"_data.EmailId\" #email=\"ngModel\" pattern=\"\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\"\r\n                placeholder=\"Email Id\" required/>\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">Please provide email id</div>\r\n                <div [hidden]=\"!email.errors.pattern\">Invalid email id</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"_data.Password\" #pass=\"ngModel\" placeholder=\"Password\"\r\n                required pattern=\"(?=.*\\d).{8,20}\" />\r\n            <div *ngIf=\"pass.errors && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!pass.errors.required\">Please provide password</div>\r\n                <div [hidden]=\"!pass.errors.pattern\">Password should be of at least 8 and max 20 characters</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"matchPassword\" [(ngModel)]=\"repeatPassword\" #matchPass=\"ngModel\" placeholder=\"Repeat password\" required/>\r\n            <!-- <div *ngIf=\"matchPass.dirty || matchPass.touched\" class=\"alert alert-danger\"> -->\r\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && matchPass.errors && matchPass.errors.required)\">Please re-enter password</div>\r\n                <div class=\"alert alert-danger\" [hidden]=\"!((matchPass.dirty || matchPass.touched) && !(matchPass.errors && matchPass.errors.required) && repeatPassword!==_data.Password)\">Password do not match</div>\r\n            <!-- </div> -->\r\n        </div>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!(regForm.form.valid && repeatPassword===_data.Password)\">Register</button>\r\n    </form>\r\n</div>\r\n"

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
        this._data = new __WEBPACK_IMPORTED_MODULE_4__model_app_modelClasses__["d" /* registrationData */]();
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
                _this._router.navigate(['/home']);
                _this.sharedservice.emitLoginStatus(true);
            }
        })
            .catch(function () { return _this.serverError = "Unable to register, please try after some time."; });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
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
        this.baseUrl = 'https://63f743eb.ngrok.io'; // URL to web api
        // private baseUrl = 'http://localhost:3000';  // URL to web api
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:*' });
        this.isUserLoggedInKey = "_iuli";
        this.lastLoginDateKey = "lastLogin";
    }
    DataService.prototype.getCurrentUserId = function () {
        return localStorage.getItem(this.isUserLoggedInKey) || sessionStorage.getItem(this.isUserLoggedInKey);
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
    DataService.prototype.createLoginSession = function (_userid, _remember) {
        // iuli => is user logged in
        if (_remember) {
            localStorage.setItem(this.isUserLoggedInKey, _userid);
            localStorage.setItem(this.lastLoginDateKey, (new Date()).toUTCString());
        }
        else {
            sessionStorage.setItem(this.isUserLoggedInKey, _userid);
        }
    };
    DataService.prototype.loginUser = function (_logindata) {
        var _this = this;
        return this.http.post(this.baseUrl + "/loginUser", _logindata, { headers: this._headers }).toPromise()
            .then(function (x) {
            var res = x.json();
            _this.createLoginSession(res.userId, _logindata.rememberMe);
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
                    _this.createLoginSession(res.userId, false);
                return res;
            }
        }).catch(this.handleError);
    };
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

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"alert alert-success\">\r\n        <h3>Thank You for your order!</h3>\r\n        <p>Your order id is <b>{{_orderid}}</b></p>\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"goHome()\" role=\"button\">Go Back</button>\r\n    <button class=\"btn btn-success\" [routerLink]=\"['/Orders']\" role=\"button\">View All Orders</button>\r\n</div>\r\n"

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