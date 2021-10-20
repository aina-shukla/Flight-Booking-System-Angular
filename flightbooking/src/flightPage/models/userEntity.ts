export class UserEntity{

    constructor(
        public userName : string,
        public password : string,
        public emailId : string,
        public age : number,
        public contactNumber : number,
        public fullName : string,
        public dateOfBirth: Date
    ){}


}