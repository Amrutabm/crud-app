import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpService){

  }

  ngOnInit(){
    this.createForm();

  }

  createForm(){
    this.signUpForm=this.fb.group({
      'name':[''],
      'mobileno':[''],
      'email':[''],
      'password':['']
    })
  }

  signUp(){
    console.log(this.signUpForm.value);
    this.http.postDataToServer('users',this.signUpForm.value).subscribe(
      (response:any)=>{

        console.log(response);
      },
      (error)=>{

      }
    )
  }

}
