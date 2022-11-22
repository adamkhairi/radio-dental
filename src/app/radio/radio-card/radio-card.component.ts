import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RadioVisite} from "../../services/radio.visite";
import {DataDialogService} from "../../services/data-dialog.service";
import {RadioDialogComponent} from "../radio-dialog/radio-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss'],
  providers: [DataDialogService]
})
export class RadioCardComponent implements OnInit, OnChanges {
  public data: RadioVisite =new RadioVisite('', '', '', new Date());
  public preview: string = "./assets/imgs/img.png";

  constructor(public service: DataDialogService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log(changes['service'].currentValue)
    console.log(changes['service'].previousValue)
    this.data = changes['service'].currentValue?.dialogData
  }

  openDialog() {
    const dialogRef = this.dialog.open(RadioDialogComponent, {
      width: '500px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', 'Data : ', result);
      if (result.image != this.preview)
        this.data = result;
    });
  }

}
