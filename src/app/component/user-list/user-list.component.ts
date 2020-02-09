import { User } from '../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(private dataService:DataService) { }

  ngOnInit() {

    return this.dataService.getUsers()
      .subscribe(data => this.users = data)
  }

}
