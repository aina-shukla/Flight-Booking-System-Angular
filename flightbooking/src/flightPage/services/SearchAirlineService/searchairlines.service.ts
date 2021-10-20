import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchairlinesEntity } from '../../models/searchairlinesEntity';

@Injectable({
  providedIn: 'root'
})
export class SearchairlinesService {

  private host:string = "http://localhost:8083/airlinesservice";
  constructor(private httpClient:HttpClient) { }

  
  // searchFlights(fromPlace: string, toPlace:string, startDateTime: Date){
  //   return this.httpClient.request('POST',this.host +"/search/flights",{​​​responseType:'json'}​​​);
  // }

  searchFlights(request:SearchairlinesEntity){
    return this.httpClient.post(this.host+"/search/flights", request);
  }


}
