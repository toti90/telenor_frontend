import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  public details: object;
  public mainImageLink: string;
  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    const key = this.mobilesService.getKey();
    if (key) {
      this.mobilesService.getOneMobile(key);
      this.mobilesService.selectedPhone.subscribe(response => {
        this.details = response[0];
        this.mainImageLink = response[0].pictures[0];
      })
    }
  }

  backToMain() {
    this.mobilesService.setKey();
  }

  addPhoneToCart() {
    if (localStorage.getItem('cart')) {
      const alreadyIn = localStorage.getItem('cart')
      localStorage.setItem('cart', `${alreadyIn}, ${this.details['key']}`);
    } else {
      localStorage.setItem('cart', `${this.details['key']}`);
    }
  }

  changeMainImage(imageLink: string) {
    this.mainImageLink = imageLink;
  }

}
