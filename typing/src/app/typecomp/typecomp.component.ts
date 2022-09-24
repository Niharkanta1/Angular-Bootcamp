import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typecomp',
  templateUrl: './typecomp.component.html',
  styleUrls: ['./typecomp.component.css']
})
export class TypecompComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  randomText = lorem.sentence();
  enteredText = '';
  isSuccess = false;

  onInput(event: Event) {
    // $event.target.value was not working 
    var element = event.target as HTMLInputElement;
  }
  onInputStr(value: string) {
    this.enteredText = value;
    if(this.randomText === this.enteredText){
      this.isSuccess = true;
    } else {
      this.isSuccess = false;
    }
  }
  compare(char: string, enteredChar: string) {
    if(!enteredChar) {
      return "pending";
    }
    return char===enteredChar? "correct" : "incorrect";
  }

}
