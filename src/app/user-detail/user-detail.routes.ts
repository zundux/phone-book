import { UserDetailComponent } from './user-detail.component';

export const routes = [
  { path: '', children: [
    { path: '', component: UserDetailComponent },
    { path: 'child-user-detail', loadChildren: './+child-user-detail#ChildUserDetailModule' }
  ]},
];
