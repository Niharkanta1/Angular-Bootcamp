import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../model/email';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email = {} as Email;
  @Output() emailSubmit = new EventEmitter();

  emailForm = new FormGroup({
    to: new FormControl('', [Validators.required, Validators.email]),
    from: new FormControl({ value: '', disabled: true }),
    subject: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;
    this.emailForm.setValue({
      to: this.email.to,
      from: this.email.from,
      subject: this.email.subject,
      text: this.email.text
    });
  }

  onSubmit() {
    if(this.emailForm.invalid){
      return;
    }
    this.emailSubmit.emit(this.emailForm.getRawValue());
  }

}
