import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs'
import 'rxjs/add/operator/toPromise';
import { MealOptions, Order } from '../model/app.modelClasses';

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost:3000';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:*' });
  constructor(private http: Http) { }

  getMealOptions(): Promise<MealOptions[]> {
    return this.http.get(`${this.baseUrl}/getMealOptions`, this.headers).toPromise()
      .then(response => response.json() as MealOptions[])
      .catch(this.handleError);
  }

  placeOrder(order: Order): Promise<Order> {
    const url = `${this.baseUrl}/placeOrder`;
    return this.http.post(url, JSON.stringify(order), { headers: this.headers }).toPromise()
      .then(res => order).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
