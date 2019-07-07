(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["youtube-youtube-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube/search-box/search-box.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube/search-box/search-box.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube/search-result/search-result.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube/search-result/search-result.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-4\">\r\n  <div class=\"thumbnail\">\r\n    <img src=\"{{result.thumbnailUrl}}\">\r\n    <div class=\"caption\">\r\n      <h4>{{result.title}}</h4>\r\n      <p>{{result.description}}</p>\r\n      <p><a href=\"{{result.videoUrl}}\" class=\"btn btn-default\" role=\"button\">\r\n          Watch</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube/youtube.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube/youtube.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n    <div class=\"page-header\">\r\n      <h2>YouTube Search\r\n        <img style=\"float: right;\" *ngIf=\"loading\" src='assets/images/loading.gif' />\r\n      </h2>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"input-group input-group-lg col-sm-8 col-md-8\">\r\n        <app-search-box (loading)=\"loading = $event\" (results)=\"updateResults($event)\"></app-search-box>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\" style=\"margin-top:20px\">\r\n      <p>{{message}}</p>\r\n      <app-search-result *ngFor=\"let result of results\" [result]=\"result\"></app-search-result>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/youtube/search-box/search-box.component.css":
/*!*************************************************************!*\
  !*** ./src/app/youtube/search-box/search-box.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube/search-box/search-box.component.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube/search-box/search-box.component.ts ***!
  \************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/youtube-search.service */ "./src/app/youtube/services/youtube-search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.results = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // convert the `keyup` event into an observable stream
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.el.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return e.target.value; }), // extract the value of the input
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (text) { return text.length > 1; }), // filter out if empty
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), // only once every 500ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loading.emit(true); }), // enable loading
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (query) { return _this.youtube.search(query); }), // search
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])()) // produces values only from the most recent inner sequence ignoring previous streams
            .subscribe(// act on the return of the search
        function (// act on the return of the search
        _results) {
            _this.loading.emit(false);
            _this.results.emit(_results);
        }, function (err) {
            console.log(err);
            _this.loading.emit(false);
        }, function () {
            _this.loading.emit(false);
        });
    };
    SearchBoxComponent.ctorParameters = function () { return [
        { type: _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeSearchService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "results", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! raw-loader!./search-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/youtube/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/app/youtube/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [_services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeSearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/youtube/search-result/search-result.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/youtube/search-result/search-result.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube/search-result/search-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/youtube/search-result/search-result.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_detail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-detail.model */ "./src/app/youtube/video-detail.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _video_detail_model__WEBPACK_IMPORTED_MODULE_1__["VideoDetail"])
    ], SearchResultComponent.prototype, "result", void 0);
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/youtube/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/youtube/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/youtube/services/youtube-search.service.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube/services/youtube-search.service.ts ***!
  \************************************************************/
/*! exports provided: YoutubeSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchService", function() { return YoutubeSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _video_detail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-detail.model */ "./src/app/youtube/video-detail.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YOUTUBE_API_KEY = 'AIzaSyAcEUFKgpeNzePlZTF7WYulD7rC5gE4-1U';
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var YoutubeSearchService = /** @class */ (function () {
    function YoutubeSearchService(http) {
        this.http = http;
    }
    YoutubeSearchService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + YOUTUBE_API_KEY,
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = YOUTUBE_API_URL + "?" + params;
        return this.http.get(queryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response['items'].map(function (item) {
                return new _video_detail_model__WEBPACK_IMPORTED_MODULE_3__["VideoDetail"]({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        }));
    };
    YoutubeSearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    YoutubeSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YoutubeSearchService);
    return YoutubeSearchService;
}());



/***/ }),

/***/ "./src/app/youtube/video-detail.model.ts":
/*!***********************************************!*\
  !*** ./src/app/youtube/video-detail.model.ts ***!
  \***********************************************/
/*! exports provided: VideoDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetail", function() { return VideoDetail; });
var VideoDetail = /** @class */ (function () {
    function VideoDetail(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    VideoDetail.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return VideoDetail;
}());



/***/ }),

/***/ "./src/app/youtube/youtube-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/youtube/youtube-routing.module.ts ***!
  \***************************************************/
/*! exports provided: YoutubeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeRoutingModule", function() { return YoutubeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube.component */ "./src/app/youtube/youtube.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _youtube_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeComponent"] }
];
var YoutubeRoutingModule = /** @class */ (function () {
    function YoutubeRoutingModule() {
    }
    YoutubeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], YoutubeRoutingModule);
    return YoutubeRoutingModule;
}());



/***/ }),

/***/ "./src/app/youtube/youtube.component.css":
/*!***********************************************!*\
  !*** ./src/app/youtube/youtube.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUveW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/youtube/youtube.component.ts":
/*!**********************************************!*\
  !*** ./src/app/youtube/youtube.component.ts ***!
  \**********************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent() {
        this.message = '';
    }
    YoutubeComponent.prototype.updateResults = function (results) {
        this.results = results;
        if (this.results.length === 0) {
            this.message = 'Not found...';
        }
        else {
            this.message = 'Top 10 results:';
        }
    };
    YoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! raw-loader!./youtube.component.html */ "./node_modules/raw-loader/index.js!./src/app/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.css */ "./src/app/youtube/youtube.component.css")]
        })
    ], YoutubeComponent);
    return YoutubeComponent;
}());



/***/ }),

/***/ "./src/app/youtube/youtube.module.ts":
/*!*******************************************!*\
  !*** ./src/app/youtube/youtube.module.ts ***!
  \*******************************************/
/*! exports provided: YoutubeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return YoutubeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _youtube_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-routing.module */ "./src/app/youtube/youtube-routing.module.ts");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/youtube/search-box/search-box.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/youtube/search-result/search-result.component.ts");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube.component */ "./src/app/youtube/youtube.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var YoutubeModule = /** @class */ (function () {
    function YoutubeModule() {
    }
    YoutubeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeComponent"],
                _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"],
                _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _youtube_routing_module__WEBPACK_IMPORTED_MODULE_2__["YoutubeRoutingModule"]
            ],
            exports: [_youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeComponent"]]
        })
    ], YoutubeModule);
    return YoutubeModule;
}());



/***/ })

}]);
//# sourceMappingURL=youtube-youtube-module.js.map