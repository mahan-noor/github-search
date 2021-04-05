import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
   repo: Repo;
  constructor(public repoService: UserserviceService) { }
   
  repoSearch(searchName: any){
    this.repoService.getRepo(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepo
        console.log(error);
      }
    );

  }
  ngOnInit(): void {
  }

}
