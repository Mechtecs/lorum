import {Component, OnInit} from '@angular/core';
import {User} from "../../user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";
import {Role} from "../../role";

@Component({
  selector: 'app-admin-users-view',
  templateUrl: './admin-users-view.component.html',
  styleUrls: ['./admin-users-view.component.css']
})
export class AdminUsersViewComponent implements OnInit {

  public user: User = null;
  public roles: Role[] = [];
  public currentRole: Role;

  constructor(private router: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userService.fetchUser(params.steamId).subscribe(user => {
        this.user = user;
        this.currentRole = user.roles[0];
      });
    });

    this.userService.fetchAllRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  updateRole(): void {
    console.log(this.currentRole);
    this.user.roles[0] = this.currentRole;
    this.userService.updateUser(this.user);
  }
}
