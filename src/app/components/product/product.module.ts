import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListAllComponent } from './pages/list-all/list-all.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListAllComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductModule { }
