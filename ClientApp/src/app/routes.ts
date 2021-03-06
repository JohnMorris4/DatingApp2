import { AboutComponent } from './about/about.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { ListsResolver } from './_resolvers/lists.resolver';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
      { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
      { path: 'member/edit', component: MemberEditComponent,
      resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      { path: 'messages', component: MessagesComponent},
      { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
      { path: 'about', component: AboutComponent}
    ]
  },
  // The routes below are still in place to show two different examples of the same way to achive the security of
  // protecting the routes
  // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  // { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  // { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];



