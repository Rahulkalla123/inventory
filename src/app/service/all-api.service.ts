import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

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
    return this.http.post(`${this.apiUrl}/Login`, userData).pipe(
      tap((response: any) => {
        this.storeTokens(response.accessToken, response.refreshToken);
      })
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('RefreshToken');
    if (!refreshToken) {
      console.warn('No refresh token found. Cannot refresh.');
      return of(null);
    }

    return this.http
      .post(`${this.apiUrl}/RefreshToken`, {
        refreshToken: refreshToken,
      })
      .pipe(
        tap((response: any) => {
          if (response.accessToken && response.refreshToken) {
            this.storeTokens(response.accessToken, response.refreshToken);
          }
        }),
        catchError((error) => {
          console.error('Refresh Token API error:', error);
          return of(null);
        })
      );
  }
  
  getUserDetails(): Observable<any> {
    return this.http.get<{ success: boolean; user: any;businessType: any }>(`${this.apiUrl}/GetCurrentUser`).pipe(
      tap(response => {
       localStorage.setItem('companyName', response.user.name);
       localStorage.setItem('businessType',response.businessType);

      })
    );
  }

  getBusinessType(): string | null {
    return localStorage.getItem('businessType');
  }

  getStoredUserDetails(): any {
    return this.userDetailsSubject.value; 
  }
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken(); 
  }

  addItem(): Observable<any> {
    return this.http.get(`${this.userItemsUrl}`);
  }

  addItems(itemData: any): Observable<any> {
    return this.http.post(`${this.userItemsUrl}`, itemData)
  }

  getItemById(id: any | null): Observable<any> {
    return this.http.get(`${this.userItemsUrl}/${id}`);
  }

  updateItem(id:number , updatedItem: any) {
  return this.http.put(`${this.userItemsUrl}/${id}`,updatedItem);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.userItemsUrl}/${id}`)
  }

  private storeTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('AccessToken', accessToken);
    localStorage.setItem('RefreshToken', refreshToken);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('companyName');
    window.location.href = '/home';
  }

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.getUserDetails().subscribe(
        (response) => {
          console.log('User auto-logged in', response);
        },
        (error) => {
          console.error('Error fetching user details after login:', error);
        }
      );
    }
  }  

}
