import { Component } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomePageMenu } from 'src/app/shared/models/menu.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  model :any;
  active = 1;
  closeResult: any;
  homePageMenuData!: HomePageMenu;

  constructor( private menuService: MenuService,
    private snackbar: MatSnackBar,
    private router: Router){

    };

    ngOnInit(): void {
      this.getMenu();
    }

    getMenu(){

      this.menuService.getHomePageMenu().subscribe((data) => {
         this.homePageMenuData = data as HomePageMenu;
         console.log(this.homePageMenuData.popularMenuList);
         return this.homePageMenuData;
     });
    
  }


}
