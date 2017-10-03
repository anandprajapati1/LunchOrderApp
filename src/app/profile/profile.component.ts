import { Component, OnInit } from '@angular/core';

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
	constructor() { }

	ngOnInit() {
	}

	selectTab(t) {
		this.tabState.forEach((x) => x.isActive = false)
		t.isActive = true;
	}

}
