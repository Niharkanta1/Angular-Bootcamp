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
      const value = this.authService.signedin$.pipe(
        skipWhile(value => value === AuthStatus.unknown),
        take(1),
        tap(value => {
          if(value === 1) {
            status = true;
          }
          else {
            status = false;
            this.router.navigateByUrl('/');
          }
        })
      );
      return of(status);
  }
}
