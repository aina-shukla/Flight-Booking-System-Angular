import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirlinesEntity } from '../../models/airlinesEntity';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  private host:string = "http://localhost:8083/airlinesservice";
  constructor(private httpClient:HttpClient) { }

  findAllAirlines(){
    return this.httpClient.get(this.host+"/searchairlines");
  }

  findUnblockedFlights(){
    return this.httpClient.get(this.host+"/availableairlines");
  }

  create(airlinesEntity:AirlinesEntity){
    return this.httpClient.post(this.host+"/airlines/register", airlinesEntity);
  }

  updateAirline(flightNumber:number, airlinesEntity: AirlinesEntity){
    return this.httpClient.put(this.host+"/airline/inventory/add/"+flightNumber,airlinesEntity);
  }

  blockAirline(flightNumber:number){
    //return this.httpClient.put(this.host+"/blockairline/"+flightNumber);
    return this.httpClient.request('PUT',this.host +"/blockairline/"+flightNumber,{​​​responseType:'json'}​​​);

  }
   
  // searchFlights(request:SearchTicketRequest){
  //   // return this.httpClient.request('POST',this.host +"/search/flights",{​​​responseType:'json'}​​​);
  //   return this.httpClient.post(this.host+"/search/flights", request);

  // }




}
