import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/HeadersComponents/header/header.component';
import { MainHeaderComponent } from './components/HeadersComponents/main-header/main-header.component';
import { LoggedInHeaderComponent } from './components/HeadersComponents/logged-in-header/logged-in-header.component';
import { ContactFooterComponent } from './components/FootersComponents/contact-footer/contact-footer.component';
import { AboutFooterComponent } from './components/FootersComponents/about-footer/about-footer.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    MainHeaderComponent,
    LoggedInHeaderComponent,
    ContactFooterComponent,
    AboutFooterComponent
  ],
  exports: [
    HeaderComponent,
    MainHeaderComponent,
    LoggedInHeaderComponent,
    ContactFooterComponent,
    AboutFooterComponent
  ]
})


export class CoreModule { }
