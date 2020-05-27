import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  cartItems = [];
  totalAmount;

  constructor(private router: Router) { }

  addItemsToCart = (product) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        nom: product.nom,
        prix: product.prix,
        description: product.description,
        derniere_maj: product.derniere_maj,
        quantity: 1,
        url: product.url
      });
    }
    this.getTotalAmount();
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.prix );
      });
      return {
        totalAmount: this.totalAmount
      };
    }
  }

  getItemsFromCart = () => {
    return this.cartItems;
  }
  getCartCount = () => {
    if (this.cartItems) {
      let cartCount = 0;
      this.cartItems.forEach((item) => {
        cartCount += item.quantity;
      });
      return cartCount;
    }
  }

  clearCart = () => {
    this.cartItems = [];
    this.router.navigate(['']);
  }

  removeFromCart = (product) => {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
  }

  decrementFromCart = (product) => {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }

  getProductList = () => {
    return [
      // tslint:disable-next-line: no-unused-expression
      {
        "id": "1",
        "nom": "FROMAGES",
        "url": "assets/categories/FROMAGES.jpg",
        "produits": [
        {
	        "id": "1",
	        "nom": "GRUYERE",
	        "prix": 2.50,
	        "description": "plaquette",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/GRUYERE.png"
        },
        {
	        "id": "2",
	        "nom": "LAIT",
	        "prix": 2.50,
	        "description": "pack",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/LAIT.png"
        },
        {
	        "id": "3",
	        "nom": "OEUF",
	        "prix": 2.30,
	        "description": 6,
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/OEUF.png"
        },
        {
	        "id": "4",
	        "nom": "TOME",
	        "prix": 2.50,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/TOME.png"
        },
        ]
      },
      {
        "id": "2",
        "nom": "PAINS",
        "url": "assets/categories/PAINS.jpg",
        "produits": [
        {
	        "id": "1",
	        "nom": "PIZZA",
	        "prix": 6.50,
	        "description": "unité",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/PIZZA.png"
        },
        {
	        "id": "2",
	        "nom": "PAIN",
	        "prix": 1.15,
	        "description": "piece",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/PAIN.png"
        },
        {
	        "id": "3",
	        "nom": "CROISSANT",
	        "prix": 0.80,
	        "description": "unité",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/CROISSANT.png"
        },
        {
	        "id": "4",
	        "nom": "COOKIES",
	        "prix": 0.50,
	        "description": "piece",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/COOKIES.png"
        },
        ]
      },
      {
        "id": "3",
        "nom": "LEGUMES",
        "url": "assets/categories/LEGUMES.jpg",
        "produits": [
        {
	        "id": "1",
	        "nom": "RADIS",
	        "prix": 1.18,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/RADIS.png"
        },
        {
	        "id": "2",
	        "nom": "CAROTTES",
	        "prix": 1.45,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/CAROTTES.png"
        },
        {
	        "id": "3",
	        "nom": "TOMATES",
	        "prix": 2.90,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/TOMATES.png"
        },
        {
	        "id": "4",
	        "nom": "MAIS",
	        "prix": 0.75,
	        "description": "piece",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/MAIS.png"
        },
        ]
      },
      {
        "id": "4",
        "nom": "VIANDES",
        "url": "assets/categories/VIANDES.jpg",
        "produits": [
        {
	        "id": "1",
	        "nom": "PORC",
	        "prix": 16.50,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/PORC.png"
        },
        {
	        "id": "2",
	        "nom": "JAMBON",
	        "prix": 1.15,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/JAMBON.png"
        },
        {
	        "id": "3",
	        "nom": "SAUCISSON",
	        "prix": 1.35,
	        "description": "barquette",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/SAUCISSON.png"
        },
        {
	        "id": "4",
	        "nom": "POULET",
	        "prix": 5.35,
	        "description": "kg",
	        "derniere_maj": "2013-10-18 07:59:14",
	        "url": "assets/produits/POULET.png"
        },
        ]
      }
    ];
  }

}
