import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  Url = environment.root;
  //menuId: number;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient: HttpClient) {
   // this.menuId=0;
   }

  getBookings(){
    return this.httpClient.get(`${this.Url}/bookings/list_bookings`);
    }

  getBookingById(id : string){
      return this.httpClient.get(`${this.Url}/bookings/getbookings/${id}`);
    }

}
