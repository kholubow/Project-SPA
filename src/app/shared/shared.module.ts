import { AlertifyService } from './services/alertify.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    ReactiveFormsModule,
    HttpModule
  ]
})


export class SharedModule { }
