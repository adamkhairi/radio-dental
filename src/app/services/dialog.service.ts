import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {RadioDialogComponent} from "../radio/radio-card/radio-dialog/radio-dialog.component";
import { RadioVisite } from "./radio.visite";

@Injectable({
  providedIn: 'root'
})
export class DialogService{
  public dialogData: any;

   constructor(public dialog: MatDialog) {
   }

   openDialog() {
     const dialogRef = this.dialog.open(RadioDialogComponent, {
       width: '250px',
       data: new RadioVisite('','','','',new Date()),
     });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed','Data : ', result);
       this.dialogData = result;
     });
   }
}
