import {Component, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup/popup.service';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public popupState;
  public recipe;

  constructor(private popupService: PopupService, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.popupService.popupState$.subscribe(state => {
      this.popupState = state;
    });
    this.popupService.recipeIndex$.subscribe(
      recipe => {
        this.recipe = recipe;
      }
    );
  }

  hideRecipeInfo() {
    this.popupService.hideRecipeInfo();
  }

  openEditRecipeModal(recipe) {
    this.popupService.openEditRecipeModal(recipe);
    this.popupService.hideRecipeInfo();
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
    this.popupService.hideRecipeInfo();
  }
}
