import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupStateSource = new Subject();
  public popupState$ = this.popupStateSource.asObservable();
  private addRecipeModalSource = new Subject();
  public addRecipeModalState$ = this.addRecipeModalSource.asObservable();
  private snackBarStatusSource = new Subject();
  public snackBarStatus$ = this.snackBarStatusSource.asObservable();
  private recipeIndexSource = new BehaviorSubject('');
  public recipeIndex$ = this.recipeIndexSource.asObservable();
  private editRecipeModalSource = new Subject();
  public editRecipeModal$ = this.editRecipeModalSource.asObservable();
  constructor() { }
  openRecipeInfo(recipe) {
    this.popupStateSource.next(true);
    this.recipeIndexSource.next(recipe);
  }
  hideRecipeInfo() {
    this.popupStateSource.next(false);
  }
  openAddRecipeModal() {
    this.addRecipeModalSource.next(true);
  }
  openEditRecipeModal(recipe) {
    this.editRecipeModalSource.next(true);
    this.recipeIndexSource.next(recipe);
  }
  hideEditRecipeModal() {
    this.editRecipeModalSource.next(false);
  }
  hideAddRecipeModal() {
    this.addRecipeModalSource.next(false);
  }
  openSnackBar() {
    this.snackBarStatusSource.next(true);
    setTimeout(this.closeSnackBar, 3000);
  }
  closeSnackBar() {
    this.snackBarStatusSource.next(false);
  }
}
