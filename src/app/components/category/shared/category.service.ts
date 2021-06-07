import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url: string = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) { }

  listAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  findById(categoryId: any): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${categoryId}`);
  }

  create(category: Category) {
    return this.http.post<Category>(this.url, category);
  }


  delete(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.url}/${id}`)
  }

}
