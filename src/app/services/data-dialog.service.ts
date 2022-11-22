import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RadioDialogComponent} from "../radio/radio-dialog/radio-dialog.component";
import {RadioVisite} from "./radio.visite";
import {of} from "rxjs";

@Injectable()
export class DataDialogService {
  preview: string = "./assets/imgs/img.png";
  progress: any;
  image!: any;


  public dialogData = new RadioVisite('', '', '', new Date())

  constructor(public dialog: MatDialog) {
  }

  get getPreview() {
    return this.preview;
  }
  //
  // openDialog() {
  //   const dialogRef = this.dialog.open(RadioDialogComponent, {
  //     width: '500px',
  //     data: new RadioVisite('', '', '', new Date()),
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', 'Data : ', result);
  //     if (result.image != this.preview)
  //       this.dialogData = result;
  //   });
  // }

  selectFile(event: any) {
    if (event.target.files.length > 0) {
      this.preview = URL.createObjectURL(event.target.files[0])
    }
  }

  isImageSaved: boolean = false;

  selectFile1(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
     return this.readBlob(fileInput.target.files[0])
      // const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   const image = new Image();
      //   image.src = e.target.result;
      //   image.onload = rs => {
      //     const imgBase64Path = e.target.result;
      //     this.preview = imgBase64Path;
      //     this.dialogData.image = imgBase64Path;
      //     this.isImageSaved = true;
      //     console.log(imgBase64Path);
      //   };
      // };
      // reader.readAsDataURL(fileInput.target.files[0]);
    }
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => this.preview)
  }

  readBlob(blob:Blob) {
    return new Promise<string | ArrayBuffer|null>((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = reject;
      reader.onabort = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(new Blob([blob], { type: blob.type }));
    });
  }
}
