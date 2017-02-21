import 'rxjs/add/operator/switchMap';

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { UserService } from '../core/service/user.service';
import { User } from '../core/model/user';

@Component({
  moduleId: module.id,
  selector: 'my-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.update(this.user)
        .then(() => this.goBack());
  }
}
