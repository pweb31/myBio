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
  constructor(private route:ActivatedRoute, private router : Router, private categorieService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.categorieService.getCategorie(this.id).subscribe(data=>this.fromageCategorie=data);
  }

  processReq(message: any){
    console.log("message du composant fils cote pere :",message);
     this.categorieService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{
         console.log("erreur obtenue :",err);
     });
     

  }

}
