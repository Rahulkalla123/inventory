import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Ensure code runs only in the browser
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('AccessToken');

    if (token) {
      return true; // Allow access if token exists
    } else {
      router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }

  return false; // Block access if running in a non-browser environment
};
