import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,from } from 'rxjs';
import { CategoriesmockService } from '../services/categoriesmock.service';
import { CategoryService } from '../services/category.service';
import { Categorie } from '../models/categorie';
import { Category } from '../models/categorie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 category;
 categorie;
 listCategory: Category[];

  constructor(private service: CategoriesmockService, private categoryService : CategoryService, private router : Router) { }

  ngOnInit(): void {
      this.service.getCategories().subscribe(data=>{
        this.category = data;
     },err=>{
     	console.log("Erreur retourne : ",err);
     });

      this.findAllCategories()
  }

  findAllCategories() {
    this.categoryService.findAllCategories()
      .pipe()
      .subscribe(data => {
        console.log("Category from database : ",data);
        this.listCategory = data;
      }, error => {
        console.log(error);
      });
  }

  detailCategorie(id:number){

  	 this.service.getCategorie(id).subscribe(data=>{
        this.categorie = data;

        let nomCategorie : string = this.categorie.nom;

        switch (nomCategorie) {
    case 'FROMAGES':
        this.router.navigate(["/fromages",id]);
        break;
    case 'PAINS':
        this.router.navigate(["/pains",id]);
        break;
    case 'LEGUMES':
        this.router.navigate(["/legumes",id]);
        break;
    case 'VIANDES':
        this.router.navigate(["/viandes",id]);
        break;
    default:
        console.log("No categorie exists!");
        break;
	}

     },err=>{
     	console.log("Erreur retourne categorie choisie : ",err);
     });

  }

}
