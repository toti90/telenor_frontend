import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  private arrayOfItems:string[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.arrayOfItems = localStorage.getItem('shoppingBasket').split(',');
    
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

}
