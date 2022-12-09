import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  api:string = environment.baseApiUrl;

  getAllPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.api}/api/person`);
  }

  getPerson(id: number): Observable<Person>{
    return this.http.get<Person>(`${this.api}/api/person/${id}`)
  }

  savePerson(addPersonRequest: Person): Observable<Person>{
    return this.http.post<Person>(`${this.api}/api/person`, addPersonRequest);
  }

  updatePerson(id: number, updatePersonForms: Person) : Observable<Person>{
    return this.http.put<Person>(`${this.api}/api/person/${id}`, updatePersonForms)
  }
  
  deletePerson(id: number): Observable<Person>{
    return this.http.delete<Person>(`${this.api}/api/person/${id}`);
  }
}
