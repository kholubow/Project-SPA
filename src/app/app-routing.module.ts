import { InstanceComponent } from './workers/components/instance/instance.component';
import { MessagesComponent } from './workers/components/messages/messages.component';
import { AllWorkersComponent } from './workers/components/all-workers/all-workers.component';
import { EndComponent } from './auth/components/end/end.component';
import { StartComponent } from './auth/components/start/start.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { HomeComponent } from './components/HomePageComponents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'logowanie', component: SigninComponent },
    { path: 'start', component: StartComponent },
    { path: 'end', component: EndComponent },
    { path: 'wszyscy', component: AllWorkersComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'wnioski', component: InstanceComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
