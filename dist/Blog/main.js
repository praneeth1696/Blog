(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-blog/add-blog.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ibG9nL2FkZC1ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-blog/add-blog.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add Blog</h1>\n  <br>\n  <form>\n      <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Add title\" [(ngModel)]=\"title\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"topic\">Title</label>\n            <input type=\"text\" name=\"topic\" class=\"form-control\" placeholder=\"Add topic\" [(ngModel)]=\"topic\"/>\n          </div>\n        <div class=\"form-group\">\n            <label for=\"content\">Content</label>\n            <!--<input type=\"text\" name=\"content\" class=\"form-control\" placeholder=\"Add content\" [(ngModel)]=\"content\"/>-->\n            <angular-editor [placeholder]=\"'Enter text here...'\" [(ngModel)]=\"htmlContent\"></angular-editor>\n          </div>\n          <div class=\"form-group\">\n          <button type=\"submit\" (click)=\"addBlog()\" class=\"btn btn-primary\">Submit</button>\n        </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/add-blog/add-blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.ts ***!
  \************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");



var AddBlogComponent = /** @class */ (function () {
    function AddBlogComponent(data) {
        this.data = data;
    }
    //public title3;
    AddBlogComponent.prototype.addBlog = function () {
        var title = this.title;
        var topic = this.topic;
        var content = this.content;
        this.data.addBlog(title, topic, content);
        alert("Blog submitted successfully");
    };
    AddBlogComponent.prototype.ngOnInit = function () {
    };
    AddBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-blog',
            template: __webpack_require__(/*! ./add-blog.component.html */ "./src/app/add-blog/add-blog.component.html"),
            styles: [__webpack_require__(/*! ./add-blog.component.css */ "./src/app/add-blog/add-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], AddBlogComponent);
    return AddBlogComponent;
}());

// blogs =[];
/*  addBlog(title, topic, content) {
    let blog = { "title": title.value, "topic": topic.value, "content": content.value };
    if(localStorage.getItem("blogs")){
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
    }
    this.blogs.splice(0,0,blog)
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    title.value="";
    topic.value="";
    content.value="";
    alert("Blog submitted successfully")

  }*/
/*  addBlog1()
  {
    console.log(this.title);
    this.title3=this.title;
  }*/


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _home_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/delete-blog/delete-blog.component */ "./src/app/home/delete-blog/delete-blog.component.ts");
/* harmony import */ var _home_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/update-blog/update-blog.component */ "./src/app/home/update-blog/update-blog.component.ts");





//import { EditBlogComponent } from './home/edit-blog/edit-blog.component';


var routes = [
    {
        path: "view-blog",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "add-blog",
        component: _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_4__["AddBlogComponent"]
    },
    /*{
      path: "home/edit-blog",
      component: EditBlogComponent
    },*/
    {
        path: "home/delete-blog",
        component: _home_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteBlogComponent"]
    },
    {
        path: "home/update-blog",
        component: _home_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_6__["UpdateBlogComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: grid;\r\n    grid-gap: 5px;\r\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n    grid-template-rows: repeat(2, 100px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiA1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDEwMHB4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Blog</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = \"view-blog\">View Blog</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink = \"add-blog\">Add Blog</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!--<app-home></app-home>\n\n//<app-add-blog></app-add-blog>-->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { HomeComponent } from './home/home.component';
//import { AddBlogComponent } from './add-blog/add-blog.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Blog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _home_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/update-blog/update-blog.component */ "./src/app/home/update-blog/update-blog.component.ts");
/* harmony import */ var _home_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/delete-blog/delete-blog.component */ "./src/app/home/delete-blog/delete-blog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");




// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';




//import { EditBlogComponent } from './home/edit-blog/edit-blog.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_7__["AddBlogComponent"],
                // EditBlogComponent,
                _home_update_blog_update_blog_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBlogComponent"],
                _home_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                // SlimLoadingBarModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__["AngularEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/delete-blog/delete-blog.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/delete-blog/delete-blog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGVsZXRlLWJsb2cvZGVsZXRlLWJsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/delete-blog/delete-blog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/delete-blog/delete-blog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/delete-blog/delete-blog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/delete-blog/delete-blog.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent() {
    }
    DeleteBlogComponent.prototype.ngOnInit = function () {
    };
    DeleteBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__(/*! ./delete-blog.component.html */ "./src/app/home/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__(/*! ./delete-blog.component.css */ "./src/app/home/delete-blog/delete-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Team Blog Page</h1>\n  <br>\n  <ul class=\"Blogs\">\n  <div style=\"padding: 25px 0px;\"  *ngFor = \"let blog of Blogs\">\n  <div class=\"card w-75\">\n    <div class=\"card-header\">\n      {{ blog.title }}\n      <!--<span style=\"float: right; color: red;\" (click)=\"removeBlog(blog)\">X</span> -->\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ blog.topic }}</h5>\n      <p class=\"card-text\">{{ blog.content }}</p>\n      <a href=\"#\" class=\"btn btn-primary\">Know more</a>\n    </div>  \n  </div>\n  <br>\n  <div>\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n  <a href=\"#\" class=\"btn btn-primary a-btn-slide-text\">\n      <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n      <span><strong>Update</strong></span>            \n  </a>\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n  <a class=\"btn btn-primary a-btn-slide-text\">\n     <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n      <span (click)=\"removeBlog(blog)\">Delete</span>            \n  </a>\n  </div>    \n</div>  \n</ul>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.blogs = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data
            .getAdUnits()
            .subscribe(function (data) {
            _this.Blogs = data;
            console.log(_this.Blogs);
        });
    };
    /*constructor() { }
    blogs = [];
    ngOnInit() {
      this.blogs = JSON.parse(localStorage.getItem("blogs"));
    }*/
    HomeComponent.prototype.removeBlog = function (blog) {
        var index = this.blogs.indexOf(blog);
        this.blogs.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(this.blogs));
        alert("Blog has been deleted successfully");
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/update-blog/update-blog.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/update-blog/update-blog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXBkYXRlLWJsb2cvdXBkYXRlLWJsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/update-blog/update-blog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/update-blog/update-blog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update-blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/update-blog/update-blog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/update-blog/update-blog.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBlogComponent", function() { return UpdateBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateBlogComponent = /** @class */ (function () {
    function UpdateBlogComponent() {
    }
    UpdateBlogComponent.prototype.ngOnInit = function () {
    };
    UpdateBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-blog',
            template: __webpack_require__(/*! ./update-blog.component.html */ "./src/app/home/update-blog/update-blog.component.html"),
            styles: [__webpack_require__(/*! ./update-blog.component.css */ "./src/app/home/update-blog/update-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateBlogComponent);
    return UpdateBlogComponent;
}());



/***/ }),

/***/ "./src/app/projects.service.ts":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.url = "http://localhost:8050/post";
    }
    ProjectsService.prototype.addBlog = function (title, topic, content) {
        var obj = {
            title: title,
            topic: topic,
            content: content
        };
        var Blogs = JSON.stringify(obj);
        this.http.post(this.url + "/addblog", obj)
            .subscribe(function (res) { return console.log('Done'); });
        debugger;
        console.log(Blogs);
    };
    ProjectsService.prototype.getAdUnits = function () {
        return this
            .http
            .get(this.url + "/viewBlog");
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map