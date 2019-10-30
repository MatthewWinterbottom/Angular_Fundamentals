import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
    
    // Input FROM product component
    @Input() product;

    // Output TO parent component
    @Output() notify = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    share() {
      window.alert('Notification emitted locally')
    }
}