export class MealOptions {
    _id: string = "";
    OptionDetail: string = "- select -";
    Price: number = 0;
    IsActive: boolean = true;
    Remarks: string = "";
}
export class Order {
    _id?:string;
    OptionId: string = "";
    Count: number = 0;
    Remarks: string = "";
    IsAccepted: boolean = false;
    IsPaid: boolean = false;
    IsActive: boolean = true;
    CreatedOn: Date = new Date();
    CreatedBy: string = "";
}
