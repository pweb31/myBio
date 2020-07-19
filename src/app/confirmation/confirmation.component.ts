import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  frais:number = 3.00;
  soustotal:number = 0.00;
  cartItems = [];
  total:number = 0.00;
  lastname;
  firstname;
  adresse;
  email;
  tel;
  numCommande;
  curDate=new Date();
  ;
  constructor(private panier: PanierService, private route: ActivatedRoute) {
    this.cartItems = this.panier.getItemsFromCart();
    this.cartItems.forEach(element => console.log('elem : ',element));
    this.cartItems.forEach(element => console.log('product price : ',element.prix));
    this.cartItems.forEach(element => this.soustotal += element.prix);
    this.total = this.soustotal + this.frais;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.firstname = params['firstname'];
      this.lastname = params['lastname'];
      this.adresse = params['adr'];
      this.email = params['email'];
      this.tel = params['tel'];
     })

     console.log('firstname : ',this.firstname);
     console.log('lastname : ',this.lastname);

     this.numCommande = this.generateNumCommande();
  }

  generateNumCommande() {
    return Math.random().toString().slice(2,11)
  }

}
