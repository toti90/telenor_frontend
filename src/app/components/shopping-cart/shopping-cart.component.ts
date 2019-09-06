import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  private totalPrice:number = 0;
  private mobiles: any[];

  constructor(private router: Router, private mobilesService: MobilesService) { }

  ngOnInit() {
    if(localStorage.getItem('cart')){
      this.mobilesService.phonesInCart.subscribe(response => {
        this.mobiles = response;
        this.totalPrice = 0;
        this.mobiles.forEach(mobile => this.totalPrice += parseInt(mobile.price));
      });
      this.mobilesService.getMobilesForCart(localStorage.getItem('cart'));
    }
  }

  removeItem(key:string){
    let keyArray = localStorage.getItem('cart').split(',');
    if(keyArray.length === 1){
      let index:number = keyArray.indexOf(key);
      keyArray.splice(index,1);
      localStorage.removeItem('cart');
      this.mobiles = null;
    }else{
      let index:number = keyArray.indexOf(key);
      keyArray.splice(index,1);
      localStorage.setItem('cart',keyArray.join(','));
      this.mobilesService.getMobilesForCart(localStorage.getItem('cart'));
    }
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

}
