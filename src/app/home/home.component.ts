import { Component, OnInit } from '@angular/core';
import {ProjectsService } from 'src/app/projects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Blogs: object ;

  constructor(private data: ProjectsService) {}
  blogs = [];
  ngOnInit() {
    this.data
    .getAdUnits()
    .subscribe(data => {
    this.Blogs = data;
    console.log(this.Blogs);
  });
    
  
  }

  /*constructor() { }
  blogs = [];
  ngOnInit() {
    this.blogs = JSON.parse(localStorage.getItem("blogs"));
  }*/
  removeBlog(blog){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1)
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    alert("Blog has been deleted successfully")
  }

}
