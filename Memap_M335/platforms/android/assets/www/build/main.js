webpackJsonp([6],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_audiorecorder__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_addMemo__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__ = __webpack_require__(525);
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
 * Generated class for the AddMemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMemoPage = (function () {
    function AddMemoPage(navCtrl, alertCtrl, media, afAuth, database, mapService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.media = media;
        this.afAuth = afAuth;
        this.database = database;
        this.mapService = mapService;
        this.item = {
            name: '',
            lat: this.mapService.lat,
            lng: this.mapService.lng
        };
        this.AudioRecorderState = __WEBPACK_IMPORTED_MODULE_2__services_audiorecorder__["a" /* AudioRecorderState */];
        this.file = this.media.create('../../../www/assets/audio' + this.mapService.content + '.mp3');
    }
    AddMemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMemoPage');
    };
    AddMemoPage.prototype.ionViewDidEnter = function () {
        console.log('Wanna Add a Memo?');
    };
    AddMemoPage.prototype.startRecording = function () {
        try {
            this.file.startRecord();
        }
        catch (e) {
            this.showAlert('Could not start recording.');
        }
    };
    AddMemoPage.prototype.stopRecording = function () {
        try {
            this.file.stopRecord();
        }
        catch (e) {
            this.showAlert('Could not stop recording.');
        }
    };
    AddMemoPage.prototype.startPlayback = function () {
        try {
            this.file.setVolume(0.7);
            this.file.play();
        }
        catch (e) {
            this.showAlert('Could not play recording.');
        }
    };
    AddMemoPage.prototype.stopPlayback = function () {
        try {
            this.file.resumeRecord();
        }
        catch (e) {
            this.showAlert('Could not stop playing recording.');
        }
    };
    AddMemoPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    AddMemoPage.prototype.submitMemo = function (memoItem) {
        this.mapService.addMemoData(memoItem).then(function (ref) {
            console.log(ref.key);
        });
        this.mapService.content = memoItem.name;
        this.mapService.addMemoMarker();
        this.navCtrl.pop();
        this.mapService.getInitialization();
    };
    AddMemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-memo',template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\add-memo\add-memo.html"*/'<!--\n\n  Generated template for the AddMemoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddMemo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label>Memo-Name:</ion-label>\n\n    <ion-input name="memotitle" type="text" [(ngModel)]="item.name" required="true"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <h1>Aufnahme</h1>\n\n    <button ion-fab strong color="dark" (click)="startRecording()"  class="recBtn"><ion-icon name="md-mic"></ion-icon></button>\n\n    <button ion-fab strong color="danger" (click)="stopRecording()" class="recBtn"><ion-icon name="md-square"></ion-icon></button>\n\n    <h1>Leiste</h1>\n\n    <button ion-fab strong color="secondary" (click)="startPlayback()" class="recBtn"><ion-icon name="md-play"></ion-icon></button>\n\n    <button ion-fab strong color="secondary" (click)="stopPlayback()" class="recBtn"><ion-icon name="md-pause"></ion-icon></button>\n\n  </ion-item>\n\n\n\n  <button class="btn" ion-button full outline (click)="submitMemo(item)">Memo setzen</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\add-memo\add-memo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__services_addMemo__["a" /* AddMemo */]])
    ], AddMemoPage);
    return AddMemoPage;
}());

//# sourceMappingURL=add-memo.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
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
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatsPage = (function () {
    function ChatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\chats\chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chats</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Coming Soon!</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\chats\chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_memo_add_memo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_memo_services_addMemo__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var currentLoc;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, platform, geolocation, db, Auth, Memoinfo) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.db = db;
        this.Auth = Auth;
        this.Memoinfo = Memoinfo;
        this.currentLoc = { lat: 0, lon: 0 };
        this.map = null;
        this.posmarker = null;
        this.Memoinfo.Initialization = this.initializeMap();
    }
    MapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (pos) {
            console.log('lat1: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.setlat(+pos.coords.latitude);
            _this.setlon(+pos.coords.longitude);
            console.log('lat2: ' + _this.lat + ', lon: ' + _this.lon);
        });
    };
    MapPage.prototype.setlat = function (lat) {
        this.lat = lat;
    };
    MapPage.prototype.getlat = function () {
        console.log('lat3: ' + this.lat.toString());
    };
    MapPage.prototype.setlon = function (lon) {
        this.lon = lon;
    };
    MapPage.prototype.getlon = function () {
        console.log('lon3: ' + this.lon);
    };
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initializeMap();
        });
    };
    MapPage.prototype.initializeMap = function () {
        var _this = this;
        var minZoomLevel = 3;
        this.geolocation.getCurrentPosition().then(function (pos) {
            console.log('lat1: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.setlat(+pos.coords.latitude);
            _this.setlon(+pos.coords.longitude);
            console.log('lat3: ' + _this.lat + ', lon: ' + _this.lon);
            _this.map = new google.maps.Map(document.getElementById('map_canvas'), {
                zoom: minZoomLevel,
                minZoom: 17,
                maxZoom: 19,
                center: new google.maps.LatLng(_this.lat, _this.lon),
                mapTypeControl: true,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControl: false,
                overviewMapControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var mylatlng = { lat: _this.lat, lng: _this.lon };
            var MyPosIcon = 'https://cdn2.iconfinder.com/data/icons/snipicons/500/';
            var MemoPosIcon = 'https://cdn.pixabay.com/photo/2013/07/13/01/09/map-155198_960_720.png';
            var icons = {
                me: {
                    icon: MyPosIcon + 'map-marker-48.png'
                },
                memo: {
                    icon: MemoPosIcon
                }
            };
            _this.posmarker = new google.maps.Marker({
                position: mylatlng,
                map: _this.map,
                title: 'Your Position',
                icon: icons.me.icon
            });
        });
    };
    MapPage.prototype.addMemo = function () {
        this.Memoinfo.map = this.map;
        this.Memoinfo.lat = this.lat;
        this.Memoinfo.lng = this.lon;
        this.Memoinfo.latlng = { lat: this.lat, lng: this.lon };
        this.Memoinfo.memoicon = 'https://cdn0.iconfinder.com/data/icons/mtt-web-icons/139/microphone-48.png';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_memo_add_memo__["a" /* AddMemoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('Nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MapPage.prototype, "nav", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content no-border="true">\n\n  <div id="map_canvas"></div>\n\n      <button ion-fab strong (click)="addMemo()" id="addBtn"><ion-icon name="md-add-circle"></ion-icon></button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__add_memo_services_addMemo__["a" /* AddMemo */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-memo/add-memo.module": [
		961,
		5
	],
	"../pages/chats/chats.module": [
		962,
		4
	],
	"../pages/edit-memo/edit-memo.module": [
		963,
		2
	],
	"../pages/login/login.module": [
		964,
		1
	],
	"../pages/map/map.module": [
		965,
		3
	],
	"../pages/register/register.module": [
		966,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_memo_services_addMemo__ = __webpack_require__(82);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, memos) {
        this.navCtrl = navCtrl;
        this.memos = memos;
        this.memos$ = this.memos
            .getMemoList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Deine Memos:\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of memos$ | async"\n\n    detail-push navPush="EditMemoPage" [navParams]="{item: item}">\n\n      {{item.name}}<p style="color: darkgray; float: right">[Touch to edit]</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__add_memo_services_addMemo__["a" /* AddMemo */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="ios-pin-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Chats" tabIcon="ios-chatbubbles-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(582);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_firebase_config__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_memo_services_addMemo__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_memo_add_memo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_media__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_memo_add_memo__["a" /* AddMemoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-memo/add-memo.module#AddMemoPageModule', name: 'AddMemoPage', segment: 'add-memo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-memo/edit-memo.module#EditMemoPageModule', name: 'EditMemoPage', segment: 'edit-memo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_memo_add_memo__["a" /* AddMemoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_memo_services_addMemo__["a" /* AddMemo */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_memo_add_memo__["a" /* AddMemoPage */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* NgModel */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_media__["a" /* Media */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AudioRecorder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioRecorderState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_native__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AudioRecorder = (function () {
    function AudioRecorder() {
        this.mediaPlugin = null;
        this.state = AudioRecorderState.Ready;
    }
    Object.defineProperty(AudioRecorder.prototype, "MediaPlugin", {
        get: function () {
            if (this.mediaPlugin == null) {
                this.mediaPlugin = new __WEBPACK_IMPORTED_MODULE_0_ionic_native__["a" /* MediaPlugin */]('../Recs/recording.wav');
            }
            return this.mediaPlugin;
        },
        enumerable: true,
        configurable: true
    });
    AudioRecorder.prototype.startRecording = function () {
        this.MediaPlugin.startRecord();
        this.state = AudioRecorderState.Recording;
    };
    AudioRecorder.prototype.stopRecording = function () {
        this.MediaPlugin.stopRecord();
        this.state = AudioRecorderState.Recorded;
    };
    AudioRecorder.prototype.startPlayback = function () {
        this.MediaPlugin.play();
        this.state = AudioRecorderState.Playing;
    };
    AudioRecorder.prototype.stopPlayback = function () {
        this.MediaPlugin.stop();
        this.state = AudioRecorderState.Ready;
    };
    AudioRecorder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], AudioRecorder);
    return AudioRecorder;
}());

var AudioRecorderState;
(function (AudioRecorderState) {
    AudioRecorderState[AudioRecorderState["Ready"] = 0] = "Ready";
    AudioRecorderState[AudioRecorderState["Recording"] = 1] = "Recording";
    AudioRecorderState[AudioRecorderState["Recorded"] = 2] = "Recorded";
    AudioRecorderState[AudioRecorderState["Playing"] = 3] = "Playing";
})(AudioRecorderState || (AudioRecorderState = {}));
//# sourceMappingURL=audiorecorder.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMemo = (function () {
    function AddMemo(alertCtrl, Auth, db) {
        this.alertCtrl = alertCtrl;
        this.Auth = Auth;
        this.db = db;
        this.memoListRef = this.db.list('/memos/');
        this.userId = this.Auth.auth.currentUser;
    }
    AddMemo.prototype.getMemoList = function () {
        return this.memoListRef;
    };
    AddMemo.prototype.addMemoData = function (memoitem) {
        return this.memoListRef.push(memoitem);
    };
    AddMemo.prototype.editMemoData = function (memoitem) {
        return this.memoListRef.update(memoitem.key, memoitem);
    };
    AddMemo.prototype.removeMemoData = function (memoitem) {
        return this.memoListRef.remove(memoitem.key);
    };
    AddMemo.prototype.removeMarker = function (memoitem) {
        if (this.content = memoitem.name) {
            this.marker.setMap(null);
        }
    };
    AddMemo.prototype.getInitialization = function () {
        return this.Initialization;
    };
    AddMemo.prototype.addMemoMarker = function () {
        this.marker = new google.maps.Marker({
            position: this.latlng,
            map: this.map,
            title: this.content,
            icon: this.memoicon
        });
        this.marker.setMap(Map);
    };
    AddMemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddMemo);
    return AddMemo;
}());

//# sourceMappingURL=addMemo.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(575);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\olive\OneDrive\Dokumente\GitHub\M335\Memap_M335\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBOLsDXxEZDPMk7rd-MoBaFbYgFczuSqw0",
    authDomain: "m355-bcb58.firebaseapp.com",
    databaseURL: "https://m355-bcb58.firebaseio.com",
    projectId: "m355-bcb58",
    storageBucket: "m355-bcb58.appspot.com",
    messagingSenderId: "100690286689"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[577]);
//# sourceMappingURL=main.js.map