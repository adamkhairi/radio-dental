import {Component, OnInit} from '@angular/core';
import {RadioVisite} from "../services/radio.visite";
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  public cardData1: RadioVisite | undefined;
  public cardData2: RadioVisite | undefined;

  constructor(public service: DialogService) {
  }

  ngOnInit(): void {
  }

  addCard() {
    this.service.openDialog()
    this.cardData1 = this.service.dialogData
  }


  export() {

  }
}
