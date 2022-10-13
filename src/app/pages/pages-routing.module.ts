import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"patient",component:PatientRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
