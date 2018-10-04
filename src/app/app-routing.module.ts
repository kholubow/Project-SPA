import { SigninComponent } from './auth/components/signin/signin.component';
import { HomeComponent } from './components/HomePageComponents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'logowanie', component: SigninComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
