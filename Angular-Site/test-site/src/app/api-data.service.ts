import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://localhost:7246/api/';

  
  constructor(private http: HttpClient) { }

  getData(endpoint: string, id?: number, endpoint2?: string): Observable<any> {
    let url = this.apiUrl + endpoint;

    if (id !== undefined) {
      url += '/' + id;

      if (endpoint2 !== undefined) {
        url += '/' + endpoint2;
      }
    }

    return this.http.get<any>(url);
  }

}
