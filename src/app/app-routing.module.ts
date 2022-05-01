import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"driver",component:LoginDriverComponent},
  {path:"moringaAdmin",component:LoginMoringaAdminComponent},
  {path:"kemriAdmin",component:LoginKemriAdminComponent},
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
