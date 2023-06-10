import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, tap, take, skipWhile } from 'rxjs';
import { AuthService, AuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var status: boolean = false;
      this.authService.signedin$.subscribe(val => {
        if(val === 1) {
          status = true;
        } else {
          status = false;
          this.router.navigateByUrl("/");
        }
      })
      return status;
  }
}
