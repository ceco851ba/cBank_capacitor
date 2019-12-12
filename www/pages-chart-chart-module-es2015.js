(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chart-chart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chart/chart.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chart/chart.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   Chart  </ion-title>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n \n\n  <ion-content>\n    <ion-card>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/chart/chart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chart/chart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageRoutingModule", function() { return ChartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart.page */ "./src/app/pages/chart/chart.page.ts");




const routes = [
    {
        path: '',
        component: _chart_page__WEBPACK_IMPORTED_MODULE_3__["ChartPage"]
    }
];
let ChartPageRoutingModule = class ChartPageRoutingModule {
};
ChartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chart/chart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chart/chart.module.ts ***!
  \*********************************************/
/*! exports provided: ChartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-routing.module */ "./src/app/pages/chart/chart-routing.module.ts");
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart.page */ "./src/app/pages/chart/chart.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");







//import { Ng2GoogleChartsModule } from 'ng2-google-charts';

let ChartPageModule = class ChartPageModule {
};
ChartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartPageRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]
        ],
        declarations: [_chart_page__WEBPACK_IMPORTED_MODULE_6__["ChartPage"]]
    })
], ChartPageModule);



/***/ }),

/***/ "./src/app/pages/chart/chart.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/chart/chart.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0L2NoYXJ0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/chart/chart.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chart/chart.page.ts ***!
  \*******************************************/
/*! exports provided: ChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPage", function() { return ChartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);


//import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';




let ChartPage = 
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
class ChartPage {
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
                if (transaction.recieverId == 0) {
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
        this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.doughnutCanvas.nativeElement, {
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
ChartPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doughnutCanvas", null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChartPage.prototype, "doughnutCanvas", void 0);
ChartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(/*! raw-loader!./chart.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chart/chart.page.html"),
        styles: [__webpack_require__(/*! ./chart.page.scss */ "./src/app/pages/chart/chart.page.scss")]
    })
    /////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
    /////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
    /////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
    /////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ChartPage);



/***/ })

}]);
//# sourceMappingURL=pages-chart-chart-module-es2015.js.map