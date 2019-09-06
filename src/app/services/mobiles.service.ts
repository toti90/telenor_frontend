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

  private selectedPhoneSubject = new Subject<any>();
  selectedPhone = this.selectedPhoneSubject.asObservable();

  private onePhoneKey: string;

  private phonesInCartSubject = new Subject<any>();
  phonesInCart = this.phonesInCartSubject.asObservable();

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
      this.selectedPhonesSubject.next(response);
    })
  }

  getOneMobile(key: string) {
      this.http.get(`${environment.serverURL}/shop/${key}`, {
        headers: { 'content-type': 'application/json' },
      }).subscribe(response => {
        this.selectedPhoneSubject.next(response);
      })
  }

  getKey() {
    return this.onePhoneKey;
  }

  setKey(key?: string) {
    if (key) {
      this.onePhoneKey = key;
    } else {
      this.onePhoneKey = null;
      this.selectedPhoneSubject.next([]);
    }
  }
  getMobilesForCart(keys: string) {
    return this.http.get(`${environment.serverURL}/cart/${keys}`, {
      headers: { 'content-type': 'application/json' },
    }).subscribe(response => {
      this.phonesInCartSubject.next(response)
    })
  }
}
