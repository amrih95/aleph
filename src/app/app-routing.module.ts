import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './features/user/user.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { RouteGuard } from './cores/guard/route.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [RouteGuard]
  },
  { 
    path: 'detail', 
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
