import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
var AddRecipeModalComponent = /** @class */ (function () {
    function AddRecipeModalComponent(popupService, recipeService) {
        this.popupService = popupService;
        this.recipeService = recipeService;
        this.recipes = JSON.parse(localStorage.getItem('recipes'));
        this.name = new FormControl('');
        this.timeForCooking = new FormControl('');
        this.description = new FormControl('');
        this.ingredients = new FormControl('');
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
        description.value = 'hudsa';
    };
    AddRecipeModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-recipe',
            templateUrl: './recipe.component.html',
            styleUrls: ['./recipe.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService, RecipeService])
    ], AddRecipeModalComponent);
    return AddRecipeModalComponent;
}());
export { AddRecipeModalComponent };
//# sourceMappingURL=recipe.component.js.map
