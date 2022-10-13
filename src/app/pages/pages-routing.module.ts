import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
