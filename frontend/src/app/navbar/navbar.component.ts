import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {User} from "../user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService, public router: Router) {
  }

}
