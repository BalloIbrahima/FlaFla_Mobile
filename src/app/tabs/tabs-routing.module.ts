import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'acceuil',
        loadChildren: () => import('../acceuil/acceuil.module').then( m => m.AcceuilPageModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('../compte/compte.module').then( m => m.ComptePageModule)
      },
      {
        path: 'service',
        loadChildren: () => import('../service/service.module').then( m => m.ServicePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/acceuil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/acceuil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
