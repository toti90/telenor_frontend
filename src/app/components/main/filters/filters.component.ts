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
    this.mobilesService.selectedPhones.subscribe((data)=>this.mobiles = data);
  }

  onSubmit() {
    const data = {
      colorDisplay: this.filterForm.value.colorDisplay,
      camera: this.filterForm.value.camera,
      wap: this.filterForm.value.wap
    };
    this.filterService.updateFilterValue(data);
    console.log(this.mobiles);
    const newPhoneList = this.mobiles.filter((e)=>{
      return (this.filterForm.value.colorDisplay && e.displayColor!=='1') ||
      (this.filterForm.value.camera && e.camera!=='N/A') ||
      (this.filterForm.value.wap && e.browser.indexOf('WAP')>-1)
    });
    this.mobilesService.updateMobiles(newPhoneList);
    console.log('new list: ');
    console.log(newPhoneList);
  }
}
