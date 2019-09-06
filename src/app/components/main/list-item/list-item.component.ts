import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {

  private phones: any;

  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    this.mobilesService.selectedPhones.subscribe(response => {
      this.phones = response;
    });
  }

}
