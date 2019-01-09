import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { MatSnackBar } from '@angular/material';
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
    MainPageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService, MatSnackBar])
    ], MainPageComponent);
    return MainPageComponent;
}());
export { MainPageComponent };
//# sourceMappingURL=main-page.component.js.map