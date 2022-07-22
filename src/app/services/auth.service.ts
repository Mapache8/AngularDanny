import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }

  authenticate():boolean{
    return this.isLogged;
  }

}

export class LoginService {

  userLogged: boolean = false;

  constructor() { }

  authenticate():boolean{
    return this.userLogged;
  }

}

