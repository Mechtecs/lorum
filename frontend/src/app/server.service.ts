import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerGroup} from "./server-group";
import {Server} from "./server";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {
  public serverGroups: ServerGroup[];

  constructor(private http: HttpClient) {
    this.init();
    this.serverGroups = [];
  }

  private init(): void {
    this.pullGroups();
  }

  public pullGroups(): void {
    this.http.get<ServerGroup[]>("/api/servergroup").subscribe((data) => {
      this.serverGroups = data
    });
  }

  private persistServerGroupServers(serverGroup: ServerGroup): void {
    serverGroup.servers.map((server) => {
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
      this.persistServerGroupServers(serverGroup);
    });
  }

  public getGroup(id: number): void {

  }

  public updateGroup(serverGroup: ServerGroup): void {
    this.http.put<ServerGroup>("/api/servergroup/" + serverGroup.id, serverGroup).subscribe((sGroup) => {
      serverGroup.id = sGroup.id;
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
          }
        }
      });
    } else {
      let index: number = this.serverGroups.indexOf(serverGroup, 0);
      if (index > -1) {
        this.serverGroups.splice(index, 1);
      }
    }
  }

  public createServer(server: Server): void {

  }

  public getServer(id: number): void {

  }

  public updateServer(server: Server): void {

  }

  public deleteServer(server: Server): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>("/api/server/" + server.id);
  }

}

class DeleteResponse {
  public success: boolean;
  public id: number;
}
