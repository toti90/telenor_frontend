import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  // FilterValues: object;
  filteredData = new Subject();

  constructor() { }

  updateFilterValue(filterValues: object) {
    this.filteredData.next(filterValues);
  }
}
