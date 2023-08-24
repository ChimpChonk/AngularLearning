import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
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
      'Content-Type': 'application/json', // This header indicates the format you're sending in the request
      // Add other headers here
    });
  
    let params: any = new HttpParams();
  
    if (field1 && field1Value) {
      params = params.append(field1, field1Value.toString());
    }
    if (field2 && field2Value) {
      params = params.append(field2, field2Value.toString());
    }
  
    console.log("Params:", params);
    console.log("Headers:", headers);
    
    // Use HttpClient.request method with custom configuration
    return this.http.request('post', `${this.apiUrl}${endpoint}`, {
      headers,
      params,
      body: data,
      responseType: 'text'
    });
  }

  deleteData(endpoint: string, id?: number): Observable<any> {
    let url = this.apiUrl + endpoint;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.request('delete', `${url}/${id}`, {headers, responseType: 'text'});
  }

  updateData(endpoint: string, id?: number, field1?: string, field1Value?: number, field2?: string, field2Value?: number, data?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // This header indicates the format you're sending in the request
      // Add other headers here
    });
  
    let params: any = new HttpParams();
  
    if (field1 && field1Value) {
      params = params.append(field1, field1Value.toString());
    }
    if (field2 && field2Value) {
      params = params.append(field2, field2Value.toString());
    }
  
    console.log("Params:", params);
    console.log("Headers:", headers);
    
    // Use HttpClient.request method with custom configuration
    return this.http.request('put', `${this.apiUrl}${endpoint}/${id}`, {
      headers,
      params,
      body: data,
      responseType: 'text'
    });
  }
}
