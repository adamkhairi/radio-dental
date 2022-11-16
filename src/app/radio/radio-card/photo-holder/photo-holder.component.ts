import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PhotoHolderService} from "../../../services/photo-holder.service";

@Component({
  selector: 'app-photo-holder',
  templateUrl: './photo-holder.component.html',
  styleUrls: ['./photo-holder.component.scss'],
  providers: [PhotoHolderService]

})
export class PhotoHolderComponent implements OnInit {


  constructor(public service:PhotoHolderService) { }

  ngOnInit(): void {
  }



}
