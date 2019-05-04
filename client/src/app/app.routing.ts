import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers/index';

import { ForgetComponent } from './views/forget/index';
import { LoginComponent } from './views/login/index';
import { RegisterComponent } from './views/register/index';
import { AuthGuard } from './guards/index';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate:[AuthGuard]
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    },
    {
      path: 'forget',
      component: ForgetComponent
    },
    {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
     {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
      {
        path: 'posts',
        loadChildren: './views/posts/posts.module#PostsModule'
      },
      {
        path: 'forget',
        loadChildren: './views/forget/forget.module#ForgetModule'
      }

    ]
  }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}