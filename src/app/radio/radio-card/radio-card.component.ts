import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RadioVisite} from "../../services/radio.visite";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss'],

})
export class RadioCardComponent implements OnInit ,OnChanges {
 public data!: RadioVisite;
  constructor(public dialogService:DialogService) { }

  ngOnInit(): void {
    this.data = new RadioVisite('','','',new Date())
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['dialogService']?.currentValue.dialogData
  }



}
