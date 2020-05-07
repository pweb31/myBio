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
  { path: "legumes", component: ProduitlegumeComponent },
  { path: "pains", component: ProduitpainComponent },
  { path: "viandes", component: ProduitviandeComponent },
  { path: "fromages", component: ProduitfromageComponent },
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
