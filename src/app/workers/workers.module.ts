import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AllWorkersComponent } from './components/all-workers/all-workers.component';
import { InstanceComponent } from './components/instance/instance.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';
import { ShowInstancesComponent } from './components/show-instances/show-instances.component';
import { ShowMyInstancesComponent } from './components/show-my-instances/show-my-instances.component';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { ShowBillsComponent } from './components/show-bills/show-bills.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AllWorkersComponent,
    InstanceComponent,
    EditProfileComponent,
    WorkerCardComponent,
    WorkerDetailComponent,
    ShowInstancesComponent,
    ShowMyInstancesComponent,
    AddBillComponent,
    ShowBillsComponent
  ],
  providers: [

  ],
  exports: [
    AllWorkersComponent,
    InstanceComponent,
    EditProfileComponent,
    WorkerCardComponent,
    WorkerDetailComponent,
    ShowInstancesComponent,
    ShowMyInstancesComponent,
    AddBillComponent
  ],
})


export class WorkersModule { }
