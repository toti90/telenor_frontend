import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MobilesService } from 'src/app/services/mobiles.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
    private mobiles: any;
    @Output() selectedKey = new EventEmitter<string>();

  constructor(private mobilesService: MobilesService) { }

  ngOnInit() {
    this.mobilesService.getMobiles().subscribe(response => this.mobiles = response);
  }

  selectKey(event: NzFormatEmitEvent) {
    const clickedKey = event.keys[0];
    this.selectedKey.emit(clickedKey);
  }

}
