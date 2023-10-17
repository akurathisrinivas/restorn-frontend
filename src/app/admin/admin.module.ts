import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestNavComponent } from './components/test-nav/test-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../shared/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuComponent } from './components/menu/add-menu/add-menu.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ViewBookingComponent } from './components/bookings/view-booking/view-booking.component';
import { ViewMenuimagesComponent } from './components/menu/view-menuimages/view-menuimages.component';
import { UploadMenuinagesComponent } from './components/menu/upload-menuinages/upload-menuinages.component';
import { ServicesComponent } from './components/services/services.component';
import { AddServiceComponent } from './components/services/add-service/add-service.component';

import { CKEditorModule } from 'ckeditor4-angular';
import { UploadServiceimageComponent } from './components/services/upload-serviceimage/upload-serviceimage.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestNavComponent,
    AdminComponent,
    MenuComponent,
    AddMenuComponent,
    BookingsComponent,
    ViewBookingComponent,
    ViewMenuimagesComponent,
    UploadMenuinagesComponent,
    ServicesComponent,
    AddServiceComponent,
    UploadServiceimageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    MatSidenavModule,
    MatBadgeModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
