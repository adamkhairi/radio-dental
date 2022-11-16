import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RadioVisite} from "../../services/radio.visite";
import {DataDialogService} from "../../services/data-dialog.service";

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss'],
  providers: [DataDialogService]

})
export class RadioCardComponent implements OnInit, OnChanges {
  @Input() data: RadioVisite | undefined;

  constructor(public service: DataDialogService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


}
