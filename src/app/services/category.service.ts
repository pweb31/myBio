import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  findAllCategories() {
    return this.http.get<Category[]>(AppSettings.APP_URL + "/categories/");
  }

  findCategoryById(idCategory: number) {
    return this.http.get<Category>(AppSettings.APP_URL + "/categorie/" + idCategory);
  }

  saveCategory(category: Category) {
    this.http.post<Category>(AppSettings.APP_URL + "/categorie/", category);
  }
}
