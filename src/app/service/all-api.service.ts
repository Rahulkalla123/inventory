import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllAPIService {

  private apiUrl = 'https://localhost:7275/api/UserAuth';

  constructor(private http:HttpClient) { }
  
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, userData);
  }
  
  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, userData);
  }
}
