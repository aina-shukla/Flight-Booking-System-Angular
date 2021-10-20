import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AirlinesEntity } from 'src/flightPage/models/airlinesEntity';
import { AirlinesService } from 'src/flightPage/services/AirlinesService/airlines.service';

@Component({
  selector: 'app-airlinesregister',
  templateUrl: './airlinesregister.component.html',
  styleUrls: ['./airlinesregister.component.scss']
})
export class AirlinesregisterComponent {

  adminForm: FormGroup;

constructor(private airlinesservice: AirlinesService, private router:Router){
  this.adminForm = new FormGroup({
      "flighId": new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]),
      "airlineName": new FormControl('', [Validators.required, Validators.maxLength(12)]),
      "fromPlace": new FormControl('', [Validators.required]),
      "toPlace": new FormControl('', [Validators.required]),
      "startDateTime":  new FormControl('', [Validators.required]),
      "endDateTime":  new FormControl('', [Validators.required]),
      "scheduledDays": new FormControl('', [Validators.required]),
      "instrumentUsed":  new FormControl('', [Validators.required]),
      "businessClassSeats":  new FormControl('', [Validators.required]),
      "nonBusinessClassSeats":  new FormControl('', [Validators.required]),
      "ticketCost":  new FormControl('', [Validators.required]),
      "numberOfRows":  new FormControl('', [Validators.required]),
      "meal":  new FormControl('', [Validators.required]),
      "blockStatus":  new FormControl('', [Validators.required])
  });
}


onSubmit(){
  if(this.adminForm.valid){
    let airline = new AirlinesEntity(this.adminForm.value.flightNumber,this.adminForm.value.flighId, this.adminForm.value.airlineName, this.adminForm.value.fromPlace, 
      this.adminForm.value.toPlace, this.adminForm.value.startDateTime, this.adminForm.value.endDateTime, 
      this.adminForm.value.scheduledDays, this.adminForm.value.instrumentUsed, this.adminForm.value.businessClassSeats,
      this.adminForm.value.nonBusinessClassSeats, this.adminForm.value.ticketCost, this.adminForm.value.numberOfRows,
      this.adminForm.value.meal, this.adminForm.value.blockStatus );
this.airlinesservice.create(airline).subscribe((res:any)=>{
console.log(res);
window.alert("Airline registered");
this.router.navigateByUrl("/welcomeadmin"); 
})
}
else{
console.log("Invalid data....");
}
}


}