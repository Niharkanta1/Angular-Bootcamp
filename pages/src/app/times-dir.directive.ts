import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimesDir]'
})
export class TimesDirDirective {

  constructor(
    private viewContainer: ViewContainerRef, 
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimesDir') set render(times: number) {
    this.viewContainer.clear();
    for(let i = 0; i< times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        //context object
        index: i
      })
    }
  }
}
