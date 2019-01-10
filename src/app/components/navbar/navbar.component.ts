import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../services/translate/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public language = 'EN';
  public urlToMoonImg = '../../../assets/moon-solid.svg';
  public urlToSunImg = '../../../assets/sun-solid.svg';
  public urlToImg = this.urlToMoonImg;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  changeLanguage() {
    if (this.language === 'RU') {
      this.language = 'EN';
    } else {
      this.language = 'RU';
    }
    this.translate.use(this.language.toLowerCase());
  }
  setLang(lang) {

  }

  changeView() {
    if (this.urlToImg === this.urlToSunImg) {
      this.urlToImg = this.urlToMoonImg;
    } else {
      this.urlToImg = this.urlToSunImg;
    }
  }
}
