import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerGroup} from "../server-group";
import {ServerService} from "../server.service";
import {Server} from "../server";

@Component({
  selector: 'app-server-group-edit',
  templateUrl: './server-group-edit.component.html',
  styleUrls: ['./server-group-edit.component.css']
})
export class ServerGroupEditComponent implements OnInit {

  @Input()
  public serverGroup: ServerGroup;
  @Output()
  public serverGroupEmitter: EventEmitter<ServerGroup> = new EventEmitter<ServerGroup>();

  @Output('delete')
  public deleteEmitter = new EventEmitter<any>();

  constructor(public serverService: ServerService) { }

  ngOnInit() {
  }

  public delete(): void {
    this.deleteEmitter.next();
  }

  public emitChanges(): void {
    this.serverGroupEmitter.next(this.serverGroup);
  }

  public addServer(): void {
    this.serverGroup.servers.push(new Server());
  }

  public deleteServer(server: Server): void {
    this.serverService.deleteServer(server);
  }

}
