import { Component } from '@angular/core';
import { Router } from "@angular/router";
// import { Subject } from "rxjs";
import { SharedService } from '../app/services/shared-service.service';


@Component({
  selector: 'app-root',
  template: `<app-header (loggedOut)="handleLogoutClick()"></app-header>
  <div class="wrapper">
    <router-outlet></router-outlet>
  </div>`,
  styleUrls:['./app.component.scss']
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