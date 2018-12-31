import { AppRoutingModule } from './app-routing.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    AuthModule,
    WorkersModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
