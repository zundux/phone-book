import { UserDetailComponent } from './user-detail.component';

export const routes = [
  // { path: '', component: UserDetailComponent },
  { path: '', component: UserDetailComponent, children: [
    // { path: ':id', component: UserDetailComponent },
    // { path: 'user/:id', component: UserDetailComponent }
  ]},
];
