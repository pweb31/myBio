import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-achattermine',
  templateUrl: './achattermine.component.html',
  styleUrls: ['./achattermine.component.css']
})
export class AchattermineComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  cartItems = [];
  frais:number = 3.00;
  soustotal:number = 0.00;
  total:number = 0.00;
  constructor(private formBuilder: FormBuilder,private panier: PanierService) { 
    this.cartItems = this.panier.getItemsFromCart();
    this.cartItems.forEach(element => console.log('product price : ',element.prix));
    this.cartItems.forEach(element => this.soustotal += element.prix);
    this.total = this.soustotal + this.frais;
    console.log('Sous total : ',this.soustotal);
    console.log('cartitems : ',this.cartItems);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      adr: ['', Validators.required],
      cb: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // si formulaire invalide, on s'arrête.
      if (this.registerForm.invalid) {
          return;
      }

      // s'affiche si les valeurs du formulaires sont valides
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
