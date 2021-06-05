import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { ListAllComponent } from './pages/list-all/list-all.component';

const routes: Routes = [
  { path: '', component: ListAllComponent },
  { path: 'criar', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
