import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';
import { EndComponent } from './components/end/end.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    SigninComponent,
    StartComponent,
    EndComponent
  ],
  providers: [ AuthService ],
  exports: [
    SigninComponent,
    StartComponent,
    EndComponent
  ]
})


export class AuthModule { }
