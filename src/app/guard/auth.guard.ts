import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AllAPIService } from '../service/all-api.service';
import { Observable } from 'rxjs';
import { JwtPayload, jwtDecode } from 'jwt-decode'; // ✅ Correct Import


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AllAPIService);


  // Ensure code runs only in the browser
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('AccessToken');
    const refreshToken = localStorage.getItem('RefreshToken');

    // Function to check token expiry
    const isTokenExpired = (token: string | null): boolean => {
      if (!token) return true;
      try {
        const decodedToken: JwtPayload = jwtDecode(token);
        return decodedToken.exp! * 1000 < Date.now();
      } catch (error) {
        return true; // Treat as expired if decoding fails
      }
    };

    if (token && !isTokenExpired(token)) {
      return true;
    }

    if (refreshToken && !isTokenExpired(refreshToken)) {
      return new Observable<boolean>((observer) => {
        authService.refreshToken().subscribe({
          next: (response) => {
            localStorage.setItem('AccessToken', response.accessToken);
            localStorage.setItem('RefreshToken', response.refreshToken);
            observer.next(true);
            observer.complete();
          },
          error: () => {
            localStorage.removeItem('AccessToken');
            localStorage.removeItem('RefreshToken');
            localStorage.removeItem('companyName');
            router.navigate(['/home']);
            observer.next(false);
            observer.complete();
          }
        });
      });
    }

    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
    localStorage.removeItem('companyName');
    router.navigate(['/home']);
    return false;
  }

  return false;
};
