import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../services/app.service";
import { loginData, loginResponse } from "../model/app.modelClasses";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // _emailid: string = "";
  // _password: string = "";
  // _rememberMe: boolean = false;
  _data: loginData = new loginData();
  serverError: string;
  constructor(private dataservice: DataService, private _router: Router) { }

  ngOnInit() {
    //>> Redirect to home page if already logged in
    if (this.dataservice.isLoggedIn()) {
      this._router.navigate(['/home']);
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
        this._router.navigate(['/home'])
      }
    })
      .catch(() => this.serverError = "Unable to login, please try after some time.")
  }
  // logconsole(x){
  //   console.log(x);
  // }
}
