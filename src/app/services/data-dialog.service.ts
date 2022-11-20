import {Inject, Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RadioDialogComponent} from "../radio/radio-card/radio-dialog/radio-dialog.component";
import {RadioVisite} from "./radio.visite";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataDialogService {
  preview: any;
  currentFile: any;
  progress: any;
  image!: any;
  public reader = new FileReader();

  public dialogData: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RadioDialogComponent, {
      width: '500px',
      data: new RadioVisite('', '', '', new Date()),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', 'Data : ', result);
      this.dialogData = result;
    });
  }

  selectFile(event: any): Observable<string | ArrayBuffer | undefined> {
     debugger

    this.preview = '';
    this.image = event.target.files[0];
    const file: any = this.image;
    
    if (file) {
      this.preview = '';
      this.currentFile = file;
      let base64: any;
      this.reader.onload = (e: ProgressEvent<FileReader>) => {
        debugger
        console.log(e.target?.result);
        this.preview = e.target?.result;
        base64 = e.target?.result;
      };
      this.reader.readAsDataURL(this.currentFile);
      return of(this.currentFile);
    } else {
      return of(this.preview)
    }

  }

  get getPreview() {
    return this.preview;
  }
}
