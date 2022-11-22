export class RadioVisite {
  public nom: string = "";
  public prenom: string = "";
  public dent: string = "";
  public image: string = "./assets/imgs/img.png";
  public dateVisite: Date | undefined = new Date();

  constructor(nom: string, prenom: string, dent: string, dateVisite: Date | undefined, image: string = "./assets/imgs/img.png") {
  }

}
