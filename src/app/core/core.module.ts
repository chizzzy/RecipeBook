import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupService} from '../recipe/components/services/popup.service';
import {TranslateService} from './services/translate.service';
import {setupTranslateFactory} from '../recipe/recipe.module';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }]
})
export class CoreModule {
}
