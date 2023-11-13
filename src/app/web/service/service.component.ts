import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Services } from 'src/app/shared/models/services.model';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  url = environment.root;
  servicesData: Services[] = [];
  dataSource: any;
  isLoading?: boolean;

  noData = {
    noDataFound: 'No Data Found',
    image: '/assets/no_data_found.png'
  };
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

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
    console.log(this.servicesData);
    return this.servicesData;
    });
  }

}
