import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RadioVisite} from "../../../services/radio.visite";
import {PhotoHolderService} from "../../../services/photo-holder.service";

@Component({
  selector: 'app-radio-dialog',
  templateUrl: './radio-dialog.component.html',
  styleUrls: ['./radio-dialog.component.scss'],
  providers: [PhotoHolderService]
})
export class RadioDialogComponent implements OnInit {
  constructor(
      public dialogRef: MatDialogRef<RadioDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: RadioVisite, //TODO: Create Type / Interface of Data,
      public photoService: PhotoHolderService
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectFile($event: Event) {
    this.photoService.selectFile($event).finally(() =>{

    this.data.image = this.photoService.preview
    console.log(this.data.image)
    });
  }
}

