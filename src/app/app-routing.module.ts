import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './web/about/about.component';
import { ContactComponent } from './web/contact/contact.component';
import { HomeComponent } from './web/home/home.component';
import { MenuComponent } from './web/menu/menu.component';
import { ServiceComponent } from './web/service/service.component';

const routes: Routes = [

  

  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'service', component: ServiceComponent },
  {path: 'menu', component: MenuComponent } ,
  {path: 'contact', component: ContactComponent } ,
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
