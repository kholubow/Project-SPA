import { AuthService } from './../../../../auth/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.css']
})
export class LoggedInHeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  chechIfSomeUserIsLoggedInViaToken() {
      return this.authService.chechIfSomeUserIsLoggedInViaDownloadedToken();
  }

}
