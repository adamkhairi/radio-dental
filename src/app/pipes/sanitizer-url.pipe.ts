import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Pipe({
  name: 'sanitizerUrl'
})
export class SanitizerUrlPipe implements PipeTransform {
  private defaultImgUrl = "./assets/imgs/img.png"

  constructor(
      private sanitize: DomSanitizer
  ) {
  }

  transform(value: string | ArrayBuffer|null): SafeUrl {

    if (typeof value === 'string' && value !== this.defaultImgUrl) {
      return this.sanitize.bypassSecurityTrustUrl(value)
    } else {
      return this.defaultImgUrl
    }
    // return value == this.defaultImgUrl && typeof value === 'string' ? value : result;
  }

}
