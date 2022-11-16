import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataDialogService} from "../../../services/data-dialog.service";

@Component({
  selector: 'app-photo-holder',
  templateUrl: './photo-holder.component.html',
  styleUrls: ['./photo-holder.component.scss'],
  providers: [DataDialogService]

})
export class PhotoHolderComponent implements OnInit {


  constructor(public service:DataDialogService) { }

  ngOnInit(): void {
  }



}
