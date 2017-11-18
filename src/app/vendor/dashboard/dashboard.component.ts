import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/app.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(private _dataservice: DataService) { }

    ngOnInit() {

    }
}
