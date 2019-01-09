import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
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
    PopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-popup',
            templateUrl: './popup.component.html',
            styleUrls: ['./popup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService])
    ], PopupComponent);
    return PopupComponent;
}());
export { PopupComponent };
//# sourceMappingURL=popup.component.js.map