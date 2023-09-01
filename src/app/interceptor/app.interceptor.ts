import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable() 
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    console.log("Request Intercepted",request);
    //get the token from Session storage
    if(request.url.includes('login')){

    }else{
    const token="Bearer"+"AMRUTA";
    request=request.clone({setHeaders:{'authorization-header':token}});
    }

    return next.handle(request).pipe(map((response:any)=>{
      console.log("Response Received");
      return response;
    }),
    catchError(this.handleErrorResponse)
    );
    
  }
  handleErrorResponse(error:HttpErrorResponse):any{
    console.log(error);
    if(error.error instanceof ErrorEvent){
      console.log("Client Side Error",error.error.message);
    }else
    {
      console.log("Server Side Error",error.message);
    }
    return throwError("Enable to Process your Request Error");
  }
}
