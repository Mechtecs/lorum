import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Setting} from "../../setting";

@Component({
  selector: 'app-admin-general-edit',
  templateUrl: './admin-general-edit.component.html',
  styleUrls: ['./admin-general-edit.component.css']
})
export class AdminGeneralEditComponent implements OnInit {

  @Input()
  public setting: Setting;
  @Output()
  public settingEmitter: EventEmitter<Setting> = new EventEmitter<Setting>();

  constructor() {
  }

  ngOnInit() {
  }

  public emitChanges(): void {
    this.settingEmitter.next(this.setting);
  }

}
