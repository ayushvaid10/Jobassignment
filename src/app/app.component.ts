import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trip2';
  users$:User[]=[];
  firstname : string;
  pickedrepolist=[{}];


  constructor(private dataService:DataService){}
  ngOnInit(){
    return this.dataService.getusers()
      .subscribe(data =>this.users$ = data);
  }
  Search(){
    this.users$ = this.users$.filter(res=>{
      return res.name.toLowerCase().match(this.firstname.toLowerCase());
    })
  }
  addrepolist(id,name,forks,watchers,language,stargazers_count){
    this.pickedrepolist.push({id,name,forks,watchers,language,stargazers_count});
  }
}
