import { Component } from '@angular/core';
import { WikipediaService } from './service/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: any[] = [];
  constructor(private wikiservice: WikipediaService) {

  }
  
  onSearch(event : any) {
    this.wikiservice.search(event).subscribe( pagelist => {
      this.pages = pagelist;
    })
  }
}
