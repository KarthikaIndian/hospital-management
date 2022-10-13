import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';

const routes: Routes = [
  {path:"",  loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
{path:"dashboard",component:HeaderComponent ,loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)},
// {path:"patient",component:PatientRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
