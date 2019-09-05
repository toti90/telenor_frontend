import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  details: object;
  constructor() { }

  ngOnInit() {
    this.details = {
      brand: 'Nokia',
      type: '3300',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Nokia_3300.jpg/1920px-Nokia_3300.jpg',
      release: 2003,
      operating_system: 'symbian',
      price: '80.000',
      displaySize: "176x208",
      dimensions: '105 x 45 x 16 mm',
      weight: 85,
      camera: 'VGA',
      connectivity: 'IrDA',
      battery: 850,
      storage: "6 MB",
      browser: "WAP 1.2.1",
      clock: true,
      alarm: true,
      messaging: "SMS, MMS",
      games: "Java games"
    }
  }

}
