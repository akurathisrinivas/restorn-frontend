import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  formdata: any;
  Url = environment.root;
  bookingId: any;
  
  model :any;
  active = 1;
  closeResult: any;


  
  constructor(private menuservice: MenuService,private modalService: NgbModal) { }
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

time = {hour: 14, minute: 30};
  
  time2 = {hour: 15, minute: 30};
  meridian = true;
  
  toggleMeridian() {
      this.meridian = !this.meridian;
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
    
    const datestring=formdata.datetime.day+'-'+formdata.datetime.month+'-'+formdata.datetime.year;
    //alert(datestring);
    formdata.datetime=datestring;
    this.menuservice.bookTable(formdata).subscribe(data => {
      
      //alert(data);

      let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;

      element.click();

    });
 }

 open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}
 

 getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

 
}
