import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../user";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  public users: User[] = [];
  public usersCurrentPage: number = 1;
  public usersNextPage: number = 1;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.fetchAllUsers().subscribe((users) => {
      if (users.data) {
        users.data.map(user => {
          user.roleNames = user.roles.map((role) => role.display_name);
          return this.users.push(user);
        });
      }
      this.usersCurrentPage = users.current_page;
      this.usersNextPage = (users.current_page === users.last_page) ? users.current_page : users.current_page + 1;
    });
  }

}
