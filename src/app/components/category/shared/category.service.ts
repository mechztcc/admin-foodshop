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

  findById(productId: any): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`);
  }
}
