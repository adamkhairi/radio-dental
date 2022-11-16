import {Injectable} from '@angular/core';

@Injectable()
export class PhotoHolderService {
  preview: any;
  currentFile: any;
  progress: any;
  image!: any;
  public reader = new FileReader();

  constructor() {
  }

  async selectFile(event: any){
    debugger

    this.preview = '';
    this.image = event.target.files[0];
    if (this.image) {
      const file: any = this.image;
      if (file) {
        this.preview = '';
        this.currentFile = file;
        this.reader.onload = (e: ProgressEvent<FileReader>) => {
          debugger
          console.log(e.target?.result);
          this.preview = e.target?.result;
        };
        this.reader.readAsDataURL(this.currentFile);
      }
    }
    return this.preview;
  }

  get getPreview() {
    return this.preview;
  }
}
