import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var PopupService = /** @class */ (function () {
    function PopupService() {
        this.popupStateSource = new Subject();
        this.popupState$ = this.popupStateSource.asObservable();
        this.addRecipeModalSource = new Subject();
        this.addRecipeModalState$ = this.addRecipeModalSource.asObservable();
        this.snackBarStatusSource = new Subject();
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
    PopupService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());
export { PopupService };
//# sourceMappingURL=popup.service.js.map