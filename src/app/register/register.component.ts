import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { DataService } from "../services/app.service";
import { SharedService } from '../services/shared-service.service';
import { registrationData, loginResponse, loginData } from "../model/app.modelClasses";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  _data: registrationData = new registrationData();
  repeatPassword: string = "";
  serverError: string;
  constructor(private dataservice: DataService, private _router: Router, private sharedservice: SharedService) { }

  ngOnInit() {
    //>> Redirect to home page if already logged in
    if (this.dataservice.isLoggedIn()) {
      this._router.navigate(['/home']);
    }
  }

  doRegister() {
    this.dataservice.registerUser(this._data).then(x => {
      if (x.isAlreadyRegistered) {
        this.serverError = "Email id already registered."
      }
      else if (x.isRegistered) {
        this._router.navigate(['/home'])
        this.sharedservice.emitLoginStatus(true);
      }
    })
      .catch(() => this.serverError = "Unable to register, please try after some time.")
  }

}
