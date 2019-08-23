import { Injectable } from '@angular/core';
import { Person } from './models/person'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  person = new Person;

  constructor() {
    this.person.firstName = "First";
    this.person.lastName = "Last";
   }

  getPerson(): Person {
    return this.person;
  }
}
