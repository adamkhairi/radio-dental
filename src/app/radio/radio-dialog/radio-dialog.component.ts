import {Component, EventEmitter, Inject, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RadioVisite} from "../../services/radio.visite";
import {DataDialogService} from "../../services/data-dialog.service";

@Component({
  selector: 'app-radio-dialog',
  templateUrl: './radio-dialog.component.html',
  styleUrls: ['./radio-dialog.component.scss'],

})
export class RadioDialogComponent implements OnInit ,OnChanges{
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
    debugger
    this.service.selectFile1($event).then((r) => {
      this.data.image = r
    })
    // this.data.image = this.service.preview
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log(changes['service'].currentValue)
    console.log(changes['service'].previousValue)
    this.data = changes['service'].currentValue?.dialogData
  }
}

