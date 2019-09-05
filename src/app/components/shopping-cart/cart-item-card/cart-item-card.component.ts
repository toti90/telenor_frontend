import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.sass']
})
export class CartItemCardComponent implements OnInit {
  @Input('mobile') mobile

  constructor() { }

  ngOnInit() {
    console.log(this.mobile);
    
  }

}
