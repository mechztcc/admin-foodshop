import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url: string = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Category[]>(this.url);
  }
}
