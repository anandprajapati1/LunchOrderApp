import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealOptions, Order } from '../model/app.modelClasses'
import { DataService } from '../services/app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // _emailid: string = "";
  _comments: string = "";
  _quantity: number[] = [1, 2, 3, 4, 5];
  mealOptions: MealOptions[] = [];
  private defaultMealOption: MealOptions = new MealOptions();//{ _id: "", IsActive: true, OptionDetail: "- select -", Price: 0 };
  selectedOption: MealOptions = this.defaultMealOption;
  selectedQuantity: number = 0;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    //>> Redirect to login page if not logged in
    if (!this.dataService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return
    }
    
    this.dataService.getMealOptions().then(x => {
      if (x.length) this.mealOptions = x.slice(0, 5);
      this.mealOptions.unshift(this.defaultMealOption);
    });
  }

  submitForm(): void {
    let orderDetail: Order = new Order();
    orderDetail.Count = this.selectedQuantity;
    orderDetail.CreatedBy = this.dataService.getCurrentUserId();
    orderDetail.Remarks = this._comments;
    orderDetail.OptionId = this.selectedOption._id;

    this.dataService.placeOrder(orderDetail).then(x => {
      if (x._id !== "") {
        //redirect ot Thank you page
        this.router.navigate(['/thankyou', x._id]);
        return false;
      }
    });
  }

}
