import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-user-detail.routes';
import { ChildDetailComponent } from './child-user-detail.component';

@NgModule({
  declarations: [
    ChildDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ChildUserDetailModule {
  public static routes = routes;
}
