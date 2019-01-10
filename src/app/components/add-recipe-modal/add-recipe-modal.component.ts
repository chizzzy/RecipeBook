import {Component, Input, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup/popup.service';
import {FormControl} from '@angular/forms';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.css']
})
export class AddRecipeModalComponent implements OnInit {
  public name = new FormControl('');
  public timeForCooking = new FormControl('');
  public description = new FormControl('');
  public ingredients = new FormControl('');
  public recipe = {};
  public modalState;

  constructor(private popupService: PopupService, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.popupService.addRecipeModalState$.subscribe(
      state => this.modalState = state
    );
  }

  addRecipe(name, ingredients, timeForCooking, description) {
    this.recipeService.addRecipe(name, ingredients, timeForCooking, description);
    this.clearInputFields(name, ingredients, timeForCooking, description);
    this.popupService.hideAddRecipeModal();
  }

  clearInputFields(name, ingredients, timeForCooking, description) {
    name.value = '';
    ingredients.value = '';
    timeForCooking.value = '';
    description.value = '';
  }

  onClose() {
    this.popupService.hideAddRecipeModal();
    this.clearInputFields(this.name, this.ingredients, this.timeForCooking, this.description);
  }
}

