import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { ThankYouComponent } from "../app/thankyou.component";
import { HomeComponent } from "../app/home/home.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: 'thankyou', component: ThankYouComponent },
    { path: 'thankyou/:id', component: ThankYouComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
