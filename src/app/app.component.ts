import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Post } from './model/post.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'via-task';
  posts : Post[];


  constructor(private dataService:DataService) { }

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  ngOnInit() {
    return this.dataService.getPosts()
      .subscribe(data =>this.posts=data)
  }

 
}
