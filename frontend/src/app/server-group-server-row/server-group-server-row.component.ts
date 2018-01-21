import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../server";

@Component({
  selector: 'app-server-group-server-row',
  templateUrl: './server-group-server-row.component.html',
  styleUrls: ['./server-group-server-row.component.css']
})
export class ServerGroupServerRowComponent implements OnInit {

  @Input()
  public server: Server;

  constructor() { }

  ngOnInit() {
  }

}
