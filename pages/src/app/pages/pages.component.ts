import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentPage: number = 0;
  images = [
    {
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At The Beach',
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }, {
      title: 'In The Forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Town',
      url: 'https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'In The Snow',
      url: 'https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }, {
      title: 'On The Mountain',
      url: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }]

  constructor() { }

  ngOnInit(): void {
  }

  checkWindowIndex(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }
}
