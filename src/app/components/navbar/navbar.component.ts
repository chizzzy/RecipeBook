import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public language = 'RU';
  public urlToMoonImg = '../../../assets/moon-solid.svg';
  public urlToSunImg = '../../../assets/sun-solid.svg';
  public urlToImg = this.urlToMoonImg;

  constructor() {
  }

  ngOnInit() {
  }

  changeLanguage() {
    if (this.language === 'RU') {
      this.language = 'EN';
    } else {
      this.language = 'RU';
    }
  }

  changeView() {
    if (this.urlToImg === this.urlToSunImg) {
      this.urlToImg = this.urlToMoonImg;
    } else {
      this.urlToImg = this.urlToSunImg;
    }
  }
}
