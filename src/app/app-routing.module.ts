import { ShowInstancesComponent } from './workers/components/show-instances/show-instances.component';
import { WorkerDetailComponent } from './workers/components/worker-detail/worker-detail.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { InstanceComponent } from './workers/components/instance/instance.component';
import { AllWorkersComponent } from './workers/components/all-workers/all-workers.component';
import { EndComponent } from './auth/components/end/end.component';
import { StartComponent } from './auth/components/start/start.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { HomeComponent } from './components/HomePageComponents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProfileComponent } from './workers/components/edit-profile/edit-profile.component';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'logowanie', component: SigninComponent },
    { path: 'rejestracja', component: SignupComponent },
    { path: 'start', component: StartComponent },
    { path: 'end', component: EndComponent },
    { path: 'wszyscy', component: AllWorkersComponent },
    { path: 'pokaz-wnioski', component: ShowInstancesComponent },
    { path: 'wnioski', component: InstanceComponent },
    { path: 'edytuj-profil', component: EditProfileComponent },
    { path: 'dane-profilu', component: WorkerDetailComponent },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
