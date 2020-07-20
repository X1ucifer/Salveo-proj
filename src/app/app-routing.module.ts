import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import { AdminComponent } from './admin/admin.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage', },
  { path: 'admin', component:LoginComponent, },
  {
    path: 'admin_panel', component: AdminComponent,
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
  {
    path: 'Create_Doctor_new',
    component: DoctorCreateComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
