import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://localhost:7246/api/';
  endpoint: string = '';
  
  constructor(private http: HttpClient) { }

  getData(endpoint): Observable<any>{
    return this.http.get<any>(this.apiUrl + endpoint);
  }
}
