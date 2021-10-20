import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: "app-userlogin",
    templateUrl: "userlogin.component.html",
    styleUrls: ["userlogin.component.scss"]
  })
  
  export class UserloginComponent { 
    userForm:FormGroup;
  
    constructor(private router:Router){
      this.userForm = new FormGroup({
          "userName": new FormControl("", [
              Validators.required,
              Validators.maxLength(12),
              Validators.minLength(4)
          ]),
          "password":new FormControl("", [Validators.required,
            Validators.maxLength(12),
            Validators.minLength(4)])
      });
  }

  onSubmit(){
      console.log(this.userForm)
      console.log(this.userForm.value)

      if(this.userForm.valid){
          console.log("send request to server")
          this.router.navigate(["/welcomeuser/"]);
      }

  }


    // ngOnInit() {
    //     this.userForm = this.formBuilder.group({
    //      userName: [''],
    //       passWord: [''],
    //     });
    //   }
    
  }
  
  
  