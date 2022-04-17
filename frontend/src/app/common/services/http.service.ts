import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../register';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor( private http: HttpClient) { 

  }
   url:string = 'https://mybestlink.herokuapp.com/';
  signIn(credentials:any) {
   return this.http.post(`${this.url}api/login`,{
    login:credentials.login,
    password:credentials.password
   })
  }

  searchLogin(login:any){
    
    return this.http.get(`${this.url}api/search/login/`+login);

  }
  searchEmail(email:any){
    
    return this.http.get(`${this.url}api/search/email/`+email);

  }

  generate(link:any){
    return this.http.post(`${this.url}api/link/generate`,{
      from:link.silka
    })
  }

  getLinkById(linkId:any){
    return this.http.get(`${this.url}api/link/`+linkId);
  }
  getLinks(){
    return this.http.get(`${this.url}api/link/`);
  }
  getMe(){
    return this.http.get(`${this.url}api/me/`)
  }

  register(credentials:any){
      return this.http.post<Register>(`${this.url}api/register`,{
         email:credentials.email,
         login:credentials.login,
         password:credentials.password
       })
  }
}
