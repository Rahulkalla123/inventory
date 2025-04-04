import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { noAuthGuard } from './guard/no-auth.guard';
import { HomeComponent } from './Components/LandingPage/Content/home/home.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [noAuthGuard]
      },
      {
        path: 'register',
        loadComponent: () => import('./Components/LoginRegisteration/registration/registration.component').then(c => c.RegistrationComponent),
        canActivate: [noAuthGuard]
      },
      {
        path: 'login',
        loadComponent: () => import('./Components/LoginRegisteration/login/login.component').then(c => c.LoginComponent),
        canActivate: [noAuthGuard]
      },
      {
        path: 'layout',
        canActivate: [authGuard],
        loadChildren: () => import('./Components/LayoutComponents/layoutPages.routes'),
      },
      {
        path: '**',
        loadComponent: () => import('./Components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),

      },
];
