export class User {
    userName: string;
    email: string;
    phoneNumber: number;
    
    constructor(username: string, email: string, phone: number) {
        this.userName = username;
        this.email = email;
        this.phoneNumber = phone;
    }
}
