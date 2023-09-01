import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productForm!:FormGroup;
  productId:string|null=null;

   isEdit:boolean=false;
  constructor(private formbuilder:FormBuilder,private http:HttpService,private activatedroute:ActivatedRoute){

   this.productId= this.activatedroute.snapshot.paramMap.get('id');
   if(this.productId){
      this.isEdit=true;
   }
  }

  ngOnInit(){
this.createFormStructure();
this.getProductDetailsById();
  }
    // PUT METHOD
  getProductDetailsById() {
    let endPoint="products/"+this.productId;
  this.http.getDataToServer(endPoint).subscribe((response:any)=>{
    console.log("Response Received"+response);
    this.productForm.setValue(response)
  },
  
  (error)=>{

  })
  }
  createFormStructure() {
    this.productForm=this.formbuilder.group({
      'id':['',[]],
      'name':['',[]],
      'price':['',[]],
      'category':['',[]],
      'stock':['',[]]
    })
  }

  save(){
    if(this.isEdit)
    {
      this.updateProductDetails();
    }
    else{
      this.saveProductDetails();
    }
  }
 

updateProductDetails(){

  const endPoint="products/"+this.productId;
  this.http.putDataToServer(endPoint,this.productForm.value).subscribe(
    (response:any)=>{

      console.log("Update Successfull",response);
    },
    (error)=>{

    }
  )
}

saveProductDetails(){
  console.log(this.productForm.value);
  this.http.postDataToServer('products', this.productForm.value).subscribe(
    (response: any) => {
      console.log('response', response);
    },
    (error) => {
      console.log(error);
    }
  )
}

}
