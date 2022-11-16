export class RadioVisite {
  public nom: string = "";
  public prenom: string = "";
  public dent: string = "";
  public image: string | ArrayBuffer | undefined = "src/assets/imgs/img.png";
  public dateVisite: Date | undefined = new Date();

  constructor(nom: string, prenom: string, dent: string, image: string | ArrayBuffer | undefined, dateVisite: Date | undefined) {
  }

}
