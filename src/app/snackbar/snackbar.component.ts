import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {PopupService} from '../services/popup/popup.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  public snackBarStatus;
  constructor(/*private snackBar: MatSnackBar, private popupService: PopupService*/) { }

  ngOnInit() {
  /*  this.popupService.snackBarStatus$.subscribe(
      (status) => {
        this.snackBarStatus = status;
      });*/
  }
}
