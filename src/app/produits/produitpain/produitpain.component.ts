import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-produitpain',
  templateUrl: './produitpain.component.html',
  styleUrls: ['./produitpain.component.css']
})
export class ProduitpainComponent implements OnInit {

  constructor(private route:ActivatedRoute,private painService: CategoriesmockService) { }

  id:number;
  painCategorie={};
  categorieTrouve;

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.painService.getCategorie(this.id).subscribe(data=>this.painCategorie=data);
  }

  processReq(message: any){
    console.log("message du fils :",message);
    this.painService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       console.log("categorie choisie est  : ", this.categorieTrouve);
       console.log("index choisi est  : ", this.categorieTrouve.id);
     },err=>{

     });

  }

}
