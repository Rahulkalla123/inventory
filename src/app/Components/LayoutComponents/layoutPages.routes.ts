import { Routes } from "@angular/router";

export const layoutPagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        
        children: [
          {
          path: '',
          redirectTo:'homemain',
          pathMatch:'full'
          },
          {
            path:'homemain',
            loadComponent: () => import('./home-main/home-main.component').then(c => c.HomeMainComponent),
            children:[
              {
                path:'',
                redirectTo:'dashboardMain',
                pathMatch:'full'
              },
              {
                path: 'gettingStarted',
                loadComponent: () => import('./getting-started/getting-started.component').then(c => c.GettingStartedComponent),
              },
              {
                path: 'dashboardMain',
                loadComponent: () => import('./dashboard-main/dashboard-main.component').then(c => c.DashboardMainComponent),
              },
              {
                path: 'announcement',
                loadComponent: () => import('./announcements/announcements.component').then(c => c.AnnouncementsComponent),
              },
              {
                path: 'recentUpdates',
                loadComponent: () => import('./recent-updates/recent-updates.component').then(c => c.RecentUpdatesComponent),
              },
            ]
          },
          {
            path: 'courses',
            loadComponent: () => import('./courses/courses.component').then(c => c.CoursesComponent),
        },
          {
            path: 'item',
            loadComponent: () => import('./inventory/item/item.component').then(c => c.ItemComponent),
        },
          {
            path: 'itemGroup',
            loadComponent: () => import('./inventory/item-groups/item-groups.component').then(c => c.ItemGroupsComponent),

          },
          {
            path: 'inventoryAdjustment',
            loadComponent: () => import('./inventory/inventory-adjustments/inventory-adjustments.component').then(c => c.InventoryAdjustmentsComponent),

          },
          {
            path: 'itemForm',
            loadComponent: () => import('./Forms/item-form/item-form.component').then(c => c.ItemFormComponent),

          },
          {
            path: 'itemFormGroup',
            loadComponent: () => import('./Forms/item-group-form/item-group-form.component').then(c => c.ItemGroupFormComponent),
          },
          {
            path: 'priceList',
            loadComponent: () => import('./inventory/price-list/price-list.component').then(c => c.PriceListComponent),

          },
          {
            path: 'priceListForm',
            loadComponent: () => import('./Forms/price-list-form/price-list-form.component').then(c => c.PriceListFormComponent),

          },
          {
            path: 'inventoryAdjustmentForm',
            loadComponent: () => import('./Forms/inventory-adjustment-form/inventory-adjustment-form.component').then(c => c.InventoryAdjustmentFormComponent),

          },
        //   {
        //     path: 'courses',
        //     loadComponent: () => import('./courses/courses.component').then(c => c.CoursesComponent),

        //   },
          {
            path: 'customerForm',
            loadComponent: () => import('./sales/customers/customers.component').then(c => c.CustomersComponent),

          },
          { path: 'item-details/:id',
            loadComponent: () => import('./inventory/item-details/item-details.component').then(c => c.ItemDetailsComponent),

          }
        ]
      },
]
export default layoutPagesRoutes;