import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form:any;
  submitted=false;
  constructor(
    private formbuilder:FormBuilder,
    private productService:ProductsService,
    private router:Router,
    private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      title:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
    })
  }

  get f() {return this.form.controls}
  files: File[] = [];

onSelect(event:any) {
  console.log(event.addedFiles[0]);
  this.files=[]
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

  submit(){
    this.submitted=true;
    if(this.form.invalid){return}
    let form={
      ...this.form.value,
      image:this.files[0].name
    }
    this.spinner.show()
    this.productService.addProduct(form).subscribe(res=>{
      this.spinner.hide()
      Swal.fire(
        'Success',
        'The Product added successfully',
        'success'
      )
      console.log('res')
      console.log(res)
      this.router.navigate(['/products/list'])
    })
  }


}
