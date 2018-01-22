import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerGroup} from "./server-group";
import {Server, ServerData} from "./server";
import {Observable} from "rxjs/Observable";
import {MzToastService} from "ng2-materialize";
import {AuthService} from "./auth.service";

@Injectable()
export class ServerService {
  public serverGroups: ServerGroup[];

  constructor(private http: HttpClient, private toaster: MzToastService, private authService: AuthService) {
    this.init();
    this.serverGroups = [];
  }

  private init(): void {
    this.pullGroups();
  }

  public pullGroups(): void {
    this.http.get<ServerGroup[]>("/api/servergroup").subscribe((data) => {
      this.serverGroups = data;
      if (this.authService.loggedIn && this.authService.user.roleNames.indexOf("admin") > -1) {
        this.toaster.show("Successfully loaded server groups", 2000, "green");
      }
      this.loadServerData();
    });
  }

  public loadServerData(): void {
    this.serverGroups.map((serverGroup: ServerGroup) => {
      serverGroup.servers.map((server: Server) => {
        if (server.id > -1) {
          this.http.get<ServerData>("/api/server/" + server.id + "/query").subscribe((data) => {
            server.data = data;
          });
        }
      });
    });
  }

  private persistServerGroupServers(serverGroup: ServerGroup): void {
    serverGroup.servers.map((server) => {
      server.server_group_id = serverGroup.id;
      if (server.id > 0) {
        this.updateServer(server);
      } else {
        this.createServer(server);
      }
    });
  }

  public createGroup(serverGroup: ServerGroup): void {
    this.http.post<ServerGroup>("/api/servergroup", serverGroup).subscribe((sGroup) => {
      serverGroup.id = sGroup.id;
      this.toaster.show("Created server group '" + serverGroup.name + "'", 2000, "green");
      this.persistServerGroupServers(serverGroup);
    });
  }

  public getGroup(id: number): void {

  }

  public updateGroup(serverGroup: ServerGroup): void {
    this.http.put<ServerGroup>("/api/servergroup/" + serverGroup.id, serverGroup).subscribe((sGroup) => {
      serverGroup.id = sGroup.id;
      this.toaster.show("Updated server group '" + serverGroup.name + "'", 2000, "green");
      this.persistServerGroupServers(serverGroup);
    });
  }

  public deleteGroup(serverGroup: ServerGroup): void {
    if (serverGroup.id > -1) {
      this.http.delete<DeleteResponse>("/api/servergroup/" + serverGroup.id).subscribe((data) => {
        if (data.success) {
          let index: number = this.serverGroups.indexOf(serverGroup, 0);
          if (index > -1) {
            this.serverGroups.splice(index, 1);
            this.toaster.show("Deleted server group '" + serverGroup.name + "'", 2000, "green");
          } else {
            this.toaster.show("Could not delete server group '" + serverGroup.name + "'", 2000, "red");
          }
        }
      });
    } else {
      let index: number = this.serverGroups.indexOf(serverGroup, 0);
      if (index > -1) {
        this.serverGroups.splice(index, 1);
        this.toaster.show("Deleted local server group '" + serverGroup.name + "'", 2000, "green");
      } else {
        this.toaster.show("Could not delete local server group '" + serverGroup.name + "'", 2000, "red");
      }
    }
  }

  public createServer(server: Server): void {
    this.http.post<Server>("/api/server", server).subscribe((data) => {
      server.id = data.id;
      this.toaster.show("Created server '" + server.name + "'", 2000, "green");
    });
  }

  public getServer(id: number): void {

  }

  public updateServer(server: Server): void {
    this.http.put<Server>("/api/server/" + server.id, server).subscribe((data) => {
      server.id = data.id;
      this.toaster.show("Updated server '" + server.name + "'", 2000, "green");
    });
  }

  public deleteServer(server: Server): void {
    if (server.id > -1) {
      this.http.delete<DeleteResponse>("/api/server/" + server.id).subscribe((data) => {
        if (data.success) {
          this.toaster.show("Deleted server '" + server.name + "'", 2000, "green");
          for (let i = 0; i < this.serverGroups.length; i++) {
            let index: number = this.serverGroups[i].servers.indexOf(server);
            if (index > -1) {
              this.serverGroups[i].servers.splice(index, 1);
            }
          }
        } else {
          this.toaster.show("Could not delete server '" + server.name + "'", 2000, "red");
        }
      });
    } else {
      for (let i = 0; i < this.serverGroups.length; i++) {
        let index: number = this.serverGroups[i].servers.indexOf(server);
        if (index > -1) {
          this.toaster.show("Deleted local server '" + server.name + "'", 2000, "green");
          this.serverGroups[i].servers.splice(index, 1);
          return;
        }
      }
      this.toaster.show("Could not delete local server '" + server.name + "'", 2000, "red");
    }
  }

}

class DeleteResponse {
  public success: boolean;
  public id: number;
}
