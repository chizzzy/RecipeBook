import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddRecipeModalComponent } from './components/add-recipe-modal/add-recipe-modal.component';
import { PopupService } from './services/popup.service';
import { RecipeService } from './services/recipe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './snackbar/snackbar.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                MainPageComponent,
                PopupComponent,
                NavbarComponent,
                AddRecipeModalComponent,
                SnackbarComponent,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map