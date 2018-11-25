import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AllWorkersComponent } from './components/all-workers/all-workers.component';
import { MessagesComponent } from './components/messages/messages.component';
import { InstanceComponent } from './components/instance/instance.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AllWorkersComponent,
    MessagesComponent,
    InstanceComponent,
    EditProfileComponent
  ],
  providers: [

  ],
  exports: [
    AllWorkersComponent,
    MessagesComponent,
    InstanceComponent,
    EditProfileComponent
  ],
})


export class WorkersModule { }
