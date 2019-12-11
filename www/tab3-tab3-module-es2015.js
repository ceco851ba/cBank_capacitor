(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BarcodeScanner);
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4R3BDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVGLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7O0lBakNuQixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBL0czQjtFQStHb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgc2Nhbm5lZCB0ZXh0IGZvciBYIG1zLiAwIHN1cHByZXNzZXMgaXQgZW50aXJlbHksIGRlZmF1bHQgMTUwMC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHJlc3VsdERpc3BsYXlEdXJhdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2NhblJlc3VsdCB7XG4gIGZvcm1hdDpcbiAgICB8ICdRUl9DT0RFJ1xuICAgIHwgJ0RBVEFfTUFUUklYJ1xuICAgIHwgJ1VQQ19FJ1xuICAgIHwgJ1VQQ19BJ1xuICAgIHwgJ0VBTl84J1xuICAgIHwgJ0VBTl8xMydcbiAgICB8ICdDT0RFXzEyOCdcbiAgICB8ICdDT0RFXzM5J1xuICAgIHwgJ0NPREVfOTMnXG4gICAgfCAnQ09EQUJBUidcbiAgICB8ICdJVEYnXG4gICAgfCAnUlNTMTQnXG4gICAgfCAnUlNTX0VYUEFOREVEJ1xuICAgIHwgJ1BERl80MTcnXG4gICAgfCAnQVpURUMnXG4gICAgfCAnTVNJJztcbiAgY2FuY2VsbGVkOiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQmFyY29kZSBTY2FubmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBCYXJjb2RlIFNjYW5uZXIgUGx1Z2luIG9wZW5zIGEgY2FtZXJhIHZpZXcgYW5kIGF1dG9tYXRpY2FsbHkgc2NhbnMgYSBiYXJjb2RlLCByZXR1cm5pbmcgdGhlIGRhdGEgYmFjayB0byB5b3UuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFyY29kZVNjYW5uZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKCkudGhlbihiYXJjb2RlRGF0YSA9PiB7XG4gKiAgY29uc29sZS5sb2coJ0JhcmNvZGUgZGF0YScsIGJhcmNvZGVEYXRhKTtcbiAqIH0pLmNhdGNoKGVyciA9PiB7XG4gKiBcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycik7XG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhcmNvZGVTY2FubmVyT3B0aW9uc1xuICogQmFyY29kZVNjYW5SZXN1bHRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXJjb2RlU2Nhbm5lcicsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYXJjb2RlU2Nhbm5lcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEVuY29kZToge1xuICAgIFRFWFRfVFlQRTogc3RyaW5nO1xuICAgIEVNQUlMX1RZUEU6IHN0cmluZztcbiAgICBQSE9ORV9UWVBFOiBzdHJpbmc7XG4gICAgU01TX1RZUEU6IHN0cmluZztcbiAgfSA9IHtcbiAgICBURVhUX1RZUEU6ICdURVhUX1RZUEUnLFxuICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcbiAgICBQSE9ORV9UWVBFOiAnUEhPTkVfVFlQRScsXG4gICAgU01TX1RZUEU6ICdTTVNfVFlQRSdcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBkYXRhIGludG8gYSBiYXJjb2RlLlxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG9mIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   New Transaction  </ion-title>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <ion-content>\n        <ion-card>\n          <ion-card-content>\n            <ion-item>\n                <ion-label  color=\"danger\" position=\"floating\">Reciever ID</ion-label>\n                <ion-input placeholder=\"Required\" type = \"number\" min=\"0\" max=\"10\"   [(ngModel)] = \"receiverId\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label  color=\"danger\" position=\"floating\">Reciever IBAN</ion-label>\n                <ion-input placeholder=\"Reciever IBAN Required!\" autocapitalize=\"characters\" type = \"text\" min=\"15\" max=\"32\"   [(ngModel)] = \"receiverIBAN\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label  color=\"danger\" position=\"floating\">Reciever Name</ion-label>\n                <ion-input type = \"text\" placeholder=\"Reciever Name Required!\" [(ngModel)] = \"receiverName\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label  color=\"primary\" position=\"floating\"> Message</ion-label>\n                <ion-input placeholder=\"Message (optional)\" type = \"text\"  [(ngModel)] = \"message\" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label color=\"danger\" position=\"floating\"> Amount</ion-label>\n                <ion-input placeholder=\"Amount Required!\" type = \"number\" min=\"0\" max=\"1000\"   [(ngModel)] = \"amount\" required min=\"0\" max=\"1000\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label  color=\"primary\" position=\"floating\"> Transaction Category</ion-label>\n                <ion-input placeholder=\"Transaction Category (optional)\" type = \"text\"  [(ngModel)] = \"transactionCategory\" ></ion-input>\n            </ion-item>\n          \n          </ion-card-content>\n        </ion-card>\n              \n              <ion-card>\n                <ion-button color=\"danger\"  ion-button expand=\"block\" (click)=\"CreateNewTransactionButtonOnclick()\">Send Transaction</ion-button> \n                <ion-button ion-button expand=\"block\" (click)=\"scanQR()\">Scan QR</ion-button> \n                <ion-button ion-button expand=\"block\" (click)=\"gotoTransButtonOnclick()\">Return to Transactins</ion-button> \n                <ion-button ion-button expand=\"block\" (click)=\"returnToProfileButtonOnclick()\">Return to Profile</ion-button> \n              </ion-card>\n            \n      </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        providers: [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _my_transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-transaction */ "./src/app/my-transaction.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");







let Tab3Page = class Tab3Page {
    constructor(barcodeScanner, navController, storage, toastController) {
        this.barcodeScanner = barcodeScanner;
        this.navController = navController;
        this.storage = storage;
        this.toastController = toastController;
        this.TransactionsList = new Array();
        this.profile = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.receiverId = null;
        this.transactionCategory = null;
        this.senderIBAN = 'SK5217992356436464634643'; //my default IBAN
        this.receiverIBAN = null;
        this.receiverName = null;
        this.message = null;
        this.amount = null;
        this.storage.get('user').then((val) => {
            this.profile = JSON.parse(val);
        });
        this.storage.get('transactions').then((val) => {
            this.TransactionsList = JSON.parse(val);
        });
    }
    presentToast2(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: JSON.stringify(data),
                duration: 2000
            });
            toast.present();
        });
    }
    scanQR() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.presentToast2(barcodeData);
        }).catch(err => {
            this.presentToast2(err);
            console.log('Error', err);
        });
    }
    transactionIdGenerator() {
        let transID = 0;
        this.TransactionsList.forEach(transaction => {
            if (transaction.transactionId > transID) {
                transID = transaction.transactionId;
            }
        });
        return transID + 1;
    }
    CreateNewTransactionButtonOnclick() {
        let transId = this.transactionIdGenerator();
        let sendId = this.profile.userId;
        console.log("Send new transaction btn clicked! transaction id: " + transId);
        if (this.receiverId !== null && this.amount !== null && this.receiverIBAN !== null && this.receiverName !== null) {
            this.TransactionsList.push(new _my_transaction__WEBPACK_IMPORTED_MODULE_5__["MyTransaction"]().generateTransaction(transId, sendId, this.receiverId, this.senderIBAN, this.receiverIBAN, this.receiverName, this.amount, this.transactionCategory, this.message, Date.now()));
            this.storage.set("transactions", JSON.stringify(this.TransactionsList));
            this.profile.userBalance = this.profile.userBalance - this.amount;
            this.storage.set("user", JSON.stringify(this.profile));
            this.presentToast("Transaction recieved by the bank.");
        }
        /*//////////////////////////////////////
        public generateTransaction(         ////
            transactionId: number,          ///
            receiverId: number,            ////
            senderId: number,             ////
            senderIBAN: string,            ///
            receiverIBAN: string,           ///
            receiverName: string,         ////
            amount: number,               ////
            transactionCategory: string,   ///
            message: string,              //
            transactionTimestamp: number
            )
          //////////////////////////////////    ), */
        else {
            this.presentToast("Please fill all required information");
        }
    }
    presentToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                duration: 2000
            });
            toast.present();
        });
    }
    gotoTransButtonOnclick() {
        this.navController.navigateRoot("tabs/tab2");
    }
    returnToProfileButtonOnclick() {
        this.navController.navigateRoot("tabs/tab1");
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map