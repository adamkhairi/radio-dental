export class RadioVisite {
  public nom: string = "";
  public prenom: string = "";
  public dent: string = "";
  public image: string | ArrayBuffer | undefined ;
  public dateVisite: Date | undefined = new Date();

  constructor(nom: string, prenom: string, dent: string,dateVisite: Date | undefined ,image: string | ArrayBuffer | undefined= "./assets/imgs/img.png" ) {
  }

}
