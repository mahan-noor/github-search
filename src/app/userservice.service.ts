import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  user: User;
  username: any;
  repo: Repo[];
  reponame: any;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", 0, 0, 0, "", "");

  }
  
  

  searchUser(username: any){

    interface apiUser {
      name: string;
      login: string;
      html_url: any;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url:any;
     
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<apiUser>(`${environment.apiKey}${username}?access_token${username}?client_id=${environment.apiKey}`).toPromise().then(response => {
        this.user.name = response.name
        this.user.login = response.login
        this.user.html_url = response.html_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.public_repos = response.public_repos
        // this.foundUser.created_at = response.created_at
        this.user.avatar_url = response.avatar_url

        resolve()
        console.log(response)
      },
        error => {
          this.user.login = "User not found"
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }

   allRepo(reponame: any) {
    interface repoApiResponse {
     name: string,
     description: string,
     language: string,
     html_url: string
     forks:any,
  }
  let promise = new Promise<void>((resolve, reject) => {
    let arrayLength = this.repo.length;
    this.repo = []
    //  for (let i = 0; i < arrayLength; i++) { 
    //      this.repo.pop()
    //    }  
      this.http.get<any>(`${environment.apiKey}${reponame}/repos`).toPromise().then(response => {
       
        for (let i = 0; i < response.length; i++) {
          let repos = new Repo("", "", "", "", 0, new Date());
          
          repos.name = response[i]["name"]
          repos.description = response[i]["description"]
          repos.language = response[i]["language"]
          repos.html_url = response[i]["html_url"]
          repos.forks = response[i]["forks"]
          repos.updated_at = response[i]["updated_at"]
    
          this.repo.push(repos)
          resolve()
          console.log(repos)
        }
      },
        error => {
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }     




    
}
