import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from '../app/app.component';
import { ThankYouComponent } from "../app/thankyou.component";
import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/login/login.component";
import { RegisterComponent } from "../app/register/register.component";
import { MyOrdersComponent } from "../app/my-orders/my-orders.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'orders', component: MyOrdersComponent },
    { path: 'profile', component: ProfileComponent },
    // { path: 'thankyou', component: ThankYouComponent },
    { path: 'thankyou/:id', component: ThankYouComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
