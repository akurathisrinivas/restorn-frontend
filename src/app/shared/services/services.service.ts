import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  Url = environment.root;
  //menuId: number;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient: HttpClient) { }

  getServices(){
    return this.httpClient.get(`${this.Url}/services/allservices`);
    }

  getServicesById(id: string){
      return this.httpClient.get(`${this.Url}/services/getServiceById/${id}`);
  }

  addService(service: any) {
    // console.log('student',student);
    return this.httpClient.post(`${this.Url}/services/addservices`, service);
 }

 updateServiceImage(id: string, files: any) {
  return this.httpClient.post(`${this.Url}/services/uploadserviceimage`, files);
}

updateService(id: string, service:any){
  return this.httpClient.patch(`${this.Url}/services/updateServicePartially/${id}`, service);
}

}
