import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { SharedService } from '../app/services/shared-service.service';
import { usertTypeEnum, userLoginStatus } from 'app/model/app.modelClasses';
import { DataService } from 'app/services/app.service';


@Component({
    selector: 'app-root',
    template: `
    <div class="main-wrapper" [class.vendor]="isVendor">
        <app-header (loggedOut)="handleLogoutClick()"></app-header>
          <div class="wrapper">
            <router-outlet></router-outlet>
          </div>
    </div>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loginStatus: boolean = false;
    isVendor: boolean = false;
    constructor(private _router: Router, private _sharedService: SharedService, private _dataService: DataService) {
        _sharedService.loginStatus$.subscribe(x => {
            this.loginStatus = (x != null)
            this.isVendor = x != null && x.userType == usertTypeEnum.VENDOR
        })
    }

    ngOnInit() {
        this.isVendor = this._dataService.isVendor()
    }

    handleLogoutClick() {
        // this._loggedIn.next(false);
        this._router.navigate(['/login']);
    }
}