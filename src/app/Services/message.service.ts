import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar : MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public open(message: string) {
    this.snackBar.open(message, 'Dismiss', {
       duration: 10000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
    });
  }

}
