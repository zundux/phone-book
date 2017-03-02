import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './user-detail.routes';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UserDetailModule {
  public static routes = routes;
}
