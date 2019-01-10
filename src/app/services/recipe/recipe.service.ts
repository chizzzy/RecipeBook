import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesSource = new Subject();
  public recipes$ = this.recipesSource.asObservable();

  constructor() {
  }


  getItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem('recipes'));
  }

  setItemInLocalStorage(recipes) {
    return localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  addRecipe(name, ingredients, timeForCooking, description) {
    let recipes = this.getItemFromLocalStorage();
    if (recipes !== null) {
      recipes = Array.from(recipes);
    } else {
      recipes = [];
    }
    recipes.push({
      name: name.value,
      ingredients: ingredients.value,
      timeForCooking: timeForCooking.value,
      description: description.value
    });
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.recipesSource.next(recipes);
  }

  editRecipe(recipe, name, ingredients, timeForCooking, description) {
    const recipes = this.getItemFromLocalStorage();
    for (let i of recipes) {
      if (i.name === recipe.name && i.timeForCooking === recipe.timeForCooking) {
        i.name = name || recipe.name;
        i.ingredients = ingredients || recipe.ingredients;
        i.timeForCooking = timeForCooking || recipe.timeForCooking;
        i.description = description || recipe.description;
      }
    }
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.recipesSource.next(recipes);
  }

  deleteRecipe(recipe) {
    let recipes = this.getItemFromLocalStorage();
    recipes = recipes.filter(storageRecipe => {
      if (storageRecipe.name !== recipe.name && storageRecipe.timeForCooking !== recipe.timeForCooking) {
        return storageRecipe;
      }
    });
    this.recipesSource.next(recipes);
    this.setItemInLocalStorage(recipes);
  }
}
