import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | null = null;

  constructor() { }

  login(user: User) {
    this.user = user;
  }
  
  logout() {
    this.user = null;
  }

  isLogged(): boolean {
    return this.user !== null
  }

  loggedUser(): User {
    return this.user!;
  }

  getName(){
    return this.user?.name.split(" ")[0]
  }
}
