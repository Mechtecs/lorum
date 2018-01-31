import {Component} from '@angular/core';

import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {SettingService} from "../setting.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService, public router: Router, public settingService: SettingService) {
  }

}
