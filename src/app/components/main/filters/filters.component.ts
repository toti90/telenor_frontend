import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit, OnChanges {
  filterForm: FormGroup;
  priceValue: number;
  isSelected = false;
  constructor() { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      priceRange: new FormControl('null'),
      colorDisplay: new FormControl(null),
      camera: new FormControl(null),
      wap: new FormControl(null)
      // email: new FormControl(null),
      // status: new FormControl('Stable')
    });
    this.priceValue=this.filterForm.value.priceRange
    console.log(this.filterForm);
  }

  ngOnChanges(){
    console.log(this.filterForm);

  }

  onSelect(){
    this.isSelected = !this.isSelected;
  }

  onSubmit(){
    console.log(this.filterForm);
  }


}
