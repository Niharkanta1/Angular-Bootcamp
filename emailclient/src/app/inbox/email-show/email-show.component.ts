import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
//import { switchMap } from 'rxjs';
import { Email } from '../model/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email = {} as Email;
  constructor(private route: ActivatedRoute, private emailService: EmailService) {
    this.route.data.subscribe(({email}) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    // Fetching email from emailresolver
    // this.route.params.subscribe(({id}) => {
    //   this.emailService.getEmail(id);
    // });
    // this.route.params.pipe(
    //   switchMap(({id}) => { return this.emailService.getEmail(id)})
    // ).subscribe((email) => {
    //   this.email = email;
    // });
  }

}
