import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category';
import { CategoryService } from '../../shared/category.service';

import { faPen, faTrash, faPlus, faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;
  faPlus = faPlus;
  faSpinner = faSpinner;
  faSync = faSync;

  loading: boolean= false;

  public categories: Category[] = []

  constructor(private titleService: Title, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoriesInit();
    this.setTitlePage();
  }

  categoriesInit() {
    this.loading = !this.loading;
    this.categoryService.listAll()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }).add(() => {
        this.loading = !this.loading;
      })
  }

  edit(productId: number) {
    this.router.navigate(['categorias/editar', productId])
  }

  toCreatePage() {
    this.router.navigate(['/categorias/criar'])
  }

  setTitlePage() {
    this.titleService.setTitle('Categorias')
  }
}
