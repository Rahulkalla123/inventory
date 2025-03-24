import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest,} from '@angular/common/http';
import { BehaviorSubject,catchError,filter,Observable,switchMap,take,throwError } from 'rxjs';
import { AllAPIService } from '../service/all-api.service';
import { inject } from '@angular/core';

// ✅ Validate token (Check expiry)
function isValidToken(token: string | null): boolean {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000; 

    // Check if token is expired
    return Date.now() < expiry;
  } catch (error) {
    console.error('Invalid token format', error);
    return false;
  }
}

// ✅ Authentication Interceptor
export const authonticationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AllAPIService);
  let accessToken = localStorage.getItem('AccessToken');
  let isRefreshing = false;
  let refreshTokenSubject = new BehaviorSubject<string | null>(null);

  // ✅ Attach Access Token to Request
  let authReq = addToken(req, accessToken);

  return next(authReq).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.warn('Token expired or unauthorized, attempting refresh...');

        // If token is invalid or expired, attempt refresh
        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          return authService.refreshToken().pipe(
            switchMap((response: any) => {
              if (response?.accessToken) {
                console.log('Token refreshed successfully!');
                isRefreshing = false;
                refreshTokenSubject.next(response.accessToken);
                return next(addToken(req, response.accessToken));
              } else {
                console.warn('Refresh failed. Logging out user.');
                authService.logout();
                return throwError(() => error);
              }
            }),
            catchError((refreshError) => {
              isRefreshing = false;
              console.error('Error refreshing token:', refreshError);
              authService.logout();
              return throwError(() => error);
            })
          );
        } else {
          return refreshTokenSubject.pipe(
            filter((token) => token !== null),
            take(1),
            switchMap((token) => next(addToken(req, token!)))
          );
        }
      }
      return throwError(() => error);
    })
  );
};

// ✅ Add Token to Request
function addToken(request: HttpRequest<any>, token: string | null) {
  if (!token) return request;
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
