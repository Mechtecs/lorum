import {Component, Input, OnInit} from '@angular/core';
import {ServerGroup} from "../server-group";

@Component({
  selector: 'app-server-group',
  templateUrl: './server-group.component.html',
  styleUrls: ['./server-group.component.css']
})
export class ServerGroupComponent implements OnInit {

  @Input()
  public serverGroup: ServerGroup;

  constructor() { }

  ngOnInit() {
    //$('.collapsible').collapsible();
  }

}
