import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID,  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduitviandeComponent } from './produits/produitviande/produitviande.component';
import { ProduitlegumeComponent } from './produits/produitlegume/produitlegume.component';
import { ProduitpainComponent } from './produits/produitpain/produitpain.component';
import { ProduitfromageComponent } from './produits/produitfromage/produitfromage.component';
import { ProduitresultComponent } from './shared/produitresult/produitresult.component';
import { AchattermineComponent } from './achattermine/achattermine.component';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');

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
    ProduitresultComponent,
    AchattermineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
