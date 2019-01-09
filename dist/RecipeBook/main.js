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
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/components/popup/popup.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_add_recipe_modal_add_recipe_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-recipe-modal/add-recipe-modal.component */ "./src/app/components/add-recipe-modal/add-recipe-modal.component.ts");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/snackbar/snackbar.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_add_recipe_modal_add_recipe_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddRecipeModalComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            entryComponents: [
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"]
            ],
            providers: [_services_popup_service__WEBPACK_IMPORTED_MODULE_8__["PopupService"], _services_recipe_service__WEBPACK_IMPORTED_MODULE_9__["RecipeService"]],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-recipe-modal/add-recipe-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/add-recipe-modal/add-recipe-modal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-window {\n  overflow: auto;\n  background-color: #ffffff;\n  margin: auto;\n  padding: 20px;\n  width: 50%;\n  height: 57%;\n  z-index: 801;\n}\n\n.popup {\n  position: fixed;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4)\n}\n\n.close {\n  z-index: 802;\n  color: #aaaaaa;\n  font-size: 18px;\n  font-weight: bold;\n  position: fixed;\n}\n\n.close:hover, .close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-content {\n  z-index: 801;\n  flex-wrap: wrap;\n}\n\n.info {\n  margin-top: 30px;\n}\n\n.ingredients {\n  height: 40px;\n}\n\nli {\n  margin-top: 20px;\n}\n\ninput {\n  height: 30px\n}\n\n.line {\n  border: 1px solid #AA3939;\n  margin-top: 15px;\n  opacity: 1;\n}\n\nspan {\n  font-size: 20px;\n}\n\n.add_recipe {\n  height: 50px;\n  width: 150px;\n  background-color: #AA3939;\n  color: #fff;\n}\n\n.close_button {\n  height: 50px;\n  width: 100px;\n  margin-left: 15px;\n  background-color: #E0E0E0;\n  color: #222222;\n}\n\n.buttons {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-start;\n}\n\ntextarea, input {\n  margin-top: 7px;\n  margin-left: 10px;\n  width: 40vw\n}\n\nh1 {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcmVjaXBlLW1vZGFsL2FkZC1yZWNpcGUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0QkFBNEI7Q0FDN0I7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXJlY2lwZS1tb2RhbC9hZGQtcmVjaXBlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtd2luZG93IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1NyU7XG4gIHotaW5kZXg6IDgwMTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNClcbn1cblxuLmNsb3NlIHtcbiAgei1pbmRleDogODAyO1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIHotaW5kZXg6IDgwMTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmluZ3JlZGllbnRzIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxubGkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW5wdXQge1xuICBoZWlnaHQ6IDMwcHhcbn1cbi5saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMzkzOTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgb3BhY2l0eTogMTtcbn1cbnNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWRkX3JlY2lwZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEzOTM5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jbG9zZV9idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG50ZXh0YXJlYSwgaW5wdXQge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNDB2d1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-recipe-modal/add-recipe-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-recipe-modal/add-recipe-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" *ngIf=\"modalState\">\n  <div class=\"modal-window\">\n    <span class=\"close\" (click)=\"hideAddRecipeModal()\">X</span>\n    <div class=\"modal-content\">\n      <h1>Add recipe</h1>\n      <ul class=\"info\">\n      <li><span>Name</span> <br/>\n        <input [formControl]=\"name\" placeholder=\"Recipe Name\">\n      </li>\n      <li><span>Ingredients</span>  <br/>\n        <textarea [formControl]=\"ingredients\" class=\"ingredients\"  placeholder=\"Ingredients that you need\"></textarea>\n      </li>\n      <li><span>Time for cooking</span> <br/>\n        <input [formControl]=\"timeForCooking\" placeholder=\"In minutes\">\n      </li>\n      <li><span>How to cook</span>  <br/>\n        <textarea [formControl]=\"description\" rows=\"6\" placeholder=\"describe details\"></textarea>\n      </li>\n      </ul>\n      <div class=\"buttons\">\n        <button (click)=\"addRecipe(recipes, name, ingredients, timeForCooking, description)\" class=\"add_recipe\">Accept</button>\n        <button class=\"close_button\" (click)=\"hideAddRecipeModal()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-recipe-modal/add-recipe-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/add-recipe-modal/add-recipe-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddRecipeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeModalComponent", function() { return AddRecipeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");





var AddRecipeModalComponent = /** @class */ (function () {
    function AddRecipeModalComponent(popupService, recipeService) {
        this.popupService = popupService;
        this.recipeService = recipeService;
        this.recipes = JSON.parse(localStorage.getItem('recipes'));
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.timeForCooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.ingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    AddRecipeModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popupService.addRecipeModalState$.subscribe(function (state) {
            _this.modalState = state;
        });
    };
    AddRecipeModalComponent.prototype.hideAddRecipeModal = function () {
        this.popupService.hideAddRecipeModal();
    };
    AddRecipeModalComponent.prototype.addRecipe = function (recipes, name, ingredients, timeForCooking, description) {
        this.recipeService.addRecipe(recipes, name, ingredients, timeForCooking, description);
        this.recipes = JSON.parse(localStorage.getItem('recipes'));
        console.log(this.recipes);
        this.clearInputFields(name, ingredients, timeForCooking, description);
        this.popupService.hideAddRecipeModal();
    };
    AddRecipeModalComponent.prototype.clearInputFields = function (name, ingredients, timeForCooking, description) {
        name.value = '';
        ingredients.value = '';
        timeForCooking.value = '';
        description.value = 'husdas;asdas';
    };
    AddRecipeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-recipe-modal',
            template: __webpack_require__(/*! ./add-recipe-modal.component.html */ "./src/app/components/add-recipe-modal/add-recipe-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe-modal.component.css */ "./src/app/components/add-recipe-modal/add-recipe-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"], _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]])
    ], AddRecipeModalComponent);
    return AddRecipeModalComponent;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-page></app-main-page>\n<app-popup></app-popup>\n<app-add-recipe-modal></app-add-recipe-modal>\n\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RecipeBook';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe_label {\n  padding-top: 20px;\n  text-align: center;\n  margin-top: 40px;\n}\n.recipe_block {\n  align-self: center;\n  height: 90vh;\n  width: 100vw;\n}\n.recipes {\n  text-align: center;\n  height: 500px;\n  width: 50vw;\n  margin: 40px auto 0;\n}\n.recipe {\n  font-size: 18px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n.recipe:hover {\n  background-color: #AA3939;\n  color: #fff;\n}\nul li {\n  display: inline;\n}\n.add_recipe {\n  margin-top: 30px;\n  text-align: center;\n  height: 50px;\n  width: 200px;\n  background-color: #AA3939;\n  color: #fff;\n}\n.snackbar {\n  color: #AA3939;\n  background-color:#AA3939;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0NBQ2Q7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZV9sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ucmVjaXBlX2Jsb2NrIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5yZWNpcGVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcbn1cbi5yZWNpcGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnJlY2lwZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTM5Mzk7XG4gIGNvbG9yOiAjZmZmO1xufVxudWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uYWRkX3JlY2lwZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTM5Mzk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNuYWNrYmFyIHtcbiAgY29sb3I6ICNBQTM5Mzk7XG4gIGJhY2tncm91bmQtY29sb3I6I0FBMzkzOTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<app-navbar></app-navbar>\n<div class=\"recipe_block\">\n  <h1 class=\"recipe_label\">Your recipes</h1>\n  <div class=\"recipes\">\n    <div (click)=\"openRecipeInfo()\"\n      class=\"recipe\" *ngFor=\"let recipe of recipes\">{{recipe}}</div>\n      <button (click)=\"openAddRecipeModal()\"\n        class=\"add_recipe\">Add recipe</button>\n<!--    <button (click)=\"openSnackBar()\">\n      <span>OMEGALUL</span>\n    </button>-->\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(popupService, snackBar) {
        this.popupService = popupService;
        this.snackBar = snackBar;
        this.recipes = ['First', 'Second', 'Third'];
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.prototype.openRecipeInfo = function () {
        this.popupService.openRecipeInfo();
    };
    MainPageComponent.prototype.openAddRecipeModal = function () {
        this.popupService.openAddRecipeModal();
    };
    MainPageComponent.prototype.openSnackBar = function () {
        this.popupService.openSnackBar();
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/components/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/components/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100vw;\n  background-color: #AA3939;\n  height: 60px;\n\n}\nh2 {\n  font-size: 24px;\n}\n.icon {\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n}\n.icons {\n  display: flex;\n}\n.language {\n  margin-left: 25px;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 200;\n  margin-top: 2px;\n  color: #fff;\n}\n.logo {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGFBQWE7O0NBRWQ7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTM5Mzk7XG4gIGhlaWdodDogNjBweDtcblxufVxuaDIge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubGFuZ3VhZ2Uge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubG9nbyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <h2 class=\"logo\">Recipe Book</h2>\n  <div class=\"icons\">\n    <img class=\"icon\" (click)=\"changeView()\"\n         [src]=\"urlToImg\">\n    <span class=\"language\" (click)=\"changeLanguage()\">{{language}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.language = 'RU';
        this.urlToMoonImg = '../../../assets/moon-solid.svg';
        this.urlToSunImg = '../../../assets/sun-solid.svg';
        this.urlToImg = this.urlToMoonImg;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changeLanguage = function () {
        if (this.language === 'RU') {
            this.language = 'EN';
        }
        else {
            this.language = 'RU';
        }
    };
    NavbarComponent.prototype.changeView = function () {
        if (this.urlToImg === this.urlToSunImg) {
            this.urlToImg = this.urlToMoonImg;
        }
        else {
            this.urlToImg = this.urlToSunImg;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/popup/popup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-window {\n  overflow: auto;\n  background-color: #ffffff;\n  margin: auto;\n  padding: 20px;\n  width: 50%;\n  height: 57%;\n  z-index: 801;\n}\n\n.popup {\n  position: fixed;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4)\n}\n\n.modal-content {\n  z-index: 801;\n  word-wrap: break-word;\n  border: none\n}\n\n.close {\n  z-index: 802;\n  color: #aaaaaa;\n  font-size: 18px;\n  font-weight: bold;\n  position: fixed;\n}\n\n.close:hover, .close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.event-info {\n  height: 100%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtd2luZG93IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1NyU7XG4gIHotaW5kZXg6IDgwMTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNClcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICB6LWluZGV4OiA4MDE7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYm9yZGVyOiBub25lXG59XG5cbi5jbG9zZSB7XG4gIHotaW5kZXg6IDgwMjtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ldmVudC1pbmZvIHtcbiAgaGVpZ2h0OiAxMDAlXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" *ngIf=\"popupState\">\n  <div class=\"modal-window\">\n      <span class=\"close\" (click)=\"hideRecipeInfo()\">X</span>\n      <div class=\"modal-content\">\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popup.service */ "./src/app/services/popup.service.ts");



var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService) {
        this.popupService = popupService;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popupService.popupState$.subscribe(function (state) {
            _this.popupState = state;
            console.log(_this.popupState);
        });
    };
    PopupComponent.prototype.openRecipeInfo = function () {
        this.popupService.openRecipeInfo();
    };
    PopupComponent.prototype.hideRecipeInfo = function () {
        this.popupService.hideRecipeInfo();
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/components/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/services/popup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/popup.service.ts ***!
  \*******************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popupStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.popupState$ = this.popupStateSource.asObservable();
        this.addRecipeModalSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addRecipeModalState$ = this.addRecipeModalSource.asObservable();
        this.snackBarStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.snackBarStatus$ = this.snackBarStatusSource.asObservable();
    }
    PopupService.prototype.openRecipeInfo = function () {
        this.popupStateSource.next(true);
    };
    PopupService.prototype.hideRecipeInfo = function () {
        this.popupStateSource.next(false);
    };
    PopupService.prototype.openAddRecipeModal = function () {
        this.addRecipeModalSource.next(true);
    };
    PopupService.prototype.hideAddRecipeModal = function () {
        this.addRecipeModalSource.next(false);
    };
    PopupService.prototype.openSnackBar = function () {
        this.snackBarStatusSource.next(true);
        setTimeout(this.closeSnackBar, 3000);
    };
    PopupService.prototype.closeSnackBar = function () {
        this.snackBarStatusSource.next(false);
    };
    PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.service */ "./src/app/services/popup.service.ts");



var RecipeService = /** @class */ (function () {
    function RecipeService(popupService) {
        this.popupService = popupService;
    }
    RecipeService.prototype.addRecipe = function (recipes, name, ingredients, timeForCooking, description) {
        if (recipes === void 0) { recipes = []; }
        recipes.push({
            name: name.value,
            ingredients: ingredients.value,
            timeForCooking: timeForCooking.value,
            description: description.value
        });
        localStorage.setItem('recipes', JSON.stringify(recipes));
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/snackbar/snackbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/snackbar/snackbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-simple-snackbar-action\" *ngIf=\"snackBarStatus\">\n<span>Recipe was successfully created!</span>\n</div>\n"

/***/ }),

/***/ "./src/app/snackbar/snackbar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/snackbar/snackbar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-simple-snackbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  line-height: 20px;\n  opacity: 1; }\n\n.mat-simple-snackbar-action {\n  flex-shrink: 0;\n  margin: -8px -8px -8px 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaXp6ei9XZWJzdG9ybVByb2plY3RzL1JlY2lwZUJvb2svc3JjL2FwcC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixrQkFYOEI7RUFZOUIsV0FBVSxFQUNYOztBQUVEO0VBQ0UsZUFBYztFQUNkLDJCQW5CMEMsRUFvQjNDIiwiZmlsZSI6InNyYy9hcHAvc25hY2tiYXIvc25hY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWF0LXNuYWNrLWJhci1idXR0b24taG9yaXpvbnRhbC1tYXJnaW46IDhweCAhZGVmYXVsdDtcbiRtYXQtc25hY2stYmFyLWJ1dHRvbi1oZWlnaHQ6IDM2cHggIWRlZmF1bHQ7XG4kbWF0LXNuYWNrLWJhci1saW5lLWhlaWdodDogMjBweCAhZGVmYXVsdDtcbi8vIEJ1dHRvbiB2ZXJ0aWNhbCBtYXJnaW4gaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhIGJ1dHRvbiBoZWlnaHQgb2YgMzZweCwgd2hlbiB0aGUgY29udGFpbmluZ1xuLy8gc3BhY2UgZmFsbHMgYmVsb3cgMzZweC5cbiRtYXQtc25hY2stYmFyLWJ1dHRvbi12ZXJ0aWNhbC1tYXJnaW46XG4gIC0oKCRtYXQtc25hY2stYmFyLWJ1dHRvbi1oZWlnaHQgLSAkbWF0LXNuYWNrLWJhci1saW5lLWhlaWdodCkgLyAyKTtcblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6ICRtYXQtc25hY2stYmFyLWxpbmUtaGVpZ2h0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luOiAkbWF0LXNuYWNrLWJhci1idXR0b24tdmVydGljYWwtbWFyZ2luICRtYXQtc25hY2stYmFyLWJ1dHRvbi1ob3Jpem9udGFsLW1hcmdpbiAqIC0xICRtYXQtc25hY2stYmFyLWJ1dHRvbi12ZXJ0aWNhbC1tYXJnaW4gJG1hdC1zbmFjay1iYXItYnV0dG9uLWhvcml6b250YWwtbWFyZ2luO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/snackbar/snackbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/snackbar/snackbar.component.ts ***!
  \************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/popup.service */ "./src/app/services/popup.service.ts");




var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar, popupService) {
        this.snackBar = snackBar;
        this.popupService = popupService;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popupService.snackBarStatus$.subscribe(function (status) {
            _this.snackBarStatus = status;
            console.log(status);
        });
    };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
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

module.exports = __webpack_require__(/*! /home/chizzz/WebstormProjects/RecipeBook/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map