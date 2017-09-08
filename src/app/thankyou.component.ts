import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
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
  `]
})

export class ThankYouComponent implements OnInit {
  _orderid: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.map((paramArr: Params) => paramArr['id'])
      .subscribe((h: string) => this._orderid = h)
  }
}