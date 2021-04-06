import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  foundUser: User;
  allRepo: Repo;

  constructor(private http: HttpClient) { 
    this.foundUser =new User("", "", "", new Date, 0, 0 ,0 , "", "");
    this.allRepo = new Repo("", "", "",new Date, 0)
  }

  searchUser(searchName: string){

    interface User {
      url: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url:string;
      created_at: Date;
    }

    return new Promise ((resolve, reject) => {

      this.http.get<Response>('https://api.github.com/users/' +searchName+'?access_token='+environment.apiKey).toPromise().then(
       (result)=> {
        this.foundUser = result;
        console.log(this.foundUser);
        resolve();
      },
      (error) => {
        console.log(error)
      }
      );
    });
    
    this.getrepositories(searchName){
      interface Repo{
        name: string;
        html_url: string;
        descpription: string;
        forks: number;
        created_at:Date;

      }
      return new Promise ((resolve, reject)) =>{

        this.http.get<Repo>('https://api.github.com/users/' +searchName+"/repo?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
         (results)=> {
          this.allRepo = results;
          resolve();
        },
        (error) => {
          console.log(error)
          reject();
        }
        );
      }
    }

  }


}
