export class MealOptions {
    _id: string = "";
    OptionDetail: string = "- select -";
    Price: number = 0;
    IsActive: boolean = true;
    Remarks: string = "";
}
export class Order {
    _id?: string;
    OptionId: string = "";
    Count: number = 0;
    Remarks: string = "";
    IsAccepted: boolean = false;
    IsPaid: boolean = false;
    IsActive: boolean = true;
    CreatedOn: Date = new Date();
    CreatedBy: string = "";
}
export class User {
    _id?: string;
    EmailId: string = "";
    CreatedOn: Date = new Date();
}
export class UserLogin extends User {
    Password: string = "";
}

export class loginData {
    EmailId: string;
    Password: string;
    rememberMe: boolean;
}
export class loginResponse {
    isUsernameValid: boolean;
    isPasswordValid: boolean;
    userId: string;
}
