import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  bgEditProfile: string;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = '';


  constructor() { }

  ngOnInit() {
    this.bgEditProfile = 'assets/images/BGsignin2.jpg';
    this.initializeUploader();
  }


  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  initializeUploader() {
    this.uploader = new FileUploader({
            url: '',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false
    });
  }

}
