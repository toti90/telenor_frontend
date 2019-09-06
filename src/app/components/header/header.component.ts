import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private mobilesService: MobilesService) { }

  ngOnInit() {
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

  backToMain() {
    this.mobilesService.setKey();
  }

}
