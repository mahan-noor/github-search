import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { Reposearch } from '../reposearch';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {
  repo: Repo[];
  reponame: any;
  repobyname: Reposearch [];
  constructor(private myService: UserserviceService ){}

  findRepo(){
    this.myService.reposearchName(this.reponame)
    this.repo = this.myService.repobyname
    this.reponame = ''
  }
  
  ngOnInit()  {
  
  }

}
