import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @ViewChild('pdfCard') pdfCard!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  public export() {
    const node: any = document.getElementById('pdfCard')
    htmlToImage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          var newTab = window.open('', 'image depuis la Carte');
          newTab?.document.body.appendChild(img)
          // document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
  }
}
