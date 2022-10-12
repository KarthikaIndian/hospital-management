import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';


@NgModule({
  declarations: [   PatientRegisterComponent, DoctorRegisterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
 
  ]
})
export class PagesModule { }
