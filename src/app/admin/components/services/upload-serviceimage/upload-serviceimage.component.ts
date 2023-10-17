import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-serviceimage',
  templateUrl: './upload-serviceimage.component.html',
  styleUrls: ['./upload-serviceimage.component.scss']
})
export class UploadServiceimageComponent {

  Url = environment.root;
  service_id: any;

  imagePath?: string;
  showImage?: boolean;
  imagePreview: any;
  imageName: any;
  file: any;


  serviceImageForm = new FormGroup({
    service_id: new FormControl(''),
    
  })


  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {

    
   }


   ngOnInit(): void {

    
    this.service_id = this.route.snapshot.paramMap.get('id');


   }

   onSubmit(){
    this.updateImage(this.service_id);
   }

   updateImage(service_id: string) {
    const fb = new FormData();
    fb.append('file', this.file);
    fb.append('service_id', service_id);
    console.log(fb);

    this.servicesService.updateServiceImage(service_id, fb).subscribe((resp) => {

      this.snackbar.open('Data added Successfully', 'Ok', {
        duration: 2000,
       });
      this.router.navigate([`/admin/services`]);

    });

   }


   onFileSelected(event: any) {

    this.imageName = event.target.files[0].name;
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.file);
  }

}
