import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitted = false;

  model = new User("user" , "password");

  onSubmit() { this.submitted = true;

  if(this.authService.login(this.model.name,this.model.password)){
    this.router.navigate(['/', 'home']);
  }
  }

}
export class User {

  constructor(
    public name: string,
    public password: string,
  ) {  }

}
