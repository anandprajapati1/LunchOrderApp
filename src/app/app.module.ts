import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from '../app/app-routing.module'
import './rxjs-extensions';

import { DataService } from '../app/services/app.service';
import { AppComponent } from './app.component';
import { ThankYouComponent } from './thankyou.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, ThankYouComponent, HomeComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule
  ],
  providers: [DataService]/* Service reference here to make available through all application*/,
  bootstrap: [AppComponent]
})
export class AppModule { }
