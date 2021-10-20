import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingInfoEntity } from 'src/flightPage/models/bookingInfoEntity';
import { UserEntity } from 'src/flightPage/models/userEntity';
import { BookingInfoService } from 'src/flightPage/services/BookingInfoService/bookinginfo.service';
import { UserService } from 'src/flightPage/services/UserService/user.service';

@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.scss']
})
export class WelcomeuserComponent implements OnInit {

  users:UserEntity[] = [];
bookings:BookingInfoEntity[]=[];
  

  constructor(private router:Router, private userService:UserService, private bookingService: BookingInfoService) { }

viewDetail(){
  this.userService.findUsersFromDb().subscribe((res:any)=>{
    console.log(res);
    this.users = res;
})
}

viewHistory(){
  this.bookingService.findAllHistory().subscribe((res:any)=>{
    console.log(res);
    this.bookings = res;
})
}

cancelYourTicket(pNR:number){
  this.bookingService.cancelTicket(pNR).subscribe((res:any)=>{
    console.log(res);
    window.alert("Ticket is cancelled");
    this.bookings = res;
})
}


// viewDetail(userName:string){
//   this.userService.getUser(userName).subscribe((res:any)=>{
//     console.log(res);
//     this.users = res;
    
// })
// }

logout(){
  console.log("Logging out...");
  this.router.navigateByUrl("/home");  
 }


  ngOnInit(): void {
  }

}
