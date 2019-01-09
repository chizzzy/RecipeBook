import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PopupComponent} from './components/popup/popup.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddRecipeModalComponent} from './components/add-recipe-modal/add-recipe-modal.component';
import {PopupService} from './services/popup.service';
import {RecipeService} from './services/recipe.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { EditRecipeModalComponent } from './components/edit-recipe-modal/edit-recipe-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PopupComponent,
    NavbarComponent,
    AddRecipeModalComponent,
    SnackbarComponent,
    EditRecipeModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MainPageComponent,
    SnackbarComponent
  ],
  providers: [PopupService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
