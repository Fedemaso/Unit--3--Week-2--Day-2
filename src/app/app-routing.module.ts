import { HomeComponent } from './home-component/home.component';
import { ActivePostsComponent } from './active-posts-component/active-posts.component';
import { InactivePostsComponent } from './inactive-posts-component/inactive-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
