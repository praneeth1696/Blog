import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
//import { EditBlogComponent } from './home/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './home/delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './home/update-blog/update-blog.component';

const routes: Routes = [
  {
    path: "view-blog",
    component: HomeComponent
  },
  {
    path: "add-blog",
    component: AddBlogComponent
  },
  /*{
    path: "home/edit-blog",
    component: EditBlogComponent
  },*/
  {
    path: "home/delete-blog",
    component: DeleteBlogComponent
  },
  {
    path: "home/update-blog",
    component: UpdateBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
