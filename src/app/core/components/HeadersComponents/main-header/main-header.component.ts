import { AuthService } from './../../../../auth/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  
  logout() {
      this.authService.logout();
  }


  chechIfSomeUserIsLoggedInViaToken() {
      return this.authService.chechIfSomeUserIsLoggedInViaDownloadedToken();
  }  

}
