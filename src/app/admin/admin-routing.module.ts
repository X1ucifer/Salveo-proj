import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListpatientsComponent } from './adminpanel/Patients/listpatients/listpatients.component';
import { ViewpatientsComponent } from './adminpanel/Patients/viewpatients/viewpatients.component';
import { HomebannerComponent } from './adminpanel/mobilefeature/homebanner/homebanner.component';
import { AdminuserlistComponent } from './adminpanel/mobilefeature/adminuserlist/adminuserlist.component';
import { AdminusercreateComponent } from './adminpanel/mobilefeature/adminusercreate/adminusercreate.component';
import { AccessrollComponent } from './adminpanel/mobilefeature/accessroll/accessroll.component';
import { SubcatdoctorComponent } from './adminpanel/mobilefeature/subcatdoctor/subcatdoctor.component';
import { SymptomsComponent } from './adminpanel/mobilefeature/symptoms/symptoms.component';
import { SpecializationsComponent } from './adminpanel/mobilefeature/specializations/specializations.component';
import { AppusersComponent } from './adminpanel/mobilefeature/appusers/appusers.component';
import { CreatedoctorsComponent } from './adminpanel/Doctors/createdoctors/createdoctors.component';
import { ListdoctorsComponent } from './adminpanel/Doctors/listdoctors/listdoctors.component';
import { ViewdoctorsComponent } from './adminpanel/Doctors/viewdoctors/viewdoctors.component';
import { LivedoctorsComponent } from './adminpanel/Doctors/livedoctors/livedoctors.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },



  {
    path: 'Patient_list',
    component: ListpatientsComponent,

  },


  {
    path: 'View_patient_profile',
    component: ViewpatientsComponent,

  },

  {
    path: 'Home_banner',
    component: HomebannerComponent,

  },
  {
    path: 'admin_user_list',
    component: AdminuserlistComponent,

  },
  {
    path: 'admin_user_create',
    component: AdminusercreateComponent,

  },
  {
    path: 'accessroll',
    component: AccessrollComponent,

  },
  {
    path: 'subcatdoctor',
    component: SubcatdoctorComponent,

  },
  {
    path: 'symptoms',
    component: SymptomsComponent,

  },
  {
    path: 'specializations',
    component: SpecializationsComponent,

  },
  {
    path: 'Appuserlist',
    component: AppusersComponent,

  },



  {
    path: 'create_doctors',
    component: CreatedoctorsComponent,

  },
  {
    path: 'List_doctors',
    component: ListdoctorsComponent,

  },
  {
    path: 'view_doctors',
    component: ViewdoctorsComponent,

  },

  {
    path: 'live_doctors_list',
    component: LivedoctorsComponent,

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
