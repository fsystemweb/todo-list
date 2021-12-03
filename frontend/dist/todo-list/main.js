(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fed/IdeaProjects/todo-list/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() {
        this.header = '';
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { header: "header" }, decls: 2, vars: 1, consts: [[1, "header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    } }, styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #626567;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnREFBQTtFQUNBLGVBQUE7QUNDRjtBQUZBO0VBQ0UsZUFBQTtFQUNBLGNERVU7QUNHWiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIGJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuJGdyZXktZGFyazogIzYyNjU2NztcbiRncmV5LTkwMDogIzkwOTQ5NztcbiRncmV5LTcwMDogI2JkYzNjNztcbiRncmV5LTYwMDogI2QwZDNkNDtcbiRncmV5LTUwMDogI2VjZjBmMTtcbiRncmV5LTMwMDogI2Y0ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRjb21tb24tYm9yZGVyOiAxcHggc29saWQgJGdyZXktOTAwO1xuJGJvcmRlci1yYWRpdXM6IDNweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogJGdyZXktZGFyaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "3kzh":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(title) {
        this.checked = false;
        this.title = title;
    }
}


/***/ }),

/***/ "6M0H":
/*!***************************************************!*\
  !*** ./src/app/services/api-rest-task.service.ts ***!
  \***************************************************/
/*! exports provided: ApiRestTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestTaskService", function() { return ApiRestTaskService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiRestTaskService {
    constructor(http) {
        this.http = http;
    }
    createTask(task) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}task/`, task);
    }
    update(task) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}task/`, task);
    }
    delete(task) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}task/${task._id}`);
    }
    getAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}task/`);
    }
}
ApiRestTaskService.ɵfac = function ApiRestTaskService_Factory(t) { return new (t || ApiRestTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiRestTaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiRestTaskService, factory: ApiRestTaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7psr":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ButtonComponent {
    constructor() {
        this.title = '';
    }
    click($event) {
        $event.preventDefault();
    }
    ngOnInit() { }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { title: "title" }, decls: 2, vars: 1, consts: [["href", "/#", 1, "myButton", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_a_click_0_listener($event) { return ctx.click($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.myButton[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #909497;\n  cursor: pointer;\n  display: inline-block;\n  padding: 1rem;\n  text-decoration: none;\n  border: 1px solid #909497;\n  border-radius: 3px;\n}\n.myButton[_ngcontent-%COMP%]:hover {\n  background-color: #ecf0f1;\n  color: #909497;\n}\n.myButton[_ngcontent-%COMP%]:active {\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnREFBQTtFQUNBLGVBQUE7QUNDRjtBQUZBO0VBQ0Usc0JEU007RUNSTixjREdTO0VDRlQsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJES2M7RUNKZCxrQkRLYztBQ0FoQjtBQUZBO0VBQ0UseUJESlM7RUNLVCxjRFJTO0FDYVg7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUtGIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiogYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4kZ3JleS1kYXJrOiAjNjI2NTY3O1xuJGdyZXktOTAwOiAjOTA5NDk3O1xuJGdyZXktNzAwOiAjYmRjM2M3O1xuJGdyZXktNjAwOiAjZDBkM2Q0O1xuJGdyZXktNTAwOiAjZWNmMGYxO1xuJGdyZXktMzAwOiAjZjRmNmY3O1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGNvbW1vbi1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS05MDA7XG4kYm9yZGVyLXJhZGl1czogM3B4O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi5teUJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgY29sb3I6ICRncmV5LTkwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAkY29tbW9uLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59XG5cbi5teUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTUwMDtcbiAgY29sb3I6ICRncmV5LTkwMDtcbn1cblxuLm15QnV0dG9uOmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    api: 'http://localhost:8080/',
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

/***/ "B64v":
/*!*************************************************************!*\
  !*** ./src/app/components/sub-title/sub-title.component.ts ***!
  \*************************************************************/
/*! exports provided: SubTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitleComponent", function() { return SubTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SubTitleComponent {
    constructor() {
        this.subTitle = '';
    }
    ngOnInit() { }
}
SubTitleComponent.ɵfac = function SubTitleComponent_Factory(t) { return new (t || SubTitleComponent)(); };
SubTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubTitleComponent, selectors: [["app-sub-title"]], inputs: { subTitle: "subTitle" }, decls: 2, vars: 1, consts: [[1, "sub-title"]], template: function SubTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subTitle);
    } }, styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.sub-title[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3ViLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnREFBQTtFQUNBLGVBQUE7QUNDRjtBQUhBO0VBQ0UsY0RNUztFQ0xULGVBQUE7QUFNRiIsImZpbGUiOiJzdWItdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIGJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuJGdyZXktZGFyazogIzYyNjU2NztcbiRncmV5LTkwMDogIzkwOTQ5NztcbiRncmV5LTcwMDogI2JkYzNjNztcbiRncmV5LTYwMDogI2QwZDNkNDtcbiRncmV5LTUwMDogI2VjZjBmMTtcbiRncmV5LTMwMDogI2Y0ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRjb21tb24tYm9yZGVyOiAxcHggc29saWQgJGdyZXktOTAwO1xuJGJvcmRlci1yYWRpdXM6IDNweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuLnN1Yi10aXRsZSB7XG4gIGNvbG9yOiAkZ3JleS03MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "R7rD":
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_rest_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-rest-task.service */ "6M0H");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/button/button.component */ "7psr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_task_container_task_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/task-container/task-container.component */ "WihY");








function HomeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-task-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", task_r1);
} }
class HomeComponent {
    constructor(apiRestTaskService) {
        this.apiRestTaskService = apiRestTaskService;
        this.tasks = [];
    }
    ngOnInit() {
        this.getAll();
    }
    delete() {
        let tasksToDelete = [];
        tasksToDelete = this.tasks.filter((task) => task.checked);
        tasksToDelete.forEach((task) => {
            this.apiRestTaskService.delete(task).subscribe();
        });
        this.tasks = this.tasks.filter((task) => !task.checked);
    }
    new() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newTask = new src_app_models__WEBPACK_IMPORTED_MODULE_1__["Task"]('New task');
            this.apiRestTaskService.createTask(newTask).subscribe();
            this.tasks.push(newTask);
        });
    }
    getAll() {
        this.apiRestTaskService.getAll().subscribe((data) => (this.tasks = data));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_rest_task_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestTaskService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 1, consts: [[1, "header-container"], ["header", "Tasker"], [1, "button-new"], ["title", "New", 3, "click"], [1, "home"], [1, "no-bullets"], [4, "ngFor", "ngForOf"], [1, "button-delete"], ["title", "Delete", 3, "click"], [3, "task"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_app_button_click_3_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_li_6_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_app_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_task_container_task_container_component__WEBPACK_IMPORTED_MODULE_7__["TaskContainerComponent"]], styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.header-container[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n}\n.header-container[_ngcontent-%COMP%]   .button-new[_ngcontent-%COMP%] {\n  margin-left: 60%;\n}\n.home[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  border: 1px solid #909497;\n  padding: 1rem;\n  border-radius: 3px;\n}\nul.no-bullets[_ngcontent-%COMP%] {\n  list-style-type: none;\n  \n  padding: 0;\n  \n  margin: 0;\n  \n}\n.button-delete[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  width: 50%;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBO0VBQ0UsZ0RBQUE7RUFDQSxlQUFBO0FDQ0Y7QUFIQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQU1GO0FBSkU7RUFDRSxnQkFBQTtBQU1KO0FBSEE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCRENjO0VDQWQsYUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFIQTtFQUNFLHFCQUFBO0VBQXVCLG1CQUFBO0VBQ3ZCLFVBQUE7RUFBWSxtQkFBQTtFQUNaLFNBQUE7RUFBVyxtQkFBQTtBQVNiO0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQVNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIGJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuJGdyZXktZGFyazogIzYyNjU2NztcbiRncmV5LTkwMDogIzkwOTQ5NztcbiRncmV5LTcwMDogI2JkYzNjNztcbiRncmV5LTYwMDogI2QwZDNkNDtcbiRncmV5LTUwMDogI2VjZjBmMTtcbiRncmV5LTMwMDogI2Y0ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRjb21tb24tYm9yZGVyOiAxcHggc29saWQgJGdyZXktOTAwO1xuJGJvcmRlci1yYWRpdXM6IDNweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuLmhlYWRlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgLmJ1dHRvbi1uZXcge1xuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIH1cbn1cbi5ob21lIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6ICRjb21tb24tYm9yZGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cblxudWwubm8tYnVsbGV0cyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgLyogUmVtb3ZlIGJ1bGxldHMgKi9cbiAgcGFkZGluZzogMDsgLyogUmVtb3ZlIHBhZGRpbmcgKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgbWFyZ2lucyAqL1xufVxuXG4uYnV0dG9uLWRlbGV0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ "Rq1J":
/*!*************************************************************!*\
  !*** ./src/app/components/check-box/check-box.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CheckBoxComponent {
    constructor() {
        this.emitCheckBoxActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    clickOnCheckBox(value, event) {
        const object = {
            id: value,
            flag: false,
        };
        if (event.target.checked)
            object.flag = true;
        this.emitCheckBoxActive.emit(object);
    }
}
CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) { return new (t || CheckBoxComponent)(); };
CheckBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxComponent, selectors: [["app-check-box"]], inputs: { id: "id" }, outputs: { emitCheckBoxActive: "emitCheckBoxActive" }, decls: 1, vars: 1, consts: [["type", "checkbox", 1, "check", 3, "value", "change"]], template: function CheckBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckBoxComponent_Template_input_change_0_listener($event) { return ctx.clickOnCheckBox(ctx.id, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.id);
    } }, styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.check[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  -ms-transform: scale(2);\n  \n  -moz-transform: scale(2);\n  \n  -webkit-transform: scale(2);\n  \n  -o-transform: scale(2);\n  \n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vY2hlY2stYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnREFBQTtFQUNBLGVBQUE7QUNDRjtBQUZBO0VBQ0UsZUFBQTtBQUtGO0FBSEE7RUFDRSx1QkFBQTtFQUF5QixPQUFBO0VBQ3pCLHdCQUFBO0VBQTBCLE9BQUE7RUFDMUIsMkJBQUE7RUFBNkIsb0JBQUE7RUFDN0Isc0JBQUE7RUFBd0IsVUFBQTtFQUN4QixhQUFBO0FBVUYiLCJmaWxlIjoiY2hlY2stYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiRncmV5LWRhcms6ICM2MjY1Njc7XG4kZ3JleS05MDA6ICM5MDk0OTc7XG4kZ3JleS03MDA6ICNiZGMzYzc7XG4kZ3JleS02MDA6ICNkMGQzZDQ7XG4kZ3JleS01MDA6ICNlY2YwZjE7XG4kZ3JleS0zMDA6ICNmNGY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kY29tbW9uLWJvcmRlcjogMXB4IHNvbGlkICRncmV5LTkwMDtcbiRib3JkZXItcmFkaXVzOiAzcHg7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLmNoZWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogRkYgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBTYWZhcmkgeSBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogT3BlcmEgKi9cbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/home/home.component */ "R7rD");


class AppComponent {
    constructor() {
        this.title = 'todo-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_screens_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VHTt":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-response */ "tw+1");
/* empty/unused harmony star reexport *//* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "3kzh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _task__WEBPACK_IMPORTED_MODULE_1__["Task"]; });





/***/ }),

/***/ "WihY":
/*!***********************************************************************!*\
  !*** ./src/app/components/task-container/task-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaskContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskContainerComponent", function() { return TaskContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-title/sub-title.component */ "B64v");
/* harmony import */ var _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-box/check-box.component */ "Rq1J");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title/title.component */ "bwXy");





function TaskContainerComponent_app_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.task.title);
} }
function TaskContainerComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskContainerComponent_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.task.title)("ngModel", ctx_r1.newTitle);
} }
class TaskContainerComponent {
    constructor() {
        this.flagUpdate = false;
    }
    ngOnInit() { }
    checkTask(value) {
        this.task.checked = value.flag;
    }
    eventUpdate(task) {
        console.log(this.newTitle);
        if (!this.flagUpdate) {
            this.newTitle = task.title;
            this.flagUpdate = true;
        }
        else {
            this.task.title = this.newTitle;
            this.flagUpdate = false;
        }
    }
}
TaskContainerComponent.ɵfac = function TaskContainerComponent_Factory(t) { return new (t || TaskContainerComponent)(); };
TaskContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskContainerComponent, selectors: [["app-task-container"]], inputs: { task: "task" }, decls: 7, vars: 4, consts: [[1, "task-container", 3, "dblclick"], [1, "column-left"], [3, "title", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "ngModel", "ngModelChange", 4, "ngIf"], [3, "subTitle"], [1, "column-right"], [3, "id", "emitCheckBoxActive"], [3, "title"], ["autofocus", "", "type", "text", 3, "value", "ngModel", "ngModelChange"]], template: function TaskContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TaskContainerComponent_Template_div_dblclick_0_listener() { return ctx.eventUpdate(ctx.task); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskContainerComponent_app_title_2_Template, 1, 1, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskContainerComponent_input_3_Template, 1, 2, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sub-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-check-box", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitCheckBoxActive", function TaskContainerComponent_Template_app_check_box_emitCheckBoxActive_6_listener($event) { return ctx.checkTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flagUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subTitle", ctx.task.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.task._id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_2__["SubTitleComponent"], _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_3__["CheckBoxComponent"], _title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"]], styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.task-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #909497;\n  border-radius: 3px;\n  width: 100%;\n}\n.task-container[_ngcontent-%COMP%]   .column-left[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 50%;\n  float: left;\n  display: inline;\n}\n.task-container[_ngcontent-%COMP%]   .column-right[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 1rem;\n  position: relative;\n  float: right;\n  width: 20%;\n  text-align: right;\n  height: 100%;\n  top: 0.5rem;\n}\n.task-container[_ngcontent-%COMP%]:hover {\n  background-color: #ecf0f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vdGFzay1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNFLGdEQUFBO0VBQ0EsZUFBQTtBQ0NGO0FBRkE7RUFDRSxxQkFBQTtFQUVBLHlCRFNjO0VDUmQsa0JEU2M7RUNSZCxXQUFBO0FBSUY7QUFIRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFLSjtBQUhFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtKO0FBREE7RUFDRSx5QkRqQlM7QUNxQlgiLCJmaWxlIjoidGFzay1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIGJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuJGdyZXktZGFyazogIzYyNjU2NztcbiRncmV5LTkwMDogIzkwOTQ5NztcbiRncmV5LTcwMDogI2JkYzNjNztcbiRncmV5LTYwMDogI2QwZDNkNDtcbiRncmV5LTUwMDogI2VjZjBmMTtcbiRncmV5LTMwMDogI2Y0ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRjb21tb24tYm9yZGVyOiAxcHggc29saWQgJGdyZXktOTAwO1xuJGJvcmRlci1yYWRpdXM6IDNweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4udGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgYm9yZGVyOiAkY29tbW9uLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIHdpZHRoOiAxMDAlO1xuICAuY29sdW1uLWxlZnQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmNvbHVtbi1yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDAuNXJlbTtcbiAgfVxufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS01MDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button.component */ "7psr");
/* harmony import */ var _components_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/check-box/check-box.component */ "Rq1J");
/* harmony import */ var _components_sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sub-title/sub-title.component */ "B64v");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/home/home.component */ "R7rD");
/* harmony import */ var _components_task_container_task_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/task-container/task-container.component */ "WihY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _components_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__["CheckBoxComponent"],
        _components_sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_6__["SubTitleComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _screens_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_task_container_task_container_component__WEBPACK_IMPORTED_MODULE_9__["TaskContainerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "bwXy":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { title: "title" }, decls: 2, vars: 1, consts: [[1, "title"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["*[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 18px;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTtFQUNFLGdEQUFBO0VBQ0EsZUFBQTtBQ0NGO0FBSEE7RUFDRSxjRFdNO0VDVk4sZUFBQTtFQUNBLHFCQUFBO0FBTUYiLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIGJvZHkge1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuJGdyZXktZGFyazogIzYyNjU2NztcbiRncmV5LTkwMDogIzkwOTQ5NztcbiRncmV5LTcwMDogI2JkYzNjNztcbiRncmV5LTYwMDogI2QwZDNkNDtcbiRncmV5LTUwMDogI2VjZjBmMTtcbiRncmV5LTMwMDogI2Y0ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDAwMDtcbiRjb21tb24tYm9yZGVyOiAxcHggc29saWQgJGdyZXktOTAwO1xuJGJvcmRlci1yYWRpdXM6IDNweDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuLnRpdGxlIHtcbiAgY29sb3I6ICRibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "tw+1":
/*!********************************************!*\
  !*** ./src/app/models/generic-response.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map