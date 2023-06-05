import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contactForm!: FormGroup;
  
  countries = [
    { id: 1, name: "English" },
    { id: 2, name: "Indonesia" }
  ];
  
  constructor( private fb:FormBuilder, private UserServices: UserService, public translate: TranslateService, ){
    translate.addLangs(['en', 'id']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      country: [null]
    });
  }

  onCountryChanged(e: any){
    if (e.target.value === '1') {
      this.translate.use('en');
    } else {
      this.translate.use('id');
    }
  }
}
