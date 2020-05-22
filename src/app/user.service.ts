import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { User } from './user';
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private getUsersUrl = 'http://localhost:8080/Servlet?command=GetUsers';
  private updateUsersUrl = 'http://localhost:8080/Servlet?command=UpdateUser';
  private httpOptions = {headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  updateUser(user): Observable<User> {
    return this.http.post<User>(this.updateUsersUrl, user);
  }
}
