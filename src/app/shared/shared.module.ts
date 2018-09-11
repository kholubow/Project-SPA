import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [

  ],
  providers: [

  ],
  exports: [
    BrowserModule,
    BsDatepickerModule
  ]
})


export class SharedModule { }
