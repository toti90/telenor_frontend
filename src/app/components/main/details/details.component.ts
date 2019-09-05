import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  details: object;
  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    const key = this.mobilesService.getKey();
    if (key) {
      this.mobilesService.getOneMobile(key);
      this.mobilesService.selectedPhone.subscribe(response => this.details = response[0]);
    }
  }

  backToMain() {
    this.mobilesService.setKey();
  }

}
