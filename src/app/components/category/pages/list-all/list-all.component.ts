import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.sass']
})
export class ListAllComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.listAll().subscribe(console.log)
  }

}
