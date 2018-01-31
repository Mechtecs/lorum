import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {ServerPageComponent} from './server-page/server-page.component';
import {NavbarComponent} from './navbar/navbar.component';
// Modules
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {
  MzButtonModule,
  MzCardModule,
  MzCheckboxModule,
  MzCollapsibleModule,
  MzCollectionModule,
  MzDropdownModule,
  MzIconMdiModule,
  MzIconModule,
  MzInputModule,
  MzNavbarModule,
  MzSidenavModule,
  MzToastModule,
  MzValidationModule
} from 'ng2-materialize';
// Services
import {AuthService} from './auth.service';
import {ServerService} from "./server.service";
import {ServerSettingsPageComponent} from './server-settings-page/server-settings-page.component';
import {ServerGroupEditComponent} from './server-group-edit/server-group-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServerGroupComponent} from './server-group/server-group.component';
import {ServerGroupServerRowComponent} from './server-group-server-row/server-group-server-row.component';
import {ServerGroupServerRowEditComponent} from './server-group-server-row-edit/server-group-server-row-edit.component';
import {UserService} from "./user.service";
import {AdminModule} from "./admin/admin.module";
import {SettingService} from "./setting.service";

@NgModule({
  declarations: [
    AppComponent,
    ServerPageComponent,
    NavbarComponent,
    ServerSettingsPageComponent,
    ServerGroupEditComponent,
    ServerGroupComponent,
    ServerGroupServerRowComponent,
    ServerGroupServerRowEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzDropdownModule,
    MzNavbarModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    MzValidationModule,
    ReactiveFormsModule,
    FormsModule,
    MzCheckboxModule,
    MzCollapsibleModule,
    MzCardModule,
    MzToastModule,
    MzCollectionModule,
    AdminModule
  ],
  providers: [AuthService, ServerService, UserService, SettingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
