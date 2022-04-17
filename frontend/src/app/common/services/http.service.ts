import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../register';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { 

  }

  signIn(credentials:any) {
   return this.http.post('http://localhost:5555/api/login',{
    login:credentials.login,
    password:credentials.password
   })
  }

  searchLogin(login:any){
    
    return this.http.get('http://localhost:5555/api/search/login/'+login);

  }
  searchEmail(email:any){
    
    return this.http.get('http://localhost:5555/api/search/email/'+email);

  }

  register(credentials:any){
      return this.http.post<Register>('http://localhost:5555/api/register',{
         email:credentials.email,
         login:credentials.login,
         password:credentials.password
       })
  }
}
