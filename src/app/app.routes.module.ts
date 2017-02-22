import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent }        from './home';
import { AboutComponent }       from './about';
import { NoContentComponent }   from './no-content';
// import { UsersComponent }       from './users/users.component';

// import { DataResolver } from './app.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'users', component: UsersComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes, {
//     useHash: true,
//     preloadingStrategy: PreloadAllModules
//   }) ],
//   exports: [ RouterModule ]
// })
// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: PreloadAllModules
});

export const routedComponents = [HomeComponent, AboutComponent, NoContentComponent];
