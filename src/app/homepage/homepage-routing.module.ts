import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CorporateWellnessComponent } from './pages/corporate-wellness/corporate-wellness.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { DiagnosticsComponent } from './pages/diagnostics/diagnostics.component';
import { NursingComponent } from './pages/nursing/nursing.component';
import { PhysiotherapyComponent } from './pages/physiotherapy/physiotherapy.component';
import { DentalCareComponent } from './pages/dental-care/dental-care.component';
import { DoctorConsultationComponent } from './pages/doctor-consultation/doctor-consultation.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'corporate_wellness', component: CorporateWellnessComponent },
  { path: 'wellness', component: WellnessComponent },
  { path: 'diagnostics', component: DiagnosticsComponent },
  { path: 'nursing', component: NursingComponent },
  { path: 'physiotherapy', component: PhysiotherapyComponent },
  { path: 'dental_care', component: DentalCareComponent },
  { path: 'doctor_consultation', component: DoctorConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
