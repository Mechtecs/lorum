import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerService} from "../server.service";
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "../user";
import {Role} from "../role";

@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.css']
})
export class ServerPageComponent {

  constructor(public serverService: ServerService, public authService: AuthService) { }

}
