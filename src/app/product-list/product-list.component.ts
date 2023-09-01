import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:any=[];

  constructor(private http:HttpService){

  }

  ngOnInit(){
    this.getProduct()
  }
  getProduct() {
    console.log("Gets Products Call Initiated");
   this.http.getDataToServer('products').subscribe((response:any)=>{
    if(response && response.length>0){
        this.productList=response;
    }
   },
   (error)=>{
    alert(error);
   }
   )
  }

  deleteProduct(index:number,productObj:any){

    
    const endPoint="products/"+productObj.id;
    this.http.deleteData(endPoint).subscribe((el:any)=>{
      console.log("Got Product List Response");
      this.productList.splice(index,1);
      alert("Data Deleted Successfully");
    },

    (error)=>{
      alert(error);
    }
    )
  }

}
