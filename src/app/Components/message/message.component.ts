import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'snackbar-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string[]) { }
}
