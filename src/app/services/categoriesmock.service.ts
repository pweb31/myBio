import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const CATEGORIES = [
  {id: 1, nom: 'FROMAGES',url: 'assets/categories/FROMAGES.jpg', produit: [{id: 1,nom:"GRUYERE", prix: 2.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produts/GRUYERE.png'}]},
  {id: 2, nom: 'PAINS', url: 'assets/categories/PAINS.jpg', produit: [{id: 1,nom:"PIZZA", prix: 6.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produts/PIZZA.png'}]},
  {id: 3, nom: 'LEGUMES',  url: 'assets/categories/LEGUMES.jpg', produit: [{id: 1,nom:"RADIS", prix: 1.80,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produts/RADIS.png'}]},
  {id: 4, nom: 'VIANDES',  url: 'assets/categories/VIANDES.jpg', produit: [{id: 1,nom:"PORC", prix: 12.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produts/PORC.png'}]},
];

@Injectable({
  providedIn: 'root'
})
export class CategoriesmockService {

  constructor() { }

  getCategories() { return of(CATEGORIES); }


  getCategorie(id: number | string) {
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map(categories => categories.find(categorie => categorie.id === +id))
    );
  }

  getCategoriesByNom(nom: string){
    return this.getCategories().pipe(
      map(categories => categories.filter(cat => cat.nom === nom))
    )
  }

}
