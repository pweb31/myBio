import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBio';
  logo = 'assets/logo2.png';

  panier = {
    "nbItems":0
  };
}
