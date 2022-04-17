import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token  = localStorage.getItem('token');
   let reqWithToken = req.clone({
     headers: req.headers.set("x-auth-token",`Bearer ${token}`)
   })
   return next.handle(reqWithToken);
   
  }
}
