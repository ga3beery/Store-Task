import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {path:'',component:MainComponent},
  // here i enabled lazy loading
  {path:'products',loadChildren:()=>ProductsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
