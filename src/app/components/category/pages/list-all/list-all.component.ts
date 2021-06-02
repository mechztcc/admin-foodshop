import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {


  public categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.listAll()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        console.log(this.categories);
        
      })
  }

}
