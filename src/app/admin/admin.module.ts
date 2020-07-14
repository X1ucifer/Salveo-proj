import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';




import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [ AdminHeaderComponent, AdminSidebarComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
MatMenuModule  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[
    AdminHeaderComponent, 
    AdminSidebarComponent
  ]
})
export class AdminModule { }
