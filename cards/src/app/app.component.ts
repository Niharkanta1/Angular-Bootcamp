import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: "Neat Tree",
    imageUrl: "assets/tree.jpeg",
    content: "Saw this awesome tree during my hike today.",
    userName: "nature"
  }, 
  {
    title: "Snowy Mountain",
    imageUrl: "assets/mountain.jpeg",
    content: "Here is a picture of snowy mountain.",
    userName: "mountainlover"
  },
  {
    title: "Biking",
    imageUrl: "assets/biking.jpeg",
    content: "I did some biking today.",
    userName: "biker123"
  }];
}
