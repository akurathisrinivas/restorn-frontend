import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu, MenuImages } from 'src/app/shared/models/menu.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-menuimages',
  templateUrl: './view-menuimages.component.html',
  styleUrls: ['./view-menuimages.component.scss']
})
export class ViewMenuimagesComponent {

  Url = environment.root;
  id: any;
  menuData ?: Menu;

  menuImages?: MenuImages[];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {

    
   }

   ngOnInit(): void {
    if (sessionStorage.length == 0) {
      this.router.navigate([`/login`]);
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.menuService.getMenuById(this.id).subscribe(data => {
      this.menuData = data as Menu;
      this.menuImages = this.menuData.menuImages;
      console.log(this.menuImages);
    });
    
   }


}
