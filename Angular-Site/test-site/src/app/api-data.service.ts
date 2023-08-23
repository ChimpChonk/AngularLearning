import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';

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


  createData(endpoint: string, field1?: string, field1Value?: number, field2?: string, field2Value?: number, data?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers here
    });
  
    const params: { [key: string]: string } = {}; 
  
    if (field1 && field1Value) {
      params[field1] = field1Value.toString();
    }
    if (field2 && field2Value) {
      params[field2] = field2Value.toString();
    }
  
    return this.http.post<any>(`${this.apiUrl}${endpoint}`, data, { headers, params });
  }
  
  
}
