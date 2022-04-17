import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  account:any
  constructor( private http:HttpService) { }

  ngOnInit(): void {
    this.http.getMe().subscribe(result=>{
     
      
      this.account = result
  })
  }

}
