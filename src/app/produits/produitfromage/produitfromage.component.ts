import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';
@Component({
  selector: 'app-produitfromage',
  templateUrl: './produitfromage.component.html',
  styleUrls: ['./produitfromage.component.css']
})
export class ProduitfromageComponent implements OnInit {

  id:number;
  fromageCategorie={};
  categorieTrouve;
  constructor(private route:ActivatedRoute,private categorieService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.categorieService.getCategorie(this.id).subscribe(data=>this.fromageCategorie=data);
  }

  processReq(message: any){
    console.log("message du fils :",message);
     this.categorieService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       console.log("categorie choisie est  : ", this.categorieTrouve);
       console.log("index choisi est  : ", this.categorieTrouve.id);
     },err=>{

     });
     

  }

}
