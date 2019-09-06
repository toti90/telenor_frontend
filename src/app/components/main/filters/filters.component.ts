import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit{
  filterForm: FormGroup;
  mobiles: any;
  mobilesOrigin: any;
  key: string;

  constructor(
    private filterService: FilterService,
    private mobilesService: MobilesService
    ) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      colorDisplay: new FormControl(null),
      camera: new FormControl(null),
      wap: new FormControl(null)
    });
    this.mobilesService.selectedPhones.subscribe((data)=>this.mobilesOrigin = data);
  }

  onSubmit() {
    console.log(this.mobilesOrigin);
    this.mobiles = [...this.mobilesOrigin]
    const newPhoneList = this.mobiles.filter((e) => {
      return (this.filterForm.value.colorDisplay && e.displayColor!=='1') ||
      (this.filterForm.value.camera && e.camera!=='N/A') ||
      (this.filterForm.value.wap && e.browser.indexOf('WAP')>-1)
    });
    console.log(this.mobilesOrigin);
    if (!this.filterForm.value.colorDisplay &&
      this.filterForm.value.camera &&
      this.filterForm.value.wap){
        this.mobilesService.updateMobiles(this.mobilesOrigin);
      } else {
        this.mobilesService.updateMobiles(newPhoneList);
      }
    this.mobiles = this.mobilesOrigin.slice()
    console.log('new list: ');
    console.log(newPhoneList);
  }
}
