import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ServerPageComponent } from './server-page/server-page.component';
import { NavbarComponent } from './navbar/navbar.component';

// Modules
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {MzButtonModule, MzInputModule, MzDropdownModule, MzNavbarModule} from 'ng2-materialize';

// Services
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzNavbarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
