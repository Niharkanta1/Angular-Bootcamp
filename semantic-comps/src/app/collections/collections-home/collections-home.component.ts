import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'James', age: 25, job: 'Designer'},
    {name: 'Harry', age: 26, job: 'Engineer'},
    {name: 'Rob', age: 27, job: 'Manager'}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
