import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListAllComponent } from './pages/list-all/list-all.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAllComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule { }
