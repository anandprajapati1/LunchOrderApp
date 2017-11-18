import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DataService } from "../services/app.service";
import { SharedService } from "../services/shared-service.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  loggedOut: EventEmitter<void> = new EventEmitter();
  @Input()
  _isLoggedIn: boolean = false;
  _isScrolled: boolean = false;
  constructor(private _dataservice: DataService, private _sharedService: SharedService) {
    _sharedService.loginStatus$.subscribe(x => this._isLoggedIn = x)
  }

  ngOnInit() {
    this._isLoggedIn = this._dataservice.isLoggedIn()
    // if vendor login
    document.body.className+=" vendor";
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 35) {
      this._isScrolled = true;
    } else if (this._isScrolled && number < 10) {
      this._isScrolled = false;
    }
  }

  _logoutClick() {
    this._dataservice.logoutUser();
    this._isLoggedIn = false;
    this.loggedOut.emit();
  }
}
