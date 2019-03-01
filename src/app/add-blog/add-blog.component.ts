import { Component, OnInit } from '@angular/core';
import {ProjectsService } from 'src/app/projects.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private data:ProjectsService) { }

 public title;
 public topic;
 public content;
 //public title3;

 addBlog() {
  var title = this.title;
  var topic = this.topic;
  var content = this.content;
  this.data.addBlog(title, topic, content);
  alert("Blog submitted successfully");
}

ngOnInit() {
}
}

 // blogs =[];

  /*  addBlog(title, topic, content) {
      let blog = { "title": title.value, "topic": topic.value, "content": content.value };
      if(localStorage.getItem("blogs")){
        this.blogs = JSON.parse(localStorage.getItem("blogs"))
      }
      this.blogs.splice(0,0,blog)
      localStorage.setItem("blogs",JSON.stringify(this.blogs))
      title.value="";
      topic.value="";
      content.value="";
      alert("Blog submitted successfully")

    }*/
  /*  addBlog1()
    {
      console.log(this.title);
      this.title3=this.title;
    }*/

