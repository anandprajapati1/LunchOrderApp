import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Order, OrderItem } from "../model/app.modelClasses";
import { Observable } from "rxjs";
import { DataService } from "../services/app.service";

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
    orderList: Order[];
    constructor(private dataservice: DataService, private router: Router) { }

    ngOnInit() {
        this.dataservice.getUserOrderList(this.dataservice.getCurrentUser().userId)
            .then(x => {
                this.orderList = x.sort((a, b) => a.CreatedOn < b.CreatedOn ? 1 : 0);
                // console.log(this.orderList[0].getTotalCost());
            });
    }

    getSum(arr: OrderItem[]) {
        let totatlCost: number = 0;
        arr.forEach(x => totatlCost += x.Price);
        return totatlCost;
    }

    repeatOrder(o: Order) {
        let orderDetail: Order = new Order();
        orderDetail.CreatedBy = o.CreatedBy;
        orderDetail.OrderItems = o.OrderItems;

        this.dataservice.placeOrder(orderDetail).then(x => {
            if (x._id !== "") {
                //redirect ot Thank you page
                this.router.navigate(['/thankyou', x._id]);
                return false;
            }
        });
    }

    cancelOrder(o: Order) {
        this.dataservice.cancelOrder(o._id).then(x => {
            if (x) { o.IsActive = false }
        })
    }
}
