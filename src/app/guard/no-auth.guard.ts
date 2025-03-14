import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if running in the browser
  if (typeof window !== 'undefined' && localStorage.getItem('AccessToken')) {
    router.navigate(['/layout']); // Redirect logged-in users to layout
    return false;
  }

  return true; // Allow access to login/register if not authenticated
};
