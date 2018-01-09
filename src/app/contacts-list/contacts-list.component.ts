import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

    contacts;
    testModel;

    constructor() {
        this.contacts = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com'
            },
            {
                firstName: 'Daniel',
                lastName: 'Ros',
                email: 'daniel@example.com'
            },
            {
                firstName: 'Martin',
                lastName: 'Hess',
                email: 'martin@example.com'
            },
            {
                firstName: 'Petar',
                lastName: 'Petrović',
                email: 'martin@example.com'
            },
            {
                firstName: 'Petar',
                lastName: 'Nikolić',
                email: 'martin@example.com'
            }
        ];
    }

    removeContact(contact){
        console.log(contact);
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }

    ngOnInit() {
    }

}
