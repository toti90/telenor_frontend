import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private http: HttpClient) { }

  getMobiles(key?: string) {
    return this.http.get(`http://localhost:3000/shop/${key}`, {
      headers: { 'content-type': 'application/json' },
    });
  }
}
