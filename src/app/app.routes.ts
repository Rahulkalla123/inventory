import { Routes } from '@angular/router';
import { RegistrationComponent } from './Components/Login&Registeration/registration/registration.component';
import { LoginComponent } from './Components/Login&Registeration/login/login.component';
import { HomeComponent } from './Components/LayoutComponents/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
];
