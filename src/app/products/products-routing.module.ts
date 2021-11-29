import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {path:'add',component:AddProductComponent},
  {path:'list',component:ProductsListComponent},
  {path:'details/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
