import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Comment } from '../../model/comment.model';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments:Comment[];

  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id =parseInt(this.route.snapshot.paramMap.get('id'))
    return this.dataService.getComments(id)
      .subscribe(data =>this.comments=data)
  }


}
