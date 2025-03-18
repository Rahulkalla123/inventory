import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllAPIService {

  private apiUrl = 'https://localhost:7188/api/UserAuth';

  private userItemsUrl = 'https://localhost:7188/api/item';

  private userDetailsSubject = new BehaviorSubject<any>(null);
  userDetails$ = this.userDetailsSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, userData)
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, userData);
  }

  refreshToken(): Observable<any> {
    const RefreshToken = localStorage.getItem('RefreshToken');
    return this.http.post(`${this.apiUrl}/RefreshToken`, { RefreshToken });
  }

  getUserDetails(): Observable<any> {
    return this.http.get<{ success: boolean; user: any }>(`${this.apiUrl}/GetCurrentUser`).pipe(
      tap(response => {
        this.userDetailsSubject.next(response.user); 
      })
    );
  }

  getStoredUserDetails(): any {
    return this.userDetailsSubject.value; 
  }
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken(); // Returns true if token exists
  }

  addItem(): Observable<any> {
    return this.http.get(`${this.userItemsUrl}`);
  }

  addItems(itemData: any): Observable<any> {
    return this.http.post(`${this.userItemsUrl}`, itemData)
  }
  

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  }

}
