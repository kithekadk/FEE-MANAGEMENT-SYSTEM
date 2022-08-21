import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private auth:AuthService) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  // boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   // return this.auth.authenticated
  // }
}
