import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent implements OnInit {
  @Input() header: boolean = true;
  @Input() lines: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
