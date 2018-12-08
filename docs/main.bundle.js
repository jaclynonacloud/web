webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_components/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"content\">\r\n    <app-search></app-search>\r\n    <app-projects></app-projects>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/main-page/main-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container, .main, app-sidebar, .content, app-projects {\n  display: -ms-flexbox;\n  display: flex; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\napp-sidebar {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 15vw;\n  min-width: 250px;\n  max-width: 400px;\n  max-height: 100%;\n  padding: 5px;\n  box-sizing: border-box; }\n  @media screen and (max-width: 768px) {\n    app-sidebar {\n      position: relative;\n      -ms-flex-pack: center;\n          justify-content: center;\n      width: 100%;\n      height: 100vh;\n      padding: 0;\n      margin: auto;\n      max-width: unset; }\n      app-sidebar .btnNext {\n        position: relative;\n        bottom: 10px;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: center;\n            align-items: center;\n        margin-top: 15px;\n        background: grey;\n        content: \"\\23F7\";\n        width: 50px;\n        height: 50px;\n        color: #1b1b1b;\n        font-size: 1.3em;\n        border-radius: 50%; }\n        app-sidebar .btnNext:hover {\n          background: #B45569; } }\n  @media screen and (max-width: 500px) {\n    app-sidebar {\n      height: 100vh; } }\n\n.content {\n  position: relative;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  height: 100vh;\n  overflow: hidden; }\n\napp-projects {\n  -ms-flex: 1;\n      flex: 1;\n  background: #D4D4D4;\n  overflow: auto;\n  margin-top: 5px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  -ms-flex-flow: column;\n      flex-flow: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/_components/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/nav-header/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n  <a [routerLink]=\"['']\">\r\n    <div class=\"icon\">\r\n      <img class=\"icon__image\" src=\"./../../assets/images/icon.png\" alt=\"icon\">\r\n    </div>\r\n  </a>\r\n  <div class=\"brand\">\r\n    <!-- jaclynonacloud -->\r\n  </div>\r\n  <app-search></app-search>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/nav-header/nav-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container, .main, .nav {\n  display: -ms-flexbox;\n  display: flex; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\n.nav {\n  position: relative;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  background: #6E6387;\n  width: 100%;\n  padding: 5px 0;\n  border-bottom: solid 6px #4A4762; }\n  .nav .icon {\n    position: relative;\n    top: 45px;\n    left: 5px;\n    background: #4A4762;\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    margin: 0 10px;\n    margin-top: -45px; }\n    .nav .icon img {\n      width: 85px;\n      height: 85px;\n      margin: -6px -3px; }\n  .nav .brand {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    color: white;\n    font-size: 1.2em; }\n  .nav app-search {\n    -ms-flex: 1;\n        flex: 1;\n    justify-self: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/nav-header/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent() {
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
    };
    NavHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-nav-header',
            template: __webpack_require__("../../../../../src/app/_components/nav-header/nav-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/nav-header/nav-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());

//# sourceMappingURL=nav-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/project-page/project-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-nav-header></app-nav-header>\r\n    <div class=\"main\">\r\n        <div class=\"project-modal\" *ngIf=\"project\">\r\n        <!-- <div class=\"project-modal\" *ngIf=\"jcloudData.ActiveProject\"> -->\r\n            <ul class=\"breadcrumbs\">\r\n            <a [routerLink]=\"['']\">jaclynonacloud</a><span>&gt;</span><span [innerHTML]=\"project.name\"></span>\r\n            </ul>\r\n            <header>\r\n                <h2 class=\"name\" [innerHTML]=\"project.name\"></h2>\r\n            </header>\r\n            <div class=\"display-image\">\r\n                <img src=\"/assets/images/projects/link-forest/cover.png\" alt=\"display image\">\r\n            </div>\r\n            <section class=\"information\">\r\n                <div class=\"information__links\" *ngIf=\"project.socials\">\r\n                    <div *ngFor=\"let soc of project.socials\">\r\n                        <a [href]=\"soc.link\" [innerHTML]=\"soc.name\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"information__content\">\r\n                    <div class=\"description\" [innerHTML]=\"project.description\"></div>\r\n\r\n                    <aside class=\"details\" *ngIf=\"project.details\">\r\n                        <h2 class=\"details__title\">Details</h2>\r\n                        <div *ngFor=\"let det of project.details\">\r\n                            <span *ngFor=\"let key of _objKeys(det)\">\r\n                                <span class=\"key\" [innerHTML]=\"key\"></span>\r\n                                <span [innerHTML]=\"(_isArray(det[key])) ? det[key].join(', ') : det[key]\"></span>\r\n                            </span>\r\n                        </div>\r\n                    </aside>\r\n                </div>\r\n            </section>\r\n\r\n            <div class=\"screenshots\" *ngIf=\"project.screenshots\">\r\n                <div class=\"screenshot\" *ngFor=\"let image of project.screenshots\" (click)=\"showImage(image)\">\r\n                    <img class=\"screenshot__image\" [src]=\"image\" alt=\"screenshot\">\r\n                </div>\r\n            </div>\r\n        <!-- </div> -->\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Lightbox -->\r\n<div class=\"lightbox\" *ngIf=\"isLightboxOpen\">\r\n    <div class=\"lightbox__wrapper\" *ngFor=\"let image of project.screenshots\">\r\n        <div class=\"lightbox__item\" (click)=\"hideLightbox()\">        \r\n            <img class=\"lightbox__image\" [src]=\"image\" alt=\"project image\" *ngIf=\"getLightboxIndex(image) == lightboxIndex\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Lightbox -->"

/***/ }),

/***/ "../../../../../src/app/_components/project-page/project-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-modal .information__links a, .container, .main, .project-modal .information__content .details, .lightbox__item {\n  display: -ms-flexbox;\n  display: flex; }\n\n.project-modal .information__links a {\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\n.project-modal {\n  -ms-flex: 1;\n      flex: 1;\n  max-width: calc(100% - 200px);\n  margin: 0 auto; }\n  @media screen and (max-width: 768px) {\n    .project-modal {\n      max-width: unset;\n      width: calc(100% - 10px); } }\n  @media screen and (max-width: 500px) {\n    .project-modal {\n      max-width: unset;\n      width: 100%;\n      padding: 0 5px;\n      box-sizing: border-box; } }\n  .project-modal .breadcrumbs {\n    padding: 0; }\n    @media screen and (max-width: 768px) {\n      .project-modal .breadcrumbs {\n        padding-left: 110px; } }\n    .project-modal .breadcrumbs > * {\n      padding-right: 3px; }\n  .project-modal header {\n    padding: 5px 0; }\n    .project-modal header .name {\n      font-weight: normal;\n      font-size: 1.8em; }\n  .project-modal .display-image {\n    background: #595959;\n    width: 100%;\n    height: 275px; }\n    .project-modal .display-image img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: top;\n         object-position: top; }\n  .project-modal .information {\n    padding: 20px 0; }\n    .project-modal .information__links {\n      display: -ms-grid;\n      display: grid;\n      grid-auto-flow: column;\n      grid-gap: 5px;\n      padding: 5px 0;\n      padding-top: 0; }\n      @media screen and (max-width: 500px) {\n        .project-modal .information__links {\n          grid-auto-flow: row;\n          min-width: -webkit-max-content;\n          min-width: -moz-max-content;\n          min-width: max-content;\n          width: 80%;\n          margin: 0 auto; } }\n      .project-modal .information__links a {\n        background: #4A4762;\n        width: 100%;\n        min-height: 25px;\n        color: white;\n        transition: ease border-radius 0.25s; }\n        .project-modal .information__links a:hover {\n          background: #6E6387;\n          border-radius: 8px; }\n    .project-modal .information__content {\n      display: -ms-grid;\n      display: grid;\n      grid-auto-flow: column;\n      -ms-grid-columns: (1fr)[6];\n          grid-template-columns: repeat(6, 1fr); }\n      @media screen and (max-width: 768px) {\n        .project-modal .information__content {\n          -ms-grid-columns: unset;\n              grid-template-columns: unset;\n          grid-auto-flow: row; }\n          .project-modal .information__content > * {\n            -ms-grid-row: span 1 !important;\n                grid-row: span 1 !important;\n            -ms-grid-column: span 1 !important;\n                grid-column: span 1 !important; } }\n      .project-modal .information__content .description {\n        -ms-grid-column: span 4;\n            grid-column: span 4;\n        padding: 5px;\n        padding-left: 0;\n        box-sizing: border-box; }\n        @media screen and (max-width: 768px) {\n          .project-modal .information__content .description {\n            padding-left: 5px; } }\n      .project-modal .information__content .details {\n        -ms-grid-column: span 2;\n            grid-column: span 2;\n        background: #C9C9C9;\n        -ms-flex-flow: column;\n            flex-flow: column;\n        padding: 10px;\n        color: #494949;\n        box-sizing: border-box; }\n        .project-modal .information__content .details__title {\n          margin-bottom: 10px;\n          color: black;\n          font-weight: normal;\n          border-bottom: solid 1px #A7A7A7; }\n        .project-modal .information__content .details span {\n          padding-right: 3px;\n          word-break: break-all; }\n        .project-modal .information__content .details .key {\n          color: black; }\n          .project-modal .information__content .details .key::after {\n            content: ':'; }\n  .project-modal .screenshots {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: 175px;\n    grid-gap: 5px;\n    padding-bottom: 5px; }\n    @media screen and (max-width: 768px) {\n      .project-modal .screenshots {\n        -ms-grid-columns: unset;\n            grid-template-columns: unset;\n        -ms-grid-row: span 1 !important;\n            grid-row: span 1 !important;\n        -ms-grid-column: span 1 !important;\n            grid-column: span 1 !important; } }\n    .project-modal .screenshots .screenshot {\n      background: #595959;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      opacity: 0.95;\n      cursor: pointer; }\n      .project-modal .screenshots .screenshot:hover {\n        opacity: 1; }\n        .project-modal .screenshots .screenshot:hover .screenshot__image {\n          transform: scale(1.1); }\n      .project-modal .screenshots .screenshot__image {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: contain;\n           object-fit: contain;\n        transition: transform ease 0.3s; }\n\n.lightbox {\n  background: rgba(0, 0, 0, 0.95);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer; }\n  .lightbox__wrapper {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n  .lightbox__item {\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n    margin: auto;\n    box-sizing: border-box; }\n  .lightbox__image {\n    max-width: 100%;\n    max-height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    -o-object-position: center;\n       object-position: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/project-page/project-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__ = __webpack_require__("../../../../../src/app/_services/jcloud-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPageComponent = /** @class */ (function () {
    function ProjectPageComponent(jcloudData, _route) {
        this.jcloudData = jcloudData;
        this._route = _route;
        this.isLightboxOpen = false;
        this.project = null;
        this._objKeys = Object.keys;
        this._isArray = Array.isArray;
        //gallery
        this.lightboxIndex = 0;
    }
    ProjectPageComponent.prototype.ngOnInit = function () {
        //testing
        // this.screenshots = [
        //   '/assets/images/projects/link-forest/1.png', 
        //   '/assets/images/projects/link-forest/2.png',
        //   '/assets/images/projects/link-forest/3.png',
        //   '/assets/images/projects/link-forest/4.png',
        //   '/assets/images/projects/link-forest/4.png',
        //   '/assets/images/projects/link-forest/5.png',
        //   '/assets/images/projects/link-forest/6.png',
        //   '/assets/images/projects/link-forest/7.png',
        //   '/assets/images/projects/link-forest/8.png',
        //   '/assets/images/projects/link-forest/9.png'
        // ];
        var _this = this;
        //get project details
        this._route.params.subscribe(function (data) {
            var name = data.name;
            console.log(name);
            //wait for project data to load
            _this.jcloudData.wait()
                .then(function () {
                console.log(_this.jcloudData.Projects);
                _this.project = _this.jcloudData.Projects.filter(function (p) { return p.name == name; })[0];
                console.log(_this.project);
            });
        }, function (error) {
        });
    };
    /*--------------------------------- LIFECYCLE HOOKS ----------------------*/
    /*--------------------------------- METHODS ------------------------------*/
    ProjectPageComponent.prototype.showLightbox = function () {
        this.isLightboxOpen = true;
    };
    ProjectPageComponent.prototype.hideLightbox = function () {
        this.isLightboxOpen = false;
    };
    ProjectPageComponent.prototype.getLightboxIndex = function (src) {
        var index = this.project.screenshots.indexOf(src);
        return index;
    };
    /*--------------------------------- ABSTRACTS ----------------------------*/
    /*--------------------------------- EVENTS -------------------------------*/
    ProjectPageComponent.prototype.showImage = function (src) {
        //find the index
        this.lightboxIndex = this.getLightboxIndex(src);
        if (this.lightboxIndex == -1)
            this.lightboxIndex = 0;
        this.lightboxIndex = this.lightboxIndex;
        this.showLightbox();
    };
    ProjectPageComponent.prototype.handleKeyboardEvent = function (event) {
        if (this.isLightboxOpen && this.project.screenshots) {
            if (event.key == "ArrowLeft") {
                this.lightboxIndex = (this.lightboxIndex - 1 >= 0) ? this.lightboxIndex - 1 : this.project.screenshots.length - 1;
                this.showImage(this.project.screenshots[this.lightboxIndex]);
            }
            if (event.key == "ArrowRight") {
                this.lightboxIndex = (this.lightboxIndex + 1 <= this.project.screenshots.length - 1) ? this.lightboxIndex + 1 : 0;
                this.showImage(this.project.screenshots[this.lightboxIndex]);
            }
            // console.log("INDEX: " + this._index);
            // //this.key = event.key;
            // console.log(event.key);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProjectPageComponent.prototype, "handleKeyboardEvent", null);
    ProjectPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-project-page',
            template: __webpack_require__("../../../../../src/app/_components/project-page/project-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/project-page/project-page.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ProjectPageComponent);
    return ProjectPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=project-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects\">\r\n    <!-- PROJECT -->\r\n    <!-- <div class=\"project\" *ngFor=\"let proj of jcloudData.Showcases\"> -->\r\n    <!-- <div class=\"project\" *ngFor=\"let proj of [{name:'hello'}, {name:'hi'}, {name:'hello'}, {name:'hi'}, {name:'yes'}, {name:'hello'}, {name:'hi'}, {name:'yes'}, {name:'hello'}, {name:'hi'}, {name:'yes'}, {name:'hello'}, {name:'hi'}, {name:'yes'}, {name:'hello'}, {name:'hi'}, {name:'yes'}, {name:'hello'}, {name:'hi'}, {name:'yes'}]\">\r\n        <div class=\"image-container\">\r\n            <img class=\"project__image image\" src=\"https://dummyimage.com/600x400/000/fff.png\" [alt]=\"proj.name\" *ngIf=\"proj.imageSrc\"> -->\r\n            <!-- <img class=\"project__image image\" src=\"./assets/images/projects/{{ proj.imageSrc }}\" [alt]=\"proj.name\" *ngIf=\"proj.imageSrc\"> -->\r\n        <!-- </div> -->\r\n    <!-- </div> -->\r\n    <!-- /PROJECT -->\r\n    <!-- <div class=\"project project--lg\">\r\n        <div class=\"project__image-container\">\r\n            <img class=\"project__image\" src=\"/assets/images/projects/link-forest/cover.png\" alt=\"#\">\r\n        </div>\r\n        <div class=\"project__content\">Project Name</div>\r\n    </div>\r\n    <div class=\"project project--sm\"></div>\r\n    <div class=\"project project--sm\"></div>\r\n    <div class=\"project project--sm\"></div>\r\n    <div class=\"project project--long\"></div>\r\n    <div class=\"project project--sm\"></div> -->\r\n\r\n\r\n\r\n    <!-- Featured only set to include 6 projects -->\r\n    <div class=\"project\" *ngFor=\"let proj of jcloudData.Showcases\">\r\n        <a [routerLink]=\"['project', proj.name]\">\r\n            <div class=\"project__image-container\">\r\n                <img class=\"project__image\" [src]=\"proj.cover\" alt=\"image\">\r\n            </div>\r\n            <div class=\"project__content\" [innerHTML]=\"proj.name\"></div>\r\n        </a>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- Separator -->\r\n<div class=\"separator\">\r\n    <h3>More</h3>\r\n</div>\r\n<!-- /Separator -->"

/***/ }),

/***/ "../../../../../src/app/_components/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container, .main, .projects .project__content {\n  display: -ms-flexbox;\n  display: flex; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\n.separator {\n  background: #4A4762;\n  width: 35%;\n  color: white;\n  padding: 5px 0;\n  margin: 5px auto;\n  text-align: center; }\n  .separator::after {\n    content: '';\n    background: #6E6387;\n    width: 400px;\n    height: 30px; }\n\n.projects {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[5];\n      grid-template-columns: repeat(5, 1fr);\n  grid-gap: 5px;\n  width: 100%;\n  padding: 0 5px;\n  box-sizing: border-box; }\n  @media screen and (max-width: 768px) {\n    .projects {\n      padding: 5px;\n      max-height: 300px;\n      -ms-grid-columns: (1fr)[1];\n          grid-template-columns: repeat(1, 1fr); } }\n  .projects .project {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: #595959; }\n    .projects .project__image-container {\n      width: 100%;\n      height: 100%; }\n    .projects .project__image {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center;\n         object-position: center; }\n    .projects .project:hover .project__content {\n      opacity: 0.8; }\n    .projects .project__content {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      -ms-flex-align: center;\n          align-items: center;\n      background: linear-gradient(to top, black 80%, rgba(0, 0, 0, 0));\n      min-height: 40px;\n      padding: 10px;\n      font-size: 1.3em;\n      color: white;\n      opacity: 0;\n      cursor: pointer;\n      transition: opacity ease 0.3s; }\n    .projects .project:nth-child(1) {\n      -ms-grid-row: span 4;\n          grid-row: span 4;\n      -ms-grid-column: span 3;\n          grid-column: span 3; }\n    .projects .project:nth-child(2), .projects .project:nth-child(3), .projects .project:nth-child(4), .projects .project:nth-child(6) {\n      -ms-grid-row: span 2;\n          grid-row: span 2;\n      -ms-grid-column: span 2;\n          grid-column: span 2; }\n    .projects .project:nth-child(5) {\n      -ms-grid-row: span 2;\n          grid-row: span 2;\n      -ms-grid-column: span 1;\n          grid-column: span 1; }\n    @media screen and (max-width: 768px) {\n      .projects .project {\n        -ms-grid-row: span 1 !important;\n            grid-row: span 1 !important;\n        -ms-grid-column: span 1 !important;\n            grid-column: span 1 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__ = __webpack_require__("../../../../../src/app/_services/jcloud-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(jcloudData) {
        this.jcloudData = jcloudData;
    }
    /*----------------------- LIFECYCLE HOOKS --------------------*/
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/_components/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */]) === "function" && _a || Object])
    ], ProjectsComponent);
    return ProjectsComponent;
    var _a;
}());

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Search -->\r\n<nav class=\"search cap-front\">\r\n  <label class=\"check-group\">\r\n    <input class=\"check\" type=\"checkbox\" checked>\r\n    <div class=\"search-group\">\r\n      <input class=\"search__input\" type=\"text\" placeholder=\"Search Projects...\">\r\n      <div class=\"cap-back\">\r\n        <select class=\"search__select\" id=\"search-select\">\r\n          <option value=\"\">All</option>\r\n          <option value=\"web\">Web Apps</option>\r\n          <option value=\"game\">Games</option>\r\n          <option value=\"3d\">3D Models</option>\r\n        </select>\r\n        <button class=\"search__submit-button\">Search</button>\r\n      </div>\r\n    </div>\r\n  </label>\r\n</nav>\r\n<!-- /Search -->"

/***/ }),

/***/ "../../../../../src/app/_components/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container, .main, .navigation .list, .search .search-group {\n  display: -ms-flexbox;\n  display: flex; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\n.navigation .list {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  padding: 5px 15px;\n  margin: 0;\n  text-align: center; }\n  .navigation .list__item {\n    background: #4A4762;\n    padding: 4px 5px;\n    margin: 2px 5px;\n    color: white;\n    font-size: 1.1em;\n    list-style: none;\n    -webkit-clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);\n    clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);\n    cursor: pointer; }\n    .navigation .list__item:hover {\n      background: #5f4a63; }\n    .navigation .list__item.selected {\n      background: #B45569; }\n\n.search {\n  position: relative;\n  padding-bottom: 40px;\n  overflow: hidden; }\n  .search .search-group {\n    position: absolute;\n    left: calc(100% - 110px);\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    margin: 5px 0;\n    padding: 0 10px;\n    box-sizing: border-box;\n    transition: left ease 0.5s; }\n    @media screen and (max-width: 500px) {\n      .search .search-group {\n        left: calc(100% - 40px);\n        padding: 0; } }\n  @media screen and (max-width: 768px) {\n    .search {\n      font-size: 0.8em; } }\n  .search__input {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 9px 15px;\n    margin: 0;\n    border: none;\n    border-radius: 15px 0 0 15px; }\n    .search__input:-ms-input-placeholder {\n      color: #908a9f; }\n    .search__input::placeholder {\n      color: #908a9f; }\n  .search__button {\n    background: #e2e1e4 url(" + escape(__webpack_require__("../../../../../src/assets/images/search-16.png")) + ") no-repeat 6px 4px;\n    padding: 0 12px;\n    padding-left: 28px;\n    height: 24px;\n    margin: 0;\n    color: #4A4762;\n    border-radius: 16px;\n    line-height: 24px;\n    cursor: pointer; }\n    .search__button::after {\n      content: \"Search\"; }\n    @media screen and (max-width: 500px) {\n      .search__button {\n        padding-left: 14px; }\n        .search__button::after {\n          content: \"\"; } }\n  .search__submit-button {\n    background: #CEC5E3;\n    padding: 5px 15px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer; }\n    .search__submit-button:hover {\n      background: #b9b1cc; }\n    @media screen and (max-width: 500px) {\n      .search__submit-button {\n        display: none; } }\n  .search__select {\n    background: white;\n    font-family: 'Quicksand', sans-serif;\n    padding: 4px;\n    margin-right: 5px;\n    border: none;\n    border-radius: 15px;\n    cursor: pointer; }\n    @media screen and (max-width: 500px) {\n      .search__select {\n        padding: 4px 0; } }\n  .search .cap-front {\n    background: white;\n    padding: 5px 5px;\n    border-radius: 15px 0 0 15px; }\n  .search .cap-back {\n    background: white;\n    padding: 4px 5px;\n    border-radius: 0 15px 15px 0; }\n    @media screen and (max-width: 500px) {\n      .search .cap-back label {\n        display: none; } }\n  .search .check-group .check {\n    display: none; }\n  .search .check-group input:checked + div {\n    left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    /*----------------------- LIFECYCLE HOOKS --------------------*/
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/_components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <div class=\"color-box\"></div>\r\n  <div class=\"content\">\r\n    <div class=\"icon\">\r\n      <img class=\"icon__image\" src=\"./../../assets/images/icon.png\" alt=\"icon\">\r\n    </div>\r\n    <div class=\"sidebar__details\">\r\n      <span class=\"name\">Jaclyn Staples</span>\r\n      <span class=\"nick\">jaclynonacloud</span>\r\n    </div>\r\n    <div class=\"sidebar__links\">\r\n      <a href=\"http://github.com/jaclynonacloud\">Github</a>\r\n      <a href=\"https://www.linkedin.com/in/jaclynstaples/\">Linkedin</a>\r\n      <a href=\"https://discord.gg/eHePQhr\">Discord</a>\r\n      <a href=\"http://twitter.com/jaclynonacloud\">Twitter</a>\r\n      <a href=\"http://deviantart.com/jaclynonacloud\">Deviantart</a>\r\n      <a href=\"mailto:jaclynonacloud@gmail.com\">Email</a>\r\n    </div>\r\n    <div class=\"sidebar__links usernames\">\r\n      <b>Usernames</b>\r\n      <div>Discord : jaclynonacloud#8732</div>\r\n    </div>\r\n    <div class=\"sidebar__links about\">\r\n      <span>Web Developer</span>\r\n      <span>Nova Scotia, Canada</span>\r\n      <small>Last updated: November 19, 2018</small>\r\n    </div>\r\n    <!-- <div class=\"btnNext\">&#9207;</div> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar .icon, .sidebar__details, .sidebar__links a, .container, .main, .sidebar__links {\n  display: -ms-flexbox;\n  display: flex; }\n\n.sidebar .icon, .sidebar__details, .sidebar__links a {\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n\n.sidebar {\n  position: relative;\n  width: 100%; }\n  .sidebar .color-box {\n    position: absolute;\n    background: #6E6387;\n    width: 100%;\n    height: 15vw; }\n    @media screen and (max-width: 768px) {\n      .sidebar .color-box {\n        top: -45vw;\n        height: 66vw; } }\n  .sidebar .content {\n    position: relative;\n    top: calc(15vw / 2); }\n    @media screen and (max-width: 768px) {\n      .sidebar .content {\n        top: 0; } }\n  .sidebar .icon {\n    position: relative;\n    background: #4A4762;\n    max-width: 15vw;\n    padding-top: 15vw;\n    height: 0;\n    margin: 0 auto 10px auto;\n    border-radius: 50%; }\n    @media screen and (max-width: 768px) {\n      .sidebar .icon {\n        max-width: 45vw;\n        padding-top: 45vw;\n        margin: 0 auto; } }\n    .sidebar .icon__image {\n      position: relative;\n      top: -8vw;\n      width: 110%; }\n      @media screen and (max-width: 768px) {\n        .sidebar .icon__image {\n          top: -23.5vw; } }\n  .sidebar__details {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 10px; }\n    .sidebar__details .name {\n      font-size: 1.6em; }\n    .sidebar__details .nick {\n      font-size: 1.1em; }\n  .sidebar__links {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    margin: 0 auto; }\n    @media screen and (max-width: 768px) {\n      .sidebar__links {\n        max-width: 90%; } }\n    .sidebar__links a {\n      background: #4A4762;\n      width: 100%;\n      min-height: 25px;\n      margin: 3px 0;\n      color: white;\n      transition: ease border-radius 0.25s; }\n      .sidebar__links a:hover {\n        background: #6E6387;\n        border-radius: 8px; }\n    .sidebar__links.usernames {\n      margin-top: 15px;\n      text-align: center;\n      font-size: 0.8em; }\n    .sidebar__links.about {\n      margin-top: 25px;\n      font-size: 0.9em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    /*----------------------- LIFECYCLE HOOKS --------------------*/
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/_components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/_services/jcloud-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JcloudDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var JcloudDataService = /** @class */ (function () {
    function JcloudDataService(_http) {
        this._http = _http;
        this._onLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    JcloudDataService_1 = JcloudDataService;
    /*----------------------- LIFECYCLE HOOKS --------------------*/
    /*----------------------- METHODS ----------------------------*/
    JcloudDataService.prototype.load = function () {
        var _this = this;
        this._isLoaded = false;
        this._http.get(JcloudDataService_1.DATA_URL).subscribe(function (data) {
            console.log("DATA!");
            console.log(data);
            _this._project = data;
            _this._isLoaded = true;
            //get exposed projects
            // this._projects = this._project.projects.filter(proj => (this._project.showcase.indexOf(proj.name) == -1));
            _this._projects = data.projects;
            //get showcased projects
            _this._showcases = data.projects;
            // this._showcases = this._project.projects.filter(proj => !this._projects.includes(proj));
            _this._onLoaded.emit();
        }, function (error) {
            console.log("Could not load!\n" + error);
        });
    };
    JcloudDataService.prototype.wait = function () {
        var _this = this;
        if (this._projects != null)
            return Promise.resolve();
        return new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._onLoaded.subscribe(function () { return res(); }, function (error) { return rej(error); });
                return [2 /*return*/];
            });
        }); });
    };
    Object.defineProperty(JcloudDataService.prototype, "Projects", {
        /*----------------------- EVENTS -----------------------------*/
        /*----------------------- OVERRIDES --------------------------*/
        /*----------------------- GETS & SETS ------------------------*/
        get: function () { return this._projects; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JcloudDataService.prototype, "Showcases", {
        get: function () { return this._showcases; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JcloudDataService.prototype, "IsLoaded", {
        get: function () { return this._isLoaded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JcloudDataService.prototype, "ActiveProject", {
        get: function () { return this._activeProject; },
        enumerable: true,
        configurable: true
    });
    JcloudDataService.DATA_URL = "/assets/data/projects.json";
    JcloudDataService = JcloudDataService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], JcloudDataService);
    return JcloudDataService;
    var JcloudDataService_1, _a;
}());

//# sourceMappingURL=jcloud-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container, .main {\n  display: -ms-flexbox;\n  display: flex; }\n\n::-webkit-scrollbar {\n  position: relative;\n  width: 8px;\n  overflow: hidden; }\n\n::-webkit-scrollbar-track {\n  background: #9796a3; }\n\n::-webkit-scrollbar-thumb {\n  background: #4A4762; }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #3b394e; }\n\n.container {\n  -ms-flex-flow: column;\n      flex-flow: column;\n  width: 80vw;\n  max-width: 1600px;\n  min-height: 100vh;\n  margin: auto; }\n  @media screen and (max-width: 500px) {\n    .container {\n      width: 100vw; } }\n\n.main {\n  -ms-flex: 1;\n      flex: 1;\n  background: #e4e4e4;\n  width: 80vw;\n  max-width: 1600px;\n  height: 100%;\n  margin: auto; }\n  @media screen and (max-width: 768px) {\n    .main {\n      -ms-flex-flow: column;\n          flex-flow: column; } }\n  @media screen and (max-width: 500px) {\n    .main {\n      width: 100vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__ = __webpack_require__("../../../../../src/app/_services/jcloud-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(jcloudData) {
        this.jcloudData = jcloudData;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.jcloudData.load();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jcloud_data_service__["a" /* JcloudDataService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_jcloud_data_service__ = __webpack_require__("../../../../../src/app/_services/jcloud-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/_components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/_components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_header_nav_header_component__ = __webpack_require__("../../../../../src/app/_components/nav-header/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__ = __webpack_require__("../../../../../src/app/_components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/_components/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_project_page_project_page_component__ = __webpack_require__("../../../../../src/app/_components/project-page/project-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_nav_header_nav_header_component__["a" /* NavHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_project_page_project_page_component__["a" /* ProjectPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_10__components_main_page_main_page_component__["a" /* MainPageComponent */] },
                    { path: "project/:name", component: __WEBPACK_IMPORTED_MODULE_11__components_project_page_project_page_component__["a" /* ProjectPageComponent */] },
                    { path: "**", redirectTo: "", pathMatch: "full" },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_jcloud_data_service__["a" /* JcloudDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/search-16.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABcElEQVQ4jZXRPWsUURQG4OfuBk1jEVDELzQaW9EfkR0cG5uwICjsFKKxEPMbBLEwYB2YrBZa20wcEktbFQXBjxTRwjIGUQiSXYvc6OxmouZtTnHmPPfOuQHSpDNKmMZdjPiT75jpM79Q5j/VpJkm2Sihixk0UOAJ3mMc7cDBiVNnFz4uv+oPAyO4hja+4EpR5ktbzTTJDmEOV0MIz/FwGAhpkq1jDyarwxVkL15gH/3xopzfqPYbcbioG4aizNcxi2OEE8P9Rqxv64YreRfrkZ2A/f8AxmJdqQNWcSEubKdcxpter/epDriFA5iLCxtImmQ3MYU7Txe7254xpEmnSbiPGzZ3MWvzn8fiyVPx28eYLsr86wAAaavTEEIbt3Gy0n8dwUtoReR6UeZrA8BWzreyRgiO4yhWNvQ+l2W3H/fTjcijeJO1bcDfEpEHmKwi/w1E5HC8yW+kuRvgw/LLb6cnzj3DGVzE6q6AIeQH7v0CpZtyMu5GT6UAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map