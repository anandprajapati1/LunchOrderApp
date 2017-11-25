import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from '../app/app-routing.module'
import './rxjs-extensions';

// Service import
import { DataService } from '../app/services/app.service';
import { SharedService } from '../app/services/shared-service.service';
import { RoleGuardService } from "../app/services/role-guard.service";
// Components import
import { AppComponent } from './app.component';
import { ThankYouComponent } from './thankyou.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { ViewOrdersComponent } from './vendor/view-orders/view-orders.component';

@NgModule({
  declarations: [
    AppComponent, ThankYouComponent, HomeComponent, LoginComponent, HeaderComponent, MyOrdersComponent, RegisterComponent, ProfileComponent, ChangePasswordComponent, DashboardComponent, ViewOrdersComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule
  ],
  providers: [DataService, SharedService, RoleGuardService]/* Service reference here to make available through all application*/,
  bootstrap: [AppComponent]
})
export class AppModule { }
