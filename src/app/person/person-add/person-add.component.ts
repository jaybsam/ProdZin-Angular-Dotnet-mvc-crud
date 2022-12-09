import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Person } from 'src/app/interface/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  constructor(private personService: PersonService, private router: Router) { }
  items: MenuItem[] | any;
  home: MenuItem | any;
  firstName:string  = "";

  forms: Person = {
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

  ngOnInit(): void {
    this.items = [
      {label: 'Persons'},
      {label: 'Add Person'},
    ];
    this.home = {icon: 'pi pi-th-large', routerLink: ['/intro']};
  }

  savePerson(){
    if(this.forms.avatar.length == 0){
      this.forms.avatar = '/assets/images/default_avatar.png';
    }
    this.personService.savePerson(this.forms).subscribe({
      next: (employee) => {
        this.router.navigate(['/persons/list'])
      }
    });
  }

}
