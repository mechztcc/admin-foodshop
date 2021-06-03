import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Category } from '../../shared/category';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  public routeId: number = 0;
  public category = new Category()

  constructor(private activedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.geCategoryId();
    this.finById();
  }

  geCategoryId() {
    this.activedRoute.params
      .subscribe((param: any) => {
        this.routeId = param.id;
      })
  }

  finById() {
    this.categoryService.findById(this.routeId)
      .subscribe((category: any) => {
        this.category = category;
      })
  }


}
