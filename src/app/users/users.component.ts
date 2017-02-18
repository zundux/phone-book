import { Component, OnInit }       from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';

import { User }         from '/src/app/core/user';
import { UserService }  from '/src/app/service/user.service';

@Component({
  selector: 'users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  public localState: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
  }
  //
  // public ngOnInit() {
  //   this.route
  //     .data
  //     .subscribe((data: any) => {
  //       // your resolved data from route
  //       this.localState = data.yourData;
  //     });
  //
  //   console.log('hello `users` component');
  //   // static data that is bundled
  //   // var mockData = require('assets/mock-data/mock-data.json');
  //   // console.log('mockData', mockData);
  //   // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
  //   this.asyncDataWithWebpack();
  // }
  //
  // private asyncDataWithWebpack() {
  //   // you can also async load mock data with 'es6-promise-loader'
  //   // you would do this if you don't want the mock-data bundled
  //   // remember that 'es6-promise-loader' is a promise
  //   setTimeout(() => {
  //
  //     System.import('../../assets/mock-data/mock-data.json')
  //       .then((json) => {
  //         console.log('async mockData', json);
  //         this.localState = json;
  //       });
  //
  //   });
  // }

}
