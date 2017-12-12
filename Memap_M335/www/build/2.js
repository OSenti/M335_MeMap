webpackJsonp([2],{

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemoPageModule", function() { return EditMemoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_memo__ = __webpack_require__(968);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditMemoPageModule = (function () {
    function EditMemoPageModule() {
    }
    EditMemoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_memo__["a" /* EditMemoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_memo__["a" /* EditMemoPage */]),
            ],
        })
    ], EditMemoPageModule);
    return EditMemoPageModule;
}());

//# sourceMappingURL=edit-memo.module.js.map

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_memo_services_addMemo__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditMemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditMemoPage = (function () {
    function EditMemoPage(navCtrl, navParams, mapService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapService = mapService;
        this.item = {
            name: '',
            lat: this.mapService.lat,
            lng: this.mapService.lng
        };
    }
    EditMemoPage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditMemoPage.prototype.submitEdit = function (item) {
        var _this = this;
        this.mapService.editMemoData(item).then(function () {
            _this.navCtrl.pop();
        });
    };
    EditMemoPage.prototype.submitDelete = function (item) {
        var _this = this;
        this.mapService.removeMemoData(item).then(function () {
            _this.mapService.removeMarker(item);
            _this.navCtrl.pop();
        });
    };
    EditMemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-memo',template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\edit-memo\edit-memo.html"*/'<!--\n  Generated template for the EditMemoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label stacked>Name:</ion-label>\n    <ion-input type="text" [(ngModel)]="item.name"></ion-input>\n  </ion-item>\n\n  <button class="btn" ion-button full outline (click)="submitEdit(item)">Memo ändern</button>\n  <button class="btn" ion-button full outline color="danger" (click)="submitDelete(item)">Memo löschen</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\edit-memo\edit-memo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__add_memo_services_addMemo__["a" /* AddMemo */]])
    ], EditMemoPage);
    return EditMemoPage;
}());

//# sourceMappingURL=edit-memo.js.map

/***/ })

});
//# sourceMappingURL=2.js.map