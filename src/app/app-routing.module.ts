import { LoyaltyComponent } from './_components/_webapp/loyalty/loyalty.component';
import { FAQComponent } from './_components/_webapp/faq/faq.component';
import { PoliciesComponent } from './_components/_webapp/policies/policies.component';
import { ContactComponent } from './_components/_webapp/contact/contact.component';
import { LoginComponent } from './_components/_admin/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './_components/_admin/reports/reports.component';
import { HomeComponent } from './_components/_webapp/home/home.component';
import { TourBookingComponent } from './_components/_webapp/tour-booking/tour-booking.component';
import { TourDetailComponent } from './_components/_webapp/tour-detail/tour-detail.component';
import { TourGridComponent } from './_components/_webapp/tour-grid/tour-grid.component';
import { AboutUsComponent } from './_components/_webapp/about-us/about-us.component';
import { UpcomingEventsComponent } from './_components/_webapp/upcoming-events/upcoming-events.component';
import { StaffComponent } from './_components/_webapp/staff/staff.component';
import { ThankYouComponent } from './_components/_webapp/account/thank-you/thank-you.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'admin',
    redirectTo: 'admin/vendors',
    pathMatch: 'full'
  },
  { path: 'admin/login',  component: LoginComponent, data: { } },
  { path: 'admin/reports',  component: ReportsComponent, data: { } },
  { path: 'home',  component: HomeComponent, data: { } },
  { path: 'tour/booking/:tourName/:totalPeople',  component: TourBookingComponent, data: { } },
  { path: 'tour/grid',  component: TourGridComponent, data: { } },
  { path: 'tours/:tourName',  component: TourDetailComponent, data: { } },
  { path: 'Contact',  component: ContactComponent, data: { } },
  { path: 'Policies',  component: PoliciesComponent, data: { } },
  { path: 'FAQ',  component: FAQComponent, data: { } },
  { path: 'AboutUs',  component: AboutUsComponent, data: { } },
  { path: 'UpcomingEvents',  component: UpcomingEventsComponent, data: { } },
  { path: 'Staff',  component: StaffComponent, data: { } },
  { path: 'LoyaltyProgram',  component: LoyaltyComponent, data: { } },
  { path: 'account/thankyou/:customerGrandServiceId',  component: ThankYouComponent, data: { } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
