import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { JwtService } from './core/services/jwt.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  
  username!: string;
  role!: string;
  status!: string;
  message!: string;
  hide = true;
  form: any;
  data: any;
  
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder;
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // this.router.navigate(['live-test']);
    if (this.form.status === 'INVALID') {
      return;
    }

    this.authService.login(this.form.value).subscribe((data) => {
      this.data = data;
      this.role = this.data.roles;
      //this.username = this.data.email;
      this.jwtService.setToken(this.data.jwtToken);
      window.sessionStorage.setItem('id', this.data.id);
      window.sessionStorage.setItem('username', this.data.name);
      window.sessionStorage.setItem('email', this.data.email);
      window.sessionStorage.setItem('roles', this.data.roles);
      //window.sessionStorage.setItem('roles', this.data.roles);
      console.log('shows erorr msg',this.message);
      if(this.data.id != 0 ){
        this.router.navigate(['admin']);
       }else{
        //(err: any) => this.errorHandler(err, 'Invalid Credentials!')
        this.snackbar.open('Invalid Credentials!', 'Ok', {
           duration: 2000,
         });
       }


      
    }
    
    );
  }

  private errorHandler(error: any, message: string) {
    this.snackbar.open(message, 'Error', {
      duration: 2000,
    });
  }

    

}
