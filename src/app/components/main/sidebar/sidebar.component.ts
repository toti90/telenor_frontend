import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { MobilesService } from 'src/app/services/mobiles.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
    private mobiles: any;

  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    this.mobilesService.getMobilesforSideBar().subscribe(response => {
      this.mobiles = response;
    });
  }

  selectKey(event: NzFormatEmitEvent) {
    const clickedKey = event.node.key;
    console.log(event.node.children);
    this.mobilesService.getMobiles(clickedKey);
  }
}
