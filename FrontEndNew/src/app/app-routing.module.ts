import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthGuard } from './modules/auth/auth.guard';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'user', component: BoardUserComponent },
//   { path: 'mod', component: BoardModeratorComponent },
//   { path: 'admin', component: BoardAdminComponent },
//   { path: 'view', component: ViewComponent },
//   { path: '', redirectTo: 'view', pathMatch: 'full' },

//   { path: 'ad', loadChildren:() =>import('./modules/admin/admin.module').then(x=>x.AdminModule) },

// ];
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'moderator', loadChildren: () => import('./modules/moderator/moderator.module').then(m => m.ModeratorModule)},
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
