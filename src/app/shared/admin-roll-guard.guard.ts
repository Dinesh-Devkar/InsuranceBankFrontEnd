import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRollGuardGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private router:Router){

  }
  canActivate()
   {
    if(this.authService.HaveAccess()=="Admin"){
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  
}
