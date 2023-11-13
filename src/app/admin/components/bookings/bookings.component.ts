import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/shared/models/bookings.model';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

  url = environment.root;
  bookingsData: Bookings[] = [];
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
    'bookingId',
    'name',
    'email',
    'datetime',
    'people',
    'specialrequest',
    'createdDate',
    'actions'
  ];

  constructor( private bookingsService: BookingsService,
    private snackbar: MatSnackBar,
    private router: Router){

    };

    ngOnInit(): void {
      if (sessionStorage.length == 0) {
        this.router.navigate([`/login`]);
      }
      this.getBookings();
    }

    getBookings(){
    this.bookingsService.getBookings().subscribe((data) => {
    this.bookingsData = data as Bookings[];
    this.dataSource = new MatTableDataSource(this.bookingsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.total = this.dataSource.data.length;
  });
}

applyFilter(event: any) {
  this.dataSource.filter = event.target.value.trim().toLowerCase();
}

viewBooking(id : string){
  this.router.navigate([`admin/viewBooking/${id}/view`]);
}



}
