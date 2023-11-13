import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, pipe, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrls: ['./test-nav.component.scss']
})
export class TestNavComponent {
  Url = environment.root;
  lastLogin: any;
  image: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit() {
    this.lastLogin = window.sessionStorage.getItem('email');
    //this.image = window.sessionStorage.getItem('image');
  }

  logout(){
    //alert(sessionStorage.length);
    //alert("going to logout...");
    //if (sessionStorage.length == 0) 
                

    sessionStorage.clear(); 
    this.router.navigate([`/login`]);

  }
}
