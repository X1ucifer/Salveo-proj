import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';




import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


import { AccessrollComponent } from './adminpanel/mobilefeature/accessroll/accessroll.component';
import { AdminusercreateComponent } from './adminpanel/mobilefeature/adminusercreate/adminusercreate.component';
import { AdminuserlistComponent } from './adminpanel/mobilefeature/adminuserlist/adminuserlist.component';
import { AppusersComponent } from './adminpanel/mobilefeature/appusers/appusers.component';
import { HomebannerComponent } from './adminpanel/mobilefeature/homebanner/homebanner.component';
import { SpecializationsComponent } from './adminpanel/mobilefeature/specializations/specializations.component';
import { SubcatdoctorComponent } from './adminpanel/mobilefeature/subcatdoctor/subcatdoctor.component';
import { SymptomsComponent } from './adminpanel/mobilefeature/symptoms/symptoms.component';
import { CreatedoctorsComponent } from './adminpanel/Doctors/createdoctors/createdoctors.component';
import { ListdoctorsComponent } from './adminpanel/Doctors/listdoctors/listdoctors.component';
import { LivedoctorsComponent } from './adminpanel/Doctors/livedoctors/livedoctors.component';
import { ViewdoctorsComponent } from './adminpanel/Doctors/viewdoctors/viewdoctors.component';
import { ListpatientsComponent } from './adminpanel/Patients/listpatients/listpatients.component';
import { ViewpatientsComponent } from './adminpanel/Patients/viewpatients/viewpatients.component';



@NgModule({
  declarations: [ AdminHeaderComponent, AdminSidebarComponent, DashboardComponent,
    AccessrollComponent,
    AdminusercreateComponent,
    AdminuserlistComponent,
    AppusersComponent,
    HomebannerComponent,
    SpecializationsComponent,
    SubcatdoctorComponent,
    SymptomsComponent,
    CreatedoctorsComponent,
    ListdoctorsComponent,
    LivedoctorsComponent,
    ViewdoctorsComponent,
    ListpatientsComponent,
    ViewpatientsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
