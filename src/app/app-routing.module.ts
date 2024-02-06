import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './Customer/registration/registration.component';
import { LoginComponent } from './Customer/login/login.component';
import { HpageComponent } from './Customer/hpage/hpage.component';
import { GInterComponent } from './Customer/g-inter/g-inter.component';
import { GListComponent } from './Customer/g-list/g-list.component';
import { EnquiryComponent } from './Customer/enquiry/enquiry.component';
import { DashboardComponent } from './Customer/dashboard/dashboard.component';
import { StatusComponent } from './Customer/status/status.component';
import { ServiceListComponent } from './Customer/service-list/service-list.component';
import { FeedbackComponent } from './Customer/feedback/feedback.component';
import { EditProfileComponent } from './Customer/edit-profile/edit-profile.component';
import { DetailsComponent } from './Customer/details/details.component';
import { RegistrationGarageComponent } from './GarageOwner/registration-garage/registration-garage.component';
import { StypeComponent } from './GarageOwner/stype/stype.component';
import { SDetailsComponent } from './GarageOwner/s-details/s-details.component';
import { AddserviceComponent } from './Customer/addservice/addservice.component';
import { ServiceFormComponent } from './GarageOwner/service-form/service-form.component';
import { GHomeComponent } from './GarageOwner/ghome/ghome.component';
import { GLoginComponent } from './GarageOwner/glogin/glogin.component';
import { GAppointmentComponent } from './GarageOwner/gappointment/gappointment.component';
import { GContactComponent } from './GarageOwner/gcontact/gcontact.component';
import { GEditProfileComponent } from './GarageOwner/gedit-profile/gedit-profile.component';
import { GProfileComponent } from './GarageOwner/gprofile/gprofile.component';
import { GFeedbackComponent } from './GarageOwner/gfeedback/gfeedback.component';
import { StatusListComponent } from './Customer/status-list/status-list.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'CustomerHome', component: HpageComponent },
  { path: 'GarageList', component: GInterComponent },
  { path: 'GarageDetails', component: GListComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'status', component: StatusComponent },
  { path: 'service', component: ServiceListComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'Details', component: DetailsComponent },
  { path: 'Garagereg', component: RegistrationGarageComponent },
  { path: 'Sform', component: ServiceFormComponent },
  { path: 'service-type', component: StypeComponent },
  { path: 's-details', component: SDetailsComponent },
  { path: 'AddServices', component: AddserviceComponent },
  { path: 'Garage', component: GHomeComponent },
  { path: 'GLogin', component: GLoginComponent },
  { path: 'Gappoint', component: GAppointmentComponent },
  { path: 'Gcontact', component: GContactComponent },
  { path: 'GEdit', component: GEditProfileComponent },
  { path: 'Gpro', component: GProfileComponent },
  { path: 'GFeed', component: GFeedbackComponent },
  { path: 'Glist', component: DetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
