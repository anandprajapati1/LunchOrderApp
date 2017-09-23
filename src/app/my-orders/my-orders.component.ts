import { Component, OnInit } from '@angular/core';
import { UserOrders } from "../model/app.modelClasses";
import { Observable } from "rxjs";
import { DataService } from "../services/app.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderList: UserOrders[];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getUserOrderList(this.dataservice.getCurrentUserId())
      .then(x => {
        this.orderList = x;
        // console.log(this.orderList);
      });
  }
}
