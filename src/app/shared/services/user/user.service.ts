import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  constructor() { }

  private user = new BehaviorSubject<string>('');
  castUser = this.user.asObservable();
  
  getUser(setUser: any){
    this.user.next(setUser); 
  }

}
