// import { element } from 'protractor';
import { DataService } from './../services/app.service';
import { changePasswordData } from './../model/app.modelClasses';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    serverMsg = {
        msg: "",
        isError: false
    };
    repeatPassword: string;
    currentPassword: string;
    _data: changePasswordData = new changePasswordData();
    constructor(private dataService: DataService) {
        this._data.userId = this.dataService.getCurrentUserId()
    }

    ngOnInit() {
    }

    submitPasswordData(form: NgForm) {
        this.dataService.changePassword(this._data).then(x => {
            this.serverMsg = {
                msg: x ? "Password changed successfully" : "Current password is invalid",
                isError: !x
            }
            if (x) {
                this._data = new changePasswordData();
                this.repeatPassword = "";
                form.resetForm();        
            }
        })
    }

    resetErrorMsg() {
        // console.log("reset");
        this.serverMsg = {
            msg: "",
            isError: false
        }
    }

}
