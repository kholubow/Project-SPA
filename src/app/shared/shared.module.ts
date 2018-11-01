import { AlertifyService } from './services/alertify.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [

  ],
  providers: [
    AlertifyService
  ],
  exports: [
    BrowserModule,
    BsDatepickerModule,
    FormsModule,
    HttpModule
  ]
})


export class SharedModule { }
