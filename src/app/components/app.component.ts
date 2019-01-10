import {Component} from '@angular/core';
import  {TranslateService} from '../services/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  constructor(private translate: TranslateService) {
  }
}
