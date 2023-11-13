import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu.model';
import { MenuService } from 'src/app/shared/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {

  Url = environment.root;
  id: any;
  formName: any;
  menuData?: Menu;
  menuForm : any;
  massage: any ;
  dataSaved = false;
  // menuForm = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   shot_desc: new FormControl('', Validators.required),
  //   type: new FormControl('', Validators.required),
  //   category: new FormControl(''),
  //   price: new FormControl(''),
  //   status : new FormControl(''),
    
  // });



//this.menuForm.status= 1;
  
  constructor(
    private menuService: MenuService,
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
    this.menuForm = this.formBuilder.group({  
      title: ['', [Validators.required]],  
      shot_desc: ['', [Validators.required]],  
      type: ['', [Validators.required]],  
      category: ['', [Validators.required]],  
      price: ['', [Validators.required]],  
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
      
     
      this.menuService.getMenuById(this.id).subscribe(data => {
        this.menuData = data as Menu;
        console.log(this.menuData);
        //alert(this.menuData.title);
        this.menuForm.controls['title'].setValue(this.menuData.title);
        this.menuForm.controls['shot_desc'].setValue(this.menuData.shot_desc);
        this.menuForm.controls['type'].setValue(this.menuData.type);
        this.menuForm.controls['category'].setValue(this.menuData.category);
        this.menuForm.controls['price'].setValue(this.menuData.price);
        this.menuForm.controls['status'].setValue(this.menuData.status);
      
      
      });
      
      }
    }

  

  onSubmit() {

    if (this.id) {
      this.menuService.updateMenu(this.id, this.menuForm.value).subscribe(data => {
      })
    }
    else {
      this.menuService.addMenu(this.menuForm.value).subscribe(data => {
        this.menuData = data as Menu;
        console.log('menudata',this.menuData);
        this.dataSaved = true;  
        this.massage = 'Record saved Successfully'; 
       // this.snackbar.open('Data added Successfully', 'Ok', {
         // duration: 2000,
        //});

      })
    }
    //this.router.navigate(['/admin/newmenu']);
    this.router.navigate(['/admin/menus']);
    
  }


}
