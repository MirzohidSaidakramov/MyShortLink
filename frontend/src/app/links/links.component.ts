import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links:any
  constructor( private http:HttpService) { }

  ngOnInit(): void {
      this.http.getLinks().subscribe((result:any)=>{
        this.links = result;
      })

  }

}
