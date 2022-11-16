import {Component, OnInit} from '@angular/core';
import {RadioVisite} from "../services/radio.visite";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  cardsData: RadioVisite[] = [
    new RadioVisite('', '', '',undefined, undefined),
    new RadioVisite('', '', '', undefined, undefined),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getCardById(id: number) :RadioVisite {
    return this.cardsData[id] as RadioVisite;
  }

  export() {
  }
}
