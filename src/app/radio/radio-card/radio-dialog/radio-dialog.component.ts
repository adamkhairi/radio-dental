import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RadioVisite} from "../../../services/radio.visite";
import {DataDialogService} from "../../../services/data-dialog.service";

@Component({
  selector: 'app-radio-dialog',
  templateUrl: './radio-dialog.component.html',
  styleUrls: ['./radio-dialog.component.scss']
})
export class RadioDialogComponent implements OnInit {
  @Output() saveData: EventEmitter<any> = new EventEmitter();
  constructor(
      public dialogRef: MatDialogRef<RadioDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: RadioVisite, //TODO: Create Type / Interface of Data,
      public service: DataDialogService
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectFile($event: Event) {
    this.service.selectFile($event).subscribe((data:any) =>{
    debugger

    this.data.image = data
    console.log(this.data.image)
    });
  }

  save() {

  }
}

