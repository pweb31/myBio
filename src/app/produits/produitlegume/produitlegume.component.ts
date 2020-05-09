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

  constructor(private route:ActivatedRoute, private router : Router, private legumeService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.id=+this.route.snapshot.params['id'];
  	this.legumeService.getCategorie(this.id).subscribe(data=>this.legumeCategorie=data);
  }

  processReq(message: any){
    console.log("message du composant fils cote pere:",message);
    this.legumeService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{

     });


  }

}
