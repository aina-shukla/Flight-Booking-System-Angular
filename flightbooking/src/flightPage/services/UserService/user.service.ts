import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../../models/userEntity';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private host:string = "http://localhost:8084/userservice";
  constructor(private httpClient:HttpClient) { }

  findUsersFromDb(){
    return this.httpClient.get(this.host+"/users/search");
  }

  getUser(userName:string){
    return this.httpClient.get(this.host+"/users/search"+userName);
  }

  create(userEntity:UserEntity){
    return this.httpClient.post(this.host+"/users/add", userEntity);
  }
  
}