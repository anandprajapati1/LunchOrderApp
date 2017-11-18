import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/app.service';
import { Order4Dashboard } from 'app/model/app.modelClasses';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    _neworders: number = 0;
    _pendingorders: number = 0;
    _cacelledorders: number = 0;
    _rejectedorders: number = 0;
    _completedorders: number = 0;
    constructor(private _dataservice: DataService) { }

    ngOnInit() {
        this._dataservice.getAllOrders().then(x =>
            x.filter(y => {
                if (y.IsActive) {
                    if(y.IsAccepted==null)
                        this._neworders++                    
                    else if (y.IsAccepted)
                        if (y.IsPaid)
                            this._completedorders++
                        else
                            this._pendingorders++
                    else
                        this._rejectedorders++

                } else {
                    this._cacelledorders++
                }
            })
        )
    }
}
