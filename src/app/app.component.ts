import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'prodZin';
    items: any;

    ngOnInit() {
        this.items = [
            {
                label: 'Introduction',
                icon: 'pi pi-fw pi-th-large',
                routerLink: ['intro']
            },
            {
                label: 'Persons',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List person',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['persons/list']
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Add person',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: ['persons/add']
                    }
                ]
            },
            {
                label: 'Favorites',
                icon: 'pi pi-fw pi-star',
                items: [
                    {
                        label: 'Favorite Person',
                        icon: 'pi pi-fw pi-users'
                    }
                ]
            }
        ];
    }

}
