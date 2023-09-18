import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-menuinages',
  templateUrl: './upload-menuinages.component.html',
  styleUrls: ['./upload-menuinages.component.scss']
})
export class UploadMenuinagesComponent {

  Url = environment.root;
  menu_id: any;

  imagePath?: string;
  showImage?: boolean;
  imagePreview: any;
  imageName: any;
  file: any;

  menuImageForm = new FormGroup({
    menu_id: new FormControl(''),
    
  })

  constructor(
    private menuService: MenuService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {

    
   }

   ngOnInit(): void {

    
    this.menu_id = this.route.snapshot.paramMap.get('id');


   }
  
   onSubmit(){
    this.updateImage(this.menu_id);
   }

   updateImage(menu_id: string) {
    const fb = new FormData();
    fb.append('file', this.file);
    fb.append('menu_id', menu_id);
    console.log(fb);
    //let headers = new Headers();
    //headers.append('Content-Type', 'multipart/form-data')
    //headers.append('Accept', 'application/json');
    
  //   $http.post(uploadUrl, fd, {
  //     transformRequest: angular.identity,
  //     headers: {'Content-Type': undefined}
  // })
  // .success(function(){
  // })
  // .error(function(){
  // });
    this.menuService.updateImage(menu_id, fb).subscribe((resp) => {

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
