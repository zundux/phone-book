import { UserDetailComponent } from './user-detail.component';

export const routes = [
  { path: '', children: [
    { path: '/user/:id', component: UserDetailComponent }
  ]},
];
