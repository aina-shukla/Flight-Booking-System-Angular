export class AirlinesEntity{
    
    constructor(
        public flightNumber : number,
        public flighId : string,
        public airlineName : string,
        public fromPlace : string,
        public toPlace : string,
        public startDateTime : string,
        public endDateTime : string,
        public scheduledDays : string,
        public instrumentUsed : string,
        public businessClassSeats : number,
        public nonBusinessClassSeats : number,
        public ticketCost : number,
        public numberOfRows : number,
        public meal : string,
        public blockStatus : string
    ){}
}