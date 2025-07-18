import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authToken = sessionStorage.getItem('auth-token');

  if (authToken) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
