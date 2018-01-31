import {Component, OnInit} from '@angular/core';
import {SettingService} from "../../setting.service";

@Component({
  selector: 'app-admin-general',
  templateUrl: './admin-general.component.html',
  styleUrls: ['./admin-general.component.css']
})
export class AdminGeneralComponent implements OnInit {

  constructor(public settingService: SettingService) {
  }

  ngOnInit() {
  }

}
