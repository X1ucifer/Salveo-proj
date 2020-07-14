import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { NgImageSliderModule } from 'ng-image-slider';

// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    CorporateWellnessComponent,
    WellnessComponent,
    DiagnosticsComponent,
    NursingComponent,
    PhysiotherapyComponent,
    DentalCareComponent,
    DoctorConsultationComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgImageSliderModule,
   
    // SlickCarouselModule
    MatTabsModule,
    CarouselModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[HeaderComponent,
    FooterComponent,]
})
export class HomepageModule { }
