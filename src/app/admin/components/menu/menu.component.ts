import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { environment } from 'src/environments/environment';
import { Menu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  url = environment.root;
  menuData: Menu[] = [];
  dataSource: any;
  isLoading?: boolean;
  totalLength = [10, 25, 50, 100];
  pageIndex?: number;
  pageSize?: number;
  total!: number;
  noData = {
    noDataFound: 'No Data Found',
    image: '/assets/no_data_found.png'
  };
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

  displayedColumns: string[] = [
    'sno',
    'title',
    'shot_desc',
    'type',
    'category',
    'price',
    'status',
    'menuImages',
    'actions',
  ];

  constructor( private menuService: MenuService,
    private snackbar: MatSnackBar,
    private router: Router){

    };

    ngOnInit(): void {
      if (sessionStorage.length == 0) {
        this.router.navigate([`/login`]);
      }
      this.getMenu();
    }

  getMenu(){
    this.menuService.getMenu().subscribe((data) => {
    this.menuData = data as Menu[];
    this.dataSource = new MatTableDataSource(this.menuData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.total = this.dataSource.data.length;
  });
}


applyFilter(event: any) {
  this.dataSource.filter = event.target.value.trim().toLowerCase();
}

updateMenu(menu: string) {
  this.router.navigate([`admin/menus/${menu}/edit`]);
}

viewMenuImages(menu: string) {
  this.router.navigate([`admin/menus/${menu}/viewimages`]);
}

deleteMenu(menu: string) {
  if (confirm("Are you sure! You want to delete this record?") === true) {
     this.menuService.deleteMenu(menu).subscribe((data) => {
       this.getMenu();
       this.snackbar.open('Deleted Successfully', 'Ok', {
         duration: 2000,
       });
    });
  }
}


async changeStatus(id: string, status: any) {
  if (status === 'ACTIVE') {
    status = "INACTIVE";
  } else {
    status = "ACTIVE";
  }
  const Form = {
    status,
  };
  this.menuService.updateStatus(id, Form.status).subscribe((data) => {
    this.getMenu();
    this.snackbar.open('Status Updated Successfully', 'Ok', {
      duration: 2000,
    });
  });
}

}
