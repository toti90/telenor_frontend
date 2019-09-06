import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  // private keys:string = '';
  // private arrayOfKeys:string[] = [];
  private mobiles: any[];
  
  constructor(private router: Router, private mobilesService: MobilesService) { }

  ngOnInit() {
    if(localStorage.getItem('cart')){
      // this.keys = localStorage.getItem('cart');
      // this.arrayOfKeys = localStorage.getItem('cart').split(',');
      this.mobilesService.phonesInCart.subscribe(response => {
        this.mobiles = response;
        console.log(this.mobiles);
        
      });
      this.mobilesService.getMobilesForCart(localStorage.getItem('cart'));
    }
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

}
