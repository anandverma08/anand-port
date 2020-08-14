import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  userLoggedIn: Subject<boolean>;

  constructor(private authServive: AuthService,private router : Router) {
    document.getElementById('navigationBar').style.display="none";
    this.authServive.getLoginStatus().subscribe(status=>{
      this.isLoggedIn = status;
      this.router.navigate(['/home']);
    })
   }

  googleSignInViaPop() {
    this.authServive.googleSignInViaPop();
  }

  googleSignInViaRedirect() {
    this.authServive.googleSignInViaRedirect();
  }
  githubSignInViaPop() {
    this.authServive.githubSignInViaPop();
  }
  githubSignInViaRedirect() {
    this.authServive.githubSignInViaRedirect();
  }
  ngOnInit(): void {
    if(this.isLoggedIn){


    }
  }

}
