import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/HeadersComponents/header/header.component';
import { MainHeaderComponent } from './components/HeadersComponents/main-header/main-header.component';
import { LoggedInHeaderComponent } from './components/HeadersComponents/logged-in-header/logged-in-header.component';
import { ContactFooterComponent } from './components/FootersComponents/contact-footer/contact-footer.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    MainHeaderComponent,
    LoggedInHeaderComponent,
    ContactFooterComponent
  ],
  exports: [
    HeaderComponent,
    MainHeaderComponent,
    LoggedInHeaderComponent,
    ContactFooterComponent
  ]
})


export class CoreModule { }
