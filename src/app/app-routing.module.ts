import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage', },
  
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)
      },]
  },
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
      },]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
