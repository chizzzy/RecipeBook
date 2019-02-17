import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../../core/services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public language = (JSON.parse(localStorage.getItem('language'))) || 'en';
  public urlToMoonImg = '../../../assets/moon-solid.svg';
  public urlToSunImg = '../../../assets/sun-solid.svg';
  public urlToImg = this.urlToMoonImg;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  changeLanguage() {
    if (this.language === 'ru') {
      this.language = 'en';
    } else {
      this.language = 'ru';
    }
    this.translate.use(this.language.toLowerCase());
  }
  changeView() {
    if (this.urlToImg === this.urlToSunImg) {
      this.urlToImg = this.urlToMoonImg;
    } else {
      this.urlToImg = this.urlToSunImg;
    }
  }
}
