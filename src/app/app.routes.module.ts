import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent }        from './home';
import { AboutComponent }       from './about';
import { UsersComponent }       from './users';
import { UserDetailComponent }  from './user-detail';
import { NoContentComponent }   from './no-content';

import { DataResolver } from './app.resolver';

const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'users',  component: UsersComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
