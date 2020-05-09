import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-produitviande',
  templateUrl: './produitviande.component.html',
  styleUrls: ['./produitviande.component.css']
})
export class ProduitviandeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router : Router, private viandeService: CategoriesmockService) { }

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
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{

     });

  }

}
