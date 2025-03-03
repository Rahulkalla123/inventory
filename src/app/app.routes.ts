import { Routes } from '@angular/router';
import { RegistrationComponent } from './Components/Login&Registeration/registration/registration.component';
import { LoginComponent } from './Components/Login&Registeration/login/login.component';
import { HomeComponent } from './Components/LandingPage/Content/home/home.component';
import { LayoutComponent } from './Components/LayoutComponents/layout/layout.component';
import { HomeMainComponent } from './Components/LayoutComponents/home-main/home-main.component';
import { GettingStartedComponent } from './Components/LayoutComponents/getting-started/getting-started.component';
import { DashboardMainComponent } from './Components/LayoutComponents/dashboard-main/dashboard-main.component';
import { AnnouncementsComponent } from './Components/LayoutComponents/announcements/announcements.component';
import { RecentUpdatesComponent } from './Components/LayoutComponents/recent-updates/recent-updates.component';
import { ItemComponent } from './Components/LayoutComponents/inventory/item/item.component';
import { InventoryAdjustmentsComponent } from './Components/LayoutComponents/inventory/inventory-adjustments/inventory-adjustments.component';
import { ItemGroupsComponent } from './Components/LayoutComponents/inventory/item-groups/item-groups.component';

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
      {
        path: 'layout',
        component: LayoutComponent,
        children: [
          {
          path: '',
          redirectTo:'homemain',
          pathMatch:'full'
          },
          {
            path:'homemain',
            component:HomeMainComponent,
            children:[
              {
                path:'',
                redirectTo:'dashboardMain',
                pathMatch:'full'
              },
              {
                path: 'gettingStarted',
                component: GettingStartedComponent
              },
              {
                path: 'dashboardMain',
                component: DashboardMainComponent
              },
              {
                path: 'announcement',
                component: AnnouncementsComponent
              },
              {
                path: 'recentUpdates',
                component: RecentUpdatesComponent
              },
            ]
          },
          {
            path: 'item',
            component: ItemComponent
          },
          {
            path: 'itemGroup',
            component: ItemGroupsComponent
          },
          {
            path: 'inventoryAdjustment',
            component: InventoryAdjustmentsComponent
          },
          
        ]
      },
];
