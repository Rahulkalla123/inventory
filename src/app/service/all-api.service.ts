import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllAPIService {

  private apiUrl = 'https://localhost:7275/api/UserAuth';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, userData)
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, userData);
  }

  refreshToken(): Observable<any> {
    debugger
    const RefreshToken = localStorage.getItem('RefreshToken');
    return this.http.post(`${this.apiUrl}/RefreshToken`, { RefreshToken });
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetCurrentUser`)
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken(); // Returns true if token exists
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  }

}
