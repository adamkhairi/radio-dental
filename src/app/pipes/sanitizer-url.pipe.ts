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

  transform(value: string): SafeUrl {
    let result = this.sanitize.bypassSecurityTrustUrl(value)
    return value == this.defaultImgUrl ? value : result;
  }

}
