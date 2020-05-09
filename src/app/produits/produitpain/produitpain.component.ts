import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from"@angular/router";
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-produitpain',
  templateUrl: './produitpain.component.html',
  styleUrls: ['./produitpain.component.css']
})
export class ProduitpainComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router : Router, private painService: CategoriesmockService) { }

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
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{

     });

  }

}
