import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-newer-component',
  templateUrl: './newer-component.component.html',
  styleUrls: ['./newer-component.component.css']
})
export class NewerComponentComponent implements OnInit {

  people: Person[];

  constructor(service: ServiceService) {
    console.log(this.people);
   }

  ngOnInit() {
    this.people.forEach(el => el )
  }

}
