import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, SigninCredentials } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('on submit');
    if(this.authForm.invalid) {
      return;
    }
    this.authService.singin(this.authForm.value as SigninCredentials).subscribe({
      next: () => {
        console.log('going to inbox');
        this.router.navigateByUrl('/inbox');
      },
      error: ({error}) => {
        if(error.username || error.password) {
          this.authForm.setErrors({ credentials: true });
        }
      }
    });
  }
}
