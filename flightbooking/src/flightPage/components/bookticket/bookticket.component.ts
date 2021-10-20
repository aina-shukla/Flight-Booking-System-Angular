import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SearchairlinesEntity } from 'src/flightPage/models/searchairlinesEntity';
import { SearchairlinesService } from 'src/flightPage/services/SearchAirlineService/searchairlines.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.scss']
})
export class BookticketComponent  {

  searchFlightsForm:FormGroup;
  searchairlinesEntity:SearchairlinesEntity[]=[];
  message:string = "";

  constructor(private router:Router, private searcairlinesService: SearchairlinesService){
    this.searchFlightsForm = new FormGroup({
        "fromPlace": new FormControl("", [Validators.required]),
        "toPlace":new FormControl("",  [Validators.required]),
        "startDateTime":new FormControl("", [Validators.required])
    });
}


onSubmit(){
  console.log(this.searchFlightsForm)
  console.log(this.searchFlightsForm.value)

  if(this.searchFlightsForm.valid){
      //  let sfromPlace = this.searchFlightsForm.value.fromPlace;
      //  let stoPlace =this.searchFlightsForm.value.toPlace;
      //  let sstartDateTime= this.searchFlightsForm.value.startDateTime;
      //  this.searcairlinesService.searchFlights(sfromPlace,stoPlace,sstartDateTime).subscribe((res:any)=>{
      //   console.log(res);
      //   console.log("Flight found");
      // })

      let req = new SearchairlinesEntity(this.searchFlightsForm.value.fromPlace, this.searchFlightsForm.value.toPlace, this.searchFlightsForm.value.startDateTime);
      this.searcairlinesService.searchFlights(req).subscribe((res: any) => {
        this.searchairlinesEntity = res;
        this.message = "";   //if everything works fine set message to null
  }  , this.handleError )

}
}


handleError = (err:any)=>{
  console.log(err);
  if(err instanceof HttpErrorResponse)
  console.log("This is error HttpErrorRespones type")

  this.message = err.message;

  // localstorage.setItem("key", "value")
  // localstorage.getItem("key")

  // this.router.navigate(["/error"])
}


}
