import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonIntroComponent } from './person-intro/person-intro.component';
import { PersonAddComponent } from './person/person-add/person-add.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: PersonIntroComponent},
  { path: 'persons', component: PersonComponent, 
  children: [
        {
          path:'list', component: PersonListComponent
        },
        {
          path:'add', component: PersonAddComponent
        },
        {
          path:'update/:id', component: PersonUpdateComponent
        }
      ]
    },
  {path: '**', redirectTo: '/404'},
  {path: '404', component: ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
