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
   repo: Repo;

  constructor(public myService: UserserviceService, private repoService: UserserviceService) { }

  searchs(searchName){
    this.myService.searchUser(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error);
      }
    );
    this.repoService.getRepo(searchName).then(
    (results)=>{
      this.repo =this.repoService.allRepo
      console.log(this.repo);
    },
    (error)=>{
     console.log(error);
    }
    );
   }

  ngOnInit() {
    this.searchs('mahan-noor')
  }

}
