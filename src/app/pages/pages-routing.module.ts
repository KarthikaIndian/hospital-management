import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"patient",component:PatientRegisterComponent},
  { path: 'doctor', component: DoctorRegisterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
