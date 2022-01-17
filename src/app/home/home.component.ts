import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  gotoEmployeeListPage(){
    this.router.navigate(['/', 'employees']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }
}
