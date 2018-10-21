import { AlertifyService } from './services/alertify.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    FormsModule
  ]
})


export class SharedModule { }
