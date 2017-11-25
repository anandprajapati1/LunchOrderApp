import { userLoginStatus } from './../model/app.modelClasses';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../services/app.service";
import { SharedService } from '../services/shared-service.service';
import { loginData, loginResponse, usertTypeEnum } from "../model/app.modelClasses";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    _data: loginData = new loginData();
    serverError: string;
    constructor(private dataservice: DataService, private _router: Router, private sharedservice: SharedService) { }

    ngOnInit() {
        //>> Redirect to home page if already logged in
        if (this.dataservice.isLoggedIn()) {
            let loggedInUserDetail: userLoginStatus = this.dataservice.getCurrentUser();
            if (loggedInUserDetail.userType == usertTypeEnum.VENDOR)
                this._router.navigate(['vendor', 'dashboard']);
            else if (loggedInUserDetail.userType == usertTypeEnum.DEFAULT)
                this._router.navigate(['user', 'home']);
        }
    }

    doLogin(): void {
        // let _data: loginData
        this.dataservice.loginUser(this._data).then(x => {
            if (!x.isUsernameValid) {
                this.serverError = "Email id does not exists"
            }
            else if (!x.isPasswordValid) {
                this.serverError = "Password invalid"
            }
            else if (x.userId) {
                let _status: userLoginStatus = { userId: x.userId, userType: x.userType }
                this.sharedservice.emitLoginStatus(_status);
                if (x.userType == usertTypeEnum.VENDOR)
                    this._router.navigate(['vendor', 'dashboard'])
                else
                    this._router.navigate(['user', 'home'])
            }
        })
            .catch(() => this.serverError = "Unable to login, please try after some time.")
    }
}
