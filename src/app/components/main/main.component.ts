import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  private detailView = false;
  
  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    this.mobilesService.selectedPhone.subscribe(response => {
      if (response.length === 0) {
        this.detailView = false;
      } else {
        this.detailView = true;
      }
    })
  }

}
