import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PopupService } from '../services/popup.service';
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar, popupService) {
        this.snackBar = snackBar;
        this.popupService = popupService;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popupService.snackBarStatus$.subscribe(function (status) {
            _this.snackBarStatus = status;
        });
    };
    SnackbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar, PopupService])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map
