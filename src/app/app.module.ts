import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduitviandeComponent } from './produits/produitviande/produitviande.component';
import { ProduitlegumeComponent } from './produits/produitlegume/produitlegume.component';
import { ProduitpainComponent } from './produits/produitpain/produitpain.component';
import { ProduitfromageComponent } from './produits/produitfromage/produitfromage.component';
import { ProduitresultComponent } from './shared/produitresult/produitresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanierComponent,
    PagenotfoundComponent,
    ProduitviandeComponent,
    ProduitlegumeComponent,
    ProduitpainComponent,
    ProduitfromageComponent,
    ProduitresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
