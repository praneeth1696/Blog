import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
//import { EditBlogComponent } from './home/edit-blog/edit-blog.component';
import { UpdateBlogComponent } from './home/update-blog/update-blog.component';
import { DeleteBlogComponent } from './home/delete-blog/delete-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
   // EditBlogComponent,
    UpdateBlogComponent,
    DeleteBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // SlimLoadingBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
