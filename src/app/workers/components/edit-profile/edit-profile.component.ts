import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  bgEditProfile: string;

  constructor() { }

  ngOnInit() {
    this.bgEditProfile = 'assets/images/BGsignin2.jpg';
  }

}
