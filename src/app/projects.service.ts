import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url = "http://localhost:8050/post";
  constructor(private http: HttpClient) { 

  }

  addBlog(title, topic, content) {
    var obj = {
      title: title,
      topic: topic,
      content: content
    };


    var Blogs = JSON.stringify(obj);
 
    this.http.post(`${this.url}/addblog`,obj)
        .subscribe(res => console.log('Done'));
      debugger;
        console.log(Blogs);
  }
  getAdUnits() {
    return this
           .http
           .get(`${this.url}/viewBlog`);
    }
}
