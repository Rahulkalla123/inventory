import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllAPIService {

  private apiUrl = 'https://freeapi.miniprojectideas.com/api/JWT';

  constructor(private http:HttpClient) { }
  
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CreateNewUser`, userData);
  }

}
