import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  cartItems = [];
  cartTotalValue;

  constructor(private panier: PanierService) { 
  	this.cartItems = this.panier.getItemsFromCart();
  }

  ngOnInit(): void {
  }

  handelRemoveItem = (product) => {
    this.panier.removeFromCart(product);
    this.cartItems = this.panier.getItemsFromCart();
    this.cartTotalValue =  this.panier.getTotalAmount();
  }

  handleIncrement = (product) => {
    this.panier.addItemsToCart(product);
    this.cartTotalValue =  this.panier.getTotalAmount();
  }

  handleDecriment = (product) => {
    this.panier.decrementFromCart(product);
    this.cartTotalValue =  this.panier.getTotalAmount();
  }

}
