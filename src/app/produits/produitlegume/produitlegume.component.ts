import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-produitlegume',
  templateUrl: './produitlegume.component.html',
  styleUrls: ['./produitlegume.component.css']
})
export class ProduitlegumeComponent implements OnInit {

  id:number;
  legumeCategorie={};
  categorieTrouve;

  constructor(private route:ActivatedRoute,private legumeService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.legumeService.getCategorie(this.id).subscribe(data=>this.legumeCategorie=data);
  }

  processReq(message: any){
    console.log("message du fils :",message);
    this.legumeService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       console.log("categorie choisie est  : ", this.categorieTrouve);
       console.log("index choisi est  : ", this.categorieTrouve.id);
     },err=>{

     });


  }

}
