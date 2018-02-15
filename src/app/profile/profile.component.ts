import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/app.service';
import { userLoginStatus, usertTypeEnum } from 'app/model/app.modelClasses';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	tabState: any[] = [{
		i: 0,
		isActive: true,
		linkText: "Change Password"
	}, {
		i: 1,
		isActive: false,
		linkText: "Delete account"
	}]
	_currectUser: userLoginStatus;
    _isVendor: boolean = false;
    constructor(private _dataservice: DataService) {
        this._currectUser = this._dataservice.getCurrentUser();
    }

	ngOnInit() {
        this._isVendor = this._currectUser.userType == usertTypeEnum.VENDOR
    }

	selectTab(t) {
		this.tabState.forEach((x) => x.isActive = false)
		t.isActive = true;
	}

}
