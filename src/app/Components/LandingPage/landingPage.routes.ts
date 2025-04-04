import { Routes } from "@angular/router";

export const landingPageroutes: Routes = [
      {
            path: '',
            loadComponent: () => import('./Content/home/home.component').then(c => c.HomeComponent),
          },
];

export default landingPageroutes;
