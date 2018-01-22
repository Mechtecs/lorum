import {Component, OnInit} from '@angular/core';
import {ServerService} from "../server.service";
import {ServerGroup} from "../server-group";

@Component({
  selector: 'app-server-settings-page',
  templateUrl: './server-settings-page.component.html',
  styleUrls: ['./server-settings-page.component.css']
})
export class ServerSettingsPageComponent implements OnInit {

  constructor(public serverService: ServerService) {
  }

  ngOnInit() {
  }

  public addServerGroup(): void {
    let newServerGroup = new ServerGroup();
    this.serverService.serverGroups.push(newServerGroup);
  }

  public persist(): void {
    this.serverService.serverGroups.map((sGroup) => {
      if (sGroup.id > 0) {
        this.serverService.updateGroup(sGroup);
      } else {
        this.serverService.createGroup(sGroup);
      }
    })
  }

  public deleteServerGroup(serverGroup: ServerGroup): void {
    this.serverService.deleteGroup(serverGroup);
  }

}
