import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../category/shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'http://localhost:8080/produtos'

  constructor(private http: HttpClient) { }

  listAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  findById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`)
  }
}
