import { Component, OnInit } from '@angular/core';

import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   user: User;
   repo: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
