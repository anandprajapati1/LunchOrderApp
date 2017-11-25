import { Router, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/app.service';
import { Order, OrderItem, Order4Dashboard } from 'app/model/app.modelClasses';

@Component({
    selector: 'app-view-orders',
    templateUrl: './view-orders.component.html',
    styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {

    orderList: Order[] = [];
    _filter: Order4Dashboard = new Order4Dashboard();
    _today: Date = new Date();
    selectedFilter: string = "";
    // (_today-(new Date()));
    constructor(private _dataService: DataService, private _router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                let f: string = params['filterby'] || "";
                this.generateFilter(f);
            });

        this._dataService.getFilterdOrders(this._filter).then(x =>
            x.filter(y => {
                this.orderList = x.sort((a, b) => a.CreatedOn < b.CreatedOn ? 1 : 0);
            })
        )
    }
    private generateFilter(_filter: string) {
        switch (_filter.toLocaleLowerCase()) {
            case "cancelled":
                this._filter.IsActive = false;
                break;
            case "new":
                this._filter.IsActive = true;
                this._filter.IsAccepted = null;
                break;
            case "rejected":
                this._filter.IsActive = true;
                this._filter.IsAccepted = false;
                break;
            case "pending":
                this._filter.IsActive = true;
                this._filter.IsAccepted = true;
                this._filter.IsPaid = false;
                break;
            case "completed":
                this._filter.IsActive = true;
                this._filter.IsAccepted = true;
                this._filter.IsPaid = true;
                break;
            default:
                //>> All
                this._filter.IsActive = true;
                this._filter.IsAccepted = null;
                this._filter.IsPaid = false;
                break;
        }
    }
    getDateInString(d: Date): string {
        let diff: number = this._today.valueOf() - d.valueOf()
        if (diff <= 24 * 60 * 60)
            return "today"
        else if (diff <= 2 * 24 * 60 * 60)
            return "yesterday"
        else
            return d.toLocaleDateString()
    }
    getSum(arr: OrderItem[]) {
        let totatlCost: number = 0;
        arr.forEach(x => totatlCost += x.Price);
        return totatlCost;
    }
    acceptOrder(o: Order) {
        this._dataService.updateOrderStatus_Vendor(o._id, true).then(x => {
            if (x) {
                o.IsAccepted = true
            }
        })
    }
    rejectOrder(o: Order) {
        this._dataService.updateOrderStatus_Vendor(o._id, false).then(x => {
            if (x) {
                o.IsAccepted = false
            }
        })
    }
    filterChange() {
        this._filter = new Order4Dashboard();
        this.generateFilter(this.selectedFilter)
        this.orderList = []
        this._dataService.getFilterdOrders(this._filter).then(x =>
            x.filter(y => {
                this.orderList = x.sort((a, b) => a.CreatedOn < b.CreatedOn ? 1 : 0);
            })
        )
        this._router.navigate(['vendor', 'orders'], { queryParams: { filterby: this.selectedFilter } });
    }
}
