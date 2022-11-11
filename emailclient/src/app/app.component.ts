import { Component, OnInit } from '@angular/core';
import { AuthService, AuthStatus } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin = false;
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.signedin$.subscribe((signedin) => {
      if(signedin === AuthStatus.signedIn) {
        this.signedin = true;
      } else {
        this.signedin = false;
      }
    })
    this.authService.checkAuthStatus().subscribe(response => console.log(response));
  }
}
