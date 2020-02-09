import { Post } from '../../model/post.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post[];
  searchText="";
  postsId: Post[];
  flag=true;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
    return this.dataService.getPosts()
      .subscribe(data =>this.posts=data)
  }
  //search specific user
  postById=(id:any)=>{
    this.postsId=[];
    this.flag=false;
    return this.dataService.getPostsByUserID(id)
      .subscribe(data =>this.postsId=data)
  }
  //redirect to comment componenent to display post's comment
  onSelect=(id:any)=>{
    this.router.navigate(['/comments',id])
  }
  //Adding new post
  newPost=()=>{
    let post ={
      "userId":8,
      "title":"via-software",
      "body":"this is an angular task"
    }
    return this.dataService.postPost(post)
      .subscribe(data=>
        window.alert("user Added succesfly \n"+JSON.stringify(data))
)


  }

}
