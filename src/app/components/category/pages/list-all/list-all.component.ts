import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category';
import { CategoryService } from '../../shared/category.service';

import { faPen, faTrash, } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  public categories: Category[] = []

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesInit();
  }

  categoriesInit() {
    this.categoryService.listAll()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        console.log(this.categories);
        
      })
  }

  edit(productId: number) {
    this.router.navigate(['categorias/editar', productId])
  }

}
