import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person.interface';
import {Message} from 'primeng/api';

import {MenuItem} from 'primeng/api';
import { PersonService } from 'src/app/services/person.service';
import { Menu } from 'primeng/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit {
  
  status: any;
  display: boolean = false;
  selectedNode: any;
  nodes1: any[] = [
    {
    "label": "Male",
    "data": "male",
    "expandedIcon": "pi pi-plus",
    "collapsedIcon": "pi pi-plus"
    },
    {
      "label": "Female",
      "data": "female",
      "expandedIcon": "pi pi-plus",
      "collapsedIcon": "pi pi-plus"
      }
  ];
  firstName: string = "";
  deletePerson: Person = {
    id: 0,
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    primaryAddress: '',
    secondaryAddress: '',
    jobTitle: '',
    jobDescription: '',
    country: '',
    city: '',
    state: '',
    zip: 0,
    isFavorite: false,
    avatar: '',
    phone: '',
    personNotes: '',
    date: '2022-12-09T12:22:23.197Z'
  };
  
  persons: Person[] | any;
  items: MenuItem[] | any;
  home: MenuItem | any;
  msgs: Message[] = [];
  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    // this.items = [
    //   {
    //     label: 'Update', icon: 'pi pi-refresh', command: () => {
    //       this.update();
    //     }
    //   },
    //   {
    //     label: 'Delete', icon: 'pi pi-times', command: () => {
    //       this.delete();
    //     }
    //   },
    // ];
    this.personService.getAllPersons().subscribe({
      next: (person) => {
        this.persons = person;
        console.log(person);
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.items = [
      {
        label: 'Persons',
      },
      {
        label: 'List Person',
      },
    ];
    
    this.home = {icon: 'pi pi-th-large', routerLink: ['/intro']};
  }
  

  showDialog(person: Person) {
      this.display = true;
      this.deletePerson = person;
  }
  

  confirmDeletePerson() {
    

    this.personService.deletePerson(this.deletePerson.id).subscribe({
      next: (res) => {
        this.display = false;
        this.persons = this.persons.filter(( x: Person ) => x.id !== this.deletePerson.id);
      }
    })
  }


}
