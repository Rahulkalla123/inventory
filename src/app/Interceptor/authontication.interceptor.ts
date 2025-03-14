import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { AllAPIService } from '../service/all-api.service';
import { inject } from '@angular/core';

export const authonticationInterceptor: HttpInterceptorFn =  (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AllAPIService);

  let accessToken = localStorage.getItem('AccessToken');
  let isRefreshing = false;
  let refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  // Attach Access Token to Request Headers
  let authReq = addToken(req, accessToken);

  return next(authReq).pipe(  // Use next(authReq) instead of next.handle(authReq)
    catchError(error => {
      debugger
      // If Unauthorized (401), try to refresh token
      if (error instanceof HttpErrorResponse && error.status === 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          return authService.refreshToken().pipe(
            switchMap((response: any) => {
              isRefreshing = false;
              localStorage.setItem('AccessToken', response.accessToken); // Save new Access Token
              localStorage.setItem('RefreshToken', response.refreshToken); // Save new Refresh Token
              refreshTokenSubject.next(response.accessToken);

              // Retry the failed request with the new access token
              return next(addToken(req, response.accessToken));  // Updated here as well
            }),
            catchError(refreshError => {
              isRefreshing = false;
              authService.logout(); // Logout user if refresh fails
              return throwError(() => refreshError);
            })
          );
        } else {
          // Wait until the refresh is done, then retry the request
          return refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap(token => next(addToken(req, token!)))
          );
        }
      }

      return throwError(() => error);
    })
  );
};

// Function to attach token to request
function addToken(request: HttpRequest<any>, token: string | null) {
  if (!token) return request;
  
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
};
