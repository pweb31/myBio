import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-produitviande',
  templateUrl: './produitviande.component.html',
  styleUrls: ['./produitviande.component.css']
})
export class ProduitviandeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private viandeService: CategoriesmockService) { }

  id:number;
  viandeCategorie={};
  categorieTrouve;

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.viandeService.getCategorie(this.id).subscribe(data=>this.viandeCategorie=data);
  }

  processReq(message: any){
    console.log("message du fils :",message);
    this.viandeService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       console.log("categorie choisie est  : ", this.categorieTrouve);
       console.log("index choisi est  : ", this.categorieTrouve.id);
     },err=>{

     });

  }

}
