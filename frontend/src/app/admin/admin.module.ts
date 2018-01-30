import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminGeneralComponent} from "./admin-general/admin-general.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {MzButtonModule, MzCollectionModule, MzIconMdiModule, MzProgressModule, MzSelectModule} from "ng2-materialize";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AdminUsersViewComponent} from './admin-users-view/admin-users-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MzIconMdiModule,
    MzCollectionModule,
    MzProgressModule,
    FormsModule,
    ReactiveFormsModule,
    MzSelectModule,
    MzButtonModule
  ],
  declarations: [
    AdminGeneralComponent,
    AdminUsersComponent,
    AdminUsersViewComponent
  ]
})
export class AdminModule {
}
