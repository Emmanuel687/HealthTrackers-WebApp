import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { ChatComponent } from './chat-box/chat/chat.component';
import { FormsComponent } from './forms/forms.component';
import { LabFormComponent } from './forms/lab-form/lab-form.component';
import { DisplayFormComponent } from './forms/display-form/display-form.component';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { LoginKemriComponent } from './login/login-kemri/login-kemri.component';
import { LoginMoringaComponent } from './login/login-moringa/login-moringa.component';
import { LoginMoringaAdminComponent } from './login/login-moringa-admin/login-moringa-admin.component';
import { LoginKemriAdminComponent } from './login/login-kemri-admin/login-kemri-admin.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ChatComponent,
    FormsComponent,
    LabFormComponent,
    DisplayFormComponent,
    DataFormComponent,
    LoginKemriComponent,
    LoginMoringaComponent,
    LoginMoringaAdminComponent,
    LoginKemriAdminComponent,
    LoginDriverComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
