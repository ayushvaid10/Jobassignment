import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='https://api.github.com/users/octocat/repos';
  constructor(private _http:HttpClient) { }

  getusers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
