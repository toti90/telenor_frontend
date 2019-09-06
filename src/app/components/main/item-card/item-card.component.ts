import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {

  private phones: any;

  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    this.mobilesService.getMobiles();
    this.mobilesService.selectedPhones.subscribe(response => this.phones = response);
  }

  selectOnePhone(phone) {
    this.mobilesService.setKey(phone.key);
    this.mobilesService.getOneMobile(phone.key);
  }

  addPhoneToCart(phone) {
    if (localStorage.getItem('cart')) {
      const alreadyIn = localStorage.getItem('cart')
      localStorage.setItem('cart', `${alreadyIn},${phone.key}`);
    } else {
      localStorage.setItem('cart', `${phone.key}`);
    }
  }

}
