import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerPageComponent } from './server-page/server-page.component';
import {ServerSettingsPageComponent} from "./server-settings-page/server-settings-page.component";

const routes: Routes = [
  { path: 'servers/settings', component: ServerSettingsPageComponent },
  { path: 'servers', component: ServerPageComponent },
  { path: '', redirectTo: '/servers', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
