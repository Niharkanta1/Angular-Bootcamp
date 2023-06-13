import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../model/email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  showModal: boolean = false;
  @Input() email = {} as Email;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.updateEmail();
  }

  updateEmail() {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n------- ${this.email.from} wrote:\n> ${text}`
    };
  }

  onEmailSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() =>{
      this.showModal = false;
    });
  }

}
