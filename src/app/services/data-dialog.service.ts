import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RadioDialogComponent} from "../radio/radio-dialog/radio-dialog.component";
import {RadioVisite} from "./radio.visite";

@Injectable()
export class DataDialogService {
  preview: string = "./assets/imgs/img.png";
  currentFile: any;
  progress: any;
  image!: any;


  public dialogData = new RadioVisite('', '', '', new Date())

  constructor(public dialog: MatDialog) {
  }

  get getPreview() {
    return this.preview;
  }

  openDialog() {
    const dialogRef = this.dialog.open(RadioDialogComponent, {
      width: '500px',
      data: new RadioVisite('', '', '', new Date()),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', 'Data : ', result);
      if (result.image != this.preview)
        this.dialogData = result;
    });
  }

  selectFile(event: any) {
    if (event.target.files.length > 0) {
      this.preview = URL.createObjectURL(event.target.files[0])
    }

  }
}
