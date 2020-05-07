export class Produit {
  constructor(public id: number,
    public prix: number,
    public nom: string,
    public description: string,
    public derniere_maj: string,
    public url: string) { }
}
