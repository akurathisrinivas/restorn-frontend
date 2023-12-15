import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  Url = environment.root;
  menuId: number;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  //private headers1 = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  
  constructor(private httpClient: HttpClient) {
    this.menuId=0;
   }

   getMenu(){
    return this.httpClient.get(`${this.Url}/menu/getAllMenu`);
     }

     getHomePageMenu(){
      return this.httpClient.get(`${this.Url}/menu/homePageMenu`);
       }

     getMenuById(id: string) {
      return this.httpClient.get(`${this.Url}/menu/getMenuById/${id}`);
    }

    addMenu(menu: any) {
      // console.log('student',student);
      return this.httpClient.post(`${this.Url}/menu/savemenu`, menu);
   }

   updateMenu(id: string, menu: any){
    //return this.httpClient.patch(`${this.Url}/menu/updateMenu/${id}`, menu);
    return this.httpClient.put(`${this.Url}/menu/updateMenu/${id}`, menu);
  }

  updateStatus(id:any,status : any){
    return this.httpClient.get(`${this.Url}/menu/updateStatus/${id}/${status}`);
  }



  deleteMenu(id: string) {
    return this.httpClient.delete(`${this.Url}/menu/deleteMenu/${id}`, { headers: this.headers });
  }

  bookTable(formdata: any){
    return this.httpClient.post(`${this.Url}/bookings/save`, formdata,{ headers: this.headers });

  }

  updateImage(id: string, files: any) {
    return this.httpClient.post(`${this.Url}/menuImages/upload`, files);
  }
  
}
