import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Server} from "../server";

@Component({
  selector: 'app-server-group-server-row-edit',
  templateUrl: './server-group-server-row-edit.component.html',
  styleUrls: ['./server-group-server-row-edit.component.css']
})
export class ServerGroupServerRowEditComponent implements OnInit {

  @Input()
  public server: Server;
  @Output()
  public serverEmitter: EventEmitter<Server> = new EventEmitter<Server>();

  @Output('delete')
  public deleteEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public delete() {
    this.deleteEmitter.next();
  }

  public emitChanges() {
    this.serverEmitter.next(this.server);
  }

}
