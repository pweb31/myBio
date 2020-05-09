import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-produitresult',
  templateUrl: './produitresult.component.html',
  styleUrls: ['./produitresult.component.css']
})
export class ProduitresultComponent implements OnInit {
	fromage = 'FROMAGES';
	pain = 'PAINS';
	legume = 'LEGUMES';
	viande = 'VIANDES';
	categorieName:string

  constructor() { }

   @Input()
  public result: Categorie;
 @Output()
  sendRequestData = new EventEmitter(); // Emetteur d'évènement

  ngOnInit(): void {
  	console.log("categorie selectionne du cote parent : ",this.result);
  }

  getCategoryName(catName:string) {
  	console.log("categorie nom : "+catName);
  	this.sendRequestData.emit(catName);
  }

  sendEvent(){
  	this.sendRequestData.emit(this.categorieName);
  }

}
