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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__app_home_home_component__["a" /* HomeComponent */] },
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__thankyou_component__["a" /* ThankYouComponent */], __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_services_app_service__["a" /* DataService */]] /* Service reference here to make available through all application*/,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1199px) {\r\n    .container {\r\n      max-width: 600px;\r\n      position: relative;\r\n      height: 100vh;\r\n    }\r\n    .card{\r\n        padding: 15px;\r\n    }\r\n  }\r\n  .form-control[name='totalCost']{\r\n      text-align: right;\r\n  }\r\n  /* .form-control[required].ng-touched.ng-invalid[required].ng-touched{\r\n    border-color: rgba(210, 55, 55, 0.48);\r\n  } */\r\n  ", "", {"version":3,"sources":["D:/Other/Study/Angular 2/LunchOrderApp/src/app/home/home.component.css"],"names":[],"mappings":"AAAA;IACI;MACE,iBAAiB;MACjB,mBAAmB;MACnB,cAAc;KACf;IACD;QACI,cAAc;KACjB;GACF;EACD;MACI,kBAAkB;GACrB;EACD;;MAEI","file":"home.component.css","sourcesContent":["@media screen and (min-width: 1199px) {\r\n    .container {\r\n      max-width: 600px;\r\n      position: relative;\r\n      height: 100vh;\r\n    }\r\n    .card{\r\n        padding: 15px;\r\n    }\r\n  }\r\n  .form-control[name='totalCost']{\r\n      text-align: right;\r\n  }\r\n  /* .form-control[required].ng-touched.ng-invalid[required].ng-touched{\r\n    border-color: rgba(210, 55, 55, 0.48);\r\n  } */\r\n  "],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"alert alert-info\">\n        <h3>\n            Lunch Time!\n        </h3>\n        <hr>\n        <p class=\"mb-0\">\n            Tell us what you wanna have in lunch ...\n        </p>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <form (submit)=\"submitForm()\" #myform=\"ngForm\" novalidate>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <label for=\"emailid\">Email address</label>\n                            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"_emailid\" placeholder=\"someone@example.com\" name=\"emailid\"\n                                #e=\"ngModel\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\n                            <div *ngIf=\"e.errors && (e.dirty || e.touched)\" class=\"alert alert-danger\">\n                                <div [hidden]=\"!e.errors.required\">\n                                    Email id is required\n                                </div>\n                                <div [hidden]=\"!e.errors.pattern\">\n                                    Please provide a valid email\n                                </div>\n                            </div>\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"selectedMealOption\">Options</label>\n                            <select class=\"custom-select form-control\" [(ngModel)]=\"selectedOption\" name=\"selectedMealOption\" #option=\"ngModel\" required>\n                              <option *ngFor=\"let o of mealOptions\" [ngValue]=\"o\" [attr.data-price]=\"o.Price\">{{o.OptionDetail}}</option>\n                          </select>\n                            <div [hidden]=\"!(selectedOption.Price<=0 && (option.dirty || option.touched))\" class=\"alert alert-danger\">\n                                Please select quantity\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"selected-quantity\">How many?</label>\n                            <select class=\"custom-select form-control\" [(ngModel)]=\"selectedQuantity\" name=\"selected-quantity\" #qty=\"ngModel\" required>\n                              <option value=\"0\">- select -</option>\n                              <option *ngFor=\"let q of _quantity\" [ngValue]=\"q\">{{q}}</option>\n                          </select>\n                            <div [hidden]=\"!(selectedQuantity<=0 && (qty.dirty || qty.touched))\" class=\"alert alert-danger\">\n                                Please select quantity\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <label for=\"Comments\">Any instructions? </label>\n                            <textarea class=\"form-control\" name=\"Comments\" cols=\"30\" rows=\"3\" [(ngModel)]=\"_comments\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"alert alert-success text-right\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            Total:\n                        </div>\n                        <div class=\"col-md-6\">\n                            <input type=\"text\" class=\"form-control\" disabled=\"disabled\" name=\"totalCost\" [(ngModel)]=\"(selectedOption?selectedOption.Price:0)*selectedQuantity\">\n                        </div>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!(myform.form.valid && selectedQuantity>0 && selectedOption.Price>0)\">Submit</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

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
        this._emailid = "";
        this._comments = "";
        this._quantity = [1, 2, 3, 4, 5];
        this.mealOptions = [];
        this.defaultMealOption = new __WEBPACK_IMPORTED_MODULE_2__model_app_modelClasses__["a" /* MealOptions */](); //{ _id: "", IsActive: true, OptionDetail: "- select -", Price: 0 };
        this.selectedOption = this.defaultMealOption;
        this.selectedQuantity = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        orderDetail.CreatedBy = this._emailid;
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

/***/ "../../../../../src/app/model/app.modelClasses.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Order; });
var MealOptions = /** @class */ (function () {
    function MealOptions() {
        this._id = "";
        this.OptionDetail = "- select -";
        this.Price = 0;
        this.IsActive = true;
        this.Remarks = "";
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

//# sourceMappingURL=app.modelClasses.js.map

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
        this.baseUrl = 'http://localhost:3000'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:*' });
    }
    DataService.prototype.getMealOptions = function () {
        return this.http.get(this.baseUrl + "/getMealOptions", { headers: this.headers }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.placeOrder = function (order) {
        var url = this.baseUrl + "/placeOrder";
        return this.http.post(url, order, { headers: this.headers }).toPromise()
            .then(function (res) {
            if (res != null) {
                // console.log(res);
                return res.json();
            }
        }).catch(this.handleError);
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

/***/ "../../../../../src/app/thankyou.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"alert alert-success\">\r\n        <h3>Thank You for your order!</h3>\r\n        <p>Your order id is <b>{{_orderid}}</b></p>\r\n    </div>\r\n    <a class=\"btn btn-success\" (click)=\"goHome()\" role=\"button\">Go Back</a>\r\n</div>\r\n"

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
            styles: ["\n  .wrapper{\n    width: 600px;\n    margin: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: table;\n    text-align: center;\n  }\n  "]
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