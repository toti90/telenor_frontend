import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private http: HttpClient) { }

  getMobiles(key?: string) {
    return this.http.get(`${environment.serverURL}/shop/${key}`, {
      headers: { 'content-type': 'application/json' },
    });
  }
}
