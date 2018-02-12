import {Component, Input, OnInit} from '@angular/core';
import {ServerGroup} from "../server-group";
import {DomSanitizer} from "@angular/platform-browser";
import {Server} from "../server";

@Component({
  selector: 'app-server-group',
  templateUrl: './server-group.component.html',
  styleUrls: ['./server-group.component.css']
})
export class ServerGroupComponent implements OnInit {

  @Input()
  public serverGroup: ServerGroup;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //$('.collapsible').collapsible();
  }

  sanitizeUrl(s: string) {
    // TODO: Will forget; find better solution ;)
    return this.sanitizer.bypassSecurityTrustUrl(s);
  }

  getGServerUrl(server: Server) {
    return this.sanitizeUrl("steam://connect/" + server.ip + ":" + server.port);
  }
}
