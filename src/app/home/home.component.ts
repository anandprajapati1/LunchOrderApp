import { Inject, HostListener } from '@angular/core';
import { DOCUMENT, BrowserModule } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealOptions, Order, OrderItem } from '../model/app.modelClasses'
import { DataService } from '../services/app.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    _comments: string = "";
    _quantity: number[] = [1, 2, 3, 4, 5];
    mealOptions: MealOptions[] = [];
    _cart: OrderItem[] = [];
    _cartTotal: number = 0;
    _cartTopOffset: number = 0;


    constructor(private dataService: DataService, private router: Router, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
        //>> Redirect to login page if not logged in
        // if (!this.dataService.isLoggedIn()) {
        //     this.router.navigate(['/login']);
        //     return
        // }

        this.dataService.getMealOptions().then(x => {
            if (x.length) this.mealOptions = x; //x.slice(0, 5);
            // this.mealOptions.unshift(this.defaultMealOption);
        });
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let topOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (topOffset > 100) {
            this._cartTopOffset = topOffset - 100;
        } else {
            this._cartTopOffset = 0;
        }
    }

    addItemToCart(e: MealOptions): void {
        let _new: OrderItem = new OrderItem();
        let _selected: OrderItem = this._cart.find(x => x.OptionId == e._id);
        _new.OptionId = e._id;
        _new.Price = e.Price;
        _new.OptionDetail = e.OptionDetail;
        if (_selected == null) {
            _new.Count = 1;
            this._cart.push(_new);
        } else {
            _selected.Count++;
        }
        this._cartTotal += e.Price;
    }

    increaseItemCount(item: OrderItem) {
        let _selected: OrderItem = this._cart.find(x => x.OptionId == item.OptionId);
        _selected.Count++;
        this._cartTotal += item.Price;
    }

    decreaseItemCount(item: OrderItem) {
        let _selected: OrderItem = this._cart.find(x => x.OptionId == item.OptionId);
        if (_selected != null) {
            _selected.Count > 1 ? _selected.Count-- : this._cart.splice(this._cart.indexOf(_selected), 1);
        }
        this._cartTotal -= item.Price;
    }
    submitForm(): void {
        if (this._cart.length == 0) {
            alert("Cart is empty.")
            return
        }

        let orderDetail: Order = new Order();
        orderDetail.CreatedBy = this.dataService.getCurrentUser().userId;
        orderDetail.OrderItems = this._cart;

        this.dataService.placeOrder(orderDetail).then(x => {
            if (x._id !== "") {
                //redirect ot Thank you page
                this.router.navigate(['user', 'thankyou', x._id]);
                return false;
            }
        });
    }

}
