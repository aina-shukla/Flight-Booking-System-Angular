import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlinesEntity } from 'src/flightPage/models/airlinesEntity';
import { AirlinesService } from 'src/flightPage/services/AirlinesService/airlines.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrls: ['./welcomeadmin.component.scss']
})
export class WelcomeadminComponent implements OnInit {

  airlines: AirlinesEntity[]=[];
  avlailableAirlines: AirlinesEntity[]=[];

  updateForm:FormGroup;

  constructor(private router:Router, private airliesservice:AirlinesService) {

    this.updateForm = new FormGroup({
      "flightNumber": new FormControl("", [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(5)
      ])
  });

   }

  //  updateAirlinesFromDB(){
  //      let fNumber=this.updateForm.value.flightNumber;
  //      let reqBody=this.airliesservice.updateAirline(fNumber, ).subscribe((res:any)=>{
  //       console.log(res);
  //       this.airlines = res;
  //   })
  //  }



  onClick(){
    console.log("Navigating to Register Airline");
    this.router.navigateByUrl("/registerairline");  
 }

 findAirlines(){
  this.airliesservice.findAllAirlines().subscribe((res:any)=>{
    console.log(res);
    this.airlines = res;
})
 }

 findAvailableAirlines(){
  this.airliesservice.findUnblockedFlights().subscribe((res:any)=>{
    console.log(res);
    this.avlailableAirlines = res;
})
 }


 findAirlinesFromDB(flightNumber:number){
  this.airliesservice.blockAirline(flightNumber).subscribe((res:any)=>{
    console.log(res);
    window.alert("Flight is blocked..");
    this.airlines = res;
})
 }


 logout(){
  console.log("Logging out...");
  this.router.navigateByUrl("/home");  
 }

  ngOnInit(): void {
  }

}