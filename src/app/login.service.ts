import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
uinfo:User[] = [
  new User("Naresh","Abcdef"),
  new User("Suresh","Abcdef"),
  new User("Mahesh","Abcdef")
];
  constructor() { }
  UserCheckDetails(uname:string, pwd:string):boolean{
    var chk = false;
    for (let i = 0; i < this.uinfo.length; i++) {
      if (this.uinfo[i].username == uname && this.uinfo[i].password == pwd){
        chk = true;
      }  
    }
    return chk;
  }
}
