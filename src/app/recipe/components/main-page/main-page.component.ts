import {Component, OnInit} from '@angular/core';
import {PopupService} from '../services/popup.service';
import {RecipeService} from '../services/recipe.service';
import {TranslateService} from '../../../core/services/translate.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public recipes = JSON.parse(localStorage.getItem('recipes'));

  constructor(private popupService: PopupService, private recipeService: RecipeService, private translate: TranslateService) {
  }

  ngOnInit() {
    this.recipeService.recipes$.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  openRecipeInfo(recipe) {
    this.popupService.openRecipeInfo(recipe);
  }

  openAddRecipeModal() {
    this.popupService.openAddRecipeModal();
  }

  openSnackBar() {
    this.popupService.openSnackBar();
  }

  hideEditRecipeModal() {
    this.popupService.hideEditRecipeModal();
  }

  hideAddRecipeModal() {
    this.popupService.hideAddRecipeModal();
  }
}
