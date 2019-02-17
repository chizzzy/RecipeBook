import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {EditRecipeModalComponent} from './components/edit-recipe-modal/edit-recipe-modal.component';
import {AddRecipeModalComponent} from './components/add-recipe-modal/add-recipe-modal.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TranslatePipe} from './translate.pipe';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PopupComponent} from './components/popup/popup.component';
import {TranslateService} from '../core/services/translate.service';
import {PopupService} from './components/services/popup.service';
import {RecipeService} from './components/services/recipe.service';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => {
    service.use(JSON.parse(localStorage.getItem('language')));
  };
}

@NgModule({
  providers : [
    PopupService,
    RecipeService
  ],
  declarations: [
    MainPageComponent,
    PopupComponent,
    NavbarComponent,
    AddRecipeModalComponent,
    EditRecipeModalComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    MainPageComponent,
    PopupComponent
  ],
  entryComponents: [
    PopupComponent
  ],
})
export class RecipeModule { }
