import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent},
      { path: 'messages', component: MessagesComponent},
      { path: 'lists', component: ListsComponent},
    ]
  },
  // The routes below are still in place to show two different examples of the same way to achive the security of
  // protecting the routes
  // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  // { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  // { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];



