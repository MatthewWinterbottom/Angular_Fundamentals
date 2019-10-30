import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {

    items;
    checkoutForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }

    onSubmit(customerData) {
        window.alert('Congratulation, ' + customerData.name + '. You have made a purchase.')
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }
}