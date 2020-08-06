import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  userLoggedIn: Subject<boolean>;

  constructor(private authServive: AuthService) { }


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
    this.authServive.getAuthState();
  }

}
