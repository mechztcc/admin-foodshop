import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/category/shared/product';
import { ProductService } from '../../shared/product.service';


import { faPen, faTrash, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  loading: boolean = false;

  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsInit();

  }

  productsInit() {
    this.loading = !this.loading;
    this.productService.listAll()
    .subscribe((products: Product[]) => {
      this.products = products;
    }).add(() => {
      this.loading = !this.loading;
    })
    
  }

  


}
