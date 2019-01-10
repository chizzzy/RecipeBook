import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PopupComponent} from './components/popup/popup.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddRecipeModalComponent} from './components/add-recipe-modal/add-recipe-modal.component';
import {PopupService} from './services/popup/popup.service';
import {RecipeService} from './services/recipe/recipe.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {EditRecipeModalComponent} from './components/edit-recipe-modal/edit-recipe-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/translate/translate.service';
import {TranslatePipe} from './pipes/translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PopupComponent,
    NavbarComponent,
    AddRecipeModalComponent,
    SnackbarComponent,
    EditRecipeModalComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
    SnackbarComponent,
    PopupComponent
  ],
  providers: [PopupService, RecipeService, TranslateService, {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [TranslateService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
