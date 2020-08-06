import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userLoggedIn = new Subject<boolean>();
  userDetails = new Subject<Object>();
  userDetailsObj = {};
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  googleSignInViaPop() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((userCred) => {
        this.userLoggedIn.next(true);
        this.router.navigate(['/home']);
      })
  }
  googleSignInViaRedirect() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
      .then((userCred) => {
        this.userLoggedIn.next(true);
        this.router.navigate(['/home']);
      })
  }
  githubSignInViaPop() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then((userCred) => {
        this.userLoggedIn.next(true);
        this.router.navigate(['/home']);
      })
  }
  githubSignInViaRedirect() {
    this.afAuth.auth.signInWithRedirect(new auth.GithubAuthProvider())
      .then((userCred) => {
        this.userLoggedIn.next(true);
        this.router.navigate(['/home']);
      })
  }

  getLoginStatus() {
    this.afAuth.authState
      .subscribe(user => {
        if (user) {
          console.log(user);

          this.isLoggedIn = true;
          this.userLoggedIn.next(true);
          this.userDetails.next(user);
          this.userDetailsObj = user;
        }

      }, err => {
        this.isLoggedIn = false;
        this.userLoggedIn.next(false);
      });
    return this.userLoggedIn.asObservable();
  }

  getUserDetails(){
    this.afAuth.authState
    .subscribe(user => {
      if (user) {
        console.log(user);
        this.isLoggedIn = true;
        this.userLoggedIn.next(true);
        this.userDetails.next(user);
        this.userDetailsObj = user;
      }

    }, err => {
      this.isLoggedIn = false;
      this.userLoggedIn.next(false);
    });
    return this.userDetails.asObservable();
  }

  getAuthState() {
    return this.isLoggedIn;
  }
  getUserDetailsObj(){
    return this.userDetailsObj;
  }

  logout(){
    return this.afAuth.auth.signOut().then(() => {
      this.isLoggedIn = false;
      this.userLoggedIn.next(false);
      this.router.navigate(['']);
    })
  }


}
