import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ViewBookingComponent } from './components/bookings/view-booking/view-booking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMenuComponent } from './components/menu/add-menu/add-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { UploadMenuinagesComponent } from './components/menu/upload-menuinages/upload-menuinages.component';
import { ViewMenuimagesComponent } from './components/menu/view-menuimages/view-menuimages.component';
import { AddServiceComponent } from './components/services/add-service/add-service.component';
import { ServicesComponent } from './components/services/services.component';
import { UploadServiceimageComponent } from './components/services/upload-serviceimage/upload-serviceimage.component';



const routes: Routes = [

    {
      path:'',component:AdminComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'menus', component: MenuComponent },
        { path: 'newmenu', component: AddMenuComponent },
        { path: 'menus/:id/edit', component: AddMenuComponent },
        { path: 'menus/:id/viewimages', component: ViewMenuimagesComponent },
        { path: 'menus/add-menuimage/:id/upload', component: UploadMenuinagesComponent },

        { path: 'bookings', component: BookingsComponent },
        { path: 'viewBooking/:id/view', component: ViewBookingComponent },

        { path: 'services', component: ServicesComponent },
        { path: 'newservice', component: AddServiceComponent },
        { path: 'services/add-serviceimage/:id/upload', component: UploadServiceimageComponent },

      ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }