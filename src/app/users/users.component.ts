import {Component, OnInit}       from '@angular/core';
import {ActivatedRoute, Router}  from '@angular/router';

import {User}         from '../core/model/user';
import {UserService}  from '../core/service/user.service';

@Component({
  selector: 'Users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }


  // gotoDetail(): void {
  //   this.router.navigate(['/user-detail', this.selectedUser.id]);
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  remove(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) {
          this.selectedUser = null;
        }
      });
  }
}
