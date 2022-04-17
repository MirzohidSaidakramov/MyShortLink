import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  account:any

  constructor(private router:Router, private http:HttpService) { }

  ngOnInit(): void {
    this.http.getMe().subscribe(result=>{
     
      
        this.account = result
    })
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

}
