import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { AllAPIService } from '../service/all-api.service';
import { inject } from '@angular/core';

// ✅ Token Expiry Check
function isTokenExpired(token: string | null): boolean {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
}

// ✅ Skip token logic for these endpoints
const excludedUrls = ['/Login', '/Register', '/RefreshToken'];

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

// ✅ Interceptor
export const authonticationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AllAPIService);
  const accessToken = localStorage.getItem('AccessToken');
  const isExcluded = excludedUrls.some(url => req.url.includes(url));

  // ✅ Skip token checks for login/refresh/register
  if (isExcluded) {
    return next(req);
  }

  // ✅ If token is expired, refresh it
  if (isTokenExpired(accessToken)) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshTokenSubject.next(null);

      return authService.refreshToken().pipe(
        switchMap((response: any) => {
          if (response?.accessToken) {
            isRefreshing = false;
            refreshTokenSubject.next(response.accessToken);
            return next(addToken(req, response.accessToken));
          } else {
            isRefreshing = false;
            authService.logout();
            return throwError(() => new Error('Refresh token failed'));
          }
        }),
        catchError((err) => {
          isRefreshing = false;
          authService.logout();
          return throwError(() => err);
        })
      );
    } else {
      return refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => next(addToken(req, token!)))
      );
    }
  }

  // ✅ Normal flow with valid access token
  return next(addToken(req, accessToken)).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        alert('Session expired, please login again!');
        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          return authService.refreshToken().pipe(
            switchMap((response: any) => {
              if (response?.accessToken) {
                isRefreshing = false;
                refreshTokenSubject.next(response.accessToken);
                return next(addToken(req, response.accessToken));
              } else {
                isRefreshing = false;
                authService.logout();
                return throwError(() => error);
              }
            }),
            catchError((refreshErr) => {
              isRefreshing = false;
              authService.logout();
              return throwError(() => refreshErr);
            })
          );
        } else {
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

// ✅ Add Authorization Header
function addToken(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
  if (!token) return req;
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
