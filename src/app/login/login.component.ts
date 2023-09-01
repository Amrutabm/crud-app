import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup
  isNewUser!:boolean;

  constructor(private fb:FormBuilder,private http:HttpService,private router:Router){

  }

  ngOnInit(){
    this.createForm();

  }

  createForm(){
    this.loginForm=this.fb.group({
     
      'email':[''],
      'password':['']
    })
  }

  login(){
    console.log("Login call Initiated");
    const endPoint="users?email="+this.loginForm.value.email+"&&password="+this.loginForm.value.password;
    this.http.getDataToServer(endPoint).subscribe((el:any)=>{
      console.log("Login Success");
        if(el && el.length>0){
          this.isNewUser=false;
          this.router.navigate(['/home'])
        }else{
          this.isNewUser=true;
        }
    })
    
  }

}
