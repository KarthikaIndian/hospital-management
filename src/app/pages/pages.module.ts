import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [   PatientRegisterComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
 
  ]
})
export class PagesModule { }
