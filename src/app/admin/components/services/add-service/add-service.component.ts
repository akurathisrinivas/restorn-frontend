import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'src/app/shared/models/services.model';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {

  Url = environment.root;
  id: any;
  formName: any;
  serviceForm : any;
  servicesData?: Services;
  message: any ;
  dataSaved = false;
  serviceLastId: any;

  public model = {
    name: 'Hardik',
    description: '<p>This is a sample form using CKEditor 4.</p>'
  };

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    }


   ngOnInit(): void {

    this.serviceForm = this.formBuilder.group({  
      title: ['', [Validators.required]],  
      short_description: ['', [Validators.required]],  
      long_description: ['', [Validators.required]],  
      icon_class: ['', [Validators.required]],  
      //description: ['', [Validators.required]], 
      status: ['', [Validators.required]],  
    }); 

    this.id = this.route.snapshot.paramMap.get('id');
    if( this.id){
      this.formName= "Edit";
    }else{
      this.formName= "Add";
    }
    this.initForm();
  }

  initForm(){

    if (this.id) {
      
     
      this.servicesService.getServicesById(this.id).subscribe(data => {
        this.servicesData = data as Services;
        //console.log(this.menuData);
        //alert(this.menuData.title);
        
      
      
      });
      
      }
    }


    onSubmit() {

      if (this.id) {
       // this.servicesService.updateMenu(this.id, this.menuForm.value).subscribe(data => {
       // })
      }
      else {
        this.servicesService.addService(this.serviceForm.value).subscribe(data => {
          this.servicesData = data as Services;
          console.log('servicesData',this.servicesData);
          this.serviceLastId=this.servicesData.lastId;
          console.log('serviceLastId',this.serviceLastId);
          this.dataSaved = true;  
          this.message = 'Record saved Successfully'; 
         // this.snackbar.open('Data added Successfully', 'Ok', {
           // duration: 2000,
          //});
          this.router.navigate([`/admin/services/add-serviceimage/${this.serviceLastId}/upload`]);

        })
      }
      //this.router.navigate(['/admin/newmenu']);
     
      //this.router.navigate([`/admin/services/add-serviceimage/${this.serviceLastId}/upload`]);
      //this.router.navigate([`admin/menus/${menu}/viewimages`]);
    }

}
