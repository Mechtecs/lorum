import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ServerPageComponent} from './server-page/server-page.component';
import {ServerSettingsPageComponent} from "./server-settings-page/server-settings-page.component";
import {AdminGeneralComponent} from "./admin/admin-general/admin-general.component";
import {AdminUsersComponent} from "./admin/admin-users/admin-users.component";
import {AdminUsersViewComponent} from "./admin/admin-users-view/admin-users-view.component";

const routes: Routes = [
  {path: 'admin/general', component: AdminGeneralComponent},
  {path: 'admin/users', component: AdminUsersComponent},
  {path: 'admin/users/:steamId', component: AdminUsersViewComponent},
  { path: 'servers/settings', component: ServerSettingsPageComponent },
  { path: 'servers', component: ServerPageComponent },
  { path: '', redirectTo: '/servers', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
