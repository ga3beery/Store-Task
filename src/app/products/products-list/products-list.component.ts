import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from 'src/app/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:any;
  constructor(
    private productService:ProductsService,
    private dialog:MatDialog,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.spinner.show()
    this.productService.getProducts().subscribe(res=>{
      this.spinner.hide()
      this.products=res
    })
  }

  productDetails(product_id:any){
    let dialogRef = this.dialog.open(ProductDetailsComponent, {
      data:product_id,
      height: '600px',
      width: '600px',
    });
  }
}
