import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats : any[] = [
    {value: 22, label: '# of Users'},
    {value:900, label: 'Revenue'},
    {value:50, label: 'Review'}
  ];
  items: any[] = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to sit on.'},
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is a great dresser to put your stuff in.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
