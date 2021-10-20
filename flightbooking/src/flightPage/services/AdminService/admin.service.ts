import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminEntity } from '../../models/adminEntity';
import { AdminAuth } from '../../models/adminAuth';
import { AirlinesEntity } from '../../models/airlinesEntity';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private host:string = "http://localhost:8082/adminservice";
  private hostUrl:string = "http://localhost:8082/admin/login";
  constructor(private httpClient:HttpClient) { }

  findAdmin(){
    return this.httpClient.get(this.host+"/admindetail");
  }

  welcomeAdmin(){
  return this.httpClient.get(this.host+"/admin");
  }

  adminLogin(adminAuth:AdminAuth){
    return this.httpClient.post(this.hostUrl, adminAuth);
  }

  registerAirlines(airlinesEntity:AirlinesEntity){
    return this.httpClient.post(this.host+"/airlines/register", airlinesEntity);
  }

}
