export class BookingInfoEntity {

    constructor(
		public pNR : number,
		public name : string,
		public gender : string,
		public age : number,
		public seatNumber : number,
		public mealReq : string,
		public mealType : string,
		public userId : string,
		public contactNumber : number,
		public flightNumber : string,
		public airlineName : string,
		public fromPlace : string,
		public toPlace : string,
		public startDateTime : Date,
		public endDateTime : Date,
		public numberOfSeats : number,
		public bookingStatus : string
    ){}
}