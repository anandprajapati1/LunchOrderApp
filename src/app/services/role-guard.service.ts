import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { DataService } from 'app/services/app.service';
import { usertTypeEnum, userLoginStatus } from 'app/model/app.modelClasses';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(private dataservice: DataService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //>> Authentication check
        let _currectUser: userLoginStatus = this.dataservice.getCurrentUser();
        if (_currectUser == null) {
            this.router.navigate(['']);
            return false;
        }

        //>> Authorization check
        let userType = route.data["userType"] as usertTypeEnum;
        if (userType == null || userType == _currectUser.userType) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
}