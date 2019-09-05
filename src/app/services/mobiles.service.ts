import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  private selectedPhonesSubject = new Subject<any>();
  selectedPhones = this.selectedPhonesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getMobilesforSideBar() {
    return this.http.get(`${environment.serverURL}/shop/sidebar`, {
      headers: { 'content-type': 'application/json' },
    });
  }
  getMobiles(key?: string) {
    return this.http.get(`${environment.serverURL}/shop/${key}`, {
      headers: { 'content-type': 'application/json' },
    }).subscribe(response => {
      this.selectedPhonesSubject.next(response)
    })
  }
}
