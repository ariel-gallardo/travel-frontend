import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../Components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {
    
  }

  public openDialog(
      actionTitle : string,
      actionQuestion : string,
      actionTrue : any = () => {},
      actionFalse : any = () => {}
    ){
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        actionTitle,
        actionQuestion
      }
    })
    dialogRef
    .afterClosed()
    .subscribe(r => {
      if(r){
        actionTrue()
      }else{
        actionFalse()
      }
    });
  }
}
