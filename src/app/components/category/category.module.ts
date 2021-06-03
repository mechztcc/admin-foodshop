import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListAllComponent } from './pages/list-all/list-all.component';
import { EditComponent } from './pages/edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListAllComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FontAwesomeModule
  ]
})
export class CategoryModule { }
