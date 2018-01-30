import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Role} from "./role";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchUser(steamId: string): Observable<User> {
    return this.http.get<User>('/api/user/' + steamId);
  }

  fetchAllUsers(): Observable<PaginationResponse<User>> {
    return this.http.get<PaginationResponse<User>>('/api/user');
  }

  fetchAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('/api/role');
  }

  updateUser(user: User): void {
    this.http.put<any>('/api/user/' + user.steamid, user).subscribe((response) => {
      console.log(response);
    });
  }
}

class PaginationResponse<Model> {
  public current_page: number;
  public data: Model[];
  public first_page_url: string;
  public from: number;
  public last_page: number;
  public last_page_url: string;
  public next_page_url: string;
  public path: string;
  public per_page: number;
  public prev_page_url: string;
  public to: number;
  public total: number;
}
