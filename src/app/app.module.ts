import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HomepageModule} from './homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';



import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    HomepageComponent,
    DoctorCreateComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    HomepageModule,
    FormsModule,
    MatButtonModule,
    RadioButtonModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
