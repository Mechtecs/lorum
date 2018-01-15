import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

@Injectable()
export class AuthService {

  public loggedIn: boolean;
  public user: User;

  constructor(
    private http: HttpClient
  ) {
    this.loggedIn = false;
    this.user = null;
    this.init();
  }

  private init(): void {
    this.fetchUser();
  }

  public fetchUser(): void {
    this.http.get<UserProfileResponse>("/api/user/profile").subscribe((data) => {
      this.loggedIn = data.loggedIn;
      if (this.loggedIn) {
        this.user = data.userProfile;
      } else {
        this.user = null;
      }
    });
  }

  public logout(): void {
    window.open("/api/auth/logout", "_self");
  }

}

class UserProfileResponse {
  public loggedIn: boolean;
  public userProfile: User;
}
