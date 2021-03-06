import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:any;
  constructor(
    @Inject(MAT_DIALOG_DATA)public product_id: {product_id: string},
    private productService:ProductsService,
    private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.productDetails(this.product_id)
  }

  productDetails(product_id:any){
    this.spinner.show()
    this.productService.productDetails(product_id).subscribe(res=>{
      this.spinner.hide()
      this.product=res
    })
  }
}
