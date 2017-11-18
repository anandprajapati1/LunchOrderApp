import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DataService } from "../services/app.service";
import { SharedService } from "../services/shared-service.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { usertTypeEnum, userLoginStatus } from 'app/model/app.modelClasses';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    @Output()
    loggedOut: EventEmitter<void> = new EventEmitter();
    @Input()
    _isScrolled: boolean = false;
    _currectUser: userLoginStatus;
    _isVendor: boolean = false;
    constructor(private _dataservice: DataService, private _sharedService: SharedService) {
        _sharedService.loginStatus$.subscribe(x => {
            this._currectUser = x
            this._isVendor = x != null && x.userType == usertTypeEnum.VENDOR
        })
    }

    ngOnInit() {
        this._currectUser = this._dataservice.getCurrentUser();
        this._isVendor = this._currectUser != null && this._currectUser.userType == usertTypeEnum.VENDOR
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
        this.loggedOut.emit();
        this._sharedService.emitLoginStatus(null);
    }
}
