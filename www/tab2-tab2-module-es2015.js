(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   Transactions  </ion-title>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <ion-list >\n          <ion-card *ngFor=\"let transaction of TransactionsList\" (click)= \"transactionDetailClick(transaction)\">\n            <ion-item>\n                <ion-icon name=\"person\"></ion-icon>\n                <ion-label color=\"primary\" floating>Recipient:</ion-label>\n              <ion-text> {{transaction.receiverName}}</ion-text> \n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"keypad\"></ion-icon>\n                <ion-label color=\"primary\" floating>Category:</ion-label>\n              <ion-text >{{transaction.transactionCategory}}</ion-text>\n            </ion-item>\n            \n            <ion-item *ngIf=\"transaction.senderId == profile.userId\">\n                <ion-icon color=\"danger\" name=\"logo-usd\"></ion-icon>\n                <ion-label  floating>Amount:</ion-label>\n              <ion-text><ion-text color=\"danger\" class= \"negativeTransaction\"> - {{transaction.amount}}</ion-text> </ion-text>\n            </ion-item>\n            <ion-item *ngIf=\"transaction.recieverId == profile.userId\" >\n                <ion-icon color=\"success\" name=\"logo-usd\"></ion-icon>\n                <ion-label  floating>Amount:</ion-label>\n                <ion-text> <ion-text color=\"success\" class = \"positiveTransaction\"> + {{transaction.amount}}</ion-text></ion-text>\n              </ion-item>\n          </ion-card>\n         \n      </ion-list>\n<ion-card>\n      <ion-button ion-button expand=\"block\" (click)=\"returnToProfileButtonOnclick()\">Return to Profile</ion-button> \n      <ion-button ion-button expand=\"block\" (click)=\"gotoNewTransaction()\">Create New Transaction</ion-button> \n\n</ion-card>\n    </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let Tab2Page = class Tab2Page {
    constructor(storage, navController) {
        this.storage = storage;
        this.navController = navController;
        this.TransactionsList = new Array();
        this.profile = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.storage.get('user').then((val) => {
            this.profile = JSON.parse(val);
        });
        this.storage.get('transactions').then((val) => {
            this.TransactionsList = JSON.parse(val);
            this.TransactionsList.forEach(transaction => {
                if (transaction.recieverId !== this.profile.userId && transaction.senderId !== this.profile.userId) {
                    this.TransactionsList.splice(transaction.transactionId, 1);
                }
            });
        });
    }
    returnToProfileButtonOnclick() {
        this.navController.navigateRoot("tabs/tab1");
    }
    gotoNewTransaction() {
        this.navController.navigateRoot("tabs/tab3");
    }
    ionViewDidEnter() {
        this.refreshOnClick();
    }
    refreshOnClick() {
        this.storage.get('user').then((val) => {
            this.profile = JSON.parse(val);
        });
        this.storage.get('transactions').then((val) => {
            this.TransactionsList = JSON.parse(val);
            this.TransactionsList.forEach(transaction => {
                if (transaction.recieverId !== this.profile.userId && transaction.senderId !== this.profile.userId) {
                    this.TransactionsList.splice(transaction.transactionId, 1);
                }
            });
        });
    }
    transactionDetailClick(inTransaction) {
        console.log(inTransaction);
        this.storage.set("selected-transaction", JSON.stringify(inTransaction));
        this.navController.navigateRoot("transaction-details-page");
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map