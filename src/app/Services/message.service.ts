import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { MessageComponent } from '@Components';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar : MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public open(messages: string[]) {
    this.snackBar.openFromComponent(MessageComponent,{
      data: messages,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 10000,
    })
  }

}
