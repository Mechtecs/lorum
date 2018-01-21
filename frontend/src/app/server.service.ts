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

  public createGroup(serverGroup: ServerGroup): void {
    this.http.post<ServerGroup>("/api/servergroup", serverGroup).subscribe((sGroup) => {
      serverGroup.id = sGroup.id;
    });
  }

  public getGroup(id: number): void {

  }

  public updateGroup(serverGroup: ServerGroup): void {

  }

  public deleteGroup(serverGroup: ServerGroup): Observable<Object> {
    return this.http.delete<any>("/api/servergroup/" + serverGroup.id);
  }

  public createServer(server: Server): void {

  }

  public getServer(id: number): void {

  }

  public updateServer(server: Server): void {

  }

  public deleteServer(server: Server): void {

  }

}
