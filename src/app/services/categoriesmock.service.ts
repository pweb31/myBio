import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const CATEGORIES = [
  {id: 1, nom: 'FROMAGES',url: 'assets/categories/FROMAGES.jpg', 
  produit: [
  	{id: 1,nom:"GRUYERE", prix: 2.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/GRUYERE.png'},
  	{id: 7,nom:"LAIT", prix: 1.20,description:"pack", derniere_maj: "2013-07-06 22:00:00",url: 'assets/produits/LAIT.png'},
  	{id: 10,nom:"OEUFS", prix: 2.30,description:"6", derniere_maj: "2013-07-06 22:00:00",url: 'assets/produits/OEUFS.png'}

  	]
  },
  {id: 2, nom: 'PAINS', url: 'assets/categories/PAINS.jpg', 
  	produit: [
  		{id: 2,nom:"PIZZA", prix: 6.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/PIZZA.png'},
  		{id: 11,nom:"PAIN", prix: 1.60,description:"pièce", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/PAIN.png'},
  		{id: 7,nom:"CROISSANT", prix: 1.60,description:"unite", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/CROISSANT.png'}
  	]
  },
  {id: 3, nom: 'LEGUMES',  url: 'assets/categories/LEGUMES.jpg', 
  	produit: [
  		{id: 3,nom:"RADIS", prix: 4.80,description:"kg", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/RADIS.png'},
  		{id: 4,nom:"CAROTTES", prix: 1.80,description:"kg", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/CAROTTES.png'},
  		{id: 5,nom:"TOMATES", prix: 1.50,description:"kg", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/TOMATES.png'}
  	]
  },
  {id: 4, nom: 'VIANDES',  url: 'assets/categories/VIANDES.jpg', 
  	produit: [
  		{id: 13,nom:"PORC", prix: 12.50,description:"plaquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/PORC.png'},
  		{id: 6,nom:"JAMBON", prix: 8.50,description:"kg", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/JAMBON.png'},
  		{id: 15,nom:"SAUCISSON", prix: 1.60,description:"barquette", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/SAUCISSON.png'},
  		{id: 14,nom:"POULET", prix: 1.60,description:"kg", derniere_maj: "2013-10-18 07:59:14",url: 'assets/produits/POULET.png'}
  	]
  },
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
