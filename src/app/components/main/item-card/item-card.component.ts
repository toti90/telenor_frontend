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

}
