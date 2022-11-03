import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, SignupCrendentials } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ], [ 
      this.uniqueUsername.validate 
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('',  [
      Validators.required,
    ]),
  }, { validators: [this.matchPassword.validate]});


  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.authForm.invalid) {
      return;
    }

    this.authService.singup(this.authForm.value as SignupCrendentials).subscribe({
      next: response => {

      },
      error: err => {
        if(err.status === 0) {
          this.authForm.setErrors({ noConnection: true })
        } else {
          this.authForm.setErrors({ unknownError: true })
        }
      }
    });
  }
}
