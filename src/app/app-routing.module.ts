import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ProduitlegumeComponent } from "./produits/produitlegume/produitlegume.component";
import { ProduitpainComponent } from "./produits/produitpain/produitpain.component";
import { ProduitviandeComponent } from "./produits/produitviande/produitviande.component";
import { ProduitfromageComponent } from "./produits/produitfromage/produitfromage.component";
import { PanierComponent } from "./panier/panier.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "legumes/:id", component: ProduitlegumeComponent },
  { path: "pains/:id", component: ProduitpainComponent },
  { path: "viandes/:id", component: ProduitviandeComponent },
  { path: "fromages/:id", component: ProduitfromageComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "panier", component: PanierComponent },
  { path: "**", component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
