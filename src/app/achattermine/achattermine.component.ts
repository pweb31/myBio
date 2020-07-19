import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  // Numero de téléphone à dix chiffres commençant par 06 ou 07
  mobNumberPattern = "^0[6-7][\d]{8}$"; 
  constructor(private formBuilder: FormBuilder,private panier: PanierService, private router: Router) { 
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
      // tel: ['', [Validators.required, Validators.pattern(new RegExp("^0[6-7][\d]{8}$"))]],
      tel: ['', [Validators.required, Validators.pattern("0[6-7][0-9 ]{8}")]],
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

      //this.router.navigate(['/confirmation']);
      
      const firstname = this.registerForm.get('firstName').value;
      const lastname = this.registerForm.get('lastName').value;
      const email = this.registerForm.get('email').value;
      const adresse = this.registerForm.get('adr').value;
      const telephone = this.registerForm.get('tel').value;

 this.router.navigate(['/confirmation' , firstname, lastname, email, adresse, telephone]);

      // s'affiche si les valeurs du formulaires sont valides
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
