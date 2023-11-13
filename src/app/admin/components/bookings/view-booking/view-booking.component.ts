import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/shared/models/bookings.model';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent {

  Url = environment.root;
  id: any;
  //bookingData?: Bookings;
  bookingData!: Bookings;

  bookingResult ?: Bookings; 

  // name: any;
  // bookingId: String | undefined;
  // email?:string;
  // datetime?:string;
  // people?:string;
  // specialrequest?:any;
  // createdDate?:string;

  pokemon = {};

  constructor(
    private bookingsService: BookingsService,
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
    //this.bookingResult = this.initGetData();
    //alert(this.bookingResult.name);
    this.bookingsService.getBookingById(this.id).subscribe(data => {

      this.bookingData = data as Bookings;
      
      // this.name= this.bookingData.name;
      // this.bookingId=this.bookingData.bookingId;
      // this.email=this.bookingData.email;
      // this.createdDate=this.bookingData.createdDate;
      // this.specialrequest=this.bookingData.specialrequest;
      // this.people=this.bookingData.people;
      // this.datetime=this.bookingData.datetime;
      // this.bookingResult = {
          
      //    id: this.bookingData.id,
      //    bookingId:this.bookingData.bookingId,
      //    name: this.bookingData.name,
      //    email: this.bookingData.name,
      //    datetime:this.bookingData.name,
      //    people:this.bookingData.name,
      //    specialrequest:this.bookingData.name,
      //    createdDate: this.bookingData.name,
      // }

      //console.log(this.bookingData);
      //console.log(this.bookingResult);
      //return this.bookingData;
    });

   }

   initGetData(){

    if (this.id) {
      
     
      this.bookingsService.getBookingById(this.id).subscribe(data => {
        this.bookingData = data as Bookings;
        console.log(this.bookingData);
        return this.bookingData;
      });

   }
  }

}
