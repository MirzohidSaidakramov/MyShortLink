import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  id:string = "";
  link:any;
  constructor(private route:ActivatedRoute, private http:HttpService) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((params) =>{
    this.id = params.get('id')!;
 
    
  });
  this.http.getLinkById(this.id).subscribe((result)=>{
    this.link = result;
    
    
  })


  }

}
