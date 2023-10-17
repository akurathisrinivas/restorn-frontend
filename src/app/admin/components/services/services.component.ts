import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Services } from 'src/app/shared/models/services.model';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  url = environment.root;
  servicesData: Services[] = [];
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
    'iconurl',
    'iconclass',
    'shortDescription',
    'longDescription',
    'createdDate',
    'status',
    'actions'
  ];

  constructor(private servicesService: ServicesService,
    private snackbar: MatSnackBar,
    private router: Router){

  }
  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.servicesService.getServices().subscribe((data) => {
    this.servicesData = data as Services[];
    this.dataSource = new MatTableDataSource(this.servicesData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.total = this.dataSource.data.length;
  });
}


applyFilter(event: any) {
  this.dataSource.filter = event.target.value.trim().toLowerCase();
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
  // this.menuService.updateStatus(id, Form.status).subscribe((data) => {
  //   this.getMenu();
  //   this.snackbar.open('Status Updated Successfully', 'Ok', {
  //     duration: 2000,
  //   });
  // });
}

viewService(id: String){

}

}
