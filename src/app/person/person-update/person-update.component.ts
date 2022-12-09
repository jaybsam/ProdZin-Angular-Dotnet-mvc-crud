import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PersonService } from 'src/app/services/person.service';
import { Person } from '../../interface/person.interface';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
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


  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Persons'},
      {label: 'Update Person'},
    ];
    this.home = {icon: 'pi pi-th-large', routerLink: ['/intro']};

    this.route.paramMap.subscribe({
      next: (req) => {
        const id = req.get('id');

        if(id){
          this.personService.getPerson(Number(id)).subscribe({
            next: (res) => {
              this.forms = res;
            }
          });
        }
      }
    })
  }

  updatePerson(){
    if(this.forms.avatar.length == 0){
      this.forms.avatar = '/assets/images/default_avatar.png';
    }
    this.personService.updatePerson(this.forms.id, this.forms).subscribe({
      next: (res) => {
        this.router.navigate(['/persons/list']);
      }
    });
  }
}
