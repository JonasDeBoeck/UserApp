import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Overview of users';
  users: User[];
  selectedUser: User;
  genders: String[] = ["Male", "Female"];

  onSelect(user: User): void {
    if (this.selectedUser != null && this.selectedUser == user) {
      this.selectedUser = null;
    } else {
      this.selectedUser = user;
    }
  }

  updateUser(user): void {
    this.userService.updateUser(user).subscribe();
    for (let u of this.users) {
      if (user.email === u.email) {
        this.users[this.users.indexOf(u)] = user;
      }
    }
  }

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    timer(0, 10000).subscribe(() => {
      this.userService.getUsers().subscribe(data=> this.users = data);
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
