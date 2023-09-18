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
  
  email!: string;
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
      email: ['', Validators.required],
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
      this.email = this.data.email;
      window.sessionStorage.setItem('id', this.data.id);
      window.sessionStorage.setItem('username', this.data.username);
      window.sessionStorage.setItem('email', this.data.email);
      //window.sessionStorage.setItem('email', this.data.email);
      console.log('shows erorr msg',this.message);
      if(this.status != '500'){
        this.router.navigate(['admin']);
       }
      (err: any) => this.errorHandler(err, 'Invalid Credentials!')
    }
    
    );
  }

  private errorHandler(error: any, message: string) {
    this.snackbar.open(message, 'Error', {
      duration: 2000,
    });
  }

    

}
