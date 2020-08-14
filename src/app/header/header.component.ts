import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  isLoggedIn :boolean = false;
  authStatus : Subscription;
  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
    if(document.getElementById('navigationBar').style.display=="block"){
      document.getElementById('navigationBar').style.display = "none"
    }
    this.isLoggedIn = this.authService.getAuthState();
    this.authStatus = this.authService.getLoginStatus().subscribe(status=>{
      this.isLoggedIn = status;
    })
  }
  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }

  logOut(){
    this.authService.logout();
  }
  toggleButton(){
    if(document.getElementById('navigationBar').style.display=="none" || document.getElementById('navigationBar').style.display==""){
      document.getElementById('navigationBar').style.display = "block";
    }else if(document.getElementById('navigationBar').style.display == "block"){
      document.getElementById('navigationBar').style.display = ""
    }
  }

}
