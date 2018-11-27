import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AllWorkersComponent } from './components/all-workers/all-workers.component';
import { MessagesComponent } from './components/messages/messages.component';
import { InstanceComponent } from './components/instance/instance.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AllWorkersComponent,
    MessagesComponent,
    InstanceComponent,
    EditProfileComponent,
    WorkerCardComponent,
    WorkerDetailComponent
  ],
  providers: [

  ],
  exports: [
    AllWorkersComponent,
    MessagesComponent,
    InstanceComponent,
    EditProfileComponent,
    WorkerCardComponent,
    WorkerDetailComponent
  ],
})


export class WorkersModule { }
