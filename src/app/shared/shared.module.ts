import { AlertifyService } from './services/alertify.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    AlertifyService
  ],
  exports: [
    BrowserModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PageNotFoundComponent
  ]
})


export class SharedModule { }
