import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://localhost:7246/api/';

  
  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<any>{
    return this.http.get<any>(this.apiUrl + endpoint).pipe(retry(3));

  }

  getDataById(endpoint: string, id: number): Observable<any>{
    return this.http.get<any>(this.apiUrl + endpoint + '/' + id).pipe(retry(3));
  }

  getDataByIdAndEndpoint(endpoint: string, id: number, endpoint2: string): Observable<any>{
    return this.http.get<any>(this.apiUrl + endpoint + '/' + id + '/' + endpoint2).pipe(retry(3));
  }
}
