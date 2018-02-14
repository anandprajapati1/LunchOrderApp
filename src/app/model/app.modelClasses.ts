export class MealOptions {
    _id: string = "";
    OptionDetail: string = "- select -";
    Price: number = 0;
    IsActive: boolean = true;
    // Remarks: string = "";
}
export class Order {
    _id?: string;
    // OptionId: string = "";
    // Count: number = 0;
    EmailId:string="";
    IsAccepted?: boolean = null;
    IsPaid: boolean = false;
    IsActive: boolean = true;
    CreatedOn: Date = new Date();
    CreatedBy: string = "";
    OrderItems: OrderItem[];
}

export class OrderItem {
    OptionId: string = "";
    OptionDetail: string = "";
    Price: number = 0;
    Count: number = 0;
}
export class User {
    _id?: string;
    EmailId: string = "";
    CreatedOn: Date = new Date();
}
export class registrationData extends User {
    Password: string = "";
}

export class changePasswordData {
    userId: string;
    currentPassword: string;
    newPassword: string;
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
    userType: usertTypeEnum = usertTypeEnum.DEFAULT;
}

export class registrationResponse {
    isAlreadyRegistered: boolean;
    isRegistered: boolean;
    userId?: string;
    readonly userType: usertTypeEnum = usertTypeEnum.DEFAULT;
}

export enum usertTypeEnum {
    VENDOR = "VENDOR", DEFAULT = "DEFAULT"
}

export class userLoginStatus {
    userId: string = "";
    userType: usertTypeEnum = usertTypeEnum.DEFAULT;
}

export class Order4Dashboard {
    IsAccepted?: boolean;
    IsPaid?: boolean;
    IsActive?: boolean;
}