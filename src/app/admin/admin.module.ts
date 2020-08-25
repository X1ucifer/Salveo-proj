import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';


import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';




import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';

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
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './adminpanel/Doctors/profile/profile.component';
import { CreateCompanyComponent } from './adminpanel/create-company/create-company.component';
import { CompanyListComponent } from './adminpanel/company-list/company-list.component';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { AppoinmentlistComponent } from './adminpanel/appoinmentlist/appoinmentlist.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [AdminHeaderComponent, AdminSidebarComponent, DashboardComponent,
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
    ProfileComponent,
    CreateCompanyComponent,
    CompanyListComponent,
    AppoinmentlistComponent,
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
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    DialogModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    DatePipe
  ],
  exports: [
    AdminHeaderComponent,
    AdminSidebarComponent
  ]
})
export class AdminModule { }
