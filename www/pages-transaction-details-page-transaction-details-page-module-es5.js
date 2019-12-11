(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-details-page-transaction-details-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/transaction-details-page/transaction-details-page.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/transaction-details-page/transaction-details-page.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   Transaction Detail </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n      <ion-card-content *ngIf=\"SelectedTransaction\">\n          <ion-item>\n              <ion-label color=\"primary\" floating>Recipient</ion-label>\n            <ion-text> {{SelectedTransaction.receiverName}}</ion-text>\n          </ion-item>\n\n          <ion-item>\n              <ion-label color=\"primary\" floating>Message</ion-label>\n            <ion-text> {{SelectedTransaction.message}}</ion-text>\n          </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" floating>Sender IBAN</ion-label>\n          <ion-text> {{SelectedTransaction.senderIBAN}}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" floating>Receiver IBAN</ion-label>\n            <ion-text>{{SelectedTransaction.receiverIBAN}}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" floating>Amount</ion-label>\n            <ion-text> {{SelectedTransaction.amount}}€</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" floating>Category</ion-label>\n          <ion-text>{{SelectedTransaction.transactionCategory}}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label color=\"primary\" floating>Date and time</ion-label>\n            <ion-text>{{dateAndTime}}</ion-text>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-button ion-button expand=\"block\" (click)=\"returnToTransactionButtonOnclick()\">Back</ion-button> \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/transaction-details-page/transaction-details-page-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/transaction-details-page/transaction-details-page-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransactionDetailsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPagePageRoutingModule", function() { return TransactionDetailsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transaction_details_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-details-page.page */ "./src/app/pages/transaction-details-page/transaction-details-page.page.ts");




var routes = [
    {
        path: '',
        component: _transaction_details_page_page__WEBPACK_IMPORTED_MODULE_3__["TransactionDetailsPagePage"]
    }
];
var TransactionDetailsPagePageRoutingModule = /** @class */ (function () {
    function TransactionDetailsPagePageRoutingModule() {
    }
    TransactionDetailsPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TransactionDetailsPagePageRoutingModule);
    return TransactionDetailsPagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/transaction-details-page/transaction-details-page.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/transaction-details-page/transaction-details-page.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TransactionDetailsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPagePageModule", function() { return TransactionDetailsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_details_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-details-page-routing.module */ "./src/app/pages/transaction-details-page/transaction-details-page-routing.module.ts");
/* harmony import */ var _transaction_details_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-details-page.page */ "./src/app/pages/transaction-details-page/transaction-details-page.page.ts");







var TransactionDetailsPagePageModule = /** @class */ (function () {
    function TransactionDetailsPagePageModule() {
    }
    TransactionDetailsPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _transaction_details_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionDetailsPagePageRoutingModule"]
            ],
            declarations: [_transaction_details_page_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPagePage"]]
        })
    ], TransactionDetailsPagePageModule);
    return TransactionDetailsPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/transaction-details-page/transaction-details-page.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/transaction-details-page/transaction-details-page.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLWRldGFpbHMtcGFnZS90cmFuc2FjdGlvbi1kZXRhaWxzLXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/transaction-details-page/transaction-details-page.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/transaction-details-page/transaction-details-page.page.ts ***!
  \*********************************************************************************/
/*! exports provided: TransactionDetailsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPagePage", function() { return TransactionDetailsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var TransactionDetailsPagePage = /** @class */ (function () {
    function TransactionDetailsPagePage(storage, navController) {
        this.storage = storage;
        this.navController = navController;
        this.refresh();
    }
    TransactionDetailsPagePage.prototype.ngOnInit = function () { };
    TransactionDetailsPagePage.prototype.ionViewDidEnter = function () {
        this.refresh();
    };
    TransactionDetailsPagePage.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("selected-transaction").then(function (val) {
                            _this.SelectedTransaction = JSON.parse(val);
                            _this.dateAndTime = new Date(_this.SelectedTransaction.transactionTimestamp).toString();
                            console.log(_this.SelectedTransaction);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailsPagePage.prototype.returnToTransactionButtonOnclick = function () {
        this.navController.navigateRoot("tabs/tab2");
    };
    TransactionDetailsPagePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    TransactionDetailsPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-details-page',
            template: __webpack_require__(/*! raw-loader!./transaction-details-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/transaction-details-page/transaction-details-page.page.html"),
            styles: [__webpack_require__(/*! ./transaction-details-page.page.scss */ "./src/app/pages/transaction-details-page/transaction-details-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], TransactionDetailsPagePage);
    return TransactionDetailsPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transaction-details-page-transaction-details-page-module-es5.js.map