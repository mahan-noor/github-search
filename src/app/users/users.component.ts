import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  username: any;
  repo: Repo[];
  reponame: any;
    constructor(private myService: UserserviceService) {
    }
  
    searchName() {
      this.myService.searchUser(this.username)
      this.user = this.myService.user
      this.myService.allRepo(this.username)
      this.repo = this.myService.repo
      this.username = ''

    }
    searchRepo() {
      this.myService.allRepo(this.reponame)
      this.repo = this.myService.repo
   

      this.reponame = ''
    }
    ngOnInit() {
      this.myService.searchUser("mahan-noor")
      this.user = this.myService.user

      this.myService.allRepo("mahan-noor")
      this.repo = this.myService.repo
    }
}
 