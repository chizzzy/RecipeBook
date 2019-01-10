import {Component, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup/popup.service';
import {RecipeService} from '../../services/recipe/recipe.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: './edit-recipe-modal.component.html',
  styleUrls: ['./edit-recipe-modal.component.scss']
})
export class EditRecipeModalComponent implements OnInit {
  public recipe;
  public recipeForm = new FormGroup({
      name: new FormControl(''),
      ingredients: new FormControl(''),
      timeForCooking: new FormControl(''),
      description: new FormControl('')
    }
  );
  public modalState;

  constructor(private popupService: PopupService, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.popupService.recipeIndex$.subscribe(
      (recipe) => {
        this.recipe = recipe;
      }
    );
    this.popupService.editRecipeModal$.subscribe(
      state => this.modalState = state
    );
  }

  onClose() {
    this.popupService.hideEditRecipeModal();
  }

  editRecipe(recipe) {
    const recipeForm = this.recipeForm.value;
    this.recipeService.editRecipe(recipe, recipeForm.name, recipeForm.ingredients, recipeForm.timeForCooking, recipeForm.description);
    this.popupService.hideEditRecipeModal();
  }
  getBack() {
    this.popupService.hideEditRecipeModal();
    this.popupService.openRecipeInfo(this.recipe);
  }
}
