import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, NavigationEnd, NavigationStart, Router, RouterStateSnapshot} from '@angular/router';
import {filter, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RouteGuard implements CanActivate {
  previousUrl: string | undefined;

  constructor(private router: Router) {
    router.events.subscribe(
      (event) => {
          if (event instanceof NavigationStart) {
            if (event.navigationTrigger == 'popstate' || event.url === '/user') {
              this.router.navigate(['detail']);
            }
          }
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}