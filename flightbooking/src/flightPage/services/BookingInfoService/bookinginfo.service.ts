import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingInfoEntity } from '../../models/bookingInfoEntity';

@Injectable({
  providedIn: 'root'
})
export class BookingInfoService {

  private host:string = "http://localhost:8081/bookingservice";
  constructor(private httpClient:HttpClient) { }

  findAllHistory(){
    return this.httpClient.get(this.host+"/bookinghistory");
  }

  findTicket(pNR : number){
    return this.httpClient.get(this.host+"/findticket"+pNR);
  }

  findAllHistoryOfUser(userId : string){
    return this.httpClient.get(this.host+"/userhistory"+userId);
  }

  create(bookingInfoEntity:BookingInfoEntity){
    return this.httpClient.post(this.host+"/bookticket", bookingInfoEntity);
  }

  bookTicket(flightNumber:string, bookingInfoEntity:BookingInfoEntity){
    return this.httpClient.post(this.host+"/bookticket"+flightNumber, bookingInfoEntity);
  }

  cancelTicket(pNR:number){
    return this.httpClient.request('PUT',this.host +"/cancelticket/"+pNR,{​​​responseType:'json'}​​​);

  }
}
