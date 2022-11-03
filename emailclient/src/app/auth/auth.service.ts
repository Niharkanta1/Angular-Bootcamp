import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

export interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCrendentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SingupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(value: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootURL}/auth/username`, {
      username: value
    });
  }

  singup(values: SignupCrendentials) {
    return this.http.post<SingupResponse>(`${this.rootURL}/auth/signup`, values, {
      withCredentials: true
    }).pipe(
      tap(()=> {
        this.signedin$.next(true);
      })
    );
  }

  checkAuthStatus() {
    return this.http.get(`${this.rootURL}/auth/signedin`, {
      withCredentials: true
    }).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
}
