import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/category/shared/product';
import { ProductService } from '../../shared/product.service';


import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;

  loading: boolean = false;

  public products: Product[] = [];

  constructor(private titleService: Title, private productService: ProductService, private router: Router, private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.productsInit();
    this.setTitlePage();

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

  toCreatePage() {
    this.router.navigate(['produtos/criar'])
  }

  setTitlePage() {
    this.titleService.setTitle('Produtos')
  }

  delete(id: any) {
    this.productService.delete(id)
      .subscribe({
        next: () => { this.notifierService.notify('success',  `Produto excluído sucesso!`) },
        error: () => { this.notifierService.notify('error',  `Falha ao realizar operação!`) },
      }).add(() => { this.productsInit() })
  }

}
