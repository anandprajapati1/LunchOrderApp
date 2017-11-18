import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from '../app/app.component';
import { ThankYouComponent } from "../app/thankyou.component";
import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/login/login.component";
import { RegisterComponent } from "../app/register/register.component";
import { MyOrdersComponent } from "../app/my-orders/my-orders.component";
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { ViewOrdersComponent } from './vendor/view-orders/view-orders.component';
import { RoleGuardService } from './services/role-guard.service';
import { usertTypeEnum } from 'app/model/app.modelClasses';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'user', data: { userType: [usertTypeEnum.DEFAULT] }, canActivate: [RoleGuardService],
        children: [
            { path: '', redirectTo: '/user/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'orders', component: MyOrdersComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'thankyou/:id', component: ThankYouComponent }
        ]
    },
    {
        path: 'vendor', data: { userType: [usertTypeEnum.VENDOR] }, canActivate: [RoleGuardService],
        children: [
            { path: '', redirectTo: '/vendor/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'orders', component: ViewOrdersComponent }
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
