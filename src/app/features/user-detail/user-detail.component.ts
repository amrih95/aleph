import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class UserDetailComponent implements OnInit {

  user: any;
  pageReloading: boolean = false;

  constructor(private UserServices: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // solution 1 using behavior subject

    this.UserServices.castUser.subscribe(user => this.user = user !== '' ? user : 'nodata');
    if (this.user === 'nodata') this.router.navigate(['']);

    // solution 2 using query params
    // this.route.queryParams.subscribe(res => {

    //   // example, get one of value
    //   this.user = res['name'];

    // })

    // solution 3 
    // - get the id from route
    // - and send the id as a params to get API Detail
  }

}
