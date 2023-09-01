import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:3000/";
  httpHeaders:HttpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'authorization-token':'Bearer'+"aaaaaaaaaaaaaaasds"
  })

  constructor(private http:HttpClient) {

   }

   postDataToServer(endPoint:string,body:any){
    const url=this.baseUrl+endPoint;
     return this.http.post(url,body,{headers:this.httpHeaders}).pipe(catchError(this.handleErrorResponse));
   }

   getDataToServer(endPoint:string){
    const url=this.baseUrl+endPoint;
    return this.http.get(url,{headers:this.httpHeaders}).pipe(catchError(this.handleErrorResponse));
   }


   putDataToServer(endPoint:string,body:any){
    const url=this.baseUrl+endPoint;
    return this.http.put(url,body,{headers:this.httpHeaders}).pipe(catchError(this.handleErrorResponse));
   }

   deleteData(endPoint:string){
    const url=this.baseUrl+endPoint;
    return this.http.delete(url,{headers:this.httpHeaders}).pipe(catchError(this.handleErrorResponse));
   }

   handleErrorResponse(error:HttpErrorResponse):any{
    console.log("Error",error);
    if(error.error instanceof ErrorEvent){
        console.log("Client Side Error"+error.error.message);
    }else{
      console.log("Server Side Error"+error.message);
    }
   return throwError("Unable to Process your Request at the moment");
   }
}
