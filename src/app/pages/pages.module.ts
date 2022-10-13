import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [   
    PatientRegisterComponent, 
    DashboardComponent,
    DoctorRegisterComponent],
    
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
