import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminGeneralComponent} from "./admin-general/admin-general.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {
  MzButtonModule,
  MzCollectionModule,
  MzIconMdiModule,
  MzInputModule,
  MzProgressModule,
  MzSelectModule
} from "ng2-materialize";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AdminUsersViewComponent} from './admin-users-view/admin-users-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminGeneralEditComponent} from './admin-general-edit/admin-general-edit.component';

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
    MzButtonModule,
    MzInputModule
  ],
  declarations: [
    AdminGeneralComponent,
    AdminUsersComponent,
    AdminUsersViewComponent,
    AdminGeneralEditComponent
  ]
})
export class AdminModule {
}
