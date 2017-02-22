import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './users.routes';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    // RouterModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule {
  // public static routes = routes;
}
