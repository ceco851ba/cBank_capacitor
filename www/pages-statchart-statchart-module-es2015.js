(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statchart-statchart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statchart/statchart.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statchart/statchart.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>statchart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _statchart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statchart.page */ "./src/app/pages/statchart/statchart.page.ts");




const routes = [
    {
        path: '',
        component: _statchart_page__WEBPACK_IMPORTED_MODULE_3__["StatchartPage"]
    }
];
let StatchartPageRoutingModule = class StatchartPageRoutingModule {
};
StatchartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatchartPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statchart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statchart-routing.module */ "./src/app/pages/statchart/statchart-routing.module.ts");
/* harmony import */ var _statchart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statchart.page */ "./src/app/pages/statchart/statchart.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");








let StatchartPageModule = class StatchartPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);






let StatchartPage = class StatchartPage {
    constructor(storage, navController) {
        this.storage = storage;
        this.navController = navController;
        this.TransactionsList = new Array();
        this.profile = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.mTypesAndAmounts = new Map();
        this.storage.get('user').then((val) => {
            this.profile = JSON.parse(val);
        });
        this.storage.get('transactions').then((val) => {
            this.TransactionsList = JSON.parse(val);
            this.TransactionsList.forEach(transaction => {
                if (transaction.recieverId = transaction.senderId) {
                    this.TransactionsList.push(transaction);
                    //if my map contains type than we add amount of transaction to value in map else we create new map record
                    if (this.mTypesAndAmounts.has(transaction.transactionCategory)) {
                        this.mTypesAndAmounts.set(transaction.transactionCategory, (this.mTypesAndAmounts.get(transaction.transactionCategory) + transaction.amount));
                    }
                    else {
                        this.mTypesAndAmounts.set(transaction.transactionCategory, transaction.amount);
                    }
                }
            });
        });
        this.createDoughnut(this.mTypesAndAmounts);
    }
    ngOnInit() {
    }
    createDoughnut(inDataMap) {
        let bgColors = new Array();
        let bgHowerColors = new Array();
        inDataMap.forEach(() => {
            bgColors.push(this.hexToRgbA(this.getRandomColor()));
            console.log("hex to rgbA = ", bgColors[bgColors.length - 1]);
            bgHowerColors.push(this.getRandomColor());
        });
        console.log(inDataMap);
        this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.lineCanvas.nativeElement, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        label: "Stats",
                        data: Array.from(inDataMap.values()),
                        backgroundColor: bgColors,
                        hoverBackgroundColor: bgHowerColors
                    }
                ],
                labels: Array.from(inDataMap.keys())
            },
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        });
    }
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    hexToRgbA(hex) {
        let c;
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        // tslint:disable-next-line: no-bitwise
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
};
StatchartPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineCanvas', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatchartPage.prototype, "lineCanvas", void 0);
StatchartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statchart',
        template: __webpack_require__(/*! raw-loader!./statchart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/statchart/statchart.page.html"),
        styles: [__webpack_require__(/*! ./statchart.page.scss */ "./src/app/pages/statchart/statchart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], StatchartPage);



/***/ })

}]);
//# sourceMappingURL=pages-statchart-statchart-module-es2015.js.map