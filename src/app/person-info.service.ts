import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoService {

  pinfo:Person[]= [];
  constructor() { }
  
  AddPerson(p:string,l:string,g:string,pin:string){
    var person = new Person(p, g, l, pin);
    this.pinfo.push(person);
  }
  viewAllPersons(): Object
  {
    return this.pinfo;
  }
}
