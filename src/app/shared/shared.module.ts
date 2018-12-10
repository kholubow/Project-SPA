import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    AlertifyService,
    UserService
  ],
  exports: [
    BrowserModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    PageNotFoundComponent
  ]
})


export class SharedModule { }
