import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from 'src/flightPage/services/UserService/user.service';
import { UserEntity } from 'src/flightPage/models/userEntity';
import { Router } from '@angular/router';

@Component({
  selector: "app-userregister",
  templateUrl: "userregister.component.html",
  styleUrls: ["userregister.component.scss"]
})

export class UserregisterComponent { 

  userForm:FormGroup;
  users:UserEntity[] = [];
  
  constructor(private userService: UserService, private router:Router){
    this.userForm = new FormGroup({
        "userName": new FormControl("", [Validators.required, Validators.maxLength(12),Validators.minLength(4) ]),
        "password":new FormControl("", [Validators.required]),
        "email" :new FormControl("", [Validators.required]),
        "age":new FormControl("", [Validators.required]),
        "contactNumber":new FormControl("", [Validators.required]),
        "fullname":new FormControl("", [Validators.required]),
        "dateOfBirth":new FormControl("", [Validators.required])
    });
}


  onSubmit(){
    if(this.userForm.valid){
      let user = new UserEntity(this.userForm.value.userName, this.userForm.value.password, this.userForm.value.email, this.userForm.value.age, this.userForm.value.contactNumber, this.userForm.value.fullname, this.userForm.value.dateOfBirth);
      this.userService.create(user).subscribe((res:any)=>{
       console.log(res);
       window.alert("Registration done");
       this.router.navigateByUrl("/userlogin");
   })
 }
 else{
   console.log("Invalid data....");
 }

  }
  
}


