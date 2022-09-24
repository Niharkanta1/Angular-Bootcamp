import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClassDir]'
})
export class ClassDirDirective {
  
  constructor(private element: ElementRef) { 
    
  }

  @Input('appClassDir') set classNames(classObj: any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
