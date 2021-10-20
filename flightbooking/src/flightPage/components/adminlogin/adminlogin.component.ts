import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AdminAuth } from 'src/flightPage/models/adminAuth';
import { AdminService } from 'src/flightPage/services/AdminService/admin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: 'adminlogin.component.html',
  styleUrls: ['adminlogin.component.scss']
})
export class AdminloginComponent {

    adminForm:FormGroup;

    // adminAuth:AdminAuth = new AdminAuth('','');

    // onSubmit(){
    //   {
    //           let adminLoginAuth: AdminAuth=this.adminForm.value;
    //           console.log(this.adminForm)
    //           console.log(this.adminForm.value)
    //           this.adminAuth.username=adminLoginAuth.username;
    //           this.adminAuth.password=adminLoginAuth.password;
    //           if(this.adminForm.valid){
    //               console.log("send request to server")
    //               this.router.navigate(["/welcomeadmin/"]);
    //           }
    //          return this.adminService.adminLogin(this.adminAuth).subscribe((res:any) =>{   
    //             this.adminAuth = res;
    //             })
               
        
    //       }

    //     }



    constructor(private router:Router, private adminService:AdminService){
      this.adminForm = new FormGroup({
          "userName": new FormControl("", [
              Validators.required,
              Validators.maxLength(12),
              Validators.minLength(5)
          ]),
          "password":new FormControl("", [Validators.required,
            Validators.maxLength(12),
            Validators.minLength(5)])
      });
  }

  onSubmit(){
      console.log(this.adminForm)
      console.log(this.adminForm.value)

      if(this.adminForm.valid){
        console.log("send request to server")
        this.adminService.welcomeAdmin().subscribe((res:any)=>{
                console.log(res);
                this.adminService = res;
            })
        this.router.navigate(["/welcomeadmin/"]);
      }

  }

    
  }