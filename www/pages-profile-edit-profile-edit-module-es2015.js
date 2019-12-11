(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-profile-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile-edit/profile-edit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile-edit/profile-edit.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title align=\"center\" style=\"font-weight: bold; color:rgb(24, 0, 163);\">   Profile Details & Edit  </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <ion-icon name =\"contact\"></ion-icon>Profile Info\n        </ion-card-header>\n        <ion-card-content>\n        \n<ion-item>\n    <ion-label color=\"primary\" floating>Title</ion-label>\n    <ion-input clearInput placeholder =\"title\"  [(ngModel)]=\"profile.userTitle\" type = \"text\" ></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color=\"primary\" floating>Name</ion-label>\n    <ion-input clearInput placeholder =\"Name\"  value = '{{profile.userName}}' [(ngModel)]=\"profile.userName\" type = \"text\" ></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color=\"primary\" floating>Surname</ion-label>\n    <ion-input clearInput placeholder =\"Surname\"  value = '{{profile.userSurname}}' [(ngModel)]=\"profile.userSurname\" type = \"text\" ></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label color=\"primary\" floating>Title 2</ion-label>\n    <ion-input clearInput placeholder =\"phd\" value = '{{profile.userTitle2}}' [(ngModel)]=\"profile.userTitle2\" type = \"text\" ></ion-input>\n</ion-item>\n\n<ion-item>    \n        <ion-label color=\"primary\" floating>Email</ion-label>\n    <ion-input type=\"email\" clearInput placeholder =\"email\"  [(ngModel)]=\"profile.userEmail\"  ></ion-input>   \n  </ion-item>\n\n  <ion-item>    \n      <ion-label color=\"primary\" floating>Tel Number</ion-label>\n     <!--Tel Number is type string due to problem with numbers starting with 0 --> \n  <ion-input type=\"string\" clearInput placeholder =\"0903123123\"  [(ngModel)]=\"profile.userPhonenum\"  ></ion-input>   \n</ion-item>\n\n<ion-item>    \n    <ion-label color=\"primary\" floating>Address</ion-label>\n  \n<ion-input type=\"string\" clearInput placeholder =\"Address\"  [(ngModel)]=\"profile.userAddress\"  ></ion-input>   \n</ion-item>\n\n<ion-item>    \n    <ion-label color=\"primary\" floating>City</ion-label>\n  \n<ion-input type=\"string\" clearInput placeholder =\"Bratisalva\"  [(ngModel)]=\"profile.userCity\"  ></ion-input>   \n</ion-item>\n\n\n</ion-card-content>\n</ion-card>\n     \n\n      <ion-card>     \n          <ion-button ion-button expand=\"block\" (click)=\"saveValuesButtonOnclick()\">save changes</ion-button> \n          </ion-card>\n    <ion-card>     \n      <ion-button ion-button expand=\"block\" (click)=\"returnToProfileButtonOnclick()\">Go Back</ion-button> \n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageRoutingModule", function() { return ProfileEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/pages/profile-edit/profile-edit.page.ts");




const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEditPage"]
    }
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-edit-routing.module */ "./src/app/pages/profile-edit/profile-edit-routing.module.ts");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/pages/profile-edit/profile-edit.page.ts");







let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEditPageRoutingModule"]
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
    })
], ProfileEditPageModule);



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");





let ProfileEditPage = class ProfileEditPage {
    constructor(storage, navController) {
        this.storage = storage;
        this.navController = navController;
        this.profile = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() {
        this.storage.get('user').then((val) => {
            this.profile = JSON.parse(val);
        });
    }
    saveValuesButtonOnclick() {
        console.log(this.profile.userName);
        this.storage.set("user", JSON.stringify(this.profile));
    }
    returnToProfileButtonOnclick() {
        this.navController.navigateRoot("tabs/tab1");
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(/*! raw-loader!./profile-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile-edit/profile-edit.page.html"),
        styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/pages/profile-edit/profile-edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ProfileEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-profile-edit-module-es2015.js.map