import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit{
  filterForm: FormGroup;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      colorDisplay: new FormControl(null),
      camera: new FormControl(null),
      wap: new FormControl(null)
    });
  }

  onSubmit() {
    const data = {
      colorDisplay: this.filterForm.value.colorDisplay,
      camera: this.filterForm.value.camera,
      wap: this.filterForm.value.wap
    };
    this.filterService.updateFilterValue(data);
  }
}
