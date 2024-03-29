import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

export enum AuthStatus {
  signedIn = 1,
  signedOut = 2,
  unknown = 0
}

export interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCrendentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SigninCredentials {
  username: string;
  password: string;
}

export interface SingupResponse {
  username: string;
}

export interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

export interface SigninResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'https://api.angular-email.com';
  //rootURL = 'http://localhost:3000';
  signedin$ = new BehaviorSubject<number>(0);
  username: string = '';

  constructor(private http: HttpClient) { }

  usernameAvailable(value: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootURL}/auth/username`, {
      username: value
    });
  }

  singup(values: SignupCrendentials) {
    return this.http.post<SingupResponse>(`${this.rootURL}/auth/signup`, values).pipe(
      tap((response)=> {
        this.signedin$.next(AuthStatus.signedIn);
        this.username = response.username;
      })
    );
  }

  checkAuthStatus() {
    return this.http.get<SignedinResponse>(`${this.rootURL}/auth/signedin`).pipe(
      tap(({ authenticated, username }) => {
        const value = authenticated? AuthStatus.signedIn : AuthStatus.signedOut;
        this.signedin$.next(value);
        this.username = username;
      })
    );
  }

  signout() {
    return this.http.post(`${this.rootURL}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(AuthStatus.signedOut);
      })
    )
  }

  singin(crendentials: SigninCredentials) {
    return this.http.post<SigninResponse>(`${this.rootURL}/auth/signin`, crendentials).pipe(
      tap((res) => {
        this.signedin$.next(AuthStatus.signedIn);
        this.username = res.username;
        console.log("Login Successful");
      })
    );
  }
}
