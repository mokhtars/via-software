import { PostComponent } from './component/post/post.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListComponent } from './component/comment-list/comment-list.component';


const routes: Routes = [
  {path:'users', component: UserListComponent},
  {path:'posts', component: PostListComponent},
  {path:'comments/:id', component: CommentListComponent},
  {path:'post', component: PostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserListComponent,PostListComponent,CommentListComponent,PostComponent]