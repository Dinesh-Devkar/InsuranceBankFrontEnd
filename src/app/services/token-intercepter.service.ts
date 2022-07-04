import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService  implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token=sessionStorage.getItem('token');
    
    let authService=this.injector.get(AuthServiceService)
    let jwtToken=req.clone({
      setHeaders:{
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'enctype': 'multipart/form-data',
        'Authorization':"Bearer "+token
      }
    })
    return next.handle(jwtToken);
  }
}
