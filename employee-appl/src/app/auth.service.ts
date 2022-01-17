import { Injectable } from '@angular/core';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   validateUser(user :User){
    if(user.name == "user" && user.password == "password"){
      return true;
    }else{
      return false;
    }
  }

  login(user: string, password: string): boolean{
    if(user==='user' && password==='password'){
      localStorage.setItem('user', user);
      return true;
    }
    return false;
  }
  logout(){
    localStorage.removeItem('user');
  }

  getUser(): string | null{
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('user') !== null;
  }
}
