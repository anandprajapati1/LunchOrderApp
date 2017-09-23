import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Order } from '../app/model/app.modelClasses'


@Component({
  moduleId: module.id,
  selector: 'thankyou',
  templateUrl: "./thankyou.component.html",
  styles: [`
  .wrapper{
    width: 600px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: table;
    text-align: center;
  }
  .btn{
    margin: 0 10px;
  }
  `]
})

export class ThankYouComponent implements OnInit {
  _orderid: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.map((paramArr: Params) => paramArr['id'])
      .subscribe((h: string) => {
        if (!h) {
          this.goHome();
          return false;
        }
        else
          this._orderid = h
      })
  }

  goHome(): void {
    this.router.navigate(['home']);
  }
}