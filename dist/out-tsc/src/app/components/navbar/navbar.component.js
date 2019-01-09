import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map