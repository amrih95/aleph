import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MatTableModule } from '@angular/material/table';

const ELEMENT_DATA: User[] = [
  {position: 1, name: 'Yogi', phone: '08124792383', email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
  {position: 2, name: 'Alex', phone: '08124342383',  email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
  {position: 3, name: 'Lithium', phone: '0812343433', email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
  {position: 4, name: 'David', phone: '081111792383', email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
  {position: 5, name: 'Boron', phone: '667677777777', email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
  {position: 6, name: 'Carbon', phone: '53535353535', email: 'test@gmail.com', address1: 'jakarta, Indonesia', address2: 'bali, Indonesia', postcode: '001', city: 'jakarta'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule, ReactiveFormsModule]
})
export class UserComponent {
  displayedColumns: string[] = ['name', 'phone', 'email', 'action'];
  dataSource = ELEMENT_DATA;
  language!:string;

  constructor(private fb:FormBuilder, private UserServices: UserService, private router: Router) {}

  goDetail(e: User) {
    // solution 1: you can use behavior subject or other way like localstorage etc., example:
    this.UserServices.getUser(e);
    this.router.navigate(['detail'])

    // solution 2: u can send the data to the detail pages using query params, Example:
    // this.router.navigate(['detail'], {
    //   queryParams: {
    //     name: e.name,
    //     phone: e.phone,
    //     email: e.email,
    //     address1: e.address1,
    //     address2: e.address2,
    //     city: e.city,
    //     postCode: e.postcode
    //   }
    // })

    // solution 3: we just need to parse the id of the data on the route, so we can use the id to hit detail API to get the data detail
  }
}
