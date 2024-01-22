import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Customer/login/login.component';
import { RegistrationComponent } from './Customer/registration/registration.component';
import { DashboardComponent } from './Customer/dashboard/dashboard.component';
import { EnquiryComponent } from './Customer/enquiry/enquiry.component';
import { CInterfaceComponent } from './Customer/cinterface/cinterface.component';
import { HomeComponent } from './home/home.component';
import { GListComponent } from './Customer/g-list/g-list.component';
import { HpageComponent } from './Customer/hpage/hpage.component';
import { GInterComponent } from './Customer/g-inter/g-inter.component';
import { StatusComponent } from './Customer/status/status.component';
import { StatusListComponent } from './Customer/status-list/status-list.component';
import { FeedbackComponent } from './Customer/feedback/feedback.component';
import { ServiceListComponent } from './Customer/service-list/service-list.component';
import { EditProfileComponent } from './Customer/edit-profile/edit-profile.component';
import { DetailsComponent } from './Customer/details/details.component';
import { ServiceFormComponent } from './GarageOwner/service-form/service-form.component';
import { RegistrationGarageComponent } from './GarageOwner/registration-garage/registration-garage.component';
import { StypeComponent } from './GarageOwner/stype/stype.component';
import { LiserviceComponent } from './GarageOwner/liservice/liservice.component';
import { SDetailsComponent } from './GarageOwner/s-details/s-details.component';
import { AddserviceComponent } from './Customer/addservice/addservice.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    EnquiryComponent,
    CInterfaceComponent,
    HomeComponent,
    GListComponent,
    HpageComponent,
    GInterComponent,
    StatusComponent,
    StatusListComponent,
    FeedbackComponent,
    ServiceListComponent,
    EditProfileComponent,
    DetailsComponent,
    ServiceFormComponent,
    RegistrationGarageComponent,
    StypeComponent,
    LiserviceComponent,
    SDetailsComponent,
    AddserviceComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
