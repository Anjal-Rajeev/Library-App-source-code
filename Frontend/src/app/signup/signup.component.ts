import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  signupStatus:any
  msg:any

  constructor(private book: BookService, private router:Router, private fb:FormBuilder) { }

  // data= this.fb.group({
  //   name: '',
  //   email: '',
  //   password: ''
  // })
   data: any = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(6)])
  })
  ngOnInit(): void {
  }

  // get f(){
  //   return this.data.controls;
  // }


  signupfunction(data:any){
    console.log("front end",data.value)
    // if(data.value.email=='' && data.value.password== ''){
    //   this.msg = 'Enter required details'
    // }
    this.book.signup(data.value).subscribe(res=>{
      console.log(res)
      this.signupStatus = res;
      if(this.signupStatus.status == '1'){
        console.log("signup success");
        this.router.navigateByUrl('home');
      }
      else if(this.signupStatus.status == '2'){
        this.msg = 'Enter required details'
      }
      else{
        console.log("signup failed");
        this.msg = 'Email ID already exists'
      }

    })
  }

}
