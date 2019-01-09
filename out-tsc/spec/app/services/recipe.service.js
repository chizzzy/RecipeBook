import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PopupService } from './popup.service';
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
    RecipeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService])
    ], RecipeService);
    return RecipeService;
}());
export { RecipeService };
//# sourceMappingURL=recipe.service.js.map