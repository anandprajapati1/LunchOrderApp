import { Component } from '@angular/core';
import { Router } from "@angular/router";
// import { Subject } from "rxjs";
import { SharedService } from '../app/services/shared-service.service';


@Component({
  selector: 'app-root',
  template: `<app-header [_isLoggedIn]="loginStatus" (loggedOut)="handleLogoutClick()"></app-header>
  <router-outlet></router-outlet>`,
  styles: [``]
})
export class AppComponent {
  loginStatus: boolean = false;
  constructor(private _router: Router, private _sharedService: SharedService) {
    _sharedService.loginStatus$.subscribe(x => this.loginStatus = x)
  }

  ngOnInit() {
  }

  handleLogoutClick() {
    // this._loggedIn.next(false);
    this._router.navigate(['/login']);
  }
}