import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  formdata: any;
  Url = environment.root;
  bookingId: any;
  
  

  constructor(private menuservice: MenuService) { }
  ngOnInit() {
  // this.formdata = this.formBuilder.group({  
  //   name: ['', [Validators.required]],  
  //   datetime: ['', [Validators.required]],  
  //   email: ['', [Validators.required]],  
  //   people: ['', [Validators.required]],  
  //   specialrequest: ['', [Validators.required]],  
  // }); 
  this.formdata = new FormGroup({
    email: new FormControl("angular@gmail.com"),
    name: new FormControl("abcd1234"),
    datetime: new FormControl(),
    people: new FormControl(),
    specialrequest: new FormControl(),
 });
}

  tabClick() {
    console.log('click')
  }

  onClickSubmit(formdata: any) {
    //alert("Entered Email id : " + data.emailid);
    //alert("data coming..."+ data.email);
    //formdata.bookingId= '123458';
    const rndInt = Math.floor(Math.random() * 60) + 10;
    formdata.bookingId=rndInt;
    this.menuservice.bookTable(formdata).subscribe(data => {
      // this.snackbar.open('Data added Successfully', 'Ok', {
      //    duration: 2000,
      //  });
    })
 }
 
 
}
