import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from './model/email';

export interface EmailSummary {
  id: string,
  subject: string,
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootURL = 'https://api.angular-email.com';
  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootURL}/emails`)
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootURL}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post(`${this.rootURL}/emails`, email);
  }
}

