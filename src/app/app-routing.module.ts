import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'categorias', loadChildren: () => import('src/app/components/category/category.module').then(m => m.CategoryModule)},
  { path: 'produtos', loadChildren: () => import('src/app/components/product/product.module').then(m => m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
