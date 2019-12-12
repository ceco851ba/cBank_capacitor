(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statchart-statchart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statchart/statchart.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statchart/statchart.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n        <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   My Transactions Chart  </ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n  <canvas #PieChartCanvas></canvas>\n\n</ion-card>\n<ion-card>\n  \n<ion-button ion-button expand=\"block\" (click)=\"gotoTransButtonOnclick()\">Transactions</ion-button> \n\n<ion-button ion-button expand=\"block\" (click)=\"returnToProfileButtonOnclick()\">Return to Profile</ion-button> \n\n</ion-card>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/statchart/statchart-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/statchart/statchart-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StatchartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatchartPageRoutingModule", function() { return StatchartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statchart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statchart.page */ "./src/app/pages/statchart/statchart.page.ts");




var routes = [
    {
        path: '',
        component: _statchart_page__WEBPACK_IMPORTED_MODULE_3__["StatchartPage"]
    }
];
var StatchartPageRoutingModule = /** @class */ (function () {
    function StatchartPageRoutingModule() {
    }
    StatchartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StatchartPageRoutingModule);
    return StatchartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/statchart/statchart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/statchart/statchart.module.ts ***!
  \*****************************************************/
/*! exports provided: StatchartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatchartPageModule", function() { return StatchartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statchart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statchart-routing.module */ "./src/app/pages/statchart/statchart-routing.module.ts");
/* harmony import */ var _statchart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statchart.page */ "./src/app/pages/statchart/statchart.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");








var StatchartPageModule = /** @class */ (function () {
    function StatchartPageModule() {
    }
    StatchartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _statchart_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatchartPageRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]
            ],
            declarations: [_statchart_page__WEBPACK_IMPORTED_MODULE_6__["StatchartPage"]]
        })
    ], StatchartPageModule);
    return StatchartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/statchart/statchart.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/statchart/statchart.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRjaGFydC9zdGF0Y2hhcnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/statchart/statchart.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/statchart/statchart.page.ts ***!
  \***************************************************/
/*! exports provided: StatchartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatchartPage", function() { return StatchartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);






var StatchartPage = /** @class */ (function () {
    function StatchartPage(storage, navController) {
        var _this = this;
        this.storage = storage;
        this.navController = navController;
        this.TransactionsList = new Array();
        this.profile = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.chartDataFiltered = new Map();
        this.storage.get('user').then(function (val) {
            _this.profile = JSON.parse(val);
        });
        this.storage.get('transactions').then(function (val) {
            _this.TransactionsList = JSON.parse(val);
            _this.TransactionsList.forEach(function (transaction) {
                if (transaction.recieverId > transaction.senderId) { ///Receiver ID null --> outgo transaction 
                    _this.TransactionsList.push(transaction);
                    if (_this.chartDataFiltered.has(transaction.transactionCategory)) {
                        _this.chartDataFiltered.set(transaction.transactionCategory, (_this.chartDataFiltered.get(transaction.transactionCategory) + transaction.amount));
                    }
                    else {
                        _this.chartDataFiltered.set(transaction.transactionCategory, transaction.amount);
                    }
                }
            });
            _this.generatePieChart(_this.chartDataFiltered);
        });
    }
    StatchartPage.prototype.ngOnInit = function () { };
    StatchartPage.prototype.generatePieChart = function (ChartDataFilteredMap) {
        var _this = this;
        var GraphBackgroundClr = new Array();
        var GraphBackgroundHowerClr = new Array();
        ChartDataFilteredMap.forEach(function () {
            GraphBackgroundClr.push(_this.ConvHexadecimalToRGBa(_this.RandomClrGenerator()));
            console.log("Converted Hexadecimal to RGBa= ", GraphBackgroundClr[GraphBackgroundClr.length - 1]);
            GraphBackgroundHowerClr.push(_this.RandomClrGenerator());
        });
        console.log(ChartDataFilteredMap);
        this.myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.PieChartCanvas.nativeElement, {
            type: "pie",
            data: {
                datasets: [
                    {
                        label: "Stats",
                        data: Array.from(ChartDataFilteredMap.values()),
                        backgroundColor: GraphBackgroundClr,
                        hoverBackgroundColor: GraphBackgroundHowerClr,
                        borderColor: 'black',
                        borderWidth: 2
                    }
                ],
                labels: Array.from(ChartDataFilteredMap.keys()),
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: "#000080",
                    },
                    position: 'bottom'
                },
            }
        });
    };
    StatchartPage.prototype.ConvHexadecimalToRGBa = function (hex) {
        var clr;
        clr = hex.substring(1).split('');
        if (clr.length == 3) {
            clr = [clr[0], clr[0], clr[1], clr[1], clr[2], clr[2]];
        }
        clr = '0x' + clr.join('');
        return 'rgba(' + [(clr >> 16) & 255, (clr >> 8) & 255, clr & 255].join(',') + ',1)';
    };
    StatchartPage.prototype.RandomClrGenerator = function () {
        var letters = '0123456789ABCDEF';
        var randomColor = '#';
        for (var i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };
    StatchartPage.prototype.gotoTransButtonOnclick = function () {
        this.navController.navigateRoot("tabs/tab2");
    };
    StatchartPage.prototype.returnToProfileButtonOnclick = function () {
        this.navController.navigateRoot("tabs/tab1");
    };
    StatchartPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('PieChartCanvas', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatchartPage.prototype, "PieChartCanvas", void 0);
    StatchartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statchart',
            template: __webpack_require__(/*! raw-loader!./statchart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/statchart/statchart.page.html"),
            styles: [__webpack_require__(/*! ./statchart.page.scss */ "./src/app/pages/statchart/statchart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], StatchartPage);
    return StatchartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-statchart-statchart-module-es5.js.map